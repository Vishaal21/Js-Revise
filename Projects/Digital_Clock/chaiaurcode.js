const clock = document.querySelector("#clock")

setInterval(()=>{
    const time = new Date()
    // console.log(time.toTimeString());
    clock.innerHTML = time.toLocaleTimeString();
}, 1000)