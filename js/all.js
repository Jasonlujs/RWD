$(document).ready(function() {
   $('.showmenu').on('click',  function(e){
      e.preventDefault();
      $('body').toggleClass('menu-show');
  });
$('i').click(function(){
    $(this).toggleClass('fa-heart fa-heart-o');
});
});