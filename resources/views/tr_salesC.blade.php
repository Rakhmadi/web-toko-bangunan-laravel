@extends('welcome')
@section('content')
    <div class="card border-0 shadow-sm py-2">
        <div class="ms-4">
            <h4 class="mb-3">Create Transaction Sales</h4>

            <form action="salesCr" method="post">
                @csrf
                <div class="col-12 col-lg-6">
                    <label for="" class="form-label">Nama pelanggan</label>
                    <input type="text" class="form-control shadow-none mb-2" name="nama_planggan" required>
                    <label for="" class="form-label">Alamat</label>
                    <input type="text" class="form-control shadow-none mb-2" name="alamat" required>
                    <label for="" class="form-label">Email pelanggan</label>
                    <input type="email" class="form-control shadow-none mb-2" name="email" required>
                    <input type="submit" class="btn btn-primary" value="Save">
                </div>
            </form>
        </div>
    </div>
@endsection