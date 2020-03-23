$(document).ready(function(){
  //hide all pre-generated dropdown menus
  $(".test").focusout(function(){
      var element = $(this);
      if (!element.text().replace(" ", "").length) {
          element.empty();
      }
  });

  //adds text icon to textfield, adds copy of sub bullet underneath
  $('.textbutton').click(function(){
    var currentli = $(this).closest("li");
    var currenttext = $(currentli).children(".test2");

    if (!currenttext.hasClass("texticonadded")){
      var myNumber = $(currenttext).data('icons');
      myNumber = myNumber + 1;
      $(currenttext).data('icons', myNumber);
    }

    $(currenttext).addClass("texticonadded");

    var subpt = $("#secretul").clone(true);
    $(subpt).css("display", "block");
    $(this).closest("li").append(subpt);
    $(this).closest(".dropdown-content").hide();

    console.log(currenttext.data('icons'));

  });

  //add image
  $('.imgbutton').click(function(){
    var currentli = $(this).closest("li");
    var currenttext = $(currentli).children(".test2");

    if (!currenttext.hasClass("imgiconadded")){
      var myNumber = $(currenttext).data('icons');
      myNumber = myNumber + 1;
      $(currenttext).data('icons', myNumber);
    }

    $(currenttext).addClass("imgiconadded");

    var subimg = $("#secretimg").clone(true);
    $(subimg).css("display", "block");
    $(this).closest("li").append(subimg);
    console.log(currenttext.data('icons'));

  });

  //opens up modal link input window, preps input list to receive link
  $('.linkbtn').click(function(){
    var currentli = $(this).closest("li");
    var currenttext = $(currentli).children(".test2");
    $(currenttext).addClass("awaitingLink");
    $("#myModal").css("display", "block");


  });

  //cancel button for link popup
  $('#cancellink').click(function(){
    $("#myModal").css("display", "none");
  });
  //submit button for link popup
  $('#submitlink').click(function(){
    var intext = $('#inputURL').val();
    console.log(intext);
    $("#myModal").css("display", "none");
    var linkwaiter = $(".awaitingLink");


    if (!linkwaiter.hasClass("linkiconadded")){
      var myNumber = $(linkwaiter).data('icons');
      myNumber = myNumber + 1;
      $(linkwaiter).data('icons', myNumber);

    }
    linkwaiter.addClass("linkiconadded");
    console.log(linkwaiter.data('icons'));
    $(linkwaiter).removeClass("awaitingLink");

  });

  //Function to remove bulletpoint upon clicking minus symbol
  $('.minusbutton').click(function(){
    console.log("minus successfully used");
    $(this).closest("li").remove();
  });

  //upon mouseover, dropdown content appears below "add button" (next to minus)
  $('.addbutton').mouseover(function(){
    console.log("add successfully used");
    var tt = $(this).siblings(".dropdown-content");
    if($(tt).is(":visible")) {
      $(tt).hide();
    }
    else {
      $(tt).show();
    }

  });

  //adds new main point to list via big button permanently at bottom
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

$(document).on("mouseover", function(event){
  var $trigger = $(".btncol");
  if($trigger !== event.target && !$trigger.has(event.target).length){
    $(".dropdown-content").hide();
  }
});
