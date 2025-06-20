<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {


    /**
     * ==============================
     *           Category
     * ==============================
    */
    Route::get('/category', [CategoryController::class, 'category'])->name('category');
    Route::get('/getCategories', [CategoryController::class, 'getCategories'])->name('getCategories');
    Route::post('/category-store', [CategoryController::class, 'categoryStore'])->name('category-store');
    
    /**
     * ==============================
     *           Product
     * ==============================
    */
    Route::get('/product-listing', [ProductController::class, 'productListing'])->name('product-listing');
    Route::get('/create-product', [ProductController::class, 'createProduct'])->name('create-product');
    Route::post('/product-store', [ProductController::class, 'productStore'])->name('product-store');
    

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
