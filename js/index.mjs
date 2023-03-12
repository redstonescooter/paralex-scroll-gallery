import ScrollWatcher from "./ScrollWatcher.mjs";
import animateNewsPaper from "./animate.js";
import animateScroll from "./animateScroll.mjs";
import {IO} from "./elementWatcher.mjs"
animateNewsPaper();
animateScroll();
IO();
var SCROLL_DIRECTION ="up";


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

    
    var myScrollWatcher = new ScrollWatcher();
    myScrollWatcher.new(document.getElementsByClassName("scroll_test")[0],1000);

}

