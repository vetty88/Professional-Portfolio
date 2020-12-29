const express = require('express');
const app = express();

if(process.env.NODE_ENV === 'production'){
  const path  =  require('path');
  app.get("/",(req,res)=>{
      res.sendfile(path.resolve(__dirname,'client','build','index.html'));
  });
}

app.listen(process.env.PORT || 5000, function() {
  console.log('Server listening on port 5000');
});