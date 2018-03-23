var userData = require('../data/friends.js');



module.exports = function(app) 
{
  app.get('/api/friends',function(req,res)
  {
     console.log('API call',userData);
     res.json(userData);
   });
   app.get('/api/friendslist',function(req,res)
    {
      var friendobject = JSON.stringify(userData,null,2);
      res.send(friendobject);
   
    });
    app.post('/api/friends',function(req,res)
    {
      userData.push(req.body);
      res.json(true);
      console.log('New Scout!',req.body);
    });
}