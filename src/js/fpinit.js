$(function() {
    // Initialize fullPage
    $('#fullpage').fullpage({
        navigation: true,
        controlArrows: false,
        continuousHorizontal: true,
        navigationTooltips: ['Welcome', 'Services', 'Career'],
        //sectionsColor: ['#fffff', '#e67e22', '#c0392b'],
        onLeave: function(index, nextIndex, direction) {
            // Remove the inactive class from all arrows
            $('#fp-nav > span').removeClass('inactive');

            // Add inactive class if needed
            if (nextIndex == 1) {
                $('#fp-nav > span.prev').addClass('inactive');
            } else if (nextIndex == $('.fp-section').length) {
                $('#fp-nav > span.next').addClass('inactive');
            }
        }
    });



    // Re-center the fullPage navigation
    $('#fp-nav').css({ 'margin-top': '-' + ($('#fp-nav').height() / 2) + 'px' });

});

