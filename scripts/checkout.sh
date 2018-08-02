#!/bin/bash

echo -e "\e[101mInsert the hostnames then hit Ctrl+D\e[49m"
cat > ~/temp.txt
echo
echo -e "\e[104mInsert the commands then hit Ctrl+D\e[49m"
cat > ~/commands
echo
read -p $'\e[100mChoose what kind of check you would like to perform (\e[92mpre\e[39m or \e[35mpost\e[39m):\e[49m\n' prepost
prepost=${prepost:-pre}

username="username"
pass="password"

############# Generate Expect Script BEGIN #############

echo '#!/usr/bin/expect' > ~/generated_expect
echo "

set timeout 10
set hostname [lindex \$argv 0]
set username [lindex \$argv 1]
set password [lindex \$argv 2]
set send_slow {10 .001}

if {[llength \$argv] == 0} {
	send_user \"Usage: scriptname hostname \'snmpshapass\' \'snmpaespass\' username \'userpassword\' \'enablepassword\'\n\"
	send_user \"For Cisco Nexus devices just give hostname snmpshapass and snmpaespass if you have ssh keys installed\n\"
	exit 1
}

send_user \"\n#####\n# \$hostname\n#####\n\"

spawn ssh -oStrictHostKeyChecking=no \$username@\$hostname

expect {
	timeout { send_user \"\nFailed to get password prompt\n\"; exit 1 }
	eof { send_user \"\nSSH failure for \$hostname\n\"; exit 1 }
	\"*#\" {}
	\"*assword:\" {
		send \"\$password\r\"
	}
}

expect {
	default { send_user \"\nCould not get into enabled mode. Password problem?\n\"; exit 1 }
	\"*#\" {}
	\"*>\" {
		send \"ena\r\"
		expect \"*assword\"
		send \"\$password\r\"
	}
}
expect \"*#\"
send \"term exec prompt timestamp\r\"
expect \"*#\"
send \"term len 0\r\"

" >> ~/generated_expect

while read -r line
do
	echo "
	send \"$line\r\"
	expect \"*#\"
	" >> ~/generated_expect
done < ~/commands

echo "expect \"*#\"
send \"!\r\"
send \"exit\r\"
close
" >> ~/generated_expect

chmod 700 ~/generated_expect

############# Generate Expect Script END #############

echo
echo "#################################################################################"
echo

while read -r line
do
	match=$(grep $line /home/a/scripts/bfg_node.csv | wc -l)
	if [[ $line =~ "[0-9]+.[0-9]+.[0-9]+.[0-9]+" ]]; then
		host="$line"
		echo Logging into $host 
		nohup ~/generated_expect $host $username $pass >> ~/checkout/$line---$prepost.txt
		echo
		echo -e "\e[42m\e[30m        Output successfully collected\e[39m\e[49m        \n"
		echo "--------------------------------------------------------------------------------"
	else
		if [[ $match == "1" ]]; then
			host=`grep $line /home/a/scripts/bfg_node.csv | cut -f2 -d","`
			hostname=`grep $line /home/a/scripts/bfg_node.csv | cut -f1 -d","`
			echo Logging into $hostname 
			nohup ~/generated_expect $host $username $pass >> ~/checkout/$hostname---$prepost.txt
			echo
			echo -e "\e[42m\e[30m        Output successfully collected\e[39m\e[49m        \n"
			echo "--------------------------------------------------------------------------------"
		else
			echo 0 match found for $line
			echo 0 match found for $line >> ~/checkout/$hostname---$prepost.txt
		fi
	fi

done < ~/temp.txt
echo

rm ~/temp.txt
rm ~/commands
rm ~/generated_expect
