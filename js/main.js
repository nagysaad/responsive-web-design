
$(function () {
    'use strict';
    $('.information ul li').click(function () {
        $(this).addClass('active').siblings('li').removeClass('active');
        $('.info-content div').hide();
        $('.' + $(this).data('cont')).fadeIn();
    });
});


let myLinks = document.querySelectorAll("header .container ul li a");

//console.log(myLinks);

myLinks.forEach(link => {

    link.addEventListener("click" , e => {

        myLinks.forEach(link => {
            link.classList.remove("active");
        });

        e.target.classList.add("active");

        
    });

});



//start show burger icon in small and medium screens

let burgerIcon = document.querySelector("header .container nav i");
//console.log(burgerIcon);

let navUl = document.querySelector("header .container nav ul");
//console.log(navUl);

burgerIcon.onclick = function(e){

    e.stopPropagation();
    
    navUl.classList.toggle("open");

}

navUl.onclick = function(e){
    e.stopPropagation();

}



//end show burger icon in small and medium screens




