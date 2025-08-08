<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Test Mail</title>
</head>
<body>
    <?php
    $destinataire = "tolotra.rasamoelilala@gmail.com";
    $sujet = "Test Mail depuis XAMPP";
    $message = "Ceci est un test d'envoi d'email via XAMPP et Gmail.";
    $headers = "From: tolotra.rasamoelilala@gmail.com\r\n";

    if (mail($destinataire, $sujet, $message, $headers)) {
        echo "Email envoyé avec succès.";
    } else {
        echo "Échec de l'envoi de l'email.";
    }
    ?>
</body>
</html>
