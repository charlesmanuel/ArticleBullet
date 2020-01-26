function dropdown(id) {
  if(document.getElementById(id).hidden == true){
    document.getElementById(id).hidden = false;
  }
  else{
    document.getElementById(id).hidden = true;
  }
}
