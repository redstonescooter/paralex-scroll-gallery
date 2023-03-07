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

    function setup_scrolling_state() {
        var previous_state={
            y:window.scrollY,
            x:window.scrollX,
            delta_x:0,
            delta_y:0,
            duration:0,
            timestamp:0.0,
            acceleration_x:0,
            acceleration_y:0
        }
        var Scrolling_state = function(ev){
            // console.log(ev);
            var timestamp = ev.timeStamp;
            var duration = timestamp - previous_state.timestamp;
            if(duration<1000){
                var acceleration_x = (window.scrollX - previous_state.x)/(duration/1000);
                var acceleration_y = (window.scrollY - previous_state.y)/(duration/1000);
                var previous_x = previous_state.x;
                var previous_y = previous_state.y;
                previous_state={
                    y:window.scrollY,
                    x:window.scrollX,
                    delta_x:window.scrollX-previous_x,
                    delta_y:window.scrollY-previous_y,
                    duration:duration,
                    timestamp:ev.timeStamp,
                    acceleration_x:acceleration_x,
                    acceleration_y:acceleration_y
                }
            }else{
                previous_state={
                    y:window.scrollY,
                    x:window.scrollX,
                    delta_x:0,
                    delta_y:0,
                    duration:duration,
                    timestamp:ev.timeStamp,
                    acceleration_x:0,
                    acceleration_y:0
                }
            }
            console.log(previous_state);


            let body = document.body,
            html = document.documentElement;
            // console.log("height:",body.scrollHeight,body.offsetHeight,body.clientHeight,html.clientHeight,html.scrollHeight,html.offsetHeight,document.height);
            // console.log("width:",body.scrollWidth,body.offsetWidth,html.clientWidth,html.scrollWidth,html.offsetWidth);
            // console.log("scrollY+:",window.scrollY + window.innerHeight -17, "\n",
            //  "scrollX+:",window.scrollX + window.innerWidth -17);
    
            let height = Math.max( body.scrollHeight, body.offsetHeight, 
                                html.clientHeight, html.scrollHeight, html.offsetHeight );
            let width = Math.max( body.scrollWidth, body.offsetWidth, 
                html.clientWidth, html.scrollWidth, html.offsetWidth );  
        }
        document.addEventListener("scroll",Scrolling_state)
    }
    // setup_scrolling_state();
    
    var myWatcher = new ScrollWatcher();
    myWatcher.log();
    myWatcher.new(document.getElementsByClassName("scroll_test")[0],1000);

    console.log(document.getElementsByClassName("scroll_test")[0].scrollTop);
    console.log(document.scrollLeft);

    let gallery_observer = new IntersectionObserver(
    (entries,observer)=>{observer_fn(entries,observer)}, options);
    let gallery = document.getElementsByClassName("gallery")[0];
    let wrapper = document.querySelector(".wrapper");
    gallery_observer.observe(gallery);
}

