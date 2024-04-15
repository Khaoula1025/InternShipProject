<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Data_entries extends Model
{
    use HasFactory;
    protected $fillable = [
        'nom', 'prenom', 'maitre_d_ouvrage', 'telephone', 'cin', 'references', 'image', 'date_debut', 'date_fin', 'user_id'
    ];

    public function user()
    {
        return $this->belongsTo(user::class);
    }
}
