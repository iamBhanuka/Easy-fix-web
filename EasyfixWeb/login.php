<!-- //<?php 
  session_start();
  if (isset($_SESSION["name"])) {
    header('Location: index.php');
  }
?> -->

<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Login</title>
    <link rel="stylesheet" href="css/style1.css">
    <style type="text/css">
      body{
        background-image: url(images/7.jpg);
        background-size: cover;
      }
    </style>
  </head>
  <body>
    <?php include('header.php'); ?>

<form class="log-box" action="project/home.html" method="post">
  <h1>Login</h1>
 <p>ID</p> <input type="text" name="id" id="id" placeholder="EX:0000000000" required="true" autofocus>
  <p>Password</p><input type="password" id="pass"name="pass" placeholder="Password" required="true">
  <input type="submit" name="" value="Login">
  <p>New User? <a href="project/register.html">Create an account</a></p>
</form>
  </body>
</html>
