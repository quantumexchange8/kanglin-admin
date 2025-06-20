<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller
{
    
    public function productListing()
    {

        return Inertia::render('Product/ProductListing');
    }

    public function createProduct()
    {

        return Inertia::render('Product/CreateProduct');
    }

    public function productStore(Request $request)
    {

        
        $validate = $request->validate([
            'name' => 'required|string|max:255',
            'category_id' => 'required|exists:categories,id',
            'product_code' => 'nullable|string',
            'product_price' => 'required|numeric|min:0',
            'product_pv' => 'required|numeric|min:0',
            'product_max_kp' => 'required|numeric|min:0',
            'stock' => 'required|numeric|min:0',
            'description' => 'required',
            'instruction_desciption' => 'required',
            'product_feature' => 'required',
            'images_thumbnail' => 'file|image|max:2048',
            'images' => 'required|array|min:1',
            
        ]);

        $product = Product::create([
            'category_id' => $request->category_id,
            'name' => $request->name,
            'product_code' => $request->product_code,
            'product_price' => $request->product_price,
            'product_pv' => $request->product_pv,
            'product_max_kp' => $request->product_max_kp,
            'description' => $request->description,
            'product_feature' => $request->product_feature,
            'instruction_desciption' => $request->instruction_desciption,
            'stock' => $request->stock,
            'status' => 'active'
        ]);


        return redirect()->back();
    }
}
