<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class tr_detai_sales extends Model
{
    use HasFactory;
    protected $table = 'transaction_sales_detail';
    protected $fillable = [
        'id_transaction',
        'id_product',
        'quantity',
    ];
}
