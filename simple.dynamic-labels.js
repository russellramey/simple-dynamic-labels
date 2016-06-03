// Document Ready
$( document ).ready(function() {
    $('.sdl-form input, .sdl-form textarea, .sdl-form select').simple_dynamic_labels();
});
// Simple Dynamic Labels
$.fn.simple_dynamic_labels = function (){
    $(this).blur(function() {
        if($(this).val() ) {
            $(this).parent().find('label').addClass('has-value');
        } else {
            $(this).parent().find('label').removeClass('has-value');
        }
    });
};