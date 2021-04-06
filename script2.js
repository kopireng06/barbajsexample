var upper = document.getElementsByClassName('upper');
var middle = document.getElementsByClassName('middle');
var lower = document.getElementsByClassName('lower');

var tl = gsap.timeline({paused: true, reversed: true});

tl
.to(upper, 0.5, {attr: {d: "M8,2 L2,8"}, x: 1, ease:Power2.easeInOut}, 'start')
.to(middle, 0.5, {autoAlpha: 0}, 'start')
.to(lower, 0.5, {attr: {d: "M8,8 L2,2"}, x: 1, ease:Power2.easeInOut}, 'start');

var statHamburger = 0;
var coba2 = gsap.timeline({paused: true, reversed: true});
coba2.timeScale(1.5);
coba2.to(".sidebar",{height:'100vh',duration:1,ease:"expo"},'start'); 
coba2.to(".link",{bottom:'0',opacity:1,duration:1.3,delay:1,ease:"expo",stagger:0.1},'start'); 
$('.hamburger').click(function(){

    if($('.back-wish').length){
        if($('.back-wish').hasClass('z-30')){
            $('.back-wish').removeClass('z-30');
        }
        else{
            setTimeout(function(){
                $('.back-wish').addClass('z-30');
            },1500)
        }
    }

    if(statHamburger == 0){
        coba2.play();
        tl.play()
        statHamburger = 1;
    }
    else{
        coba2.reverse();
        tl.reverse();
        statHamburger = 0;
    }
});    
$('.link').click(function(){
    $('.hamburger').trigger("click");
});