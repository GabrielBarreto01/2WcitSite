$(function () {
    $('.navbar ul li a').click(function () {
        var parentElement = $(this).parent();
        if (parentElement.attr('class') != 'active') {
            parentElement.addClass('active').siblings().removeClass('active');
            var selectionId = $(this).attr('id');
            if (selectionId) {
                $('section.' + selectionId).show().siblings().hide();
            }
        }
    });
});

