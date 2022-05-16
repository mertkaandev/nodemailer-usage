// "nodemailer" is included.

const nodemailer = require('nodemailer');

// Transporter uses createTransport({}) method of "nodemailer". 
// Service indicates which service is used. Auth is your e-mail and e-mail password.

const transporter = nodemailer.createTransport({ 
  service: 'outlook', 
  auth: {
    user: 'your e-mail',
    pass: 'your e-mail password',
  }
});

// E-mail Information.

const mail = {
  from: 'your e-mail',
  to: 'target e-mail',
  subject: 'Node.js',
  text: 'We send e-mail with Node.js'
};

// sendMail(){} function is used with transporter.
// As parameters, the e-mail information entered above and the callback function are given. If the e-mail is sent successfully, it will output in the console.

transporter.sendMail(mail, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('E-mail sent: ' + info.response);
  }
});