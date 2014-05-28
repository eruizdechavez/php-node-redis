<?php
require 'vendor/autoload.php';
require 'redis.php';

$db = new Predis\Client();
$prefix = 'PHPSESSID:';
$sessHandler = new RedisSessionHandler($db, $prefix);
$sessHandler->ttl = ini_get('session.gc_maxlifetime');
session_set_save_handler($sessHandler);

session_start();

$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'POST') {
    doLogin();
} else {
    doHTML();
}

function doLogin() {
    $_SESSION['user'] = $_POST['username'];
    doHTML();
}

function doHTML() {
    if (!isset($_SESSION['user'])) {
        require 'login.html';
        return;
    }

    $m = new Mustache_Engine;
    $template = file_get_contents('index.mustache');
    echo $m->render($template, $_SESSION);
}
