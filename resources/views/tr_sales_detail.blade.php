@extends('welcome')
@section('content')
@if($msg = session('success'))
<div class="alert border-0 alert-warning alert-dismissible fade show" role="alert">
   {{$msg}}
   <button type="button" class="btn-close shadow-none btn-sm" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
@endif
    <div class="card border-0 shadow-sm py-2">
        <div class="ms-4">
            <h4 class="mb-3">Create Transaction Detail</h4>
            <div class="row">
              <div class="col">Nama pelanggan</div>
              <div class="col">:</div>
              <div class="col">{{$data->nama_planggan}}</div>
            </div>
            <div class="row">
              <div class="col">Alamat</div>
              <div class="col">:</div>
              <div class="col">{{$data->alamat}}</div>
            </div>
            <div class="row">
              <div class="col">Email</div>
              <div class="col">:</div>
              <div class="col">{{$data->email}}</div>
            </div>
        </div>
    </div>

    <div class="card border-0 shadow-sm p-2 mt-4">
      <div class="ms-3 my-3">
          <h4>Detail List</h4>
          <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Nama Product</th>
                  <th scope="col">Kode</th>
                  <th scope="col">Harga</th>
                  <th scope="col">Nama Brand</th>
                  <th scope="col">Category Brand</th>
                  <th scope="col">Qty</th>
                  <th scope="col">Total</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                @php
                    $xn=1;
                @endphp
               @foreach ($l as $item)
                   <tr>
                     <td>{{$xn++}}</td>
                     <td>{{$item->nama}}</td>
                     <td>{{$item->kode}}</td>
                     <td>Rp. {{$item->harga}}</td>
                     <td>{{$item->brand_name}}</td>
                     <td>{{$item->brand_cat}}</td>
                     <td>{{$item->quantity}}</td>
                     <td>Rp. {{$item->harga * $item->quantity}}</td>
                     <td>
                       <a href="/deleteDetailList/{{$item->id}}/pelanggan/{{$data->id}}" class="btn btn-sm btn-danger shadow-none"><i class="mdi mdi-delete"></i></a>
                     </td>
                   </tr>
               @endforeach
                <form action="/createDetailList/{{$data->id}}" method="POST">
                  @csrf
                  <tr>
                    <td></td>
                    <td>
                      <input type="text"  autocomplete="off" class="form-control form-control-sm border-1 shadow-none" list="datalistOptions" id="exampleDataList" placeholder="Type to search..." name="nama" required>
                      <datalist id="datalistOptions">
                        @foreach ($dataProduct as $item)
                            <option value="{{$item->nama}}">Stock : {{$item->stock}}</option>
                        @endforeach
                      </datalist>    
                    </td>
                    <td><input type="number" class="form-control form-control-sm border-1 shadow-none" name="qty" require></td>
                    <td><input type="submit" class="btn btn-sm btn-primary" value="Add"></td>
                    <td></td>
                    <td></td>
                    <td>Total Qty: {{$totals->total_qty}}</td>
                    <td>Total Harga: {{$totals->totals}}</td>
                  </tr>
                </form>
              </tbody>
            </table>
      </div>
     </div>
@endsection