<?php
$errorMSG = "";

// NAME
if (empty($_POST["name"])) {
    $errorMSG = "Please enter your Name.";
} else {
    $name = $_POST["name"];
}

// EMAIL
if (empty($_POST["email"])) {
    $errorMSG .= "Please enter your Email Address.";
} else {
    $email = $_POST["email"];
}

// Phone Number
if (empty($_POST["phone_number"])) {
    $errorMSG = "Please enter your Phone Number.";
} else {
    $phone_number = $_POST["phone_number"];
}

// Subject
if (empty($_POST["subject"])) {
    $errorMSG = "Please enter the Subject.";
} else {
    $subject = $_POST["subject"];
}

// MESSAGE
if (empty($_POST["message"])) {
    $errorMSG .= "Please enter your Message.";
} else {
    $message = $_POST["message"];
}

//Set the Receiver Email ID and the Subject Here
$EmailTo = "receiver@gmail.com";
$Subject = "An Enquiry From Pretty";

// prepare email body text
$Body = "";
$Body .= "Name: ";
$Body .= $name;
$Body .= "\n";
$Body .= "Email: ";
$Body .= $email;
$Body .= "\n";
$Body .= "Phone Number: ";
$Body .= $phone_number;
$Body .= "\n";
$Body .= "Subject: ";
$Body .= $subject;
$Body .= "\n";
$Body .= "Message: ";
$Body .= $message;
$Body .= "\n";

//Set the From Email Address
$success = mail($EmailTo, $Subject, $Body, "From:contact@yourdomain.com");

// redirect to success page
if ($success && $errorMSG == ""){
   echo "success";
}else{
    if($errorMSG == ""){
		echo "Could not send mail!";
    } else {
		echo $errorMSG;
    }
}

?>