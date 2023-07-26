const nodemailer = require("nodemailer");
require("dotenv/config");

const email = process.env.EMAIL;
const password = process.env.PASSWORD;

module.exports = function sendEmail(req, res) {
  const data = req.body;
  console.log(data);

  let smtpTransport = nodemailer.createTransport({
    host: "atmabank.xaa.pl",
    port: 465,
    auth: {
      user: email,
      pass: password,
    },
  });

  let mailOptions = {
    from: "Alfa",
    to: email,
    replyTo: data.email,
    subject: `Od: <${data.email}>    Temat: <${data.subject}>`,
    html: `
    <h3>Informacje o nadawcy</h3>
        <ul>
            <li>Imię: ${data.name}</li>
            <li>Email: ${data.email}</li>    
        </ul> 
    <h3>Wiadomość</h3> 
    <p>${data.text}</p> 
    `,
  };

  smtpTransport.sendMail(mailOptions, (error, response) => {
    if (error) {
      res.send({ sendMessageSuccess: false, error });
    } else {
      res.send({ sendMessageSuccess: true });
    }
    smtpTransport.close();
  });
};
