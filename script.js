$(document).ready(function() {

    function homeAnimation(){
        var invit = -1*$('.invit').height();
        var name = -1*$('.name').height();
        var date = -1*$('.date').height();
        $(".invit").css("top", -1*invit);
        $(".name").css("top", -1*name);
        $(".date").css("top", -1*date);
        $(".invit").css("visibility", "visible");
        $(".name").css("visibility", "visible");
        $(".date").css("visibility", "visible");
        var coba = gsap.timeline(2);

        coba.timeScale(1.5);
        coba.to(".invit", {top:0 , duration: 2 ,delay:2, ease:"power4"});
        coba.to(".name", {top:0 , duration: 2 ,delay:-1.6 ,ease:"power4"});
        coba.to(".date", {top:0 , duration: 2.2 ,delay:-1.6 ,ease:"power4"});
        coba.to(".hint-navigate", {top:0 , opacity:1, duration: 2.2 ,delay:-1.6,stagger:0.2 ,ease:"power4"});
        coba.to(".hamburger", {top:0 , opacity:1, duration: 2.2 ,delay:-1.6 ,ease:"power4"});
        coba.to($('.hamburger').children(),{stroke:'#FFFFFF',delay:-2});  
        
        setTimeout(function(){
            var coba2 =  gsap.timeline();
            coba2.to(".hint-navigate", {top:'-10px',opacity:0,duration:1.5,ease:"power4"});
            coba2.to(".hint-navigate", {top:'0px',opacity:1,duration:1.5,ease:"power4"});
            coba2.repeat(-1);

            var countWheel = 0;
            $(window).bind('mousewheel', function(event) {
                countWheel = countWheel+1;
                if(countWheel==1){
                    if (event.originalEvent.wheelDelta >= 0) {
                        countWheel = 0;
                    }
                    else {
                        $('.arrow-down')[0].click();
                    }
                }

            }); 
        },6000);

        var countKeyDown = 0;
        window.addEventListener("keydown", function (event) {
            countKeyDown = countKeyDown+1;
            if (countKeyDown ==1 ){
                switch (event.key) {
                    case "ArrowDown":
                      $('.arrow-down')[0].click();
                    return;
                }
            }      
        }, true);

        $(function(){
            var body = document.getElementsByTagName('main')[0];
            hammer = new Hammer(body);
            hammer.get('swipe').set({ direction: Hammer.DIRECTION_VERTICAL });
            hammer.on('swipeup',function(){
                $('.arrow-down')[0].click();
            });
            hammer.on('swipedown',function(){
                
            })  
        })
    }

    function coupleAnimation(){
        var couple = gsap.timeline();
        couple.delay(1.5);
        couple.to(".ucapan",{top:0,opacity:1,duration:1.3,ease:"expo"});
        couple.to(".foto-mempelai",{opacity:1,duration:1.3,backgroundSize:'100%',delay:-0.8,ease:"power4"});
        couple.to(".love",{top:0,duration:0.7,delay:-0.8,ease:"power4"});
        couple.to(".nama",{top:0,opacity:1,duration:1,delay:-0.3,ease:"circ"});
        couple.to(".orang-tua",{bottom:0,opacity:1,duration:0.7,delay:-1,ease:"circ"});
        // couple.to(".slide-number", {left:0 , opacity:1, duration: 1 ,delay:-0.5,stagger:0.2 ,ease:"power4"});
        // couple.to(".slide-indicator", {top:0 , opacity:1, duration: 1 ,delay:-0.8,stagger:0.2 ,ease:"power4"});
        couple.to(".dedaunan-p-ki-a",{top:0,opacity:1});
        couple.to(".dedaunan-p-ka-b",{bottom:0,opacity:1,delay:0});
        couple.to(".hamburger", {top:0 , opacity:1, duration:1 ,delay:-0.8 ,ease:"power4"});
        couple.to($('.hamburger').children(),{stroke:'#000000',delay:-2});  

        setTimeout(function(){
            var countWheel = 0;
            $(window).bind('mousewheel', function(event) {
                countWheel = countWheel+1;
                if(countWheel == 1){
                    if (event.originalEvent.wheelDelta >= 0) {     
                        $('.arrow-up')[0].click();
                    }
                    else {
                        $('.arrow-down')[0].click();
                    }
                }
            }); 
        },4000);

        var countKeyDown = 0;
        window.addEventListener("keydown", function (event) {
            countKeyDown = countKeyDown+1;
            if (countKeyDown ==1 ){
                switch (event.key) {
                    case "ArrowDown":
                      $('.arrow-down')[0].click();
                    return;
                    case "ArrowUp":
                      $('.arrow-up')[0].click();
                    return;
                }
            }      
        }, true);

        $(function(){
            var body = document.getElementsByTagName('main')[0];
            hammer = new Hammer(body);
            hammer.get('swipe').set({ direction: Hammer.DIRECTION_VERTICAL });
            hammer.on('swipeup',function(){
                $('.arrow-down')[0].click();
            });
            hammer.on('swipedown',function(){
                $('.arrow-up')[0].click();
            })
        })

    }


    function saveTheDate(){
        
        async function initSlick() {
            var coba = gsap.timeline();
            coba.delay(1.5);
            if($(window).width() > 768){
                coba.to('.wrapper-slider',{width:'50%',padding:'2.5rem',duration:1,ease:"power4"});
                coba.to(".dedaunan-p-ki-a",{opacity:1});
                coba.to(".dedaunan-p-ka-b",{opacity:1,delay:0.2});
            }
            else{
                coba.to('.wrapper-slider',{height:'18rem',padding:'2.5rem',duration:1,ease:"power4"});
                coba.to(".dedaunan-p-ki-a",{opacity:1});
                coba.to(".dedaunan-p-ka-b",{opacity:1,delay:0.2});
            }
            return coba;
        }

        initSlick().then(function(coba){
            $('.ini').slick({
                arrows:false,
                dots:false,
                autoplay:true,
                autoplaySpeed:4000
            });
            var a = $('.slick-active');
            coba.to(a.children(),{top:0,opacity:1,stagger:0.2});
            //coba.to('.save-the-date',{top:0,duration:1,ease:'power4'});
            var coba2 = gsap.timeline();
            coba2.to('.bg',{backgroundColor:'rgb(59, 130, 246)',duration:3,ease:'linear'});
            coba2.to('.bg',{backgroundColor:'rgb(239, 68, 68)',duration:3,ease:'linear'});
            coba2.to('.bg',{backgroundColor:'rgb(0, 0, 0)',duration:3,ease:'linear'});
            coba2.repeat(-1);

            var countDownDate = new Date("Nov 21, 2021 09:00:00").getTime();
            var x = setInterval(function() {
            var now = new Date().getTime();
            var distance = countDownDate - now;
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            $('.1').html(days+" D");
            $('.2').html(hours+" H");
            $('.3').html(minutes+" M");
            $('.4').html(seconds+" S");
            if (distance < 0) {
                clearInterval(x);
                document.getElementById("demo").innerHTML = "EXPIRED";
            }
            }, 1000);
            coba.set('.save-the-date',{attr:{src:"fixxxx.gif"}});
            coba.to($('.countdown').children(),{opacity:1,bottom:0,ease:'power4',stagger:0.2,duration:1.3,delay:1.8});
            coba.to(".hamburger", {top:0 , opacity:1, duration: 1.2 ,delay:-2 ,ease:"power4"});
            coba.to($('.hamburger').children(),{stroke:'#FFFFFF',delay:-1.6});     
        }).then(function(){
            var countWheel = 0;
            $(window).bind('mousewheel', function(event) {
                countWheel = countWheel+1;
                if(countWheel == 1){
                    if (event.originalEvent.wheelDelta >= 0) {     
                        $('.arrow-up')[0].click();
                    }
                    else {
                        $('.arrow-down')[0].click();
                    }
                }
            }); 
        })

        $('.ini').on("afterChange",function(){
            var a = $('.slick-active');
            var coba = gsap.timeline();
            coba.to(a.children(),{top:0,opacity:1,stagger:0.2});
        });
        
        $('.ini').on("beforeChange",function(){
            var a2 = $('.slick-active');
            var coba2 = gsap.timeline();
            coba2.set(a2.children(),{top:'-20px',opacity:0});
        })

        var countKeyDown = 0;
        window.addEventListener("keydown", function (event) {
            countKeyDown = countKeyDown+1;
            if (countKeyDown ==1 ){
                switch (event.key) {
                    case "ArrowDown":
                      $('.arrow-down')[0].click();
                    return;
                    case "ArrowUp":
                      $('.arrow-up')[0].click();
                    return;
                }
            }      
        }, true);

        $(function(){
            var body = document.getElementsByTagName('main')[0];
            hammer = new Hammer(body);
            hammer.get('swipe').set({ direction: Hammer.DIRECTION_VERTICAL });
            hammer.on('swipeup',function(){
                $('.arrow-down')[0].click();
            });
            hammer.on('swipedown',function(){
                $('.arrow-up')[0].click();
            })
        })

    }

    function galleryAnimation(){
        $('.gallery').lightGallery();
        var gallery = gsap.timeline();
        gallery.to(".welcome",{translateY:"0",duration:1.4,delay:1,stagger:0.3,ease:"power4"});
        gallery.to('.welcome',{opacity:0,duration:1,delay:0.8});
        gallery.to('.welcome',{display:'none'});
        gallery.to("#pict-1",{translateX:"0",opacity:1,duration:2,delay:1,ease:"power4"});
        gallery.to("#pict-6",{translateY:"0",opacity:1,duration:2,delay:-1.5,ease:"power4"});
        gallery.to("#pict-4",{opacity:1,duration:2,delay:-1.5,ease:"power4"});
        gallery.to("#pict-3",{opacity:1,duration:2,delay:-1.5,ease:"power4"});
        gallery.to("#pict-7",{translateY:"0",opacity:1,duration:2,delay:-1.5,ease:"power4"});
        gallery.to("#pict-2",{translateX:"0",opacity:1,duration:2,delay:-1.5,ease:"power4"});
        gallery.to("#pict-5",{opacity:1,duration:2,delay:-1.5,ease:"power4"});
        gallery.to("#pict-8",{opacity:1,duration:2,delay:-1.5,ease:"power4"});
        gallery.to(".hamburger", {top:0 , opacity:1, duration: 1.2 ,delay:-2 ,ease:"power4"});
        gallery.to($('.hamburger').children(),{stroke:'#FFFFFF',delay:-1.6});     
        gallery.to(".slide-number", {left:0 , opacity:1, duration: 1 ,delay:-0.8,stagger:0.2 ,ease:"power4"});

        console.log(gallery.duration());


        setTimeout(function(){
            var countWheel = 0;
            $(window).bind('mousewheel', function(event) {
                countWheel = countWheel+1;
                if(countWheel == 1){
                    if (event.originalEvent.wheelDelta >= 0) {     
                        $('.arrow-up')[0].click();
                    }
                    else {
                        $('.arrow-down')[0].click();
                    }
                }
            }); 
        },6000);

        var countKeyDown = 0;
        window.addEventListener("keydown", function (event) {
            countKeyDown = countKeyDown+1;
            if (countKeyDown ==1 ){
                switch (event.key) {
                    case "ArrowDown":
                      $('.arrow-down')[0].click();
                    return;
                    case "ArrowUp":
                      $('.arrow-up')[0].click();
                    return;
                }
            }      
        }, true);

        $(function(){
            var body = document.getElementsByTagName('main')[0];
            hammer = new Hammer(body);
            hammer.get('swipe').set({ direction: Hammer.DIRECTION_VERTICAL });
            hammer.on('swipeup',function(){
                $('.arrow-down')[0].click();
            });
            hammer.on('swipedown',function(){
                $('.arrow-up')[0].click();
            })
        })

    }

    function wishAnimation(){
        let options = {
            rootMargin: '0px 0px 0px 0px',
            threshold: 0.7
        }
    
        let callback = (entries, observer) => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.classList.remove('opacity-40');
                entry.target.classList.add('opacity-1');
            }
            else{
                entry.target.classList.remove('opacity-1');
                entry.target.classList.add('opacity-40');
            }
        });
        };
    
        let observer = new IntersectionObserver(callback, options);
    
        var a = document.querySelector('.keong');
        a = a.outerHTML;
        var b;
        var counter = parseInt($('.counter-message').text());
    
        $('#coba').scroll(function(){
            if($('#coba').scrollTop() > $('#coba').get(0).scrollHeight - 450){
                $('.counter-message').text(0);
                counter = 0;
            }
        });
        

        $('.arrow-up').click(function(){
            // b = $('#coba').scrollTop();
            // $('#coba').append(a);
            // counter = counter+1;
            // $('.counter-message').text(counter);
            // let target = document.querySelectorAll('.keong');
            // target.forEach((i)=>observer.observe(i));
            wish.to('.arrow-up',{opacity:0});
        });
    
        var responActive = 0;
    
        function timeout(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }
    
        $('.like-button').click(function(){
            if(responActive==0){
                responActive = 1;
                var like = gsap.timeline();
                like.set('.hati-jempol',{attr:{src:"thumb-up.svg"}});
                like.to('.foto-respon',{rotate:360,height:'7rem',width:'7rem'});
                like.to('.hati-jempol',{translateX:'20',opacity:1});
                like.to('.name-liked',{translateY:"0",opacity:1,delay:0.5});
                (async function(){
                    await timeout(3500);
                    await like.reverse();
                    responActive = 0;
                    return 0;
                })().then(function(res){
    
                });
            }
        });
    
    
        $('.heart-button').click(function(){
            if(responActive==0){
                responActive = 1;
                var like = gsap.timeline();
                like.set('.hati-jempol',{attr:{src:"heart.svg"}});
                like.to('.foto-respon',{rotate:360,height:'7rem',width:'7rem'});
                like.to('.hati-jempol',{translateX:'20',opacity:1});
                like.to('.name-liked',{translateY:"0",opacity:1,delay:0.5});
                (async function(){
                    await timeout(3500);
                    await like.reverse();
                    responActive = 0;
                    return 0;
                })().then(function(res){
    
                });
            }
        });
    
        function heartAnimation(){
            var bottomRandom = Math.floor(Math.random() * 100); 
            var leftRandom = Math.floor(Math.random() * 30); 
            $('.heart-container').append('<div class="heart-wrapper absolute w-10 h-10"><div class="heart"></div></div>');
            gsap.fromTo($('.heart-container').children().last()[0],{bottom:bottomRandom,left:leftRandom,opacity:0},{bottom:400,opacity:1}).duration(4);
        }
    
        function removeHeart(){
            if($('.heart-container').children().length > 40){
                $('.heart-container').find('.heart-wrapper:lt(30)').remove();
            }
        }
    
        // var countWheel = 0;
        // $(window).bind('mousewheel', function(event) {
        //     countWheel = countWheel+1;
        //     if(countWheel == 1){
        //         if (event.originalEvent.wheelDelta >= 0) {     
        //             $('.arrow-up')[0].click();
        //         }
        //         else {
        //             countWheel = 0;
        //         }
        //     }
        // }); 

        var countKeyDown = 0;
        window.addEventListener("keydown", function (event) {
            countKeyDown = countKeyDown+1;
            if (countKeyDown ==1 ){
                switch (event.key) {
                    case "ArrowUp":
                      $('.arrow-up')[0].click();
                    return;
                }
            }      
        }, true);

        $(function(){
            var body = document.getElementsByTagName('main')[0];
            hammer = new Hammer(body);
            hammer.get('swipe').set({ direction: Hammer.DIRECTION_VERTICAL });
            hammer.on('swipeup',function(){
                //$('.arrow-down')[0].click();
            });
            hammer.on('swipedown',function(){
                $('.arrow-up')[0].click();
            })
        })

        var wish = gsap.timeline();
        wish.delay(2);
        wish.to('.scroll-wish',{height:'40%',duration:1,ease:'power4',delay:1});
        wish.to($('.wrapper-responer'),{left:0,opacity:1,duration:0.5});
        wish.to('.arrow-up',{opacity:1});
        wish.to('.heart-container',{opacity:1,duration:1,delay:1});
        wish.to(".hamburger", {top:0 , opacity:1, duration: 2.2 ,delay:-1.6 ,ease:"power4"});
        wish.to($('.hamburger').children(),{stroke:'#FFFFFF',delay:-2});  
        var heartAnimation = setInterval(heartAnimation,150);
        var removeHeart = setInterval(removeHeart,2500);
    }

    function leaveAnimation(){
        var leave = gsap.timeline();
        leave.set(".transitioner",{bottom:0,top:''});
        leave.to(".transitioner",{height:'100vh',duration:1.5,ease:"expo"});
        leave.to(".hamburger", {top:'-2.5rem' , opacity:0, duration:1 ,delay:-0.8,ease:"power4"});
        leave.set(".transitioner",{bottom:'',top:0});
        leave.to(".transitioner",{height:'0',duration:1.5,ease:"expo"});
        leave.set('.save-the-date',{attr:{src:""}});
        setTimeout(function(){
            $('.ini').slick('unslick');
        },1000)
    }

    function delay(n) {
        n = n || 2000;
        return new Promise((done) => {
            setTimeout(() => {
                done();
            }, n);
        });
    }

    barba.init({
        sync: true,
    
        transitions: [
            {
                name: 'index',
                to: { namespace: ['index'] },
                async leave() {
                    const done = this.async();
                    leaveAnimation();
                    await delay(1200);
                    done();
                },
                async enter() {
                    
                },
                async once() {
                    
                }
              },
            {
                name: 'home',
                to: { namespace: ['home'] },
                async leave() {
                    const done = this.async();
                    leaveAnimation();
                    await delay(1200);
                    done();
                },
                async enter() {
                    homeAnimation();
                },
                async once() {
                    homeAnimation();
                }
              }, 
            {
                name: 'couple',
                to: { namespace: ['couple'] },
                async leave() {
                    const done = this.async();
                    leaveAnimation();
                    await delay(1200);
                    done();
                },
                async enter() {
                    coupleAnimation();
                },
                async once() {
                    coupleAnimation();
                }
            },
            {
                name: 'savethedate',
                to: { namespace: ['savethedate'] },
                async leave() {
                    const done = this.async();
                    leaveAnimation();
                    await delay(1200);
                    done();
                },
                async enter() {
                    saveTheDate();
                },
                async once() {
                    saveTheDate();
                }
            },
            {
                name: 'gallery',
                to: { namespace: ['gallery'] },
                async leave() {
                    const done = this.async();
                    leaveAnimation();
                    await delay(1200);
                    done();
                },
                async enter() {
                    galleryAnimation();
                },
                async once() {
                    galleryAnimation();
                }
            },
            {
                name: 'wish',
                to: { namespace: ['wish'] },
                async leave() {
                    const done = this.async();
                    leaveAnimation();
                    await delay(1200);
                    done();
                },
                async enter() {
                    wishAnimation();
                },
                async once() {
                    wishAnimation();
                }
            }
        ],
    });

    
});