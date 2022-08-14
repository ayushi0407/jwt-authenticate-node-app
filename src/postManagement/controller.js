const { response } = require('express');
const PostSchema = require('./model');

const get = async (req, res) => {
    try {
        const reponse = await PostSchema.find();

        res.json({...reponse})
    } catch (error) {
        throw new Error(error)
    }
}

const post = async (req, res) => {
    try {
        const payload = req.body
        const newPost = new PostSchema({
            ...payload
        });

        const response = await newPost.save();

        res.json(response)
    } catch (error) {
        throw new Error(error)
    }
}

const update = async (req, res) => {
    try {
        const { identifier } = req.params;
        const payload = req.body

        const response = await PostSchema.findOneAndUpdate({ _id: identifier }, {
            $set: {
              ...payload
            }
        })

        res.json(response)
    } catch (error) {
        throw new Error(error)
    }
}

const remove = async (req, res) => {
    try {
        const { identifier } = req.params;
        const response = await PostSchema.remove({_id: identifier});

        res.json(response)
    } catch (error) {
        throw new Error(error)
    }
}

module.exports = {
    get,
    post,
    update,
    remove
}