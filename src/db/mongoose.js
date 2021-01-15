const mongoose = require('mongoose');

mongoose.connect(
  process.env.MONGODB_URL,
  //'mongodb://127.0.0.1:27017/task-manager-api',
  // mongoose.connect(
  //   'mongodb+srv://admin:kim555@cluster0.4xmc3.mongodb.net/task-manager-api?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  }
);
