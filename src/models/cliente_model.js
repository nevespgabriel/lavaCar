/*
  O modelo define os dados dos documentos que vão pertencer a uma coleção
*/

import { Schema, model } from "mongoose";

const clienteSchema = new Schema({
    nome:{
        type: Schema.Types.String,
        required: true
    },
    endereco:{
        type: Schema.Types.String,
        required: true
    },
    telefone:{
        type: Schema.Types.String,
        required: true,
        validator: {
            validate(v){
                return /^\([1-9]{2}\) (?:[2-8]|9[0-9])[0-9]{3}\-[0-9]{4}$/.test(v);
            }
        }
    }
})

const Cliente = model("Cliente", clienteSchema);

export default Cliente;