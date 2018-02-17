var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articleOne = {
    title:'articleone',
    heading:'ANKIT - THE CASSANOVA',
    date: '5 feb 2018',
    content:` <p> I have never let my schooling interfere with my education.
            <hr/> -ANKIT 
            <P>You can never be overdressed or overeducated. <HR/>-ANKIT
            <p>loathe narcissism, but I approve of vanity. <HR/>-ANKIT
            `
};
function createTemplate (data){
    var title= data.title;
    var heading= data.heading;
    var date= data.date;
    var content= data.content;

    var htmlTemplate=
    `<html>
     <head>
        <title>
           ${title}
        </title>
         <link href="/ui/style.css" rel="stylesheet" />
     </head>
    <body>
        <div class="container">
          <div>
            <a href="/">Home </a>
          </div>
        
          <hr/>
          <h1>
            ${heading}
          </h1>
          <div> 
          <img src="https://github.com/Ashish1897/imad-app/blob/master/ui/IMG-20180217-WA0011.jpg"/>
          <DIV>${date}</DIV>
          <div>${content}
          </div>
        </div>
    </body>
    </html>
    
    `
    ;
    return htmlTemplate;
}
app.get('/', function (req, res){
    res.sendFile(path.join(__dirname, 'ui','index.html'));
    
});
app.get('/article-one', function (req, res){
    res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
    
});
app.get('/article-two', function (req,res) {res.send(createTemplate(articleOne));});
app.get('/article-three', function (req,res) {res.send('article three is available and will be served');});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
  });
app.get('/ui/IMG-20180217-WA0011.png',function(req, res){
    res.sendFile(path.join(__dirname,'ui','IMG-20180217-WA0011.png'));
});  
  
app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
