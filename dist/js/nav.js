$(document).ready(function () {
    $('.tabs ul li').click(function () {
        // Remove active class from all tabs
        $('.tabs ul li').removeClass('is-active');

        // Add active class to clicked tab
        $(this).addClass('is-active');

        // Hide all tab content divs
        $('.tab-content').hide();

        // Show clicked tab content
        var target = $(this).data('target');
        $('#' + target).show();
    });
});
