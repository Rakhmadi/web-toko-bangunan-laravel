@extends('welcome')
@section('content')
@if($msg = session('success'))
<div class="alert border-0 alert-warning alert-dismissible fade show" role="alert">
   {{$msg}}
   <button type="button" class="btn-close shadow-none btn-sm" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
@endif
   <div class="card p-2 border-0 shadow-sm">
       <div class="ms-3 my-3">
            <h4 class="">Create Brand</h4>
            <form action="/createBrand" method="post" class="mt-3">
                @csrf
               <div class="col-6">
                 <label for="" class="form-lable">Name Brand</label>
                 <input type="text" class="form-control shadow-none mb-2" name="nama" required>
                 <label for="" class="form-lable">Brand Category</label>
                 <input type="text" class="form-control shadow-none mb-2" name="cat" required>
                 <input type="submit" value="Save" class="btn btn-primary">
               </div>
            </form>
       </div>
   </div>
   <div class="card border-0 shadow-sm p-2 mt-4">
    <div class="ms-3 my-3">
        <h4>Data Brand</h4>
        <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name Brand</th>
                <th scope="col">Brand category</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              @foreach ($data as $item)
                  <tr>
                      <td></td>
                      <td>{{$item->nama}}</td>
                      <td>{{$item->cat}}</td>
                      <td>
                          <a href="/updateBrand/{{$item->id}}" class="btn btn-sm btn-warning shadow-none">Update</a>
                          <a href="/delBrand/{{$item->id}}" class="btn btn-sm btn-danger shadow-none">Delete</a>
                      </td>
                  </tr>
              @endforeach
            </tbody>
          </table>
    </div>
   </div>
@endsection
