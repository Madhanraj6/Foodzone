<?php
// Retrieve form data
$username = $_POST['username'];
$password = $_POST['password'];

// Create a connection to the MySQL database
$servername = "localhost";
$db_username = "root";
$db_password = "";
$db_name = "foodzone";

$conn = new mysqli($servername, $db_username, $db_password, $db_name);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Insert user data into the database
$sql = "INSERT INTO users (username, password) VALUES ('$username', '$password')";
if ($conn->query($sql) === TRUE) {
    echo "Signup successful!";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Close the database connection
$conn->close();
?>
