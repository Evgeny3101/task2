$(document).ready( function() {

  $(".checkbox-list__icon-up").hide();
  $(".checkbox-list").click( function() {

    $(".checkbox-list__menu").slideToggle(".active");
    $(".checkbox-list__icon-up").toggle();
    $(".checkbox-list__icon-down").toggle();

  });

});


