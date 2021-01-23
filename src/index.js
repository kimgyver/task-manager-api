const app = require('./app');
const port = process.env.PORT;

// const multer = require('multer');
// const upload = multer({
//   dest: 'images',
//   limits: {
//     fileSize: 1000000,
//   },
//   fileFilter(req, file, cb) {
//     // if (!file.originalname.endsWith('.pdf')) {
//     //   return cb(new Error('Please upload a PDF'));
//     // }
//     if (!file.originalname.match(/\.(doc|docx)$/)) {
//       return cb(new Error('Please upload a Word document'));
//     }

//     cb(undefined, true);

//     // cb(new Error('File must be a PDF'))
//     // cb(undefined, true)
//     // cb(undefined, false)
//   },
// });

// app.post('/upload', upload.single('upload'), (req, res) => {
//   res.send();
// });

// app.use((req, res, next) => {
//   if (req.method === 'GET') {
//     res.send('GET requests are disabled');
//   } else {
//     next();
//   }
// });

// app.use((req, res, next) => {
//   res.status(503).send('We are sorry. Maintenance is undergoing');
// });

app.listen(port, () => {
  console.log('Server is up on port ' + port);
});

// const Task = require('./models/task');
// const User = require('./models/user');
// const main = async () => {
//   // const task = await Task.findById('5ffcb83c652a222e8cdc66c9');
//   // await task.populate('owner').execPopulate();
//   // console.log(task.owner.email);

//   const user = await User.findById('5ffcb6df3c56fc2740aed5a7');
//   await user.populate('tasks').execPopulate();
//   console.log(user.tasks);
// };

// main();

// const jwt = require('jsonwebtoken');
// const myFunction = async () => {
//   const token = jwt.sign({ _id: 'abc123' }, 'thisismynewcourse', {
//     expiresIn: '7 days',
//   });
//   console.log(token);

//   const data = jwt.verify(token, 'thisismynewcourse');
//   console.log(data);
// };

// myFunction();

// const bcrypt = require('bcryptjs');
// const myFunction = async () => {
//   const password = 'Red12345';
//   const hashedPassword = await bcrypt.hash(password, 8);

//   console.log(password);
//   console.log(hashedPassword);

//   const isMatch = await bcrypt.compare('Red12345', hashedPassword);
//   console.log(isMatch);
// };

// myFunction();
