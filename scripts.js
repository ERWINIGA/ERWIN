$(document).ready(function(){
    $('.videos-slider').slick({
        infinite: true,  
        slidesToShow: 1, 
        slidesToScroll: 1,
        autoplay: true,    
        autoplaySpeed: 5000, 
        arrows: true,
        dots: true,        
        responsive: [
            {
                breakpoint: 768, 
                settings: {
                    slidesToShow: 1, 
                    slidesToScroll: 1
                }
            }
        ]
    });
});