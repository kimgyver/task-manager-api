const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'jinyoung777@gmail.com',
    subject: 'Thanks for joining in!',
    text: `Welcome to the app, ${name}, Let me know how you get along with the app.`,
  });
};

const sendCancelEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'jinyoung777@gmail.com',
    subject: 'Sorry to see you go.',
    text: `Good bye, ${name}. Hope to see you sometime soon.`,
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancelEmail,
};

// sgMail
//   .send({
//     to: 'jinyoung777@gmail.com',
//     from: 'jinyoung777@gmail.com',
//     subject: 'This is my first creation!',
//     text: 'I hope this one actually get to you',
//   })
//   .then(() => {
//     console.log('Email sent');
//   })
//   .catch((error) => {
//     console.error(error);
//   });
