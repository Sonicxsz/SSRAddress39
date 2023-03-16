
	<?php
	/*##########Script Information#########
	  # Purpose: Send mail Using PHPMailer#
	  #          & Gmail SMTP Server 	  #
	  # Created: 24-11-2019 			  #
	  #	Author : Hafiz Haider			  #
	  # Version: 1.0					  #
	  # Website: www.BroExperts.com 	  #
	  #####################################*/
	
	//Include required PHPMailer files
		require 'includes/PHPMailer.php';
		require 'includes/SMTP.php';
		require 'includes/Exception.php';
	//Define name spaces
		use PHPMailer\PHPMailer\PHPMailer;
		use PHPMailer\PHPMailer\SMTP;
		use PHPMailer\PHPMailer\Exception;
	//Create instance of PHPMailer
		$mail = new PHPMailer();
		$mail->CharSet = 'utf-8';
	//Set mailer to use smtp
		$mail->isSMTP();
	//Define smtp host
		$mail->Host = "smtp.gmail.com";
	//Enable smtp authentication
		$mail->SMTPAuth = true;
	//Set smtp encryption type (ssl/tls)
		$mail->SMTPSecure = "tls";
	//Port to connect smtp
		$mail->Port = "587";
		$mail->Username = "leadeer5@gmail.com";
		//Set gmail password
			$mail->Password = "jkvumpvmrbbevebp";
		//Email subject
			$mail->Subject = "Бронирование столика";
		//Set sender email
			$mail->setFrom('leadeer5@gmail.com');
	//Enable HTML
		$mail->isHTML(true);
		$name = $_POST['user_name'];
		$phone = $_POST['user_phone'];
		$comment = $_POST['user_comment'];
        $date = $_POST['user_date'];
        $time = $_POST['user_time'];
        $count = $_POST['user_count'];
        

      
	//Email body


    $mail->Body = '<span style="font-size: 20px;">Имя</span>: <span style="color: red; font-size: 22px;">'.$name. '</span> <br> 
    <span style="font-size: 20px;">Телефон</span>: <span style="color: red; font-size: 22px;">'.$phone. '</span> <br> 
    <span style="font-size: 20px;">Дата и время</span>: <span style="color: red; font-size: 22px;">'.$date.' : '.$time. '</span> <br>
    <span style="font-size: 20px;">Колличество мест</span>: <span style="color: red; font-size: 22px;">'.$count. '</span> <br> 
    <span style="font-size: 20px;"> Комментарий</span>: <span style="color: red; font-size: 20px;">'.$comment. '</span> <br>
    <span style="font-size: 22px;"> Перезвоните клиенту для подтверждения </span>';
	//Add recipient
		$mail->addAddress('Addrest.39@mail.ru');
	//Finally send email
		if ( $mail->send() ) {
			echo "Email Sent..!";
		}else{
			echo "Message could not be sent. Mailer Error: "{$mail->ErrorInfo};
		}
	//Closing smtp connection
		$mail->smtpClose();
	