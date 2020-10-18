// Handles 'active' navbar class assignment during scroll.
$(document).ready(function() {
    // Navbar elements.
    let navbar__ico = $('#navbar__ico')
    let navbar__team = $('#navbar__team')
    let navbar__contact = $('#navbar__contact')

    // Called every time user scrolls.
    $(window).scroll(function() {
        // Assign user current position to variable.
        let currentPos = $(window).scrollTop()

        // Check if user is in 'Landing' section.
        if (currentPos < 250) {
            navbar__ico.addClass('active');
        } else {
            navbar__ico.removeClass('active');
        }

        // Check if user is in 'Team' section.
        if ((950 > currentPos) && (currentPos > 250)) {
            navbar__team.addClass('active');
        } else {
            navbar__team.removeClass('active');
        }

        // Check if user is in 'Contact' section.
        if (currentPos > 950) {
            navbar__contact.addClass('active');
        } else {
            navbar__contact.removeClass('active');
        }
    });
});