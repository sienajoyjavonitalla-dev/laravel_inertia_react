<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    sleep(2);
    return Inertia::render('Home', ['name' => 'Siena']);
});

Route::inertia('/about', 'About/About');

