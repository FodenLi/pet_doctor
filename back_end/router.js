//导入数据库
var getConnection = require('./dbcon.js')
// 导入token
var token = require('./token.js')
console.log(token)
//导入express
var express = require('express')
//使用express
var app = express()
//设置跨域访问（设置在所有的请求前面即可）
app.all('*', function (req, res, next) {
  //设置允许跨域的域名，*代表允许任意域名跨域
  res.header('Access-Control-Allow-Origin', '*')
  //允许的header类型
  res.header('Access-Control-Allow-Headers', 'content-type')
  //跨域允许的请求方式
  res.header('Access-Control-Allow-Methods', 'DELETE,PUT,POST,GET,OPTIONS')
  if (req.method == 'OPTIONS') res.send(200) //让options尝试请求快速结束
  else next()
})
//使用bodyParser模块，接收post参数
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//加载医生详情信息
app.get('/doctorDetail', function (request, response) {
  var id=request.query.id
  //调用数据库的方法
  var con = getConnection()
  //链接数据库
  con.connect()
  //sql语句
  var sql = `SELECT * FROM doctor_info where id='${id}'; `
  //执行sql
  con.query(sql, function (error, result) {
    if (error) {
      console.log('出错了：' + error.message)
      response.send({
        state: false,
        des: '出错了：' + error.message,
      })
    } else if (result.length == 0) {
      response.send({
        state: true,
        des: '无任何用户数据！',
      })
    } else {
      //向客户端响应数据
      response.send({
        state: true,
        des: result,
      })
    }
    //关闭数据库
    con.end()
  })
})

//加载首页的医生
app.get('/doctorHome', function (request, response) {
  //调用数据库的方法
  var con = getConnection()
  //链接数据库
  con.connect()
  //sql语句
  var sql = `SELECT * FROM doctor_info LIMIT 4; `
  //执行sql
  con.query(sql, function (error, result) {
    if (error) {
      console.log('出错了：' + error.message)
      response.send({
        state: false,
        des: '出错了：' + error.message,
      })
    } else if (result.length == 0) {
      response.send({
        state: true,
        des: '无任何用户数据！',
      })
    } else {
      //向客户端响应数据
      response.send({
        state: true,
        des: result,
      })
    }
    //关闭数据库
    con.end()
  })
})

//加载关注的医生的信息
app.get('/doctorSub', function (request, response) {
  //调用数据库的方法
  var con = getConnection()
  //链接数据库
  con.connect()
  //sql语句
  var sql = `SELECT * FROM doctor_info where issub='已关注'; `
  //执行sql
  con.query(sql, function (error, result) {
    if (error) {
      console.log('出错了：' + error.message)
      response.send({
        state: false,
        des: '出错了：' + error.message,
      })
    } else if (result.length == 0) {
      response.send({
        state: true,
        des: '无任何用户数据！',
      })
    } else {
      //向客户端响应数据
      response.send({
        state: true,
        des: result,
      })
    }
    //关闭数据库
    con.end()
  })
})

//加载医生信息
app.get('/onlineInquiry', function (request, response) {
  //调用数据库的方法
  var con = getConnection()
  //链接数据库
  con.connect()
  //sql语句
  var sql = `SELECT * FROM doctor_info; `
  //执行sql
  con.query(sql, function (error, result) {
    if (error) {
      console.log('出错了：' + error.message)
      response.send({
        state: false,
        des: '出错了：' + error.message,
      })
    } else if (result.length == 0) {
      response.send({
        state: true,
        des: '无任何用户数据！',
      })
    } else {
      //向客户端响应数据
      response.send({
        state: true,
        des: result,
      })
    }
    //关闭数据库
    con.end()
  })
})

//删除宠物
app.get('/delpet', function (request, response) {
  var id=request.query.id
  //调用数据库的方法
  var con = getConnection()
  //链接数据库
  con.connect()
  //sql语句
  var sql = `DELETE FROM pet_info WHERE id='${id}';`
  //执行sql
  con.query(sql, function (error, result) {
    if (error) {
      console.log('出错了：' + error.message)
      response.send({
        state: false,
        des: '出错了：' + error.message,
      })
    } else if (result.length == 0) {
      response.send({
        state: true,
        des: '无任何用户数据！',
      })
    } else {
      //向客户端响应数据
      response.send({
        state: true,
        des: result,
      })
    }
    //关闭数据库
    con.end()
  })
})

