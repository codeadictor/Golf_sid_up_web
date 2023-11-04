var crsr=document.querySelector("#cursor");
var blrcrsr=document.querySelector("#cursorblur");
document.addEventListener("mousemove",function(dets){
    crsr.style.left=dets.x+"px"
    crsr.style.top=dets.y+"px"
    blrcrsr.style.left=dets.x-250 +"px"
    blrcrsr.style.top=dets.y-250 +"px"
})

var h4all=document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale=3
        crsr.style.border="1px solid #fff"
        crsr.style.backgroundColor="transparent"
    })
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale = 1
        crsr.style.border = "0px solid #95C11E"
        crsr.style.backgroundColor = "#95C11E"
    })
})





gsap.to("#nav",{
    backgroundColor:"#000",
    delay:0.5,
    height:"110px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
       // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:3

    }
    
})
gsap.to("#main",{
     backgroundColor:"#000",
     scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        //marker:true
        start:"top -25%",
        end:"top -70%",
        scrub:2
     }
})

gsap.from("#about-us img, #about-us-in" ,{
    scale:0.8,
    opacity:0,
    duration:1,
    //stagger:0.4      // iska mtlab hota hai ki ek ek karke elem aa rahe hain yani effect ek ek elem per lag raha hai 
     scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
       // markers:true,
        start:"top 60%",
        end:"top 55%",
        scrub:1
     }
})

gsap.from(".card,.overlay",{
    scale:0.8,
    opacity:0,
    duration:1,
    stagger:0.1,
    scrollTrigger:{
        trigger:".card,.overlay",
        scroller:"body",
        start:"top 70%",
        end:"top 65%",
        scrub:1
    }
})

gsap.from(".green-div",{
    scale:0.8,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:".green-div",
        scroller:"body",
        start:"top 70%",
        end:"65%",
        scrub:1
    }
})


gsap.from("#small , #one",{
    scale:0.8,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#small, #one",
        scroller:"body",
        start:"top 70%",
        end:"65%",
        scrub:1
    }
})

// for colons 
gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
         trigger:"#colon1",
         scroller:"body",
         //markers:true,
         start:"top 55%",
         end:"top 45%",
         scrub:4
    }
}) 
gsap.from("#para, #colon2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#para, #colon2",
        scroller:"body",
       // marker:true,
        start:"top 55%",
        end:"top 50%",
        scrub:4
    }
})


gsap.from(".elem",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:".elem",
        scroller:"body",
       // marker:true,
        start:"top 55%",
        end:"top 50%",
        scrub:4
    }
})
gsap.from("#page4, h1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#page4, h1",
        scroller:"body",
        start:"top 40%",
        end:"top-50%",
        scrub:4
    }
})