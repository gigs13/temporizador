// ./express-server/routes/tempo.server.route.js
import express from 'express';
//import controller file
import * as tempoController from '../controllers/tempo.server.controller';
// get an instance of express router
const router = express.Router();
router.route('/')
     .get(tempoController.getTempos)
     .post(tempoController.addTempo)
     .put(tempoController.updateTempo);
router.route('/:id')
      .get(tempoController.getTempo)
      .delete(tempoController.deleteTempo);
export default router;
