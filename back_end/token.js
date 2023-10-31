//生成和效验token
var jwt = require("jsonwebtoken");
//生成token和验证token
var tokenObj = {
  //生成
  createToken: function (cont, time) {
    //token内容内容
    var content = { msg: cont };
    var secretOrPrivateKey = "mouchun"; // 这是加密的key（密钥或私钥）
    //生成token
    var token = jwt.sign(content, secretOrPrivateKey, {
      expiresIn: time, // 24小时过期,以秒作为单位
    });
    return token;
  },
  //效验
  checkToken: function (token, fn) {
    var secretOrPrivateKey = "mouchun"; // 这是加密的key（密钥或私钥）
    jwt.verify(token, secretOrPrivateKey, function (err, decode) {
      if (err) {
        // 当token过期，或这是一个伪造的token，或这是无效的token时会触发此逻辑
        console.log(err);
        fn(false);
      } else {
        console.log(decode.msg);
        fn(true);
      }
    });
  },
};
module.exports.tokenObj = tokenObj;