class ScrollWatcher{
    constructor(target,time){
        this.new(target,time);
    }
    previous_state={
        y:window.scrollY,
        x:window.scrollX,
        delta_x:0,
        delta_y:0,
        duration:0,
        timestamp:0.0,
        acceleration_x:0,
        acceleration_y:0
    }
    new(target , time){
        target.addEventListener("scroll",(event)=>{
            watchScroll(event,time);
        });
    }
    watchScroll(ev,time){
        console.log(ev,time);
        // var timestamp = ev.timeStamp;
        // var duration = timestamp - previous_state.timestamp;
        // if(duration<1000){
        //     var acceleration_x = (window.scrollX - previous_state.x)/(duration/1000);
        //     var acceleration_y = (window.scrollY - previous_state.y)/(duration/1000);
        //     var previous_x = previous_state.x;
        //     var previous_y = previous_state.y;
        //     previous_state={
        //         y:window.scrollY,
        //         x:window.scrollX,
        //         delta_x:window.scrollX-previous_x,
        //         delta_y:window.scrollY-previous_y,
        //         duration:duration,
        //         timestamp:ev.timeStamp,
        //         acceleration_x:acceleration_x,
        //         acceleration_y:acceleration_y
        //     }
        // }else{
        //     previous_state={
        //         y:window.scrollY,
        //         x:window.scrollX,
        //         delta_x:0,
        //         delta_y:0,
        //         duration:duration,
        //         timestamp:ev.timeStamp,
        //         acceleration_x:0,
        //         acceleration_y:0
        //     }
        // }
        // console.log(previous_state);
    }


    log(){
        console.log("ScrollWatcher");
    }


}
export default ScrollWatcher