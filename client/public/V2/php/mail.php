
<?php

    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $mail = $_POST['mail'];
    $content = $_POST['content'];


    $to      = 'pierregodino.contact@yahoo.com';
    $subject = $name;
    $message = "<div style='background:#272727; padding: 50px; color: #ecf0f1;height: 600px;'>
                    <h1 style='text-align: center;margin-bottom: 50px'>DEMANDE DE DEVIS</h1>
                     <hr style='border-color: #c0392b'>
                     <p style='text-align: center;font-size: 1.5rem;'>" . $content . "</p>
                     <hr style='border-color: #c0392b'>
                     <p style='text-align: center;'>Numero de telephone: " . $phone . "</p>
                     <p style='text-align: center;'>Email: " . $mail . "</p>
                </div>";
    $headers .= 'From: <site@pierre-godino.com>' . "\r\n"; 
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
    $headers .= "Disposition-Notification-To: $from  \n";
    $headers .= "X-Priority: 1  \n";
    $headers .= "X-MSMail-Priority: High \n";

    
    mail($to, $subject, $message, $headers);
?>
