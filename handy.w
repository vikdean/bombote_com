	  											                         __  ____        ______       ______
                                                  /  |/  (_)_ __  / __/ /___ __/ _/ _/
                                                 / /|_/ / /\ \ / _\ \/ __/ // / _/ _/
                                                /_/  /_/_//_\_\ /___/\__/\_,_/_//_/


### Bash prompt

[~]$
export PS1="\h\[\e[32m\][\[\e[m\]\[\e[34m\]\w\[\e[m\]\[\e[32m\]]\[\e[m\]\\$ "

[zdesmcstutt5:~]$
export PS1="\[\e[32m\][\[\e[m\]\h:\[\e[36m\]\w\[\e[m\]\[\e[32m\]]\[\e[m\]\\$ "

12.15 11:34[~]$
export PS1="\[\e[37m\]\D{%m.%d} \[\e[m\]\[\e[37m\]\A\[\e[m\]\[\e[32m\][\[\e[m\]\[\e[37m\]\e[0m\w\[\e[m\]\[\e[32m\]]\[\e[m\]\\$ "

_________________________________________________________________________________________________________________________________________________________________________________

### eGREP - Include kifejezes utani 5 sor

more ol | egrep -e "crypto ca enroll RobertBoschGmbH" -A 5

_________________________________________________________________________________________________________________________________________________________________________________

### Notepad++ Delete Empty Lines

\n\r

_________________________________________________________________________________________________________________________________________________________________________________

### Notepad++ Delete Lines Except

^((?!up).)*$

_________________________________________________________________________________________________________________________________________________________________________________

### Bash compare

vimdiff file1 file2

sdiff file1 file2
_________________________________________________________________________________________________________________________________________________________________________________

### Syntax highlight

storage.type.work - Light Green, Bold
storage.modifier.work - Green, Bold
string.quoted.work - Yellow
support.function.work - White Bold
support.class.work - Dark Blue
variable.language.work - Blue
invalid.illegal.work - Italic Pink
invalid.deprecated.work - Italic Highlighted Red
constant.numeric.work - Green
constant.language.work - Orange

#################################################################################################################################################################################
#################################################################################################################################################################################


													                           		┌─┐┬┌─┐┌─┐┌─┐
													                           		│  │└─┐│  │ │
													                           		└─┘┴└─┘└─┘└─┘

### Subnetting

CIDR   Subnet Mask       Addresses       Wildcard
/32    255.255.255.255   1               0.0.0.0
/31    255.255.255.254   2               0.0.0.1
/30    255.255.255.252   4               0.0.0.3
/29    255.255.255.248   8               0.0.0.7
/28    255.255.255.240   16              0.0.0.15
/27    255.255.255.224   32              0.0.0.31
/26    255.255.255.192   64              0.0.0.63
/25    255.255.255.128   128             0.0.0.127
/24    255.255.255.0     256             0.0.0.255
/23    255.255.254.0     512             0.0.1.255
/22    255.255.252.0     1,024           0.0.3.255
/21    255.255.248.0     2,048           0.0.7.255
/20    255.255.240.0     4,096           0.0.15.255
/19    255.255.224.0     8,192           0.0.31.255
/18    255.255.192.0     16,384          0.0.63.255
/17    255.255.128.0     32,768          0.0.127.255
/16    255.255.0.0       65,536          0.0.255.255
/15    255.254.0.0       131,072         0.1.255.255
/14    255.252.0.0       262,144         0.3.255.255
/13    255.248.0.0       524,288         0.7.255.255
/12    255.240.0.0       1,048,576       0.15.255.255
/11    255.224.0.0       2,097,152       0.31.255.255
/10    255.192.0.0       4,194,304       0.63.255.255
/9     255.128.0.0       8,388,608       0.127.255.255
/8     255.0.0.0         16,777,216      0.255.255.255
/7     254.0.0.0         33,554,432      1.255.255.255
/6     252.0.0.0         67,108,864      3.255.255.255
/5     248.0.0.0         134,217,728     7.255.255.255
/4     240.0.0.0         268,435,456     15.255.255.255
/3     224.0.0.0         536,870,912     31.255.255.255
/2     192.0.0.0         1,073,741,824   63.255.255.255
/1     128.0.0.0         2,147,483,648   127.255.255.255
/0     0.0.0.0           4,294,967,296   255.255.255.255
_________________________________________________________________________________________________________________________________________________________________________________

