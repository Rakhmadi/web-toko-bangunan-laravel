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
            <h4 class="">Update Product</h4>
            <form action="/updateProduct/{{$data->id}}" method="post" enctype="multipart/form-data" class="mt-3">
                @csrf
               <div class="col-12 col-lg-6">
                 <label class="form-lable">Name</label>
                 <input type="text" class="form-control shadow-none mb-2" name="nama" required value="{{$data->nama}}">
                 <label class="form-lable">Description</label>
                 <input type="text" class="form-control shadow-none mb-2" name="desc" required value="{{$data->desc}}">
                 <label class="form-lable">Foto = <a target="blank_" href="/ImageProduct/{{$data->foto}}">{{$data->foto}}</a></label>
                 <input type="file" class="form-control shadow-none mb-2" name="foto" accept="image/png, image/gif, image/jpeg"  placeholder="">
                 <label class="form-lable">Harga</label>
                 <input type="number" class="form-control shadow-none mb-2" name="harga" required value="{{$data->harga}}">
                 <label class="form-lable">Stock</label>
                 <input type="number" class="form-control shadow-none mb-2" name="stock" required value="{{$data->stock}}">
                 <label class="form-lable">Brand</label>
                 <select class="form-select shadow-none mb-2" aria-label="select" name="brand" value="{{$data->brand_name}}" required>
                    @foreach ($datacat as $item)
                        <option value="{{$item->id}}">{{$item->nama}}</option>
                    @endforeach
                  </select>
                 <input type="submit" value="Update" class="btn btn-primary">
               </div>
            </form>
       </div>
   </div>
@endsection
