#!/tmp/vik/python/bin/python3

import os
import signal
import sys
import csv
import subprocess
import pandas as pd
import numpy as np

'''
cat /opt/app/sys_log/EMEA/messages_syslog | grep  %BGP-5-ADJCHANGE: | grep -oh -E "(zeu-.*|zna-.*)" | cut -d: -f-1,3-5,7 | sed -r -e 's/neighbor\s//g' | tr -d [=*=] |sed 's/  */,/g' >$HOME/scripts/out.csv
cut -d"," -f5,8-10 --complement $HOME/scripts/out.csv | tee $HOME/scripts/out.csv
sed -i 1i"Hostname,Month,Day,Time,Neighbour,Status" out.csv
awk '{gsub(/\"|\:/,"",$1)}1' $HOME/scripts/out.csv | tee $HOME/scripts/out.csv
'''

signal.signal(signal.SIGPIPE, signal.SIG_DFL)
signal.signal(signal.SIGINT, signal.SIG_DFL)

def reader():
    df = pd.read_csv(r'/home/arlettv/scripts/out.csv')
    letterone = df.groupby(['Hostname','Neighbour','Status','Time','Month']).first()
    print(letterone)

#def reader():
#    global data
#    with open('out.csv', newline='') as csvfile:
#        reader = csv.DictReader(csvfile)
#        data = []
#        hostname = ()
#        for row in reader:
#            data.append(row['Hostname'])
#            data.append(row['Month'])
#            data.append(row['Day'])
#            data.append(row['Time'])
#            data.append(row['Neighbour'])
#            data.append(row['Status'])
#
#def downtime_calculator():
#    hostname = data[::6]
#    hostname_filtered = set([s.replace(':', '') for s in hostname])
#    month = data[1::6]
#    day = data[2::6]
#    time = data[3::6]
#    neighbour = data[4::6]
#    status = data[5::6]

reader()

