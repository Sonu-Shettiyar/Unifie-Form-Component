const express = require('express');
const router = express.Router();
const FormData = require('../models/form.model');

router.post('/', async (req, res) => {
    try {
        const newFormData = new FormData(req.body);
        await newFormData.save();
        res.json('FormData submitted successfully');
    } catch (err) {
        res.status(400).json('Error: ' + err);
    }
});

router.get('/', async (req, res) => {
    try {
        const formData = await FormData.find();
        res.json(formData);
    } catch (err) {
        res.status(400).json('Error: ' + err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const formData = await FormData.findById(req.params.id);
        res.json(formData);
    } catch (err) {
        res.status(400).json('Error: ' + err);
    }
});

router.put('/:id', async (req, res) => {
    try {
        await FormData.findByIdAndUpdate(req.params.id, req.body);
        res.json('FormData updated successfully');
    } catch (err) {
        res.status(400).json('Error: ' + err);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        await FormData.findByIdAndDelete(req.params.id);
        res.json('FormData deleted successfully');
    } catch (err) {
        res.status(400).json('Error: ' + err);
    }
});

module.exports = router;
