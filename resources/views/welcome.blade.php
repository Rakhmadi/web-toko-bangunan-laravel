<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="{{asset('bootstrap/css/bootstrap.min.css')}}">
        <link rel="stylesheet" href="https://cdn.materialdesignicons.com/5.4.55/css/materialdesignicons.min.css">
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" rel="stylesheet">

        <style>
            /* width */
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1; 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: rgb(182, 182, 182); 
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: rgb(124, 124, 124); 
}
            *{
                font-family: 'Roboto', sans-serif;
            }
            .n{
                background: rgb(34,146,242) !important;
            }
            .n:hover{
                background: rgb(72, 162, 241) !important;
              
            }
            .n::after{
                font-family: "Material Design Icons";
                 content: "\F0142";
                color: white;
                float: right;
                
            }
            .x-an{
                transition: 0.5s ease !important;
            }
            .flex-fixed-width-item {
                flex: 0 0 100px;
            }
            .text-c-dark{
                color: rgb(74, 94, 112) !important;
            }
            #sidenav{
                z-index: 99;
                transition: 0.5s;
                
                position: relative;
            }
            #insidenav{
                transition: 0.1s;
            }
            #cls{
                    display: block;
                }
            .link-an{
                transition: 0.8s cubic-bezier(0.075, 0.82, 0.165, 1);
            }
            .link-an:hover{
                transition: 0.8s cubic-bezier(0.075, 0.82, 0.165, 1);
                margin-left: 10px;
            }
            @media only screen and (max-width: 600px) {
                #sidenav{
                    position: fixed;
                }
            }
            @media only screen and (min-width: 600px) {
                #cls{
                    display: none;
                }
            }
            .nv{
                display: block;
                width: 5px;
                background-color: rgb(34,146,242);
                height: 100%;
                border-radius: 100px;
                margin-left: 3px !important;
            }
  
            
        </style>
    </head>
    <body>
       <div class="container-fluid">
    <div class="row flex-nowrap fixed">
        <div id="sidenav" class="col-auto col-md-3  px-0 bg-ligth " style=" background-color:rgb(34,146,242);width: 240px;">
            <div id="insidenav" class="overflow-auto px-2" style="height: 100vh"> 
            <div class=" d-flex flex-column  align-items-sm-start px-1 pt-2 text-ligth min-vh-100">
                <a id="cls" onclick="toggle_visibility()" class="text-light" style="margin-left: auto; 
                margin-right: 0; float:right; font-size:22px; right: 0px; top:0px">
                    <i class="mdi mdi-close" ></i>
                </a>
                <a href="/" class="d-flex align-items-center mt-4 pb-3 mb-md-0 me-md-auto text-light text-decoration-none">
                    <span class="fs-5  d-sm-inline">Wadmin</span>
                </a>
                
                <div class="mt-1 w-100">
                    <a class="n btn btn-dark btn-md w-100 mt-1 shadow-none rounded-3 border-0 text-start bg-transparent" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                        <i class="mdi mdi-view-dashboard" aria-hidden="true"></i> Dashboard
                    </a>
                    <div class="collapse x-an" id="collapseExample">
                        <div class="ms-3">
                          <ul class="navbar-nav ms-4">
                              <li class="nav-item">
                                  <a class="nav-link link-an text-light" href="/sdf">Menu 1</a>
                              </li>
                              <li class="nav-item">
                                <a class="nav-link link-an text-light" href="/sdf">Menu 2</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link link-an text-light" href="/sdf">Menu 3</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link link-an text-light" href="/sdf">Menu 4</a>
                            </li>
                          </ul>
                        </div>
                    </div>

                    <a class="n btn btn-dark btn-md w-100 mt-1 shadow-none rounded-3 border-0 text-start bg-transparent" href="/Brand" role="button" aria-expanded="false" aria-controls="collapseExample">
                        <i class="mdi mdi-inbox" aria-hidden="true"></i> Brand
                    </a>
                    <a class="n btn btn-dark btn-md w-100 mt-1 shadow-none rounded-3 border-0 text-start bg-transparent" data-bs-toggle="collapse" role="button" href="#collapseExample1" aria-expanded="false" aria-controls="collapseExample1">
                        <i class="mdi mdi-treasure-chest" aria-hidden="true"></i> Product
                    </a>
                    <div class="collapse x-an" id="collapseExample1">
                        <div class="ms-3">
                          <ul class="navbar-nav ms-4">
                              <li class="nav-item">
                                  <a class="nav-link link-an text-light" href="/Product">Data Product</a>
                              </li>
                              <li class="nav-item">
                                <a class="nav-link link-an text-light" href="/createProduct">Create Product</a>
                            </li>
                          </ul>
                        </div>
                    </div>
                    <a class="n btn btn-dark btn-md w-100 mt-1 shadow-none rounded-3 border-0 text-start bg-transparent" data-bs-toggle="collapse" role="button" href="#collapseExample2" aria-expanded="false" aria-controls="collapseExample2">
                        <i class="mdi mdi-treasure-chest" aria-hidden="true"></i> Sales Order
                    </a>
                    <div class="collapse x-an" id="collapseExample2">
                        <div class="ms-3">
                          <ul class="navbar-nav ms-4">
                              <li class="nav-item">
                                  <a class="nav-link link-an text-light" href="/sales">Create Order</a>
                              </li>
                              <li class="nav-item">
                                <a class="nav-link link-an text-light" href="/createProduct">View data order</a>
                            </li>
                          </ul>
                        </div>
                    </div>
                    
                </div>               
                
            </div>
            </div>
        </div>
        <div class="col px-0 py-0 overflow-auto" style="background-color: rgb(253, 253, 253)">
           <div class="overflow-auto" style="height: 100vh;"> 
            <nav class="navbar navbar-expand navbar-light bg-light " style="background-color:rgb(236, 247, 255)!important">
                <div class="container-fluid">
                    <a class="btn btn-transparent p-0 m-0 btn-lg shadow-none btn-rounded border-0" onclick="toggle_visibility()">
                        <i class="text-c-dark mdi mdi-menu " style="font-size: 25px"></i>
                    </a>
                 <ul class="navbar-nav ms-auto" style="right: 0px ; left: auto !important;">
                    <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Account
                      </a>
                      <ul class="dropdown-menu dropdown-menu-end border-0 shadow-sm" aria-labelledby="navbarDropdown">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                      </ul>
                    </li>
                  </ul>
                </div>
        </nav>
          
        <div class="py-2 px-2 w-100" >
            <div class="container-fluid mt-3">
                @yield('content')
            </div>
        </div>
           </div>
        </div>
    </div>
</div>
        <script src="{{asset('bootstrap/js/bootstrap.min.js')}}"></script>
        <script>
            function toggle_visibility() 
{
    var e = document.getElementById('sidenav');
    var e2 = document.getElementById('insidenav');
    if (e.style.width == '240px' || e.style.width=='')
    {
        e2.style.visibility = 'hidden'
        e.style.width = '0';
        
    }
    else 
    {
        e2.style.visibility = 'visible'
        e.style.width = '240px';
    }
}

window.onresize = resize;
function resize()
{
    if (window.screen.availWidth <= 600) {
         toggle_visibility()
     }
}
        </script>
    </body>
</html>
