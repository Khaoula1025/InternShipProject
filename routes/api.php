<?php

use App\Http\Controllers\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


// Public routes
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

// Protected routes
//Route::group(['middleware' => ['auth:sanctum']], function () {
//});

//Route::POST('/signup', [AuthController::class, 'signup']);
//Route::post('/login', [AuthController::class, 'login']);
// Route::group(['middleware' => 'CorsMiddleware'], function () {
//     Route::POST('/signup', [AuthController::class, 'signup']);
// });
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
