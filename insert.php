<?php
    $con = mysqli_connect('51.83.52.200','root','');

    if(!con) {
        echo 'not connected';
    }

    if(!mysqli_select_db($con,'venevenc_wp1')) {
        echo 'no selected';
    }

    $Name = $_POST('username');
    $Mail = $_POST('email');
    $Phone = $_POST('phone');
    $Message = $_POST('message');
    
    $sql = "INSERT INTO person (Name, Mail, Phone, Message) VALUES ('$Name', '$Email', '$Phone','$Message')";

    if(!mysqli_query($con,$sql)) {
        echo 'not inserted';
    } else {
        echo 'inserted';
    }


    header
?>