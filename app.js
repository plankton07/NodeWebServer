const express = require('express');
const app = express();

app.use(express.static('public'));
app.set('view engine', 'jade');
app.locals.pretty = true;
app.set('views', './views');

app.get('/template', function(req, res) {
  res.render('temp', {time: Date(), _title:'Jade'});
});

app.get('/', function(req, res){
  res.send('Hello World');
});

app.get('/dynamic', function(req,res){
  let lis = '';
  for(var i=0; i<5; i++) {
    lis = lis + '<li>coding</li>';
  }
  var output = `
    <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title></title>
        </head>
        <body>
            Hello, Dynamic!
            <ul>
              ${lis}
            </ul>
        </body>
      </html>
    `;
  res.send(output);
})

app.listen(8080, function(){
  console.log('Conneted 8080 port!');
  // console.log(__dirname);
});
