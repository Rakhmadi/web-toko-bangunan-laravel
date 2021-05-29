@extends('welcome')
@section('content')
    <div class="card border-0 shadow p-3">
        <h2>Sales Order Data</h2>
        <table class="table" id="myTable">
            <thead>
              <tr>
                <th onclick="console.log('dsfsdf')" scope="col" class="text-nowrap">#  <button class="ms-1 rounded-1 p-1 shadow-none float-left btn btn-sm btn-primary"><i class="mdi mdi-chevron-up"></i></button> </th>
                <th scope="col" class="text-nowrap">Code  <button class="ms-1 rounded-1 p-1 shadow-none float-left btn btn-sm btn-primary"><i class="mdi mdi-chevron-up"></i></button> </th>
                <th scope="col" class="text-nowrap">Nama Pelanggan  <button class="ms-1 rounded-1 p-1 shadow-none float-left btn btn-sm btn-primary"><i class="mdi mdi-chevron-up"></i></button> </th>
                <th scope="col" class="text-nowrap">Jumlah List  <button class="ms-1 rounded-1 p-1 shadow-none float-left btn btn-sm btn-primary"><i class="mdi mdi-chevron-up"></i></button> </th>
                <th scope="col" class="text-nowrap">Jumlah Product  <button class="ms-1 rounded-1 p-1 shadow-none float-left btn btn-sm btn-primary"><i class="mdi mdi-chevron-up"></i></button> </th>
                <th scope="col" class="text-nowrap">Total Harga  <button class="ms-1 rounded-1 p-1 shadow-none float-left btn btn-sm btn-primary"><i class="mdi mdi-chevron-up"></i></button> </th>
                <th scope="col" class="text-nowrap">Status Pengiriman  <button class="ms-1 rounded-1 p-1 shadow-none float-left btn btn-sm btn-primary"><i class="mdi mdi-chevron-up"></i></button> </th>
                <th scope="col" class="text-nowrap">Tanggal Dibuat  <button class="fms-1 rounded-1 p-1 shadow-none loat-left btn btn-sm btn-primary"><i class="mdi mdi-chevron-up"></i></button> </th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              @foreach ($data as $item)
                  <tr>
                      <td></td>
                     <td>{{$item->kode}}</td>
                     <td>{{$item->nama_planggan}}</td>
                     <td>{{$item->total_list}}</td>
                     <td>@if(empty($item->total_product))
                          {{ '0' }}
                         @else
                             {{ $item->total_product }}
                        @endif</td>
                     <td>Rp. {{$item->total_harga}}</td>
                     <td>
                         @php
                             if($item->pengiriman){
                                 echo 'Terkirim';
                             }else{
                                 echo 'Belum Dikirim';
                             }
                         @endphp</td>
                     <td>{{$item->created_at}}</td>
                     <td></td>
                  </tr>
              @endforeach
            </tbody>
        </table>
    </div>
@endsection