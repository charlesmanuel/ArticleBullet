function dropdown(id, imgid) {
  if(document.getElementById(id).hidden == true){
    document.getElementById(id).hidden = false;
    document.getElementById(id).style = "margin-top:8px";
    document.getElementById(imgid).src="./svgs/icons/Box-arrow-down.svg";
  }
  else{
    document.getElementById(id).hidden = true;
    document.getElementById(imgid).src="./svgs/icons/Box-arrow-bottom-right.svg";
  }
}

function quickstart(){
  document.getElementById('txt1').style.display='none';
  document.getElementById('btn1').style.display='none';
  document.getElementById('btn2').style.display='none';

}

function phase1(){
  var inputT = document.getElementById("inputTitle").value;
  var inputA = document.getElementById("inputAuthor").value;
  document.getElementById('previewTitle').innerHTML = inputT;
  document.getElementById('previewAuthor').innerHTML = "<i>by " + inputA + "</i>";
  var list1 = document.getElementById('listitem1');
  list1.remove();
  var list2 = document.getElementById('listitem2');
  list2.remove();
  var list3 = document.getElementById('listitem3');
  list3.remove();
  var inputN = document.getElementById("inputNumber").value;
  var text = "";
  var i;
  for (i=0; i<inputN; i++){
    text+="<li></li>";
  }
  document.getElementById("list1").innerHTML = text;
  return inputN;
}

function phase2(){
  var num = phase1();
  document.getElementById('form1').remove();
  document.getElementById('form2').remove();
  document.getElementById('form3').remove();
  var text = "<div class='form-group' id='newform'> <div class='row'><div class='col-10' id='maincol'> <label for 'bullets'>Bullet Points</label></div><div class='col-2' id='sidecol'><label for 'checks'>Expand?</div></div></div>";
  document.getElementById('form').innerHTML = text;
  for (i=0; i<num; i++){
    var x = document.createElement("input");
    var att = document.createAttribute("type");
    att.value = "text";
    x.setAttributeNode(att);
    var att2 = document.createAttribute("class");
    att2.value = "form-control";
    x.setAttributeNode(att2);
    var att3 = document.createAttribute("placeholder");
    var plctxt = "Bullet #" + (i+1);
    att3.value = plctxt;
    x.setAttributeNode(att3);
    var att4 = document.createAttribute("style");
    att4.value = "margin-bottom:10px";
    x.setAttributeNode(att4);
    //type='text' class='form-control' id='bullet"+(i+1)+"' placeholder='Bullet "+(i+1)+"'"
    document.getElementById('maincol').appendChild(x);
    var checkbox = document.createElement("input");
    var catt = document.createAttribute("type");
    catt.value = "checkbox";
    checkbox.setAttributeNode(catt);
    var catt2 = document.createAttribute("class");
    catt2.value = "form-check-input";
    checkbox.setAttributeNode(catt2);
    document.getElementById('sidecol').appendChild(checkbox);
    var break1 = document.createElement("BR");
    document.getElementById('sidecol').appendChild(break);
  }
}
