// ./express-server/app.js
import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import logger from 'morgan';
import mongoose from 'mongoose';
import SourceMapSupport from 'source-map-support';
// import routes
import tempoRoutes from './routes/tempo.server.route';
// define our app using express
const app = express();
// allow-cors
app.use(function(req,res,next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})
// configure app
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));
app.use(express.static(path.join(__dirname, 'public')));
// set the port
const port = process.env.PORT || 3001;
// connect to database
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/mern-tempo-app', {
  useMongoClient: true,
});
// add Source Map Support
SourceMapSupport.install();

app.use('/api', tempoRoutes);

app.get('/', (req,res) => {
  return res.end('Api trabajando');
})
// catch 404
app.use((req, res, next) => {
  res.status(404).send('<h2 align=center>Pagina no encontrada!</h2>');
});
// start the server
app.listen(port,() => {
  console.log(`Servidor de la app escuchando en el puerto: ${port}`);
});
