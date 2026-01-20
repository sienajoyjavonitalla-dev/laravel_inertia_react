<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostController;
use Inertia\Inertia;

// Route::get('/', function () {
//     sleep(2);
//     return Inertia::render('Home', ['name' => 'Siena']);
// });

Route::inertia('/about', 'About/About');

Route::get('/', [PostController::class, 'index'])->name('home');
Route::resource('posts', PostController::class)->except('index');

