// Document Ready
$( document ).ready(function() {
    $('.sdl-form').simple_dynamic_labels();
});
// Simple Dynamic Labels
$.fn.simple_dynamic_labels = function (){

    // Find inputs
    var inputs = $(this).find('input, textarea, select');

    // Find labels
    var labels = $(this).find('label.sdl-label');
        $(labels).parent().css('position', 'relative');

    // Set active class
    var active = "has-value";

    // For each input
    $(inputs).each(function(){
        // On focus
        $(this).focus(function() {
            if(!$(this).val()) {
                $(this).parent().find(labels).addClass(active);
            }
        });

        // On blur
        $(this).blur(function() {
            if($(this).val() ) {
                $(this).parent().find(labels).addClass(active);
            } else {
                $(this).parent().find(labels).removeClass(active);
            }
        });
    });
};