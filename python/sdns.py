#!/tmp/vik/python/bin/python3

import os
import signal
import sys
import csv
import subprocess

signal.signal(signal.SIGPIPE, signal.SIG_DFL)
signal.signal(signal.SIGINT, signal.SIG_DFL)


def get_input():
    global hosts
    print("\n")
    print("\x1b[6;30;43m" + "Enter the hostnames line-by-line. Use Ctrl-D to save it." + "\x1b[0m")
    hosts = []
    while True:
        try:
            line = input()
        except EOFError:
            break
        hosts.append(line)
    get_match(hosts)


def get_match(match):
    for i in range(len(hosts)):
        match = subprocess.check_output(['grep', hosts[i], '/home/a/scripts/bfg_node.csv'])
        print(match)
        #data = {}
        #data['hostname'] = match.split(',')[0]
        #data['ip'] = match.split(',')[1]
        #print('%s') % data['hostname']


get_input()
