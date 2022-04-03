const express = require('express');
const router = express.Router();

// Load Todo model
const Todo = require('../../models/Todo');


router.get('/test', (req, res) => { res.send("Test") });

router.get('/', (req, res) => {
    Todo.find()
        .sort('date')
        .then(todos => res.json(todos))
        .catch(err => res.status(404).json({ noTodoFound: "No Todo found" }));
});

router.post('/', (req, res) => {
    Todo.create(req.body)
        .then(todo => res.json({ msg: "Todo add successfully" }))
        .catch(err => res.status(400).json({ error: "Unable to add this Todo" }));
})

router.get('/:id', (req, res) => {
    Todo.findById(req.params.id)
        .then(todos => res.json(todos))
        .catch(err => res.status(404).json({ noTodoFound: "No Todo found" }));
});

router.put('/:id', (req, res) => {
    Todo.findByIdAndUpdate(req.params.id, req.body)
        .then(todo => res.json({ msg: "Updated successfully", todo: todo }))
        .catch(err => res.status(400).json({ error: 'Unable to update the Database' }))
});

router.delete('/:id', (req, res) => {
    Todo.findByIdAndRemove(req.params.id, req.body)
        .then(todo => res.json({ msg: "Removed successfully", }))
        .catch(err => res.status(404).json({ error: "Todo not found" }));

});

module.exports = router;