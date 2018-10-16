## CN

在指定时长后执行函数。

|参数名|类型|说明|
|-----|----|---|
|fn|function|源函数|
|wait|number|延迟的毫秒数|
|[...args]|*|绑定参数|

```javascript
delay(function (text) {
    console.log(text);
}, 1000, 'later');
// -> Logs 'later' after one second
```