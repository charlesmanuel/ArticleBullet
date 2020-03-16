$(document).ready(function(){
  $(".test").focusout(function(){
      var element = $(this);
      if (!element.text().replace(" ", "").length) {
          element.empty();
      }
  });

  $('.minusbutton').click(function(){
    console.log("minus successfully used");
    $(this).closest("li").remove();
  });
  $('.newpt2').click(function(){
    //$("<li><textarea class='test2' rows='1' placeholder='Bullet 3'></textarea><div class='btncol' align='left'><button class='btn btn-danger minusbutton' href='#'>&#x2212;</button><button class='btn btn-primary addbutton' href='#'>&#x22ef;</button></div></li>").appendTo( "#ultext");
    var nextpt = $( "#secretpt" ).clone(true);
    $(nextpt).css("display", "list-item");
    $("#ultext").append(nextpt);
  })
});


$(window).on("load", function() {
  console.log("focusworking")
  $("#focused").focus();
});
