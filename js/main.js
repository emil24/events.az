// selector for select-dropdown list
$(".select-dropdown > ul > li").click(function() {
  $(this)
    .parents(".select-dropdown")
    .find('input[type="text"]')
    .val($(this).text());
});

// remove all active classes on the other select-dropdowns
$(".select-dropdown").click(function() {
  $(".select-dropdown").not($(this)).removeClass("active");
  $(this).toggleClass("active");
});


// this event is to close all open select-options when the user clicks off.
$("html").click(function(event) {
  if (!$(event.target).closest(".select-dropdown").length) {
    $(".select-dropdown").removeClass("active");
  }
});
