function scrollToAnchor(selector){
    var element = $(selector);
    $('html,body').animate({scrollTop: element.offset().top},'slow');
}

$(document).ready(function() {
    jQuery("#experiences_scroll").click(function() {
        scrollToAnchor('#experiences');
    });
    jQuery("#formation_scroll").click(function() {
        scrollToAnchor('#formation');
    });
    jQuery("#competences_scroll").click(function() {
        scrollToAnchor('#competences');
    });
    jQuery("#interets_scroll").click(function() {
        scrollToAnchor('#interets');
    });
});
