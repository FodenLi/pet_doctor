var ws = require("nodejs-websocket"); //导入websocket实现模块

//创建websocket服务器
ws.createServer(function (conn) {
  //监听客户端发来的信息，并作出回应
  conn.on("text", function (str) {
    console.log("收到客户端的信息为:" + str); //str为客户端发来的信息
      conn.sendText("你好,请问有什么我能帮助您？"); //发送响应信息到客户端
  });
  //当websocket链接被客户端关闭时执行的操作
  conn.on("close", function () {
    console.log("客户端关闭连接了");
  });
  //当websocket链接在客户端处出现异常时执行的操作
  conn.on("error", function () {
    console.log("客户端链接出来异常");
  });
}).listen(8001, "127.0.0.1"); // 这个websocket链接监听的地址与端口为 127.0.0.1:8001
console.log("WebSocket建立完毕,等待客户端链接中...");
