// authentication of email and password
app.post('/auth', (req, res) => {
    var {email, password} = req.body;
 
    if(email != undefined){
       var user = Users.findOne({where: {email : email, password: password}});
 
       if(user != undefined){
          if(user.password == password){
             res.status(200);
             res.json({token: "A@12tb*25"});
          }else{
             res.status(401);
             res.json("Credenciais invalidas!");
          }
       }else{
          res.status(404);
          res.json({e: "Email não encontrado."})
       }
    }else{
       res.status(400);
       res.json({e: "email ou senha invalido"});
    }
 });
  
 app.listen(4567, () => {
     console.log("Conectado ao servidor: http://localhost:4567");
 });