#!/bin/sh

# cd 到日志的文件目录

cp access.log $(date +%Y-%m-%d).access.log


#  清空原日志文件

echo "" > access.log