function loading() {
    var tl = gsap.timeline()

    tl.to(".yellow", {
        top: "-100%",
        delay: 0.2,
        duration: "0.5",
        ease: "expo.out",

    });
    tl.from(".yellow2", {
        top: "100%",
        delay: 0.6,
        duration: 0.5,
        ease: "expo.out"
    }, 'tj');
    tl.to("#loader, h1", {
        delay: 0.5,
        duration: 0.5,
        color: "black"
    }, 'tj'
    );
    tl.to("#loader", {
        opacity: 0,
    }, 'hj');
    tl.to("#loader", {
        display: "none",

    }, 'hj');
}
loading()

function loco() {
    const scroll = new LocomotiveScroll({
        el: document.querySelector('.main'),
        smooth: true
    });


    document.querySelector(".footer h2").addEventListener("click", () => {
        scroll.scrollTo(0)
    })



    var elems = document.querySelectorAll(".elem")
    var page2 = document.querySelector(".page2")
    elems.forEach(function (ele) {
        ele.addEventListener("mouseenter", function () {
            var bgimg = ele.getAttribute("data-img")
            page2.style.backgroundImage = `url(${bgimg})`
        })
    })

}
loco();


var navright = document.querySelector(".navright");
var icon = document.querySelector(".navright  i");

navright.addEventListener("click", () => {
    console.log("Icon clicked");

    navright.classList.toggle("show-links");
});
