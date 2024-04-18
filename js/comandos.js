$(function() {
    console.log ("funcionando");
});

var title = $("#title");

$(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
        title.css("background-color", "rgba(0, 0, 0, 0.5")
    } else {
        title.css("background-color", "rgba(0,0,0,1")
    }


});

$(".link").click(function (event) {

    var target = $(this.hash);
    console.log(target)

    if (target.length) {
        
        event.preventDefault();

        $("html, body").animate({
            scrollTop: target.offset().top
        },3000);
    }

   

});