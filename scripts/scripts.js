function dropdown(id, imgid) {
  if(document.getElementById(id).hidden == true){
    document.getElementById(id).hidden = false;
    document.getElementById(id).style = "margin-top:8px";
    document.getElementById(imgid).src="./svgs/icons/Box-arrow-up-left.svg";
  }
  else{
    document.getElementById(id).hidden = true;
    document.getElementById(imgid).src="./svgs/icons/Box-arrow-bottom-right.svg";
  }
}
