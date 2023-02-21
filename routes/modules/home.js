const express = require('express');
const Todo = require('../../models/todo');
const router = express.Router();

router.get('/', (req, res) => {
  return (
    Todo
      // get all todo data
      .find()
      // asc -> 正序 / desc -> 反序
      .sort({ _id: 'asc' })
      // returns a JavaScript object instead of a Mongoose document.
      .lean()
      // render views
      .then((todoData) => res.render("index", { todoData }))
      // catch error
      .catch((error) => console.log(error))
  );
});

module.exports = router;