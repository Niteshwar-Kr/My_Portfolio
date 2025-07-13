<?php
$host = "sql311.infinityfree.com"; // Your Host Name
$user = "if0_39459161";           // Your Username
$pass = "l3CxDMnkv1W3j";    // Your InfinityFree hosting password
$db   = "if0_39459161_NitPortfolio"; // Full database name

$conn = new mysqli($host, $user, $pass, $db);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
?>
