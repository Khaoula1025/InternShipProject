<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;

class CheckRole
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next, $role)
    {

        if (!Auth::check()) {
            // Redirect to login if not authenticated
            return redirect('login');
        }

        $user = Auth::user();

        if ($user->role == $role) {
            // If the user's role matches the required role, proceed
            return $next($request);
        }

        // If the user's role does not match, redirect with an error message
        return redirect('home')->with('error', "You don't have access to this page.");
    }
}
