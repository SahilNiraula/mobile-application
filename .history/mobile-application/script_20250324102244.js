$(document).ready(function() {
    $('.hamburger').click(function() {
        $('.nav').toggleClass('active');
        $(this).toggleClass('active');
    });
    
    $(document).click(function(event) {
        const isNavClick = $('.nav').is(event.target) || $('.nav').has(event.target).length > 0;
        const isHamburgerClick = $('.hamburger').is(event.target) || $('.hamburger').has(event.target).length > 0;
        
        if (!isNavClick && !isHamburgerClick && $('.nav').hasClass('active')) {
            $('.nav').removeClass('active');
            $('.hamburger').removeClass('active');
        }
    });
    
    $('.feature-card').click(function() {
        $('.feature-card').removeClass('active');
        
        $(this).addClass('active');
        
        $('html, body').animate({
            scrollTop: $(this).offset().top - 100
        }, 500);
    });
    
    $('.feature-card').hover(
        function() {
            $(this).find('.card-icon i').addClass('fa-bounce');
        },
        function() {
            $(this).find('.card-icon i').removeClass('fa-bounce');
        }
    );
    
    $('a[href^="#"]').click(function(e) {
        e.preventDefault();
        
        const target = $($(this).attr('href'));
        
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top - 80
            }, 800);
        }
    });
    
    $(window).scroll(function() {
        $('.feature-card').each(function() {
            const cardPosition = $(this).offset().top;
            const scrollPosition = $(window).scrollTop() + $(window).height() * 0.8;
            
            if (scrollPosition > cardPosition) {
                $(this).addClass('animated');
            }
        });
    });
});