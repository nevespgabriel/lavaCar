import Funcionario from "../models/funcionario_model.js";

const store = async(req, res) => {
    try{
        const content = await Funcionario.create(req.body);
        res.status(201).json(content);
    } catch(error) {
        res.status(400).send(error.message);
    }
}

const index = async(req, res) => {
    try{
        const content = await Funcionario.find(req.query).exec();
        res.json(content);
    } catch(error){
        res.status(400).send(error.message);
    }
}

const show = async(req, res) => {
    try{
        const content = await Funcionario.findById(req.params.id).exec();
        res.json(content);
    } catch(error){
        res.status(400).send(error.message);
    }
}

const update = async(req, res) => {
    try{
        const content = await Funcionario.findByIdAndUpdate(req.params.id, req.body).exec();
        res.status(201).json(content);
    } catch(error){
        res.status(400).send(error.message);
    }
}

const destroy = async(req, res) => {
    try{
        await Funcionario.findByIdAndDelete(req.params.id).exec();
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