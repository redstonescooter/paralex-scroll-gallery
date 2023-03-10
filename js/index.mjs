import ScrollWatcher from "./ScrollWatcher.mjs";

var SCROLL_DIRECTION ="up";

let observer_fn=function(entries,observer){
    entries.forEach((entry,index)=>{
        // console.log(Date.now() ,":",entry);
    });

    function transformScroll(event) {
        if (!event.deltaY) {
          return;
        }
      
        event.currentTarget.scrollLeft += event.deltaY + event.deltaX;
        event.preventDefault();
        // if(screen.scroll)
    }
    // let root = document.scrollingElement || document.documentElement;
    // if((entries[0].boundingClientRect.top >0 && SCROLL_DIRECTION=="down")||(entries[0].boundingClientRect.top <0 && SCROLL_DIRECTION=="up")){
    //     document.addEventListener("wheel",transformScroll,{passive:false})
    //     console.log("transform scroll activated");
    // }
    // if((entries[0].boundingClientRect.top <0 && SCROLL_DIRECTION=="down")||(entries[0].boundingClientRect.top >0 && SCROLL_DIRECTION=="up")){
    //     document.removeEventListener("wheel",transformScroll,{passive:false})
    //     console.log("transform scroll un-activated");
    // }
}
document.addEventListener("DOMContentLoaded",content_load);
function content_load(ev){
    console.log("loaded");
    let options = {
        root: null,
        rootMargin: '0px',
        threshold: [0,0.5,0]
    }
    let Handle_wheel = function(event){
        // console.log(event);
        if(event.deltaY <=0){
            SCROLL_DIRECTION="up"
        }else{
            SCROLL_DIRECTION="down"
        }
        console.log(SCROLL_DIRECTION);
    }
    document.addEventListener("wheel",Handle_wheel);

    
    var myWatcher = new ScrollWatcher();
    myWatcher.new(document.getElementsByClassName("scroll_test")[0],1000);


    let gallery_observer = new IntersectionObserver(
    (entries,observer)=>{observer_fn(entries,observer)}, options);
    let gallery = document.getElementsByClassName("gallery")[0];
    let wrapper = document.querySelector(".wrapper");
    gallery_observer.observe(gallery);
}