### Regular Expressions

 ┌───────────┬───────────────────────────────────────────────────────────┬───────────────────────────────────────────────────────┐
 │ Character │ 				      Definition					                         │           		Example                                  │
 ├───────────┼───────────────────────────────────────────────────────────┼───────────────────────────────────────────────────────┤
 │ 	^	       │ The pattern has to appear at the beginning of a string.	 │ ^cat matches any string that begins with cat          │
 │-----------│-----------------------------------------------------------│-------------------------------------------------------│
 │ 	$	       │ The pattern has to appear at the end of a string.	       │ cat$ matches any string that ends with cat            │
 │-----------│-----------------------------------------------------------│-------------------------------------------------------│
 │ 	.	       │ Matches any character.	                                   │ cat. matches catT and cat2 but notcatty               │
 │-----------│-----------------------------------------------------------│-------------------------------------------------------│
 │ 	[]	     │ Matches one of any characters enclosed.	                 │ gr[ae]y matches gray or grey                          │
 │-----------│-----------------------------------------------------------│-------------------------------------------------------│
 │ 	[^]	     │ Matches one of any characters EXCEPT those enclosed.	     │ 1[^02] matches 13 but not 10 or12                     │
 │-----------│-----------------------------------------------------------│-------------------------------------------------------│
 │ 	[-]	     │ Matches any characters within the range.	                 │ [1-9] matches any single digit EXCEPT 0               │
 │-----------│-----------------------------------------------------------│-------------------------------------------------------│
 │	 ?		   │ Preceding item must match one or zero times.	             │ colou?r matches color or colour but not colouur       │
 │-----------│-----------------------------------------------------------│-------------------------------------------------------│
 │ 	 +       │ Preceding item must match one or more times.	             │ be+ matches be or bee but not b                       │
 │-----------│-----------------------------------------------------------│-------------------------------------------------------│
 │ 	*		     │ Preceding item must match zero or more times.	           │ be* matches b or be orbeeeeeeeeee                     │
 │-----------│-----------------------------------------------------------│-------------------------------------------------------│
 │	()	     │ Creates a substring or item that metacharacters           │ a(bee)?t matches at or abeet but not abet             │
 │           │ can be applied to	                                       │                                                       │
 │-----------│-----------------------------------------------------------│-------------------------------------------------------│
 │	{n}	  	 │ Specifies exact number of times for the preceding         │ [0-9]{3} matches any three digits                     │
 │           │ item to match.	                                           │                                                       │
 │-----------│-----------------------------------------------------------│-------------------------------------------------------│
 │	{n,}     │ Specifies minimum number of times for the preceding       │ [0-9]{3,} matches any three or more digits            │
 │           │ item to match.	                                           │                                                       │
 │-----------│-----------------------------------------------------------│-------------------------------------------------------│
 │	{n,m}	   │ Specifies minimum and maximum number of times for         │ [0-9]{3,5} matches any three, four, or five digits    │
 │           │ the preceding item to match.	                             │                                                       │
 │-----------│-----------------------------------------------------------│-------------------------------------------------------│
 │	 |	     │ One of the alternatives has to match.	                   │ July (first|1st|1) will match July 1stbut not July 2  │
 └───────────┴───────────────────────────────────────────────────────────┴───────────────────────────────────────────────────────┘
_________________________________________________________________________________________________________________________________________________________________________________

### IPv6 bit mapping

