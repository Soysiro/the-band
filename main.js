const BuyBtns =  document.querySelectorAll('.js-buy-tickets')
const modal = document.querySelector('.js-modal')
const modalClose = document.querySelector('.js-modal-close')

function showTicket(){
    modal.classList.add('open')
}

function hideTicket(){
    modal.classList.remove('open')
}

for (const BuyBtn of BuyBtns){
    BuyBtn.addEventListener('click',showTicket)
}
modalClose.addEventListener('click',hideTicket)
modal.addEventListener('click',hideTicket)
// Menu
    var header = document.getElementById('header')
// mobile-menu
   var mobileMenu = document.getElementById('mobile-menu')
    var headerHeight = header.clientHeight
//    Open/close auto menu
    mobileMenu.onclick = function() {
        var isClosed = header.clientHeight === headerHeight 
        if (isClosed) {
            header.style.height = 'auto'
        }else{
            header.style.height = null
        }
    }
// Close menu when click menu 
    var menuItems = document.querySelectorAll('#nav li a[href*="#"]')
    for(var i = 0;i < menuItems.length;i++){
        var menuItem = menuItems[i];

        menuItem.onclick = function(event) {
            var IsParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
            if(!IsParentMenu){
                header.style.height = null
            }else{
                event.preventDefault();
            }
        }
    }