const express = require("express");//引入我们的express模板引擎
const app=express();//创建实例
const classinfo=require("./router/classinfo");
const studentinfotmation=require("./router/studentinfotmation");
const testresult=require("./router/testresult");
const userlogin=require("./router/userlogin");
app.use(express.urlencoded({entended:true}));//解析post请求
app.use(express.json())//解析json请求的数据



app.use(classinfo);
app.use(studentinfotmation);
app.use(testresult);
app.use(userlogin);







//当用户输入的地址不存在的时候，当然，前后端分离的项目一般来说不会出现这种情况
app.use((request,resonse)=>{
    resonse.status(500).send({
        data:{
            error:"你输入的地址被外星人劫持"
        }
    })
})


app.listen(7000,()=>{console.log("服务器已经准备就绪，接下来准备监听")});//开始监听