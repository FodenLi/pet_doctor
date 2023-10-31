//导入数据库的模块
var getCon = require("./dbcon.js");
//获取数据库链接对象
var connection = getCon();
connection.connect(); //启动链接
//console.log(connection)
var sql = "SELECT * from petdoctor"; //查询所有
//执行sql语句
connection.query(sql, function (err, result) {
  if (err) {
    console.log("[ERROR] - ", err.message);
    return;
  }
  //打印查询结果
  console.log(JSON.stringify(result));
  connection.end(); //操作完成后记得加上这句关闭数据库链接
});
