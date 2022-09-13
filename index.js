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

// CODE BELOW WORKS NEEDS REFINING
// const contact = document.querySelector("#contact");

// function elementInViewport(el) {
//     var top = el.offsetTop;
//     var left = el.offsetLeft;
//     var width = el.offsetWidth;
//     var height = el.offsetHeight;

//     while (el.offsetParent) {
//         el = el.offsetParent;
//         top += el.offsetTop;
//         left += el.offsetLeft;
//     }
//     return (
//         top < (window.pageYOffset + window.innerHeight) &&
//         left < (window.pageXOffset + window.innerWidth) &&
//         (top + height) > window.pageYOffset &&
//         (left + width) > window.pageXOffset
//     );
// }
// window.addEventListener("scroll", () => {
//     const isSeen = elementInViewport(contact);
//     if (isSeen) {
//         contact.classList.add("goleft");
//     }
// }
// )
