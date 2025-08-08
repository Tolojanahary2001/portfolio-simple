<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nom     = htmlspecialchars($_POST['nom']);
    $prenom  = htmlspecialchars($_POST['prenom']);
    $email   = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $message = htmlspecialchars($_POST['message']);

    $to      = "tolotra.rasamoelilala@gmail.com"; // Mets ton vrai e-mail ici
    $subject = "📬 Nouveau message de ton portfolio";
    $body    = "Nom: $nom\nPrénom: $prenom\nEmail: $email\n\nMessage:\n$message";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        header("Location: merci.html"); // redirection si tout va bien
        exit();
    } else {
        echo "Erreur : le message n'a pas pu être envoyé.";
    }
} else {
    echo "Méthode non autorisée.";
}
?>
