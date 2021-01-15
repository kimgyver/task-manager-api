require('../src/db/mongoose');
const User = require('../src/models/user');

// 5ff63fd0d849100b042c9ebe

User.findByIdAndUpdate('5ff665f7129a3839081d4f8b', { age: 1 })
  .then((user) => {
    console.log(user);
    return User.countDocuments({ age: 1 });
  })
  .then((result) => {
    console.log(result);
  })
  .catch((e) => {
    console.log(e);
  });
