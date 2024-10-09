import { Schema, model } from "mongoose";

const veiculoSchema = new Schema({
    placa:{
        type: Schema.Types.String,
        required: true,
        unique: true,
        maxLength: 7,
        minLength: 7
    },
    nome:{
        type: Schema.Types.String,
        required: true
    },
    cor:{
        type: Schema.Types.String,
        enum: ["VERMELHO", "PRETO", "PRATA", "CINZA", "VERDE", "AZUL", "BRANCO"],
        required: true
    },
    categoria:{
        type: Schema.Types.String,
        required: true,
        enum: ["MOTO", "CARRO", "VAN", "ONIBUS", "CAMINHÃO"]
    },
    cliente:{
        type: Schema.Types.ObjectId,
        ref: "Cliente",
        required: true
    }
});

const Veiculo = model("veiculo", veiculoSchema);

export default Veiculo;