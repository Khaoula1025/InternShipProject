<?php

namespace App\Http\Controllers\Api;

use Laravel\Passport\HasApiTokens;

use App\Http\Controllers\Controller;
use App\Http\Requests\loginRequest;
use App\Http\Requests\signupRequest;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function login(loginRequest $request)
    {
        $credentials = $request->validate();
        if (!Auth::attempt($credentials)) {
            return response([
                'message' => 'provided email or address or password is incorrect'
            ]);
        }
        /** @var User $user  */
        $user = Auth::user();
        $token = $user->createToken('main');
        return response(compact('user', 'token'));
    }
    public function signup(signupRequest $request)
    {
        $data = $request->validated();
        /** @var \App\Models\User $user */
        $user = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => Hash::make($data['password']),
        ]);

        // Generate token
        $token = $user->createToken('Token Name')->accessToken; // Use createToken('Token Name')->accessToken

        // Return response with user and token
        return response()->json([
            'user' => $user,
            'token' => $token,
       ], 201);
     }
    // public function logout(Request $request)
    // {
    //     /** @var User $user  */
    //     $user = $request->user();
    //     $user->currentAccesToken()->delete();
    //     return response('', 204);
    // }
}
