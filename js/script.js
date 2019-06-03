var swiper = new Swiper ('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    slidesPerView:'auto', //slides por tela
    spaceBetween:5,  //espaço entre as imagens
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets', // paginação com "bolinhas"
      clickable:true, // "bolinhas" clicaveis
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
     },
    breakpoints:{
      767: {
        slidesPerView: 2,
        spaceBetween: 5
      },
      430:{
        slidesPerView: 1.2,
        spaceBetween: 2
      }
        }
  }) 