//加载宠物详情
app.get('/petDetail', function (request, response) {
  var id=request.query.id
  //调用数据库的方法
  var con = getConnection()
  //链接数据库
  con.connect()
  //sql语句
  var sql = `SELECT * FROM pet_info WHERE id='${id}'; `
  //执行sql
  con.query(sql, function (error, result) {
    if (error) {
      console.log('出错了：' + error.message)
      response.send({
        state: false,
        des: '出错了：' + error.message,
      })
    } else if (result.length == 0) {
      response.send({
        state: true,
        des: '无任何用户数据！',
      })
    } else {
      //向客户端响应数据
      response.send({
        state: true,
        des: result,
      })
    }
    //关闭数据库
    con.end()
  })
})

//加载宠物列表
app.get('/order', function (request, response) {
  //调用数据库的方法
  var con = getConnection()
  //链接数据库
  con.connect()
  //sql语句
  var sql = `SELECT * FROM pet_info; `
  //执行sql
  con.query(sql, function (error, result) {
    if (error) {
      console.log('出错了：' + error.message)
      response.send({
        state: false,
        des: '出错了：' + error.message,
      })
    } else if (result.length == 0) {
      response.send({
        state: true,
        des: '无任何用户数据！',
      })
    } else {
      //向客户端响应数据
      response.send({
        state: true,
        des: result,
      })
    }
    //关闭数据库
    con.end()
  })
})

//添加宠物信息
app.get('/addpet', function (request, response) {
  var neckName=request.query.neckName
  var petsex=request.query.petsex
  var species=request.query.species
  var age=request.query.age
  var weight=request.query.weight
  var isJueyu=request.query.isJueyu
  var remark=request.query.remark
  //调用数据库的方法
  var con = getConnection()
  //链接数据库
  con.connect()
  //sql语句
  var sql = `INSERT INTO pet_info (nickName, sex, species, age, cardNumber, weight, isJueyu, remark) 
  VALUES ('${neckName}', '${petsex}', '${species}', '${age}', '11111', '${weight}', '${isJueyu}', '${remark}')`
  //执行sql
  con.query(sql, function (error, result) {
    if (error) {
      console.log('出错了：' + error.message)
      response.send({
        state: false,
        des: '出错了：' + error.message,
      })
    } else if (result.affectedRows<=0) {
      response.send({
        state: false,
        des: '添加失败',
      })
    } else {
      //向客户端响应数据
      response.send({
        state: true,
        des: result,
      })
    }
    //关闭数据库
    con.end()
  })
})


//查看医生信息
app.get('/search_doctor', function (request, response) {
  //调用数据库的方法
  var con = getConnection()
  //链接数据库
  con.connect()
  //sql语句
  var sql = `SELECT * FROM doctor_info; `
  //执行sql
  con.query(sql, function (error, result) {
    if (error) {
      console.log('出错了：' + error.message)
      response.send({
        state: false,
        des: '出错了：' + error.message,
      })
    } else if (result.length == 0) {
      response.send({
        state: true,
        des: '无任何用户数据！',
      })
    } else {
      //向客户端响应数据
      response.send({
        state: true,
        des: result,
      })
    }
    //关闭数据库
    con.end()
  })
})

//管理端修改医生信息
app.get('/updatedoctor-mobile', function (req, response) {
  //获取客户端传递的参数
  var issub = req.query.issub
  var id = req.query.id
  // 调用数据库的方法
  var con = getConnection()
  //链接数据库
  con.connect()
  //sql语句
  var sql = `update doctor_info set issub='${issub}' where id='${id}';`
  //执行sql
  con.query(sql, function (error, result) {
    if (error) {
      console.log('出错了：' + error.message)
      response.send({
        state: false,
        des: '出错了：' + error.message,
      })
    } else if (result.affectedRows <= 0) {
      response.send({
        state: false,
        des: '关注失败',
      })
    } else {
      //向客户端响应数据
      response.send({
        state: true,
        des: '关注成功',
      })
    }
    //关闭数据库
    con.end()
  })
})

