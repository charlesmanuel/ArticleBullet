$(document).ready(function(){
  $(".subpt").hide();
  $(".subtweet").hide();
  $(".subimg").hide();

  /*
  function firstswitch() {
    $(".subimg").slideUp( 1000, "swing", function() {

    });
    $(".subpt").show(750);
  }
  */

  function firstswitch() {
    $(".subimg").show(750).delay(2000).hide(750).delay(2000);
  }
  function secondswitch() {
    $(".subpt").show(750).delay(2000).hide(750).delay(2000);
    setTimeout(secondswitch, 7000);
  }
  function thirdswitch() {
    $(".subtweet").show(750).delay(2000).hide(750);
    setTimeout(thirdswitch, 14000);
  }

/*
  function thirdswitch() {
    $(".subtweet").hide(750);
    $(".subimg").slideDown( 1000, "swing", function() {
    });
  }
  */

  secondswitch();

});
