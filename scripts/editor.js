$(document).ready(function(){
  $(".dropdown-content").hide();
  $(".test").focusout(function(){
      var element = $(this);
      if (!element.text().replace(" ", "").length) {
          element.empty();
      }
  });


  $('.textbutton').click(function(){
    var currentli = $(this).closest("li");
    var currenttext = $(currentli).children(".test2");
    $(currenttext).addClass("texticonadded");

    var subpt = $("#secretul").clone(true);
    $(subpt).css("display", "block");
    if ($(this).hasClass("subsub")){
      $(subpt).find("textarea").css("width", "81.5%");
      $(subpt).find(".btncol").css("width", "62.27px");
      console.log("sucessfully detected subsub");
    }
    $(this).closest("li").append(subpt);
    $(this).closest(".dropdown-content").hide();

  });
  $('.minusbutton').click(function(){
    console.log("minus successfully used");
    $(this).closest("li").remove();
  });

  $('.addbutton').click(function(){
    console.log("add successfully used");
    var tt = $(this).siblings(".dropdown-content");
    if($(tt).is(":visible")) {
      $(tt).hide();
    }
    else {
      $(tt).show();
    }
  });



  $('.newpt2').click(function(){
    //$("<li><textarea class='test2' rows='1' placeholder='Bullet 3'></textarea><div class='btncol' align='left'><button class='btn btn-danger minusbutton' href='#'>&#x2212;</button><button class='btn btn-primary addbutton' href='#'>&#x22ef;</button></div></li>").appendTo( "#ultext");
    var nextpt = $( "#secretpt" ).clone(true);
    $(nextpt).css("display", "list-item");
    $("#ultext").append(nextpt);
  });

});


$(window).on("load", function() {
  console.log("focusworking")
  $("#focused").focus();
});

$(document).on("click", function(event){
  var $trigger = $(".btncol");
  if($trigger !== event.target && !$trigger.has(event.target).length){
    $(".dropdown-content").hide();
  }
});
