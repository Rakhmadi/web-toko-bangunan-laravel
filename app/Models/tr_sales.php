<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class tr_sales extends Model
{
    use HasFactory;
    protected $table = 'transaction_sales';
    protected $fillable = [
        'kode',
        'nama_planggan',
        'alamat',
        'email',
        'kurir',
        'pengiriman'	
    ];
    public $timestamps = true;
}
