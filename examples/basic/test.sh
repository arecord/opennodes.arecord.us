#!/bin/bash                                                                                                                                                                                             
export UNAME=`uname -a`
node -e "
  var uname = '$UNAME';
  var arr = uname.split(' ');
  for(var i = 0 ; i< arr.length ; i++){
    console.log(arr[i])
  }
"