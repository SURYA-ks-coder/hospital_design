const express=require('express')
const  app=express()
app.use('/',touter)
app.listen(3000,()=>{console.log('connecterd..!');})