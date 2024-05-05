let on = false
function toggleMobileMenu(menu) {
  menu.parentElement.classList.toggle('open')
  on = !on
  if(on){
    menu.innerText = "/|\\––––"
  }else{
    menu.innerText = "/|\\||||"
  }
  
}