const fs = require('fs');
const path = require('path');
const filePath = path.join(path.dirname(require.main.filename), 'data', 'info.json');

exports.getPage = (req,res) =>{

    fs.readFile(filePath,(error, fileContent) => {
       if(error){
           console.log(error);

       }
   });
   fs.readFile(filePath,(error, fileContent) => {
       if(error){
           console.log(error);
       }else{
           let infoBd  = JSON.parse(fileContent);
           res.render(path.join(__dirname, '..', 'views', 'page.ejs'),{
       
               info: infoBd
           });
       }
   });

};