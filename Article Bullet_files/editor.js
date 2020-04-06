$(document).ready(function(){
  $(".test").focusout(function(){
      var element = $(this);
      if (!element.text().replace(" ", "").length) {
          element.empty();
      }
  });
});


$(window).on("load", function() {
  console.log("focusworking")
  $("#focused").focus();
});
