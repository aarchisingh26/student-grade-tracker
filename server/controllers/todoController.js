// const Todo = require('../models/Todo');
// const { encrypt, decrypt } = require('../utils/encryption');

// // exports.getTodos = async (req, res) => {
// //   const todos = await Todo.find({ userId: req.user.id });
// //   res.json(todos);
// // };

// exports.getTodos = async (req, res) => {
//     const todos = await Todo.find({ userId: req.user.id });
//     const decryptedTodos = todos.map((t) => ({
//       ...t._doc,
//       text: decrypt(t.text),
//     }));
//     res.json(decryptedTodos);
//   };
  

// // exports.addTodo = async (req, res) => {
// //   const newTodo = await Todo.create({ text: req.body.text, userId: req.user.id });
// //   res.status(201).json(newTodo);
// // };

// exports.addTodo = async (req, res) => {
//   const encryptedText = encrypt(req.body.text);
//   const newTodo = await Todo.create({ text: encryptedText, userId: req.user.id });
//   res.status(201).json({ ...newTodo._doc, text: req.body.text }); // return plain text for frontend
// };


// exports.deleteTodo = async (req, res) => {
//   const deleted = await Todo.findOneAndDelete({ _id: req.params.id, userId: req.user.id });
//   if (!deleted) return res.status(404).json({ message: 'Todo not found' });
//   res.json({ message: 'Deleted' });
// };


const Todo = require('../models/Todo');
const { encrypt, decrypt } = require('../utils/encryption');

exports.getTodos = async (req, res) => {
  const todos = await Todo.find({ userId: req.user.id });

  const decryptedTodos = todos.map((todo) => ({
    ...todo._doc,
    text: decrypt(todo.text),
  }));

  res.json(decryptedTodos);
};

exports.addTodo = async (req, res) => {
  const encryptedText = encrypt(req.body.text);

  const newTodo = await Todo.create({
    text: encryptedText,
    userId: req.user.id,
  });

  res.status(201).json({ ...newTodo._doc, text: req.body.text }); // return decrypted
};

exports.deleteTodo = async (req, res) => {
  const deleted = await Todo.findOneAndDelete({ _id: req.params.id, userId: req.user.id });
  if (!deleted) return res.status(404).json({ message: 'Todo not found' });
  res.json({ message: 'Deleted' });
};