XXXX:XXXX:XXXX:XXXX:XXXX:XXXX:XXXX:XXXX
      ||| |||| |||| |||| |||| |||| ||||
      ||| |||| |||| |||| |||| |||| |||128
      ||| |||| |||| |||| |||| |||| ||124
      ||| |||| |||| |||| |||| |||| |120
      ||| |||| |||| |||| |||| |||| 116
      ||| |||| |||| |||| |||| |||112
      ||| |||| |||| |||| |||| ||108
      ||| |||| |||| |||| |||| |104
      ||| |||| |||| |||| |||| 100
      ||| |||| |||| |||| |||96
      ||| |||| |||| |||| ||92
      ||| |||| |||| |||| |88
      ||| |||| |||| |||| 84
      ||| |||| |||| |||80
      ||| |||| |||| ||76
      ||| |||| |||| |72
      ||| |||| |||| 68
      ||| |||| |||64
      ||| |||| ||60
      ||| |||| |56
      ||| |||| 52
      ||| |||48
      ||| ||44
      ||| |40
      ||| 36
      ||32
      |28
      24
_________________________________________________________________________________________________________________________________________________________________________________

### NAT

[Private]-->inside  local-->[Router]-->inside  global-->[Public ]
[Network]<--outside local<--[Router]<--outside global<--[Network]

ip nat inside source:
	Translates the source of IP packets that are traveling inside to outside.
	Translates the destination of the IP packets that are traveling outside to inside

ip nat outside source
	Translates the source of IP packets that are traveling outside to inside.
	Translates the destination of the IP packets that are traveling inside to outside.

H:192.168.0.100--SW--R:192.168.0.1:[]:w.x.y.z:R--[iNET]---
                         inside       outside
ip nat inside source static tcp 192.168.0.100 8080 w.x.y.z 80
                                   inside local    inside global

Inside interface & source 192.168.0.100:8080
translated to x.x.x.x:8080 for outside (iNET)

Other words:
iNET can reach 192.168.0.100:8080 as w.x.y.z:80
 - or -
192.168.0.100:8080 will be visible for iNET as w.x.y.z:80
_________________________________________________________________________________________________________________________________________________________________________________

### QoS

Show the full QoS config:
sh run | s policy-map|access-list extended cos-map|class-map|interface

Queue-limit and max burst rate:
queue limit is 200, packet  size 1500byte
200*1500byte= 300000byte = 2343kbit .. if this is constant in every sec then class can burst up to 2343kbps to other classes..
sh ip cac fl will say the average packet size..

FTP TCP window 8KB -> 65356bit
RTT=60ms=0.06s
Maximum TCP transfer = 65356bit/0.06s=1.038Mbps

General TCP window 64KB -> 524288bit
RTT=60ms=0.06s
Maximum TCP transfer = 524288bit/0.06s=31.457Mbps

DataMover TCP window 256KB -> 2097152bit
RTT=60ms=0.06s
Maximum TCP transfer = 2097152bit/0.06s=33.33Mbps

standard 64KB, Windows XP 17.5KB, FTP 8KB, SCP 64KB, SMB 16K

Check packet marking and traffic
	interface ...
		ip flow ingress
		ip flow egress
To see the result:
	sh ip cache flow
	sh ip cache verbose flow
	sh ip cache ip.network.to.check network.mask.for.that verbose flow

If you have MLS:
	sh mls netflow ip <source|destination> qos nowrap | i <whatever..>

L3 switch no ip accounting or netflow top talkers..
	sh mls netflow ip flow tcp nowrap | i GE2/1.200  ##  filter the interface then copy to excel, format as data (fixed width) and sort desc.

Circuit speed One-way serialization delay (ms)
packet size of 512 bytes, serialization delays are:
64kbps 64.00
1.5Mbps 2.65
2Mbps 2.00
10Mbps 0.41
34Mbps 0.12
45Mbps 0.09
100Mbps 0.04

Propagation delay: as a rule of thumb a figure of 0.6 ms per 100km can be used.
So for two cities 500km apart, a one-way propagation delay of around 3ms can be expected.

_________________________________________________________________________________________________________________________________________________________________________________

### Stucked SSH

You stucked on the PE in [edit exclusive] : DO NOT CLOSE THE WINDOW!!! Just  [enter] ~ .    ->   TCP session closed
_________________________________________________________________________________________________________________________________________________________________________________

### ISDN disconnect cause codes

http://www.cisco.com/en/US/tech/tk801/tk379/technologies_tech_note09186a008012e95f.shtml
http://networking.ringofsaturn.com/Routers/isdncausecodes.php
_________________________________________________________________________________________________________________________________________________________________________________

