<?php 

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';


$tel = $_POST['user_tel'];
$email = $_POST['user_email'];
$type = $_POST['siteType'];
$design = $_POST['siteDesign'];
$adapt = $_POST['siteAdapt'];
$terms = $_POST['siteTerms'];
$price = $_POST['sitePrice'];

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.mail.ru';  																							// Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'kirill02shklyaev@mail.ru'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = 'rsCCYVMAbU54nWnNFtxx'; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров

$mail->setFrom('kirill02shklyaev@mail.ru'); // от кого будет уходить письмо?
$mail->addAddress('kirill02clash@mail.ru');     // Кому будет уходить письмо 
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Запрос на создание сайта';
$mail->Body    = ''. 'Вам письмо от ' .$tel ." " .$email ."<br>". "Тип сайта >> ". $type."<br>". "Дизайн >> ". $design ."<br>". "Адаптивность >> ". $adapt ."<br>". "Сроки >> ". $terms ."<br>". "Стоимость >> ". $price;
$mail->AltBody = '';

if(!$mail->send()) {
    return false;
} else {
    return true;
}
?>