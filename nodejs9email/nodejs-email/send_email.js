var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'franciscusvalentinus@gmail.com',
        pass: 'your password'
    }
});

var mailOptions = {
    from: 'franciscusvalentinus@gmail.com',
    to: 'angelabarbara0101@gmail.com',
    subject: 'Sending Email using Nodejs',
    text: 'That was easy!'
};

transporter.sendMail(mailOptions, (err, info) => {
    if (err) throw err;
    console.log('Email sent: ' + info.response);
});