<?php

declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode([
        'ok' => false,
        'message' => 'Method not allowed.',
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

$configPath = '/etc/aspac2026/telegram.env';
$config = is_file($configPath) ? parse_ini_file($configPath, false, INI_SCANNER_TYPED) : false;

if ($config === false) {
    http_response_code(500);
    echo json_encode([
        'ok' => false,
        'message' => 'Hệ thống đang hoàn tất cấu hình nhận lead. Vui lòng thử lại sau ít phút.',
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

$botToken = (string) ($config['TELEGRAM_BOT_TOKEN'] ?? '');
$chatId = (string) ($config['TELEGRAM_CHAT_ID'] ?? '');

if ($botToken === '' || $chatId === '') {
    http_response_code(500);
    echo json_encode([
        'ok' => false,
        'message' => 'Hệ thống đang hoàn tất cấu hình nhận lead. Vui lòng thử lại sau ít phút.',
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

$payload = json_decode(file_get_contents('php://input') ?: '', true);

if (!is_array($payload)) {
    http_response_code(400);
    echo json_encode([
        'ok' => false,
        'message' => 'Invalid request body.',
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

$name = trim((string) ($payload['name'] ?? ''));
$phone = trim((string) ($payload['phone'] ?? ''));
$email = trim((string) ($payload['email'] ?? ''));
$package = trim((string) ($payload['package'] ?? ''));
$timestamp = trim((string) ($payload['timestamp'] ?? ''));

if ($name === '' || $phone === '') {
    http_response_code(422);
    echo json_encode([
        'ok' => false,
        'message' => 'Vui lòng điền Tên và Số điện thoại.',
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

$escape = static function (string $value): string {
    return htmlspecialchars($value, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
};

$lines = [
    '🎯 <b>LEAD MỚI - VIETNAM NIGHT 2026</b>',
    '',
    '- <b>Tên:</b> ' . $escape($name),
    '- <b>SĐT:</b> ' . $escape($phone),
    '- <b>Email:</b> ' . $escape($email !== '' ? $email : 'Không có'),
    '- <b>Gói quan tâm:</b> ' . $escape($package !== '' ? $package : 'Chưa chọn'),
    '- <b>Thời gian:</b> ' . $escape($timestamp !== '' ? $timestamp : date('d/m/Y H:i:s')),
    '- <b>Nguồn:</b> aspac2026.jci.vn',
];

$telegramBody = json_encode([
    'chat_id' => $chatId,
    'text' => implode("\n", $lines),
    'parse_mode' => 'HTML',
], JSON_UNESCAPED_UNICODE);

if ($telegramBody === false) {
    http_response_code(500);
    echo json_encode([
        'ok' => false,
        'message' => 'Failed to encode Telegram payload.',
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

$context = stream_context_create([
    'http' => [
        'method' => 'POST',
        'header' => implode("\r\n", [
            'Content-Type: application/json',
            'Content-Length: ' . strlen($telegramBody),
        ]),
        'content' => $telegramBody,
        'ignore_errors' => true,
        'timeout' => 15,
    ],
]);

$telegramUrl = 'https://api.telegram.org/bot' . $botToken . '/sendMessage';
$result = @file_get_contents($telegramUrl, false, $context);
$statusLine = $http_response_header[0] ?? '';
$statusCode = preg_match('/\s(\d{3})\s/', $statusLine, $matches) ? (int) $matches[1] : 500;
$telegramResponse = is_string($result) ? json_decode($result, true) : null;

if ($statusCode >= 400 || !is_array($telegramResponse) || !($telegramResponse['ok'] ?? false)) {
    http_response_code(502);
    echo json_encode([
        'ok' => false,
        'message' => 'Không gửi được thông tin tới Telegram.',
        'telegram_status' => $statusCode,
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

echo json_encode([
    'ok' => true,
    'message' => 'Lead has been sent to Telegram.',
], JSON_UNESCAPED_UNICODE);
