

$(document).ready(function(){
  
    $(window).on('scroll', function(){
      
        var scroll = $(this).scrollTop();

        if(scroll > 70){
            $('.navbar').addClass('nav_bg');
        }
        else{
            $('.navbar').removeClass('nav_bg');
        }
       

        if(scroll > 300){
            $('.back_to_top').show(1000);
        }
        else{
            $('.back_to_top').hide(1000);
        }

    });
    
   $('.back_to_top').on('click', function(){
      $('html, body').animate({scrollTop:0}, 1000);
   });

   new VenoBox({
    selector: '.my-image-links',
    numeration: true,
    infinigall: true,
    share: true,
    spinner: 'rotating-plane'
});


})


