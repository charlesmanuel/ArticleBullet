$(document).ready(function(){
  $(".test").focusout(function(){
      var element = $(this);
      if (!element.text().replace(" ", "").length) {
          element.empty();
      }
  });

  $('.minusbutton').click(function(){
    $(this).closest("li").remove();
  });

  $( ".test2" ).keypress(function() {
  console.log( "Handler for .keypress() called." );
  });
});


$(window).on("load", function() {
  console.log("focusworking")
  $("#focused").focus();
});
