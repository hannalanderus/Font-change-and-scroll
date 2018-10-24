    
$(window).scroll(function () {
            if ($(this).scrollTop() > 800) {
                $('#scroll-top').fadeIn('fast');
            } else {
                $('#scroll-top').fadeOut('fast');
            }
        });
	
        //Click event to scroll to top
        $('#scroll-top').click(function () {
         
          $('html, body').animate({scrollTop: 0},2000, 'easeOutExpo');
     
            return false;
        });

$("#changeFont").change(function(){
    var font = $("option:selected", this).attr("class");
    $(".block span").attr("class", font);
});
$("#changeFontHeadline").change(function(){
    var font = $("option:selected", this).attr("class");
    $("h1").attr("class", font);
});

