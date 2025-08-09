const functions = require("firebase-functions");
const nodemailer = require("nodemailer");
const cors = require("cors")({ origin: true });

// Configure your email transporter
let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "votre.email@gmail.com", // ton email Gmail
    pass: "motdepasse_ou_motdepasse_application", // mot de passe application
  },
});

exports.sendEmail = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    if (req.method !== "POST") {
      return res.status(405).send("Méthode non autorisée");
    }

    const nom = req.body.nom;
    const prenom = req.body.prenom;
    const email = req.body.email;
    const message = req.body.message;

    const mailOptions = {
      from: email,
      to: "tolotra.rasamoelilala@gmail.com", // ton email de réception
      subject: "📬 Nouveau message de ton portfolio",
      text: `Nom: ${nom}\nPrénom: ${prenom}\nEmail: ${email}\n\nMessage:\n${message}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error(error);
        return res.status(500).send("Erreur : le message n'a pas pu être envoyé.");
      }
      return res.status(200).send("Message envoyé avec succès");
    });
  });
});
