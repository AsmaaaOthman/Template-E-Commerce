$(document).ready(function(){
    $(".navbar-toggler").click(function(){
        $(".shopping-card").removeClass("shoppingToggle")
        $(".home-content").animate({"right":"-100%"},500)
        $(this).toggleClass("close")
    });

    //search
    $("#searchIcon").click(function(){
        $(".shopping-card").removeClass("shoppingToggle")
        $(".home-search").css({"opacity":"1","visibility":"visible"})
        $(".home-search form").animate({"width":"70%"},500)
    })

    $("#searchClose").click(function(){
        $(".home-search").css({"opacity":"0","visibility":"hidden"})
        $(".home-search form").animate({"width":"30%"},500)
    })

    // Counter Two

    let textOne = $("#textCounterOne").text()
    $("#btnPlusOne").click(function(){
        $("#textCounterOne").text(++textOne)
    })
    $("#btnMansOne").click(function(){
        if(textOne != 1){
            $("#textCounterOne").text(--textOne)
        }
    })

    // Counter Two

    let textTwo = $("#textCounterTwo").text()
    $("#btnPlusTwo").click(function(){
        $("#textCounterTwo").text(++textTwo)
    })
    $("#btnMansTwo").click(function(){
        if(textTwo != 1){
            $("#textCounterTwo").text(--textTwo)
        }
    })

    // Shopping Toggle

    $("#shoppingIcon").click(function(){
        $(".shopping-card").toggleClass("shoppingToggle")
    })

    // Aside Icon
    $("#asideIcon").click(function(){
        $(".home-content").animate({"right":"0"},500)
        $(".btn-aside-close").addClass("iconClose")
    })

    // Close Aside Icon
    $(".btn-aside-close").click(function(){
        $(".home-content").animate({"right":"-100%"},500)
        $(".btn-aside-close").removeClass("iconClose")
    })

    // Product list show
    $("#btnToggel").click(function(){
        $(".product-list").toggleClass("navShow")
    })

    // Logos Client
    $('#client .owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:4
            },
            1000:{
                items:5
            }
        }
    })

    // Our Blog
    $('#blog .owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })


    // wow.js
    new WOW().init();
})