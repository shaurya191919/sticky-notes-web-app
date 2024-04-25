const express=require('express')
const app=express();
const fs=require('fs')
const path=require('path')

app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.set('view engine','ejs')

app.use(express.static(path.join(__dirname,'public')))

app.get('/',(req,res)=>{
    fs.readdir('./files',(err,files)=>{
        res.render('index',{files: files})   
    })
    
})
app.get('/file/:filename',(req,res)=>{
    fs.readFile(`./files/${req.params.filename}`,'utf-8',(err,filedata)=> {
    res.render('show',{filedata:filedata, filename:req.params.filename})
    })




    
})

app.get('/file/:filename/delete',(req,res)=>{
    fs.unlink(`./files/${req.params.filename}`,(err)=>{
        res.redirect("/")
    })




    
})


app.post('/create',(req,res)=>{
    const titleData=req.body.title
    const title=titleData.replace(/\s/g, '');
    const note=req.body.data
    fs.writeFile(`./files/${title}.txt`,note,(err)=>{
      res.redirect("/")
    })
   
    
})

app.listen(3000)