//查看百科信息
app.get('/search_wiki', function (request, response) {
  //调用数据库的方法
  var con = getConnection()
  //链接数据库
  con.connect()
  //sql语句
  var sql = `SELECT * FROM pet_wiki; `
  //执行sql
  con.query(sql, function (error, result) {
    if (error) {
      console.log('出错了：' + error.message)
      response.send({
        state: false,
        des: '出错了：' + error.message,
      })
    } else if (result.length == 0) {
      response.send({
        state: true,
        des: '无任何用户数据！',
      })
    } else {
      //向客户端响应数据
      response.send({
        state: true,
        des: result,
      })
    }
    //关闭数据库
    con.end()
  })
})

//查看问诊信息
app.get('/search_share', function (request, response) {
  //调用数据库的方法
  var con = getConnection()
  //链接数据库
  con.connect()
  //sql语句
  var sql = `SELECT * FROM consultation_share; `
  //执行sql
  con.query(sql, function (error, result) {
    if (error) {
      console.log('出错了：' + error.message)
      response.send({
        state: false,
        des: '出错了：' + error.message,
      })
    } else if (result.length == 0) {
      response.send({
        state: true,
        des: '无任何用户数据！',
      })
    } else {
      //向客户端响应数据
      response.send({
        state: true,
        des: result,
      })
    }
    //关闭数据库
    con.end()
  })
})

//查看登录信息
app.post('/login', function (req, response) {
  //获取客户端传递的参数
  var tel = req.body.tel
  var password = req.body.password
  // 调用数据库的方法
  var con = getConnection()
  //链接数据库
  con.connect()
  //sql语句
  var sql = `SELECT * FROM doctor_user WHERE  tel="${tel}" and password="${password}"; `
  //执行sql
  con.query(sql, function (error, result) {
    if (error) {
      console.log('出错了：' + error.message)
      response.send({
        state: false,
        des: '出错了：' + error.message,
      })
    } else if (result.length == 0) {
      response.send({
        state: true,
        des: '无任何用户数据！',
      })
    } else {
      //向客户端响应数据
      response.send({
        state: true,
        des: result,
        token: token.tokenObj.createToken(tel, 60 * 60),
      })
    }
    //关闭数据库
    con.end()
  })
})

//修改密码
app.post('/set', function (req, response) {
  //获取客户端传递的参数
  var tel = req.query.tel
  var password = req.query.newword
  // 调用数据库的方法
  var con = getConnection()
  //链接数据库
  con.connect()
  //sql语句
  var sql = `update doctor_user set password='${password}' where tel='${tel}';`
  //执行sql
  con.query(sql, function (error, result) {
    if (error) {
      console.log('出错了：' + error.message)
      response.send({
        state: false,
        des: '出错了：' + error.message,
      })
    } else if (result.affectedRows<=0) {
      response.send({
        state: false,
        des: '修改失败',
      })
    } else {
      //向客户端响应数据
      response.send({
        state: true,
        des: '修改成功',
      })
    }
    //关闭数据库
    con.end()
  })
})
//注销账号
app.post('/del', function (req, response) {
  //获取客户端传递的参数
  var names = req.query.name
  // var password = req.query.newword
  // 调用数据库的方法
  var con = getConnection()
  //链接数据库
  con.connect()
  //sql语句
  var sql = `delete from doctor_user where tel='${names}';`
  //执行sql
  con.query(sql, function (error, result) {
    if (error) {
      console.log('出错了：' + error.message)
      response.send({
        state: false,
        des: '出错了：' + error.message,
      })
    } 
    else if (result.length == 0) {
      response.send({
        state: true,
        des: '无任何用户数据！',
      })
    }else {
      //向客户端响应数据
      response.send({
        state: true,
        des: result,
      })
    }
    //关闭数据库
    con.end()
  })
})

