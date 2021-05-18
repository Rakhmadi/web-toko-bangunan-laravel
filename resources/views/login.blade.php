<!DOCTYPE html>
<html lang="en">
<head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="{{asset('bootstrap/css/bootstrap.min.css')}}">
        <link rel="stylesheet" href="https://cdn.materialdesignicons.com/5.4.55/css/materialdesignicons.min.css">
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" rel="stylesheet">
        <style>
            .color-s{
                color: rgb(74, 94, 112) !important;
            }
            .s{
                
            }
            @media only screen and (max-width: 600px) {
                .s{

                }
            }
            @media only screen and (min-width: 600px) {
                
            }
            
        </style>
</head>
<body>
   <div class="container-fluid">
       <div class="row">
           <div class=" col-12 col-lg-6 m-0 p-0">
              <div class="vh-100 " style="background-color: rgb(34,146,242) !important">
                 <div class="d-flex align-items-center justify-content-center h-100">
                     <div class="col-8 p-3 shadow-none border-0 rounded-0">

                         @php
                             if (session()->has('token')) {
                                echo '<script>window.location = "/dashboard";</script>';
                             }
                         @endphp
                         
                         @if($msg = session('status'))
                        <div class="alert mx-3 border-0 alert-warning alert-dismissible fade show" role="alert">
                           {{$msg}}
                           <button type="button" class="btn-close shadow-none btn-sm" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                         @endif
                         <h1 class="mt-3 text-white">Login</h1>
                        <form action="/login" class="px-3 mt-3" method="post">
                            @csrf
                            <div class="mb-2">
                                <label for="" class="form-label text-white">Name</label>
                                <input class="form-control shadow-none border-0 " type="text" name="name">
                            </div>
                            <div class="mb-2">
                                <label for="" class="form-label text-white">Password</label>
                                <input class="form-control shadow-none border-0  " type="password" name="password">
                            </div>
                            <div class="mb-2 mt-2">
                                <input class="btn btn-primary shadow-none border-0" type="submit" value="Login">
                            </div>
                        </form>
                     </div>
                 </div>
              </div>
           </div>
           <div class="col-6 m-0 p-0" style="background-color: rgba(34, 145, 242, 0.438) ">
              <div class="vh-100 d-none d-lg-block " style="background-image : url('{{asset('bootstrap/2409545.jpg')}}') ; background-size:cover;">
                  <div class="h-100 w-100" style="background-color: rgba(34, 145, 242, 0.308) "></div>
              </div>
           </div>
       </div>
   </div>
<script src="{{asset('bootstrap/js/bootstrap.min.js')}}"></script>
</body>
</html>

{{-- <form action="/login" method="post">
    @csrf
   
</form> --}}