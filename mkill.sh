taskkill //pid `netstat -aon | grep 8000 | grep -P '(?<=LISTENING).*' -o | grep -P '\\d*' -o` //f