//管理端登录
app.post('/adminlogin', function (req, response) {
  //获取客户端传递的参数
  var tel = req.body.tel
  var password = req.body.password
  // 调用数据库的方法
  var con = getConnection()
  //链接数据库
  con.connect()
  //sql语句
  var sql = `SELECT * FROM admin_info WHERE  tel="${tel}" and password="${password}"; `
  //执行sql
  con.query(sql, function (error, result) {
    if (error) {
      console.log('出错了：' + error.message)
      response.send({
        state: false,
        des: '出错了：' + error.message,
      })
    } else if (result.length == 0) {
      response.send({
        state: true,
        des: '无任何用户数据！',
      })
    } else {
      //向客户端响应数据
      response.send({
        state: true,
        des: result,
        token: token.tokenObj.createToken(tel, 60 * 60),
      })
    }
    //关闭数据库
    con.end()
  })
})

//管理端修改医生信息
app.get('/updatedoctor', function (req, response) {
  //获取客户端传递的参数
  var doctorid = req.query.doctorid
  var doctorname = req.query.doctorname
  var workyears = req.query.workyears
  var subject = req.query.subject
  var position = req.query.position
  var direction = req.query.direction
  // 调用数据库的方法
  var con = getConnection()
  //链接数据库
  con.connect()
  //sql语句
  var sql = `update doctor_info set doctorname='${doctorname}',workyears='${workyears}',subject='${subject}',position='${position}',direction='${direction}' where id='${doctorid}';`
  //执行sql
  con.query(sql, function (error, result) {
    if (error) {
      console.log('出错了：' + error.message)
      response.send({
        state: false,
        des: '出错了：' + error.message,
      })
    } else if (result.affectedRows <= 0) {
      response.send({
        state: false,
        des: '修改失败',
      })
    } else {
      //向客户端响应数据
      response.send({
        state: true,
        des: result,
      })
    }
    //关闭数据库
    con.end()
  })
})

//管理端删除医生信息
app.get('/deldoctor', function (req, response) {
  //获取客户端传递的参数
  var id = req.query.id
  // 调用数据库的方法
  var con = getConnection()
  //链接数据库
  con.connect()
  //sql语句
  var sql = `DELETE FROM doctor_info WHERE id="${id}"`
  //执行sql
  con.query(sql, function (error, result) {
    if (error) {
      console.log('出错了：' + error.message)
      response.send({
        state: false,
        des: '出错了：' + error.message,
      })
    } else if (result.affectedRows <= 0) {
      response.send({
        state: false,
        des: '删除失败',
      })
    } else {
      //向客户端响应数据
      response.send({
        state: true,
        des: result,
      })
    }
    //关闭数据库
    con.end()
  })
})

//管理端添加医生信息
app.get('/adddoctor', function (req, response) {
  //获取客户端传递的参数
  var doctorname = req.query.doctorname
  var workyears = req.query.workyears
  var subject = req.query.subject
  var position = req.query.position
  var consultation_number = req.query.consultation_number
  var score = req.query.score
  var follower_number = req.query.follower_number
  var direction = req.query.direction
  var selfintruduce = req.query.selfintruduce
  var price = req.query.price
  // 调用数据库的方法
  var con = getConnection()
  //链接数据库
  con.connect()
  //sql语句
  var sql = `INSERT INTO doctor_info (role,doctorname,workyears,subject,position,consultation_number,score,follower_number,direction,selfintruduce,price) 
  VALUES("医生","${doctorname}","${workyears}","${subject}","${position}","${consultation_number}","${score}","${follower_number}","${direction}","${selfintruduce}","${price}")`
  //执行sql
  con.query(sql, function (error, result) {
    if (error) {
      console.log('出错了：' + error.message)
      response.send({
        state: false,
        des: '出错了：' + error.message,
      })
    } else if (result.affectedRows <= 0) {
      response.send({
        state: false,
        des: '添加失败',
      })
    } else {
      //向客户端响应数据
      response.send({
        state: true,
        des: result,
      })
    }
    //关闭数据库
    con.end()
  })
})

