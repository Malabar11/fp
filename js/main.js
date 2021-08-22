$(document).ready(() => {
   $('.category').click((e) => {
      let currentElement = $(e.target);
      $('.products-container').hide();
      let id = currentElement.data('id');
      $('#' + id).show();
      $('.category').removeClass('active');
      currentElement.addClass('active')

      $('#' + id + ' .products').slick('refresh');
      $('#' + id + ' .products-nav').slick('refresh');
   })

   $('#burgers-conteiner .products').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      fade: true,
      asNavFor: '#burgers-conteiner .products-nav'
    });
    $('#burgers-conteiner .products-nav').slick({
      slidesToShow: 7,
      slidesToScroll: 7,
      asNavFor: '#burgers-conteiner .products',
      dots: false,
      infinite: false,
      centerMode: false,
      focusOnSelect: true
    });

    $('#fries-conteiner .products').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      fade: true,
      asNavFor: '#fries-conteiner .products-nav'
    });
    $('#fries-conteiner .products-nav').slick({
      slidesToShow: 3,
      slidesToScroll: 3,
      asNavFor: '#fries-conteiner .products',
      dots: false,
      infinite: false,
      centerMode: false,
      focusOnSelect: true
    });
    
    $('#sauces-conteiner .products').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      fade: true,
      asNavFor: '#sauces-conteiner .products-nav'
    });
    $('#sauces-conteiner .products-nav').slick({
      slidesToShow: 4,
      slidesToScroll: 4,
      asNavFor: '#sauces-conteiner .products',
      dots: false,
      infinite: false,
      centerMode: false,
      focusOnSelect: true
    });
    $('#drinks-conteiner .products').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      fade: true,
      asNavFor: '#drinks-conteiner .products-nav'
    });
    $('#drinks-conteiner .products-nav').slick({
      slidesToShow: 3,
      slidesToScroll: 3,
      asNavFor: '#drinks-conteiner .products',
      dots: false,
      infinite: false,
      centerMode: false,
      focusOnSelect: true
    });


});