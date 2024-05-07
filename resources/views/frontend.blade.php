<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="dark">

<head>
    <meta charset="utf-8">


    <title inertia>{{ config('app.name', 'Laravel') }}</title>


    <meta name="keywords" content="HTML5 Template" />
    <meta name="description" content="Byte Vixen - IT Solutions and Services Company " />
    <meta name="author" content="potenzaglobalsolutions.com" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Byte Vixen - IT Solutions and Services Company </title>

    <!-- Favicon -->
    <link rel="shortcut icon" href="images/favicon.ico" />

    <!-- Google Font -->
    <link rel="stylesheet" href="../../../fonts.googleapis.com/cssc15a.css?family=Archivo:400,400i,500,500i,600,600i,700,700i&amp;display=swap">

    <!-- CSS Global Compulsory (Do not remove)-->
    <link rel="stylesheet" href="{{asset('frontends/css/font-awesome/all.min.css')}}" />
    <link rel="stylesheet" href="{{asset('frontends/css/flaticon/flaticon.css')}}" />
    <link rel="stylesheet" href="{{asset('frontends/css/bootstrap/bootstrap.min.css')}}" />

    <!-- Page CSS Implementing Plugins (Remove the plugin CSS here if site does not use that feature)-->
    <link rel="stylesheet" href="{{asset('frontends/css/owl-carousel/owl.carousel.min.css')}}" />
    <link rel="stylesheet" href="{{asset('frontends/css/swiper/swiper.min.css')}}" />
    <link rel="stylesheet" href="{{asset('frontends/css/animate/animate.min.css')}}" />
    <link rel="stylesheet" href="{{asset('frontends/css/magnific-popup/magnific-popup.css')}}" />
    <link rel="stylesheet" href="{{asset('frontends/css/style.css')}}">
    <!-- Scripts -->
    @routes
    @viteReactRefresh
    @vite(['resources/js/frontendapp.jsx', "resources/js/Pages/{$page['component']}.jsx"])
    @inertiaHead
</head>

<body class="font-sans antialiased">

    @inertia

    <!-- JS Global Compulsory (Do not remove)-->
    <script src="{{asset('frontends/js/jquery-3.6.0.min.js')}}"></script>
    <script src=" {{asset('frontends/js/popper/popper.min.js')}}"></script>
    <script src="{{asset('frontends/js/bootstrap/bootstrap.min.js')}}"></script>

    <!-- Page JS Implementing Plugins (Remove the plugin script here if site does not use that feature)-->
    <script src=" {{asset('frontends/js/jquery.appear.js')}}"></script>
    <script src="{{asset('frontends/js/swiper/swiper.min.js')}}"></script>
    <script src=" {{asset('frontends/js/swiperanimation/SwiperAnimation.min.js')}}"></script>
    <script src="{{asset('frontends/js/counter/jquery.countTo.js')}}"></script>
    <script src=" {{asset('frontends/js/owl-carousel/owl.carousel.min.js')}}"></script>
    <script src="{{asset('frontends/js/magnific-popup/jquery.magnific-popup.min.js')}}"></script>

    <!-- Template Scripts (Do not remove)-->
    <script src=" {{asset('frontends/js/custom.js')}}"></script>
</body>

</html>