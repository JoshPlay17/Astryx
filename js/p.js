particlesJS("particles-js", {
    particles: {
        number: {
            value: 50
        },
        color: {
            value: "#ffffff"
        },
        shape: {
            type: "star"
        },
        opacity: {
            value: 0.4
        },
        size: {
            value: 2.5
        },
        line_linked: {
            enable: true,
            distance: 130,
            color: "#8b5cf6",
            opacity: 0.2,
            width: 1
        },
        move: {
            enable: true,
            speed: 1.4,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out"
        }
    },

    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: true,
                mode: "grab"
            },
            onclick: {
                enable: true,
                mode: "push"
            }
        },

        modes: {
            grab: {
                distance: 150,
                line_linked: {
                    opacity: 0.5
                }
            },

            push: {
                particles_nb: 4
            }
        }
    },

    retina_detect: true
});