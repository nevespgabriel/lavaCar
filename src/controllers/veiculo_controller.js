import Veiculo from "../models/veiculo_model.js";

const store = async(req, res) => {
    try{
        const content = await Veiculo.create(req.body);
        res.status(201).json(content);
    } catch(error) {
        res.status(400).send(error.message);
    }
}

const index = async(req, res) => {
    try{
        const content = await Veiculo.find(req.query).exec();
        res.json(content);
    } catch(error){
        res.status(400).send(error.message);
    }
}

const show = async(req, res) => {
    try{
        const content = await Veiculo.findById(req.params.id).populate("cliente").exec();
        res.json(content);
    } catch(error){
        res.status(400).send(error.message);
    }
}

const update = async(req, res) => {
    try{
        const content = await Veiculo.findByIdAndUpdate(req.params.id, req.body).exec();
        res.status(201).json(content);
    } catch(error){
        res.status(400).send(error.message);
    }
}

const destroy = async(req, res) => {
    try{
        await Veiculo.findByIdAndDelete(req.params.id).exec();
    } catch(error){
        res.status(400).send(error.message);
    }
}

export default {
    store,
    index,
    show,
    update,
    destroy
}