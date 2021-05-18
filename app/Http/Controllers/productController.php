<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\product;
use App\Models\brand;
use Illuminate\Support\Str;
use File;
class productController extends Controller
{
    public function show(){
       $data = product::all();
       $cat = brand::all();
       return view('product',array('datacat'=>$cat));
    }
    public function showData(){
        $x = product::leftJoin('brand','product.id_brand','=','brand.id')
        ->select(
        'product.id',
        'product.nama',
        'desc',
        'foto',
        'harga',
        'kode',
        'stock',
        'brand.nama as brand_name',
        'brand.cat')->get();
        return view('prdkview',array('data'=>$x));
    }
    public function del($id){
        $x = product::where('id','=',$id)->first();
        File::delete(public_path('uploads').'/'.$x->foto);
        $x->delete();
        return redirect('/Product')->with('success', 'Product Deleted successfully.');

    }
    public function saveProduct(Request $r){
        $r->validate([
            'nama'=>'required',
            'desc'=>'required',
            'foto'=>'required',
            'harga'=>'required',
            'stock'=>'required',
            'brand'=>'required'
        ]);
        $fname = time().'_'.Str::random(5).'_.'.$r->foto->extension();
        $r->foto->move(public_path('uploads'),$fname);
        product::create([
            'nama' =>$r->nama ,
            'kode' =>  Str::random(5),
            'desc' =>$r->desc ,
            'foto' =>$fname ,
            'harga' =>$r->harga ,
            'stock' =>$r->stock ,
            'id_brand' =>$r->brand 
        ]);
        return redirect('/Product')->with('success', 'Product Created successfully.');
    }
    public function updateProduct(Request $r, $id){
        $x = product::where('id','=',$id)->first();
        $x->update([
            'nama' =>$r->nama ,
            'desc' =>$r->desc ,
            'harga' =>$r->harga ,
            'stock' =>$r->stock ,
            'id_brand' =>$r->brand 
        ]);
        
        if ($r->foto != null) {
            File::delete(public_path('uploads').'/'.$x->foto);
            $fname = time().'_'.Str::random(5).'_.'.$r->foto->extension();
            $r->foto->move(public_path('uploads'),$fname);
            $x->update([
                'foto' =>$fname ,
            ]);
        }
        return redirect('/Product')->with('success', 'Product Updates successfully.');
    }
    public function viewProduct($id){
        $cat = brand::all();
        $x = product::where('id','=',$id)->first();
        $x->leftJoin('brand','product.id_brand','=','brand.id')
        ->select(
        'product.id',
        'product.nama',
        'desc',
        'foto',
        'harga',
        'kode',
        'stock',
        'brand.nama as brand_name',
        'brand.cat')->get();
        return view('product_update',array('data'=>$x,'datacat'=>$cat));
    }
    public function showfoto($foto){
        return response()->file(public_path('uploads').'/'.$foto);
    }
}
