     $("#profile").on('click',function(e){
        $("#content").load("profile/data.html");
        $("#profile").attr("class","active-menu-right");
        $("#beranda").attr("class","menu-waves-block");
        $("#sekolah").attr("class","menu-waves-block");
        $("#pengalaman").attr("class","menu-waves-block");
        $("#kontak").attr("class","menu-waves-block");

        $("#span-profile").attr("style","color:#337ab7");
        $("#span-beranda").attr("style","color:#747474");
        $("#span-kontak").attr("style","color:#747474");
        $("#span-sekolah").attr("style","color:#747474");
        $("#span-pengalaman").attr("style","color:#747474");

        $("#id-profile").attr("class","material-icons icon-menu-active");
        $("#id-beranda").attr("class","material-icons");
        $("#id-kontak").attr("class","material-icons");
        $("#id-pengalaman").attr("class","material-icons");
        $("#id-sekolah").attr("class","material-icons");
     });

     $(window).on('load',function(e){
        $("#content").load("beranda.html");
     });

    $("#beranda").on('click',function(e){
        $("#content").load("beranda.html");
        $("#beranda").attr("class","active-menu-right");
        $("#profile").attr("class","menu-waves-block");
        $("#sekolah").attr("class","menu-waves-block");
        $("#pengalaman").attr("class","menu-waves-block");
        $("#kontak").attr("class","menu-waves-block");

        $("#span-beranda").attr("style","color:#337ab7");
        $("#span-profile").attr("style","color:#747474");
        $("#span-kontak").attr("style","color:#747474");
        $("#span-sekolah").attr("style","color:#747474");
        $("#span-pengalaman").attr("style","color:#747474");

        $("#id-beranda").attr("class","material-icons icon-menu-active");
        $("#id-profile").attr("class","material-icons");
        $("#id-kontak").attr("class","material-icons");
        $("#id-pengalaman").attr("class","material-icons");
        $("#id-sekolah").attr("class","material-icons");
    });

    $("#sekolah").on('click',function(e){
        $("#content").load("school/data.html");
        $("#sekolah").attr("class","active-menu-right");
        $("#profile").attr("class","menu-waves-block");
        $("#beranda").attr("class","menu-waves-block");
        $("#pengalaman").attr("class","menu-waves-block");
        $("#kontak").attr("class","menu-waves-block");

        $("#span-sekolah").attr("style","color:#337ab7");
        $("#span-profile").attr("style","color:#747474");
        $("#span-kontak").attr("style","color:#747474");
        $("#span-beranda").attr("style","color:#747474");
        $("#span-pengalaman").attr("style","color:#747474");

        $("#id-sekolah").attr("class","material-icons icon-menu-active");
        $("#id-profile").attr("class","material-icons");
        $("#id-kontak").attr("class","material-icons");
        $("#id-pengalaman").attr("class","material-icons");
        $("#id-beranda").attr("class","material-icons");
    });

    $("#kontak").on('click',function(e){
        $("#content").load("contact/data.html");
        $("#kontak").attr("class","active-menu-right");
        $("#profile").attr("class","menu-waves-block");
        $("#beranda").attr("class","menu-waves-block");
        $("#pengalaman").attr("class","menu-waves-block");
        $("#sekolah").attr("class","menu-waves-block");

        $("#span-kontak").attr("style","color:#337ab7");
        $("#span-profile").attr("style","color:#747474");
        $("#span-sekolah").attr("style","color:#747474");
        $("#span-beranda").attr("style","color:#747474");
        $("#span-pengalaman").attr("style","color:#747474");

        $("#id-kontak").attr("class","material-icons icon-menu-active");
        $("#id-profile").attr("class","material-icons");
        $("#id-sekolah").attr("class","material-icons");
        $("#id-pengalaman").attr("class","material-icons");
        $("#id-beranda").attr("class","material-icons");
    });

    $("#pengalaman").on('click',function(e){
        $("#content").load("work-experience/data.html");
        $("#pengalaman").attr("class","active-menu-right");
        $("#profile").attr("class","menu-waves-block");
        $("#beranda").attr("class","menu-waves-block");
        $("#kontak").attr("class","menu-waves-block");
        $("#sekolah").attr("class","menu-waves-block");

        $("#span-pengalaman").attr("style","color:#337ab7");
        $("#span-profile").attr("style","color:#747474");
        $("#span-sekolah").attr("style","color:#747474");
        $("#span-beranda").attr("style","color:#747474");
        $("#span-kontak").attr("style","color:#747474");

        $("#id-pengalaman").attr("class","material-icons icon-menu-active");
        $("#id-profile").attr("class","material-icons");
        $("#id-sekolah").attr("class","material-icons");
        $("#id-kontak").attr("class","material-icons");
        $("#id-beranda").attr("class","material-icons");
    });