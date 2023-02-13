const Users = require("../Models/Users.js");
const nodemailer= require('nodemailer')

require("dotenv").config()
const {
    USER, PASS
  } = process.env;

let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    //secure: true, //
    auth: {
      user: `${USER}`,
      pass: `${PASS}`,
    },
  });

  transporter.verify().then(() => {
    console.log('Ready for send emails');
  })



const mandarEmail= async (email) => {
    
    let mensaHTM= `
    <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<div>
  <div>
    <div>
    <img src="Logo RC 1.jpg" alt="">
    </div>
  </div>
  <div>
    <h2>Bienvenido a RentCar</h2>
    <p>Somos una plataforma dedicada al alquiler de vehiculos. En donde te brindamos una gran variedad de opciones.</p>
    <p> GRACIAS POR SER PARTE </p>
    <div>
      <div>
        <img src="Logo RC 1.jpg" alt=""/>
        <p > Cualquie consulta <br>comunicate con nosotros <br>desde nuestra pagina <br> o a traves de nuestros canales digitales. <br> TE ESPERAMOS </p>
      </div>
    </div>
    <P><i>Atentamente:</i><br> Grupo RentCar </P>
    <a> RentCar </a>
    <div>
      <a><img src="Logo Wp.png"/></a>
      <p>Soporte</p>
      <p> Comunicate con nosotros por los siguientes medios: <br>  
      E-Mail: <a>info.grupo.rentcar@gmail.com</a><br>
      WhatsApp: <a>+549 11 4586709</a>
      FaceBook: <a>https://www.facebook.com/profile.php?id=100090221383335</a>
      Instagram: <a></a>
      </p>
      <p>
      @ 2023 RentCar, todos los derechos reservados.</p>
    </div>
  </div>
<div></div>
</div>
<body>
  
</body>
</html>
    `;
        let mensaje = {
            from: '"RentCar" <info.grupo.rentcar@gmail.com>', // sender address
            to: email, // list of receivers
            subject: " Notificación", // Subject line
            text: "USUARIO CREADO CORRECTAMENTE ", // plain text body
            html: mensaHTM,
            attachments: [
                {
                    filename:'Logo RC 1.jpg',
                    path:'Logo RC 1.jpg',
                    cid:'Logo RC 1'
                },
                {
                    filename:'Logo Wp.png',
                    path:'Logo Wp.png',
                    cid:'Logo Wp'
                }
            ]
        };

        const info= await transporter.sendMail(mensaje)

        console.log(info);

}
  module.exports = {mandarEmail}