//管理端查看宠物信息
app.get('/petinfo', function (request, response) {
  //调用数据库的方法
  var con = getConnection()
  //链接数据库
  con.connect()
  //sql语句
  var sql = `SELECT * FROM pet_info; `
  //执行sql
  con.query(sql, function (error, result) {
    if (error) {
      console.log('出错了：' + error.message)
      response.send({
        state: false,
        des: '出错了：' + error.message,
      })
    } else if (result.length == 0) {
      response.send({
        state: true,
        des: '无任何宠物数据！',
      })
    } else {
      //向客户端响应数据
      response.send({
        state: true,
        des: result,
      })
    }
    //关闭数据库
    con.end()
  })
})

//管理端修改宠物信息
app.get('/updatepet', function (req, response) {
  //获取客户端传递的参数
  var id = req.query.id
  var nickName = req.query.nickName
  var sex = req.query.sex
  var species = req.query.species
  var age = req.query.age
  var cardNumber = req.query.cardNumber
  var weight = req.query.weight
  var isJueyu = req.query.isJueyu
  var remark = req.query.remark
  // 调用数据库的方法
  var con = getConnection()
  //链接数据库
  con.connect()
  //sql语句
  var sql = `update pet_info set nickName='${nickName}',sex='${sex}',species='${species}',age='${age}',cardNumber='${cardNumber}',
  weight='${weight}',isJueyu='${isJueyu}',remark='${remark}' where id='${id}';`
  //执行sql
  con.query(sql, function (error, result) {
    if (error) {
      console.log('出错了：' + error.message)
      response.send({
        state: false,
        des: '出错了：' + error.message,
      })
    } else if (result.affectedRows <= 0) {
      response.send({
        state: false,
        des: '修改失败',
      })
    } else {
      //向客户端响应数据
      response.send({
        state: true,
        des: result,
      })
    }
    //关闭数据库
    con.end()
  })
})

//管理端删除宠物信息
app.get('/delPet', function (req, response) {
  //获取客户端传递的参数
  var id = req.query.id
  // 调用数据库的方法
  var con = getConnection()
  //链接数据库
  con.connect()
  //sql语句
  var sql = `DELETE FROM pet_info WHERE id="${id}"`
  //执行sql
  con.query(sql, function (error, result) {
    if (error) {
      console.log('出错了：' + error.message)
      response.send({
        state: false,
        des: '出错了：' + error.message,
      })
    } else if (result.affectedRows <= 0) {
      response.send({
        state: false,
        des: '删除失败',
      })
    } else {
      //向客户端响应数据
      response.send({
        state: true,
        des: result,
      })
    }
    //关闭数据库
    con.end()
  })
})

//管理端添加宠物信息
app.get('/addpets', function (req, response) {
  //获取客户端传递的参数
  var nickName = req.query.nickName
  var sex = req.query.sex
  var species = req.query.species
  var age = req.query.age
  var cardNumber = req.query.cardNumber
  var weight = req.query.weight
  var isJueyu = req.query.isJueyu
  var remark = req.query.remark
  // 调用数据库的方法
  var con = getConnection()
  //链接数据库
  con.connect()
  //sql语句
  var sql = `INSERT INTO pet_info (nickName,sex,species,age,cardNumber,weight,isJueyu,remark) 
  VALUES("${nickName}","${sex}","${species}","${age}","${cardNumber}","${weight}","${isJueyu}","${remark}")`
  //执行sql
  con.query(sql, function (error, result) {
    if (error) {
      console.log('出错了：' + error.message)
      response.send({
        state: false,
        des: '出错了：' + error.message,
      })
    } else if (result.affectedRows <= 0) {
      response.send({
        state: false,
        des: '添加失败',
      })
    } else {
      //向客户端响应数据
      response.send({
        state: true,
        des: result,
      })
    }
    //关闭数据库
    con.end()
  })
})
//监听端口
app.listen(8081, function () {
  console.log('应用实例，访问地址为 http://127.0.0.1:8081')
})
