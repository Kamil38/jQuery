$(document).ready( function()  {
    //test
    // $('main').hide(3000).delay(1000).show(500);

    //muis event
    $('figure img').mouseenter( function() {
        $(this).fadeTo(600, .01);
    }).mouseleave(function() {
        $(this).fadeTo(1000, 1);
    }).click( function() {
        $(this).next().toggle(700);
    });

    //buttons
    $('#btnFadeOut').click(function(){
        $('section img').fadeOut(3000, function(){
            $('#btnFadeOut').text('Its Gone');
            $('#btnFadeIn').text('Fade In');
        });
    });
    $('#btnFadeIn').click(function(){
        $('section img').fadeIn(3000, function(){
            $('#btnFadeOut').text('Fade Out');
            $('#btnFadeIn').text('Its back');
        });
    });
    $('#btnFadeToggle').click(function(){
        $('section img').fadeToggle(1000, function(){
            $('#btnFadeOut').text('Fade Out');
            $('#btnFadeIn').text('Fade In');
        });
    });

    //footer
    $('footer').click( function() {
        $(this).animate( {
            top: '-=50px',
            opacity: '-=.2'
        }, 900)
    }).dblclick ( function() {
        $(this).animate( {
            top: '0',
            opacity: '1'
        }, 900)
    });
});