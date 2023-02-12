$(document).ready ( () =>{
  $(window).scroll( () =>{
    if(this.scrollY > 20){ $('.naveBar').addClass("sticky")}
    else{$('.naveBar').removeClass("sticky")}
  });

});

$('.bunt-menu').click( () => {
  $('.naveBar .menu').toggleClass("active");
  $('.bunt-menu i').toggleClass("active");
});