$(document).ready(function () {
    setTimeout(function () {
        $('.load-wrapper').fadeOut(500);
    }, 1000)

    setTimeout(function () {
        // 桌機版箭頭跟名字
        gsap.to('.swiper-button', { duration: 0.3, scale: 3.5, repeat: 3, yoyo: true });
        gsap.to('.title_name', { duration: 0.5, y: -20, repeat: -1, yoyo: true });

        // 手機選單
        const t1 = gsap.timeline({});
        t1.to('.nav_list', { duration: 0.5, height: 84, })
            .to('.nav_list>a', { duration: 0.5, keyframes: [{ scale: 1.5 }, { scale: 1 }], stagger: 0.1 }, 0.3);
    }, 1200)


})

var swiper = new Swiper(".mySwiper", {

    navigation: {
        nextEl: ".swiper-right",
        prevEl: ".swiper-left",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    on: {
        slideNextTransitionStart: function (swiper) {
            gsap.to('.search', { duration: 0.3, x: -2000 })
        },
        slideNextTransitionEnd: function () {
            // gsap.to('.search',{clearProps:"all" })
            gsap.to('.search', { duration: 0.8, ease: 'bounce.out', x: 0 })
        },
        slidePrevTransitionEnd: function (swiper) {
            gsap.to('.search', { duration: 0.1, x: -10, repeat: 3, yoyo: true })
        },
    },
});


