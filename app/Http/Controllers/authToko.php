<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
class authToko extends Controller
{
    public function ip(Request $r){
        $c =$r->session()->put('token', bcrypt('asdas'));
        return $r->session()->get('token');
    }

    public function createUser(Request $r){
         $r->validate([
            'name' => 'require',
            'tipe' => 'require',
            'password' => 'require'
         ]);

         return User::create([
             'name'=>$r->name,
             'tipe'=>$r->tipe,
             'token'=>'N',
             'password'=>bcrypt($r->password)
         ]);
    }

    public function login(Request $r){

        $dataUser = User::where('name','=',$r->name);
        
        $exist = $dataUser->exists();
        if ($exist) {
            $get = $dataUser->first();
            $x = Hash::check($r->password, $get->password);
            if ($get->nama == $r->nama && $x) {
                $token = bcrypt($get->nama);
                $r->session()->put('token',$token );
                $dataUser->update([
                    'token'=>$token
                ]);
                return redirect('/dashboard')->with('status', 'Success login');;
            }else {
                return redirect('/')->with('status','user not found');
            }
        }else{
            return redirect('/')->with('status','user not found');
        }
    }
    public function logout(Request $r){
        User::where('token' ,'=', session('token') )->update([
            'token'=>''
        ]);
        $r->session()->forget('token');
        return redirect('/')->with('status','Logout success');
    }
}
