jQuery(function() {
  const $elements = $(".checkbox-list");

  $elements.find(".button__icon-up").hide();

  $elements.on('click', function(event) {
    const target = event.currentTarget,
    $iconUp = $(target).find(".button__icon-up"),
    $iconDown = $(target).find(".button__icon-down"),
    $menu = $(target).find(".checkbox-list__menu");

    $menu.slideToggle(".active");
    $iconUp.toggle();
    $iconDown.toggle();
  });
});
