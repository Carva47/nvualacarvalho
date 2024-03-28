<?php

$user_name = addslashes($_POST['nome']);
$user_email = addslashes($_POST['email']);
$user_contacto = addslashes($_POST['tel']);
$user_sms = addslashes($_POST['mensagem']);

$my_email = "nvualacanvula@gmail.com";
$assunto =addcslashes($_POST['assunto']);

$body = "Nome: ".$user_name. "\n" . "Email: ".$user_email. "\n" . "Contacto: ".$user_contacto. "\n" . "SMS: ".$user_sms;
$cabeca = "From: ".$user_email. "\n" . "Reply-To: ".$user_email."\n" . "X-Mailer: PHP/" .phpversion();

if(mail($my_email, $assunto, $body, $cabeca)){
    echo "<div style='background-color: #c7f0c9; padding: 10px; border: 1px solid #4CAF50;'>";
    echo "Email enviado com sucesso!";
    echo "<br>";
    echo "location.href = '../index.html'";
    echo "</div>";
} else {
    echo "<div style='background-color: #f7c6c5; padding: 10px; border: 1px solid #f44336;'>";
    echo "Falha ao enviar o email";
    echo "</div>";
}

?>