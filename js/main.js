// Creo una funzione che al click sull mio menu list item mi faccia visualizzare o scomparire
// un menu in base alla sua condizione al momento del click

$('.navigation-menu').mouseenter(
  function(){
    $('.dropDown-menu').hide();
    $(this).next().slideToggle();
  }
);

$('body').click(
  function(){
    $('.dropDown-menu').hide();
  }
)

// $('burger-menu').click(
//   function(){
//     $(this').next().toggle();
//   }
// )
