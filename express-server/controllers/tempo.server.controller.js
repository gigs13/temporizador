// ./express-server/controllers/tempo.server.controller.js
import mongoose from 'mongoose';
//import models
import Tempo from '../models/tempo.server.model';
export const getTempos = (req,res) => {
  Tempo.find().exec((err,tempos) => {
    if(err){
    return res.json({'success':false,'message':'Se encontro un error'});
    }
return res.json({'success':true,'message':'Tempos encontrados exitosamente',tempos});
  });
}
export const addTempo = (req,res) => {
  const newTempo = new Tempo(req.body);
  newTempo.save((err,tempo) => {
    if(err){
    return res.json({'success':false,'message':'Se encontro un error'});
    }
return res.json({'success':true,'message':'Tempo añadido exitosamente',tempo});
  })
}
export const updateTempo = (req,res) => {
  Tempo.findOneAndUpdate({ _id:req.body.id }, req.body, { new:true }, (err,tempo) => {
    if(err){
    return res.json({'success':false,'message':'Se encontro un error','error':err});
    }
    console.log(tempo);
    return res.json({'success':true,'message':'Actualizado exitosamente',tempo});
  })
}
export const getTempo = (req,res) => {
  Tempo.find({_id:req.params.id}).exec((err,tempo) => {
    if(err){
    return res.json({'success':false,'message':'Se encontro un error'});
    }
    if(tempo.length){
      return res.json({'success':true,'message':'Tempo encontrado por id exitosamente',tempo});
    }
    else{
      return res.json({'success':false,'message':'Tempo con el id dado, no encontrado'});
    }
  })
}
export const deleteTempo = (req,res) => {
  Tempo.findByIdAndRemove(req.params.id, (err,tempo) => {
    if(err){
    return res.json({'success':false,'message':'Se encontro un error'});
    }
return res.json({'success':true,'message':tempo.tempoText+' eliminado exitosamente'});
  })
}
