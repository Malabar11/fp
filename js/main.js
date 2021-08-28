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

    $('.reviews').slick({
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 2
    });

    $('.open-modal').click(() => {
      $('#reservation-container').css('display', 'flex');
    });
    $('#reservation-cancel-close, #reservation-container').click((e) => {
      if (e.target.id === 'reservation-container' || e.target.id === 'reservation-cancel-close')
      $('#reservation-container').hide();
    })
    $('#reserve-btn').click(() => {
      let name = $('#name');
      let count = $('#count');
      let phone = $('#phone');
      let time = $('#time');
      if (name.val() && count.val() && phone.val() && time.val()) {
        $.ajax({
          type: 'POST',
          url: 'mail.php',
          data: 'name=' + name.val() + '&count=' + count.val + '&phone' + phone.val() + '&time' + time.val(),
          success: () => {
            $('#reservation-sent').show();
            $('#reservation-content').hide();
          }, 
          error: () => {
            $('#reservation-container').hide();
            alert('Ошибка бронирования. Свяжитесь, пожалуйста, по телефону')
          }
        });
      } else {
        $('#reserve-error').show();
      }
    })

});