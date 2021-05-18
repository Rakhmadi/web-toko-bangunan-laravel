<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\brand;
class brandController extends Controller
{  
    public function show(){
        $x = brand::all();
        return view('brand',array('data'=>$x));
    }

    public function create(Request $r){
        $f = $r->validate([
            'nama' => 'required',
            'cat' => 'required'
        ]);
        brand::create([
            'nama'=>$r->nama,
            'cat'=>$r->cat
        ]);

        return back()->with('success', 'Brand created successfully.');
    }
    public function update(Request $r,$id){
        $f = $r->validate([
            'nama' => 'required',
            'cat' => 'required'
        ]);
        $x = brand::where('id','=',$id)->first();
        $x->update([
            'nama'=>$r->nama,
            'cat'=>$r->cat
        ]);
        return redirect('/Brand')->with('success', 'Brand Updated successfully.');
    }
    public function updateview($id){
       $x = brand::where('id','=',$id)->first();
       return view('brandUpdate',array('data'=>$x));

    }
    public function del($id){
        $x = brand::where('id','=',$id)->first();
        $x->delete();
        return redirect('/Brand')->with('success', 'Brand Deleted successfully.');
    }
    
}
