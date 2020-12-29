const path = require('path');
const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;

if(process.env.NODE_ENV === 'production'){
  const path  =  require('path');
  app.get('/*',(req,res)=>{
      res.sendfile(path.resolve(__dirname,'client','build','index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});