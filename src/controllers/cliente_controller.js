import Cliente from "../models/cliente_model.js";

const store = async(req, res) => {
    try{
        const content = await Cliente.create(req.body);
        res.status(201).json(content);
    } catch(error) {
        res.status(400).send(error.message);
    }
}

const index = async(req, res) => {
    try{
        const content = await Cliente.find(req.query).exec();
        res.json(content);
    } catch(error){
        res.status(400).send(error.message);
    }
}

const show = async(req, res) => {
    try{
        const content = await Cliente.findById(req.params.id).exec();
        res.json(content);
    } catch(error){
        res.status(400).send(error.message);
    }
}

const update = async(req, res) => {
    try{
        const content = await Cliente.findByIdAndUpdate(req.params.id, req.body).exec();
        res.status(201).json(content);
    } catch(error){
        res.status(400).send(error.message);
    }
}

const destroy = async(req, res) => {
    try{
        await Cliente.findByIdAndDelete(req.params.id).exec();
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