function IO(params) {
    let observer_fn=function(entries,observer){
        entries.forEach((entry,index)=>{
            if(entry.isVisible==true || entry.isIntersecting==true)
                console.log(Date.now() ,":",entry);
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
    var IOoptions={
        root: null,
        rootMargin: "0px",
        threshold: 0.8,
    }
    
    let gallery_observer = new IntersectionObserver(
        (entries,observer)=>{observer_fn(entries,observer)}, IOoptions);
        let gallery = document.getElementsByClassName("gallery")[0];
        let wrapper = document.querySelector(".wrapper");
        gallery_observer.observe(wrapper);
}
export {IO};




