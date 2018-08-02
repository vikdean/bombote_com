#!/tmp/vik/python/bin/python3

'''
-------------------------------------------------------------------------------
This script is for collecting command outputs from multiple Cisco devices
-------------------------------------------------------------------------------
'''

import json
import netmiko
import os
import signal
import sys
import base64

signal.signal(signal.SIGPIPE, signal.SIG_DFL)
signal.signal(signal.SIGINT, signal.SIG_DFL)

netmiko_exceptions = (netmiko.ssh_exception.NetMikoTimeoutException,
                      netmiko.ssh_exception.NetMikoAuthenticationException)

username = "username"
password = base64.b64decode(b'passssssss')

with open("devices.json", "r") as dev_file:
    devices = json.load(dev_file)

with open("commands.txt", "r") as commands_file:
    commands = commands_file.readlines()

for device in devices:
    device['username'] = username
    device['password'] = password
    try:
        print('Connecting to device: ' + device['ip'] + ' - ' + connection.base_prompt + '\n')
        connection = netmiko.ConnectHandler(**device)
        filename = connection.base_prompt + '.txt'
        with open(filename, 'w') as out_file:
            for command in commands:
                out_file.write('### ' + connection.base_prompt + ' -- Output of ' + command + '\n\n')
                out_file.write(connection.send_command(command) + '\n\n')
                out_file.write('#' * 151 + '\n\n')
        connection.disconnect()
        print('\x1b[5;30;42m' + 'Output successfully collected!' + '\x1b[0m' + '\n')
        print('-' * 79 + '\n')
    except netmiko_exceptions as error:
        print('Failed to ', device['ip'], error)
