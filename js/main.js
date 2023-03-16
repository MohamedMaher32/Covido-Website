$(window).ready(function(){
    $(".landing").fadeOut(1500)
    $(window).scroll(function(){
        let scrollTop = $(window).scrollTop()
        if(scrollTop > 10){
            $(".navbar").addClass("main-bg")
            $(".arrow-up").fadeIn(1000)
            $(".nav-link").css("color","#fff")
            $(".navbar-brand ").css("color","#fff")
            $(".active").css("color","#111")
            $(".navbar-icon").css("color","#fff")
            $(".navbar-toggler").css("border-color","#fff")
        }
        else{
            $(".navbar").removeClass("main-bg")
            $(".arrow-up").fadeOut(1000)
            $(".nav-link").css("color","#111")
            $(".navbar-brand ").css("color","#111")
            $(".active").css("color","var(--main-color)")
            $(".navbar-icon").css("color","#111")
            $(".navbar-toggler").css("border-color","#111")
        }
    })
    $(".nav-link").click(function(){
        let sectionHref = $(this).attr("href")
        let sectionTop = $(sectionHref).offset().top
        $("body,html").animate({scrollTop: sectionTop} , {duration: 500 , queue: false})
        $(this).addClass("active")
        $(this).parent().siblings().children().removeClass("active")
        $(".navbar-collapse").addClass("d-none")
        $(".navbar-collapse").removeClass("d-block")
    })
    $(".navbar-toggler").click(function(){
        // $(".navbar-collapse").addClass("d-block")
        $(".navbar-collapse").removeClass("d-none")
    })
    
    $(".arrow-up").click(function(){
        $("body,html").animate({scrollTop: "0px"} , 500)
        $(".nav-link").parent().siblings().children().removeClass("active")
    })
    // wow = new WOW({offset: 150,})
    // wow.init();
    new WOW().init();
})

