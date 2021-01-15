require('../src/db/mongoose');
const Task = require('../src/models/task');

// Task.findByIdAndDelete('5ff66d03dd23463860fc9979')
//   .then(() => {
//     return Task.countDocuments({ completed: false });
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

const deleteTaskAndCount = async (id) => {
  await Task.findByIdAndDelete(id);
  const count = await Task.countDocuments({ completed: false });
  return count;
};

deleteTaskAndCount('5ff66ce350c4c140640b6356')
  .then((count) => {
    console.log(count);
  })
  .catch((e) => {
    console.log(e);
  });
