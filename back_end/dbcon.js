var mysql = require('mysql'); //导入mysql模块
//函数
function getcon() {
    var connection = mysql.createConnection({
        host: '127.0.0.1', //数据库地址
        user: 'root', //数据库用户名
        password: 'root', //数据库密码
        database: 'petdoctor' //数据库名
    });
    return connection;
}
//导出函数
module.exports = getcon;