@extends('welcome')
@section('content')
@if($msg = session('success'))
<div class="alert border-0 alert-warning alert-dismissible fade show" role="alert">
   {{$msg}}
   <button type="button" class="btn-close shadow-none btn-sm" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
@endif
<div class="card border-0 shadow-sm p-2 mt-4">
    <div class="ms-3 my-3">
        <h4>Data Product</h4>
        <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name Product</th>
                <th scope="col">Desc</th>
                <th scope="col">kode</th>
                <th scope="col">harga</th>
                <th scope="col">stock</th>
                <th scope="col">Name Brand</th>
                <th scope="col">Brand Category</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              @foreach ($data as $item)
                  <tr>
                      <td></td>
                      <td>{{$item->nama}}</td>
                      <td>{{$item->desc}}</td>
                      <td>{{$item->kode}}</td>
                      <td>Rp. {{$item->harga}}</td>
                      <td>{{$item->stock}}</td>
                      <td>{{$item->brand_name}}</td>
                      <td>{{$item->cat}}</td>
                      <td>
                          <a href="/updateProduct/{{$item->id}}" class="btn btn-sm btn-warning shadow-none">Update</a>
                          <a href="/delProduct/{{$item->id}}" class="btn btn-sm btn-danger shadow-none">Delete</a>
                      </td>
                  </tr>
              @endforeach
            </tbody>
          </table>
    </div>
   </div>@endsection