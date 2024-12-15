<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Enable error reporting for debugging
ini_set('display_errors', 1);
error_reporting(E_ALL);

// Function to validate reCAPTCHA
function validateRecaptcha($token) {
    $secret = 'YOUR_RECAPTCHA_SECRET_KEY';
    $url = 'https://www.google.com/recaptcha/api/siteverify';
    
    $data = [
        'secret' => $secret,
        'response' => $token
    ];
    
    $options = [
        'http' => [
            'header' => "Content-type: application/x-www-form-urlencoded\r\n",
            'method' => 'POST',
            'content' => http_build_query($data)
        ]
    ];
    
    $context = stream_context_create($options);
    $response = file_get_contents($url, false, $context);
    $result = json_decode($response);
    
    return $result->success;
}

// Handle POST request
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get JSON data
    $json = file_get_contents('php://input');
    $data = json_decode($json);
    
    // Validate required fields
    if (!isset($data->name) || !isset($data->email) || !isset($data->message) || !isset($data->recaptchaToken)) {
        http_response_code(400);
        echo json_encode(['error' => 'Alle Felder müssen ausgefüllt werden']);
        exit;
    }
    
    // Validate reCAPTCHA
    if (!validateRecaptcha($data->recaptchaToken)) {
        http_response_code(400);
        echo json_encode(['error' => 'reCAPTCHA Validierung fehlgeschlagen']);
        exit;
    }
    
    // Prepare email
    $to = 'office@dcms.at';
    $subject = 'Neue Kontaktanfrage von ' . htmlspecialchars($data->name);
    $message = "Name: " . htmlspecialchars($data->name) . "\n";
    $message .= "Email: " . htmlspecialchars($data->email) . "\n\n";
    $message .= "Nachricht:\n" . htmlspecialchars($data->message);
    
    $headers = 'From: ' . htmlspecialchars($data->email) . "\r\n" .
        'Reply-To: ' . htmlspecialchars($data->email) . "\r\n" .
        'X-Mailer: PHP/' . phpversion();
    
    // Send email
    if (mail($to, $subject, $message, $headers)) {
        echo json_encode(['success' => true]);
    } else {
        http_response_code(500);
        echo json_encode(['error' => 'Email konnte nicht gesendet werden']);
    }
} else {
    http_response_code(405);
    echo json_encode(['error' => 'Nur POST Anfragen sind erlaubt']);
}
