const link1 = document.querySelector("#link1");
const link2 = document.querySelector("#link2");
const link3 = document.querySelector("#link3");
link1.addEventListener("click", () => {
    link1.classList.add("active");
    link2.classList.remove("active");
    link3.classList.remove("active");
})
link2.addEventListener("click", () => {
    link2.classList.add("active");
    link1.classList.remove("active");
    link3.classList.remove("active");
})
link3.addEventListener("click", () => {
    link3.classList.add("active");
    link1.classList.remove("active");
    link2.classList.remove("active");
})

const mail = document.querySelector("#mail");
const message = document.querySelector("#message");
const send = document.querySelector("#send");

send.addEventListener("click",(e)=>{
    e.preventDefault();
    const subject = "Message From Portfolio";
    const body = message.value;
    window.open(`mailto:gomezrenniel9@gmail.com?subject=${subject}&body=${body}`);
})

const bottomTrigger = window.innerHeight / 4 * 3;
const percentTrigger = window.innerHeight;

const scroll = ()=>{
    
    const boxes = document.querySelectorAll(".box");
    const percent100 = document.querySelectorAll(".percent100");
    const percent75 = document.querySelectorAll(".percent75");
    const percent50 = document.querySelectorAll(".percent50");

    boxes.forEach((box)=>{
        const boxTop = box.getBoundingClientRect().top;
        
        if (boxTop < bottomTrigger) {
            box.classList.add("show");
        }
        else{
            box.classList.remove("show");
        }
    });

    percent100.forEach((p100)=>{
        const boxTop = p100.getBoundingClientRect().top;
        
        if (boxTop < percentTrigger) {
            p100.classList.add("w-100");
        }
        else{
            p100.classList.remove("w-100");
        }
    });

    percent75.forEach((p75)=>{
        const boxTop = p75.getBoundingClientRect().top;
        
        if (boxTop < percentTrigger) {
            p75.classList.add("w-75");
        }
        else{
            p75.classList.remove("w-75");
        }
    });

    percent50.forEach((p50)=>{
        const boxTop = p50.getBoundingClientRect().top;
        
        if (boxTop < percentTrigger) {
            p50.classList.add("w-50");
        }
        else{
            p50.classList.remove("w-50");
        }
    });
    
    
}


addEventListener("scroll",scroll)
addEventListener("touchmove",scroll)
