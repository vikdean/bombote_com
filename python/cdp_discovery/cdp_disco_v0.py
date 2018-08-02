#!/tmp/vik/python/bin/python3

'''
-------------------------------------------------------------------------------
This script is for building a CDP Tree.
-------------------------------------------------------------------------------
'''

import json
import netmiko
import os
import signal
import sys
import base64
import re


signal.signal(signal.SIGPIPE, signal.SIG_DFL)
signal.signal(signal.SIGINT, signal.SIG_DFL)

netmiko_exceptions = (netmiko.ssh_exception.NetMikoTimeoutException,
                      netmiko.ssh_exception.NetMikoAuthenticationException)
username = 'username'
password = base64.b64decode(b'passssss')

with open('devices.json', 'r') as dev_file:
    devices = json.load(dev_file)


def login_to_device():
    global hostname
    global already_logged_in
    already_logged_in = []
    for device in devices:
        device['username'] = username
        device['password'] = password
        try:
            connection = netmiko.ConnectHandler(**device)
            hostname = connection.base_prompt
            print('\n')
            print('Connecting to device: ' + device['ip'] + ' - ' + connection.base_prompt + '\n')
            already_logged_in.append(device['ip'])
            command = connection.send_command('show cdp neighbor detail | i Device|IP')
            connection.disconnect()
            print('\x1b[5;30;42m' + 'CDP neighbors successfully collected!' + '\x1b[0m' + '\n')
            print('-' * 79 + '\n')
            output = get_output_from_cdp_neighbors(command)
        except netmiko_exceptions as error:
            print('Failed to ', device['ip'], error)


def get_output_from_cdp_neighbors(input_string):
    lines = input_string.splitlines()
    filtered_lines = [s.replace('Device ID: ', '') for s in lines]
    filtered_lines2 = [s.replace('  IP address: ', '') for s in filtered_lines]
    newlist = []
    for number in filtered_lines2:
        if number not in newlist:
            newlist.append(number)
    write_to_file(newlist)


def write_to_file(devicelist):
    filename = hostname + '__cdp' + '.txt'
    ips = devicelist[1::2]
    hosts = devicelist[::2]
    with open(filename, 'a') as out_file:
        out_file.write('### CDP neighbors of ' + hostname + '\n')
        for i in range(len(ips)):
            out_file.write(' ' * 21 + '|_ ' + hosts[i] + ' - ' + ips[i] + '\n')
        out_file.write('\n')
        out_file.write('#' * 151 + '\n\n')
    login_to_neighbors(ips)


def login_to_neighbors(nei_ips):
    neighbors = []
    for i in nei_ips:
        neighbors.append({'ip': i, 'device_type': 'cisco_ios', 'username': username, 'password': password})
    for nei in neighbors:
        if nei['ip'] not in already_logged_in:
            try:
                connection = netmiko.ConnectHandler(**nei)
                nei_hostname = connection.base_prompt
                print('\n')
                print('Connecting to device: ' + nei['ip'] + ' - ' + connection.base_prompt + '\n')
                already_logged_in.append(nei['ip'])
                print(already_logged_in)
                command = connection.send_command('show cdp neighbor detail | i Device|IP')
                connection.disconnect()
                print('\x1b[5;30;42m' + 'CDP neighbors successfully collected!' + '\x1b[0m' + '\n')
                print('-' * 79 + '\n')
                output = command
# Output collecting
                lines = output.splitlines()
                filtered_lines = [s.replace('Device ID: ', '') for s in lines]
                filtered_lines2 = [s.replace('  IP address: ', '') for s in filtered_lines]
                newlist = []
                for number in filtered_lines2:
                    if number not in newlist:
                        newlist.append(number)
# Writing to file
                filename = hostname + '__cdp' + '.txt'
                ips = newlist[1::2]
                hosts = newlist[::2]
                with open(filename, 'a') as out_file:
                    out_file.write('### CDP neighbors of ' + nei_hostname + '\n')
                    for i in range(len(ips)):
                        out_file.write(' ' * 21 + '|_ ' + hosts[i] + ' - ' + ips[i] + '\n')
                    out_file.write('\n')
                    out_file.write('#' * 151 + '\n\n')
                login_to_neighbors(ips)
            except netmiko_exceptions as error:
                print('Failed to ', nei['ip'], error)
        else:
            print('\x1b[6;37;41m' + 'CDP neighbors already collected' + '\x1b[0m' + '\n')
            print('-' * 79 + '\n')

    print(already_logged_in)


login_to_device()
