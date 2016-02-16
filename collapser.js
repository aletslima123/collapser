//version: 1.0 - https://github.com/aletslima123/collapser
(function($) {
    $.fn.collapser = function(options) {

      options = $.extend({
            opened: false
        }, options);

      $(this).bind("click touchstart", function(){        
        $(this)
          .next()
          .stop(true, true)
          .slideToggle();
      });
      
      if(options.opened)
        $(this).trigger('click');
    };

})(jQuery);
