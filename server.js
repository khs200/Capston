const express =require("express");
const app =express();
const port=3000
app.listen(port,() =>{
    console.log("서버가 실행됨");
});
app.get("/",(require,response)=>{
    response.send("데모버전")
})