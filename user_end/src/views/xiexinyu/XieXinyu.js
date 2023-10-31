export default {
    name: "chatView",
    data() {
      return {
        infor: "",
        items: [],
      };
    },
    methods: {
      back() {
        this.$router.push({"name":"chatman"})
      },
      send() {
        if (window.WebSocket) {
          //当设备支持websocket时，开始建立客户端链接
          var ws = new WebSocket("ws://127.0.0.1:8001");
          // 连接建立时触发
          ws.onopen = () => {
            this.items.push(this.infor);
            ws.send(this.items); //主动向服务端发起消息
          };
          // 接收到服务端数据时触发
          ws.onmessage = () => {
             //在这里，e表示服务端发送而来的内容
          };
          //当链接被服务端关闭时触发
          ws.onclose = function () {
            console.log("服务器关闭");
          };
          // 当服务端通信发生错误时触发
          ws.onerror = function () {
            console.log("连接出错");
          };
        } else console.info("你的设备不支持websocket！");
      },
    },
  };