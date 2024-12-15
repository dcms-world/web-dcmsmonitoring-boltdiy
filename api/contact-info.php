<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET');

// Add a small delay to simulate network latency and make it harder for bots
usleep(rand(100000, 500000));

// Contact information
$contactInfo = [
    'name' => 'Johann Zehner',
    'email' => 'office@dcms.at'
];

// Encode and output the contact information
echo json_encode($contactInfo);
