<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CategoryController extends Controller
{
    public function category()
    {

        return Inertia::render('Category/Category');
    }   

    public function categoryStore(Request $request) 
    {

        $validate = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
        ]);

        $category = Category::create([
            'name' => $request->name,
            'description' => $request->description,
            'status' => 'active',
        ]);

        return redirect()->back();
    }

    public function getCategories()
    {

        $categories = Category::where('status', 'active')->get();

        return response()->json($categories);
    }
}