### TCP throughput

http://bradhedlund.com/2008/12/19/how-to-calculate-tcp-throughput-for-long-distance-links/

Throughput can never exceed window size divided by round-trip time.
window = 17520byte = 140160
rtt 60ms = 0.06s
Max link throughput (based on window and rtt) = 140160bit/0.06s=2336000 = 2281,25kbps

The capacity of a pipe is its bandwidth multiplied by round-trip time.
BW = 2Mbps = 2097152bps
rtt = 60ms = 0.06s
Max link capacity (based on BW and rtt) = 125829,12bit = 15728,64byte

Formula to calculate the optimal TCP window size:
Bandwidth-in-bits-per-second * Round-trip-latency-in-seconds = TCP window size in bits / 8 = TCP window size in bytes
BW = 2Mbps = 2097152bps
rtt = 60ms = 0.06s
2097152bps * 0.06s = 125829,12bit = 15728,64byte -- ideal window size

Formula to calculate Maximum Latency for a desired throughput
TCP-window-size-bits / Desired-throughput-in-bits-per-second = Maximum RTT Latency
TCP window size = 17520byte = 140160bit
desired BW = 2Mbps = 2097152bps
140160bit / 2097152bps = ~0.067ms is the max RTT for the desired 2M throughput

On Juniper:
sh interface queue ...

Cisco NX-OS NetFlow                    VS  	Cisco IOS Software NetFlow     		| 		Command will show the following
show flow exporter                     -   	show mls nde                   		| 		Displays the configured exporter maps
show flow interface                    -   	                               		| 		Displays interfaces configured for NetFlow
show flow monitor                      -   	                               		| 		Displays information about monitor maps
show flow record                       -   	                               		| 		Displays information about record maps
show flow timeout                      -   	                               		| 		Displays the NetFlow timeout value
show hardware flow aging               -   	show mls netflow aging         		| 		Displays the NetFlow table aging timeout value
show hardware flow entry               -   	show mls netflow ip flow       		| 		Displays flow-specific information
show hardware flow ip                  -   	show mls netflow ip            		| 		Displays the IP NetFlow table
show hardware flow l2                  -   	                               		| 		Displays the Layer-2 NetFlow table
show hardware flow sampler             -   	show mls sampling              		| 		Displays the NetFlow sampling configuration
show hardware flow utilization module  -   	show mls netflow table summary 		| 		Displays NetFlow table utilization per module
show sampler                           -   	show flow-sampler              		| 		Displays information about sampler maps
_________________________________________________________________________________________________________________________________________________________________________________

### DSL

Router#sh dsl int ATM0/0/0 | i Noise|Out|Atten|Cell|Interleave|Speed|Cells|CRC|rate
Noise Margin:     8.5 dB                         23.0 dB   >>>   see later
Output Power:    18.5 dBm                        12.0 dBm   >>>   see later
Attenuation:     39.0 dB                         24.0 dB   >>>   see later
                 Interleave             Fast    Interleave              Fast
Speed (kbps):          4000                0           640                 0   >>>   speed from DSLAM
Cells:             10438064                0     166244453                 0
CRC Errors:               0                0             1                 0   >>>   CRC
clkPerCell:          5300265 (line rate: 512 Kbps)   >>>   Sometimes the output has this instead of "Speed"

Power
6dB or below is bad and will experience no sync or intermittent sync problems
7dB-10dB is fair but does not leave much room for variances in conditions
11dB-20dB is good with no sync problems
20dB-28dB is excellent
29dB or above is outstanding

Line Attenuation
20dB and below is outstanding
20dB-30dB is excellent
30dB-40dB is very good
40dB-50dB is good
50dB-60dB is poor and may experience connectivity issues
60dB or above is bad and will experience connectivity issues

For Noise Margin: (the higher this value, the better)
8-13 Average
14-22 Very Good
23-28 Excellent

ATU-R (DS) and ATU-C (US)
ADSL Termination Unit - Remote (Downstream)
ADSL Termination Unit - Remote (Upstream)
ATU-R is a DSL modem and an ATU-C is a DSLAM

http://cosi-nms.sourceforge.net/cgitools/dsl_show/
