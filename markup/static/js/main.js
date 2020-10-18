import { tns } from "tiny-slider/src/tiny-slider";


AOS.init({
    duration: 1200,
});

/*
Lazyload images
*/

let lazyLoadInstance = new LazyLoad({
    elements_selector: '.lazy',
    // load_delay: 497,
    use_native: true
});


if (lazyLoadInstance) {
    lazyLoadInstance.update();
}


document.addEventListener("DOMContentLoaded", function(){


    let $aboutSlider = document.querySelector('.about__slider');

        $aboutSlider = tns({
            container: '.about__slider',
            autoHeight: true,
            items: 1,
            mode: 'gallery',
            // slideBy: 'page',
            // autoplay: true,
            mouseDrag: true,
            controls: false,
            nav: true,
            // autoplayButton: false,
        });



});


// Sliders
