@extends('welcome')
@section('content')
<div class="card p-2 border-0 shadow-sm">
    <div class="ms-3 my-3">
         <h4 class="">Update Brand</h4>
         <form action="/updateBrand/{{$data->id}}" method="post" class="mt-3">
             @csrf
            <div class="col-6">
              <label for="" class="form-lable">Name Brand</label>
              <input type="text" class="form-control shadow-none mb-2" name="nama" value="{{$data->nama}}" required>
              <label for="" class="form-lable">Brand Category</label>
              <input type="text" class="form-control shadow-none mb-2" name="cat" value="{{$data->cat}}" required>
              <input type="submit" value="Update" class="btn btn-primary">
            </div>
         </form>
    </div>
</div>
@endsection