class ScrollWatcher{
    constructor(target,time){
        // this.new(target,time);
    }
    previous_state={
        y:0,
        x:0,
        delta_x:0,
        delta_y:0,
        duration:0,
        timestamp:0.0,
        acceleration_x:0,
        acceleration_y:0
    }
    new(target , time){
        this.previous_state.y={
            ...this.previous_state,
            y:target.scrollTop,
            x:target.scrollLeft
        }
        target.addEventListener("scroll",(event)=>{
            this.watchScroll(event,time,target);
        });
    }
    watchScroll(ev,time,target){
        // console.log(ev,time);  
        var previous_state = this.previous_state;
        var timestamp = ev.timeStamp;
        var duration = timestamp - previous_state.timestamp;
        console.log(duration , time);
        if(duration<time){
            var acceleration_x = (target.scrollLeft - previous_state.x)/(duration/1000); // pixel per seconds
            var acceleration_y = (target.scrollTop - previous_state.y)/(duration/1000);
            var previous_x = previous_state.x;
            var previous_y = previous_state.y;
            this.previous_state={
                ...previous_state,
                y:target.scrollTop,
                x:target.scrollLeft,
                delta_x:target.scrollLeft-previous_x,
                delta_y:target.scrollTop-previous_y,
                duration:duration,
                timestamp:ev.timeStamp,
                acceleration_x:acceleration_x,
                acceleration_y:acceleration_y
            }
        }else{
            this.previous_state={
                ...previous_state,
                y:target.scrollTop,
                x:target.scrollLeft,
                delta_x:0,
                delta_y:0,
                duration:duration,
                timestamp:ev.timeStamp,
                acceleration_x:0,
                acceleration_y:0
            }
        }
        console.log(previous_state);
    }


    log(){
        console.log("ScrollWatcher");
    }


}
export default ScrollWatcher