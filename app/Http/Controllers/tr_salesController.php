<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\product;
use App\Models\brand;
use App\Models\tr_sales;
use App\Models\tr_detai_sales;
use Illuminate\Support\Str;
use DB;
class tr_salesController extends Controller
{
    public function createView(){
        return view('tr_salesC');
    }
    public function viewDetails($id){
        $y = product::orderBy('created_at','desc')->get();
        $list = tr_detai_sales::leftJoin('product','transaction_sales_detail.id_product','=','product.id')
        ->leftJoin('brand','brand.id','=','product.id_brand')
        ->select(
            'transaction_sales_detail.id as id',
            'id_transaction',
            'id_product',
            'quantity',
            'product.nama',
            'product.kode',
            'product.harga',
            'product.stock',
            'product.id_brand',
            'brand.nama as brand_name',
            'brand.cat as brand_cat',
            "transaction_sales_detail.created_at as created_at",
            "transaction_sales_detail.updated_at as updated_at",
        )->get();
        $totals = tr_detai_sales::leftJoin('product','transaction_sales_detail.id_product','=','product.id')
        ->leftJoin('brand','brand.id','=','product.id_brand')
        ->select(DB::raw('SUM(product.harga * quantity) as totals'),
        DB::raw('SUM(quantity) as total_qty'))->first();
        // dd($totals);
        $x = tr_sales::where('id','=',$id)->first();
        return view('tr_sales_detail',array('data'=>$x,'dataProduct'=>$y,'l'=>$list,'totals'=>$totals));
    }
    public function createTR(Request $r){
        $r->validate([
            'nama_planggan'=>'required',
            'alamat'=>'required',
            'email'=>'required',
        ]);
        $xc = tr_sales::create([
            'kode' => Str::random(5),
            'nama_planggan' => $r->nama_planggan,
            'alamat' => $r->alamat,
            'email' => $r->email,
            'kurir' => '',
            'pengiriman' => 0
        ]);
        $ids = tr_sales::latest('created_at')->first();
        return redirect("/salesView"."/".$ids->id)->with('success', 'Product Created successfully.');
    }
    public function productList(){
        return product::orderBy('created_at','desc')->get();
    }
    public function createDetailList(Request $r,$idtr){
        $dp = product::where('nama','=',$r->nama)->first();
        if($r->qty > $dp->stock){
            return redirect("/salesView"."/".$idtr)->with('success', 'Stok '.$dp->nama. ' hanya ' .$dp->stock);
        }elseif ($dp->stock == 0) {
            return redirect("/salesView"."/".$idtr)->with('success', 'Stok '.$dp->nama. ' Kosong');
        }else{
            $dp->update([
                'stock' => $dp->stock - $r->qty
            ]);
            tr_detai_sales::create([
                'id_transaction' =>$idtr,
                'id_product' =>$dp->id,
                'quantity' =>$r->qty,
            ]);
            return redirect("/salesView"."/".$idtr)->with('success', 'List Created successfully.');
        }
    }
    public function deleteDetailList($idtr,$plangganID){
        $x = tr_detai_sales::where('id','=',$idtr)->first();
        $y = product::where('id','=',$x->id_product)->first();
        $y->update([
            'stock' => $y->stock + $x->quantity
        ]);
        $x->delete();
        return redirect("/salesView"."/".$plangganID)->with('success', 'List Deleted successfully.');
    }
    public function getDataOrderList(){
        tr_sales::leftJoin('transaction_sales_detail','transaction_sales.id','=','')
    }
}
