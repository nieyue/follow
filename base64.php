<?php
$str = 'xxxx';//这是微信公众号名
$str = base64_encode(base64_encode($str));
$zjiemi = strrev($str); //获取到这个地址后放到index.html的隐藏域中