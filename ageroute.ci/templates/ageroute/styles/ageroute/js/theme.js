/* Copyright (C) YOOtheme GmbH, http://www.gnu.org/licenses/gpl.html GNU/GPL */

jQuery(function($) {

    var config = $('html').data('config') || {};

    // Social buttons
    $('article[data-permalink]').socialButtons(config);
    
    //Plyr setup
    plyr.setup({autoplay:true, controls:['play', 'progress', 'current-time', 'mute', 'volume', 'captions', 'fullscreen']});
    
    //Counter on window scroll
    $(document).scroll(function() {
        
        if( window.scrollY > 160 && window.scrollY < 4000 )
            $('.tm-float').css('right','0');
        else $('.tm-float').css('right','-100px');
        
        $('.count').each(function(){
                       
            if($(this).is(':onScreen')) {
                
                if ( $(this).prop('Counter') === undefined){

                    $(this).prop('Counter',0).animate({
                        Counter: $(this).text()
                    }, {
                        duration: 2000,
                        easing: 'swing',
                        step: function (now) {
                            $(this).text(Math.ceil(now));
                        }
                    });
                }  
            }
        });    
    });
    
});
