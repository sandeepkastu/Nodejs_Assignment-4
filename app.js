const app=require('./index');

app.post('/add',(req,res)=>{
     
    let sum=Number(req.body.num1)+Number(req.body.num2);
   if(typeof(req.body.num1)==='string'||isNaN(req.body.num2)){
       return res.json({
           'status':'error',
           'message':'Invalid data types'
       })
   }

   if(sum<-(10**6)){
       return res.json({
           'status':'error',
           'message':'Underflow'
       })
   }

   if(sum>(10**6)){
       return res.json({
           'status':'error',
           'message':'Overflow'
       })
   }


   res.json({
           'status': 'success',
            'message': `the sum of given two numbers `, //${sum}
            'sum': `${sum}` 

   })
})

app.post('/sub',(req,res)=>{

   let sub=Number(req.body.num1)-Number(req.body.num2);
   if(isNaN(req.body.num1)||isNaN(req.body.num2)){
       return res.json({
           'status':'error',
           'message':'Invalid data types'
       })
   }

   if(sub<-(10**6)){
       return res.json({
           'status':'error',
           'message':'Underflow'
       })
   }

   if(sub>(10**6)){
       return res.json({
           'status':'error',
           'message':'Overflow'
       })
   }

   res.json({
           'status': 'success',
            'message': `the difference of given two numbers `, 
            'difference': `${sub}`                   //Number(req.body.num1)-Number(req.body.num2) 

   })
})

app.post('/multiply',(req,res)=>{

   let multiply=Number(req.body.num1)*Number(req.body.num2);
   if(isNaN(req.body.num1)||isNaN(req.body.num2)){
       return res.json({
           'status':'error',
           'message':'Invalid data types'
       })
   }

   if(multiply<-(10**6)){
       return res.json({
           'status':'error',
           'message':'Underflow'
       })
   }

   if(multiply>(10**6)){
       return res.json({
           'status':'error',
           'message':'Overflow'
       })
   }

   res.json({
           'status': 'success',
            'message': `the product of given two numbers `, 
            'multiplication': `${multiply}`                //Number(req.body.num1)*Number(req.body.num2) 

   })
})

app.post('/divide',(req,res)=>{

   let divide=Number(req.body.num1)/Number(req.body.num2);
   if(req.body.num2===0){
       return res.json({
           'status':'error',
           'message':'Cannot divide by zero'
       })
   }

   
   if(isNaN(req.body.num1)||isNaN(req.body.num2)){
       return res.json({
           'status':'error',
           'message':'Invalid data types'
       })
   }

   if(divide<-(10**6)){
       return res.json({
           'status':'error',
           'message':'Underflow'
       })
   } 
   


   if(divide>(10**6)){
       return res.json({
           'status':'error',
           'message':'Overflow'
       })
   }

   res.json({
           'status': 'success',
            'message': `the division of given two numbers `, 
            'division': `${divide}`                 //Number(req.body.num1)/Number(req.body.num2) 

   })
})
app.post('*',(req,res)=>{
        res.json({
            'status':'error',
            'message':'type corect url/endpoint'
        })
})

//app.listen(port, () => console.log(`App listening on port ${port}!`))

