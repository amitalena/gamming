function gammer() {
    gsap.from(".navbar h2,.list1 li, .navbar .sr ", {
        y: -500,
        stagger: 0.3,
        duration: 1,
        delay: 0.5,
        opcity: 0
    })
    gsap.from(".music-content h1", {
        y: 100,
        scale: 0.8,
        stagger: 0.3,
        duration: 1.5,
        delay: 1.5,
        ease: "bounce",
        opcity: 0,
        scrollTrigger: {
            trigger: ".music content h1",
            scroller: "body",
            // markers: "true",
            start: "top 25%",
            ende: "top 30%",
            scrub: 3
        }
    })
    gsap.from(".music-content p", {
            y: 200,
            stagger: 0.3,
            duration: 0.5,
            delay: 0.5,
            ease: "bounce",
            opcity: 0,
            scrollTrigger: {
                trigger: ".music-content h1",
                scroller: "body",
                start: "top 55%",
                ende: "top 45%",
                scrub: 3
            }
        })
        // about game
    gsap.from("#about h1, #about p", {
        y: -100,
        scale: 0.5,
        duration: 1.5,
        opcity: 0,
        stagger: 0.3,
        scrollTrigger: {
            trigger: "#about h1, #about p",
            scroller: "body",
            start: "top 40%",
            ende: "top 35%",
            scrub: 4
        }
    })
    gsap.from(".capt", {
            y: 100,
            scale: 0.8,
            opacity: 0,
            duration: 1.5,
            delay: .5,
            stagger: 0.4,
            scrollTrigger: {
                trigger: ".capt",
                scroller: "body",
                // markers: true,
                start: "top 80%",
                end: "top 75%",
                scrub: 1
            }
        })
        //requirmeent
    gsap.from(".pubg-1 h1", {
        scale: 0.8,
        delay: 1.5,
        color: "black",
        duration: 1.5,
        opcity: 0,
        scrollTrigger: {
            trigger: ".pubg-1 h1",
            scroller: "body",
            start: "top 72%",
            ende: "top 85%",
            scrub: 4
        }
    })
    gsap.from(".req1 img, .req1 span", {
        y: 100,
        scale: 0.8,
        duration: 1.5,
        delay: 1.5,
        ease: "elastic",
        stagger: 0.2,
        scrollTrigger: {
            trigger: ".req1 img, .req1 span",
            scroller: "body",
            start: "top 45%",
            end: "top 50%",
            scrub: 3

        }
    })
    gsap.from(".upgame iframe", {
        scale: 0.8,
        duration: 0.5,
        delay: 0.5,
        stagger: 0.3,
        scrollTrigger: {
            trigger: ".upgame iframe",
            scroller: "body",
            start: "top 75%",
            end: "top 70%",
            scrub: 3

        }
    })
    gsap.from(".upgame a", {
        x: 100,
        scale: 0.8,
        duration: 1.5,
        delay: 0.5,
        ease: "back",
        stagger: 0.3,
        scrollTrigger: {
            trigger: ".upgame a",
            scroller: "body",
            start: "top 35%",
            end: "top 40%",
            scrub: 3

        }
    })
    gsap.from(".member .member2", {
        scale: 0.8,
        duration: 2.5,
        delay: 0.5,
        stagger: 0.3,
        scrollTrigger: {
            trigger: ".member .member2",
            scroller: "body",
            start: "top 55%",
            end: "top 50%",
            scrub: 3

        }
    })
}
gammer();