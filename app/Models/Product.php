<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class Product extends Model implements HasMedia
{

    use InteractsWithMedia;

    protected $fillable = [
        'category_id',
        'name',
        'product_code',
        'product_price',
        'product_pv',
        'product_max_kp',
        'description',
        'product_feature',
        'instruction_desciption',
        'stock',
        'status',
    ];
}
