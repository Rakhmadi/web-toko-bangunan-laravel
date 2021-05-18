<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\authToko;
use App\Http\Controllers\brandController;
use App\Http\Controllers\productController;
use App\Http\Controllers\tr_salesController;
Route::get('/', function(){
    return view('login');
});

Route::post('/login', [authToko::class , 'login']);
Route::middleware(['auth'])->group(function () {
    //brand Product
    Route::get('/Brand',[brandController::class, 'show']);
    Route::post('/createBrand',[brandController::class, 'create']);
    Route::post('/updateBrand/{id}',[brandController::class, 'update']);
    Route::get('/updateBrand/{id}',[brandController::class, 'updateview']);
    Route::get('/delBrand/{id}',[brandController::class, 'del']);
    //product
    Route::get('/createProduct',[productController::class , 'show']);
    Route::get('/Product',[productController::class , 'showData']);
    Route::post('/saveProduct',[productController::class, 'saveProduct']);
    Route::get('/delProduct/{id}',[productController::class, 'del']);
    Route::get('/updateProduct/{id}',[productController::class, 'viewProduct']);
    Route::post('/updateProduct/{id}',[productController::class, 'updateProduct']);
    Route::get('/ImageProduct/{foto}',[productController::class, 'showfoto']);
    //transaction_sales
    Route::get('/sales',[tr_salesController::class,'createView']);
    Route::get('/salesView/{id}',[tr_salesController::class,'viewDetails']);
    Route::post('/salesCr',[tr_salesController::class,'createTR']);
    Route::get('/getProductData',[tr_salesController::class,'productList']);
    Route::post('/createDetailList/{idtr}',[tr_salesController::class,'createDetailList']);
    Route::get('/deleteDetailList/{idtr}/pelanggan/{plangganID}',[tr_salesController::class,'deleteDetailList']);
    Route::get("/DataOrderSales",[tr_salesController::class,''])
    //
    Route::get('/dashboard', function(){
        return view('welcome');
    });
    Route::get('/logout',[authToko::class , 'logout']);
});

Route::get('/t', function () {
    return csrf_token();
});
