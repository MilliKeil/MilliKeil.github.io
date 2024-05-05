let on = false
function toggleMobileMenu() {
  //wähhle burger menü und aktiviere "open" klasse
  document.querySelector('#hamburger-icon').classList.toggle('open')
  on = !on
  if(on){
    menu.innerText = "/|\\"
  }else{
    menu.innerText = "/|\\"
  }
}