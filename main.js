// image slider 
var swiper = new Swiper('.tIMG_box .swiper-container', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
    },
});

// column slider 

var swiper = new Swiper('.slider_ofTBV .big_swiper_container.swiper-container', {
  slidesPerView: 4,
  slidesPerColumn: 2,
  spaceBetween: 25,
  pagination: {
    el: '.big_pagination.swiper-pagination',
    clickable: true,
  },
});

// heart red and o system

function heart(){
  var redh = document.getElementById('red_h');
  var redh_o = document.getElementById('o_h');
  redh.style.display = 'none';
  redh_o.style.display = 'block';
};

function heart_o(){
  var redh = document.getElementById('red_h');
  var redh_o = document.getElementById('o_h');
  redh_o.style.display = 'none';
  redh.style.display = 'block';
};