$(document).ready ( () =>{
  $(window).scroll( () =>{
    if(this.scrollY > 20){ $('.naveBar').addClass("sticky")}
    else{$('.naveBar').removeClass("sticky")}
  });

});