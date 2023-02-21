const db = require('../../config/mongoose');
const Todo = require('../todo');

db.once('open', dbOpenCallback)
function dbOpenCallback() {
  for (let i = 0; i < 10; i++) {
    // 呼叫 Todo 物件，直接新增資料。
    Todo.create({ name: `name-${i}` });
  }

  console.log('done!');
}
