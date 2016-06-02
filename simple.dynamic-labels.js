// Document Ready
$( document ).ready(function() {
    $('.sdl-form input, .sdl-form textarea, .sdl-form select').simple_dynamic_labels();
});
// Simple Dynamic Labels
$.fn.simple_dynamic_labels = function (){
	var input = $('input');
	var textarea = $('textarea');
    $(this).blur(function() {
        if($(this).val() ) {
            $(this).parent().children('label').addClass('has-value');
        } else {
            $(this).parent().children('label').removeClass('has-value');
        }
    });
};