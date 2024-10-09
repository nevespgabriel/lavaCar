/*
  Cria a conexão com o banco
*/

import mongoose from "mongoose";

(async () => {
    try{
        await mongoose.connect(process.env.MONGODB);
        console.log("Conectado com sucesso.");
    } catch(error){
        console.log(error);
    }
})()