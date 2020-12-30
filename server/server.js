const express = require('express');
const app = express();

if(process.env.NODE_ENV === 'production'){
  const path  =  require('path');
  app.get("/",(req,res)=>{
      res.sendfile(path.resolve(__dirname,'client','build','index.html'));
  });
}

app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});