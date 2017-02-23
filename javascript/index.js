$(function () {
    $("#box").fullpage({
        afterLoad: function (anchorLink, index) {
            $(".section").removeClass("animation");
            setTimeout(function () {
                $(".section").eq(index - 1).addClass("animation");
            })
        }
    });

})


