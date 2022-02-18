// function of adding a class to all elements by class
function add_class(name_el, name_class){
    document.querySelectorAll(name_el).forEach(
      function(el){
        el.classList.add(name_class)
      })
  }

// gallery slider Swiper 
const swiperCard = new Swiper('.card__swiper', {
    direction: 'horizontal',
    loop: false,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    slidesPerView: 1,
    spaceBetween: 0,
    slidesPerGroup: 1,
    speed: 700,
    rewind: true,
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
    // If we need pagination
    pagination: {
      el: '.slider__pagination',
      type: 'fraction',
      formatFractionCurrent: addZero,
      formatFractionTotal: addZero,

      renderFraction: function (currentClass, totalClass) {
        return '<span class="' + currentClass + '"></span>' +
                ' <span class="slider__delimiter-pagination"></span> ' +
                '<span class="' + totalClass + '"></span>';
      }
    },
  
    //Navigation arrows
    navigation: {
      nextEl: '.slider__button-next',
      prevEl: '.slider__button-prev',
    },
  });

  function addZero(num){
    return (num > 9) ? num : '0' + num;
  }

  
 // JQuery accordion
 $(".accordion").accordion({
    heightStyle: "content",
    active: false,
    collapsible: true
  });

  add_class('.ui-accordion-header-icon', 'plus-minus')

let inputNumber = document.querySelector('.quentity__check'),
    minus = document.querySelector('.change-minus'),
    plus = document.querySelector('.change-plus')

minus.addEventListener('click', function() {
    let valueInput = inputNumber.value,
        min = Number(inputNumber.getAttribute('min'))
    if(valueInput > min) {
       --valueInput
       inputNumber.value = valueInput
    }
})

plus.addEventListener('click', function() {
    let valueInput = inputNumber.value,
        max = Number(inputNumber.getAttribute('max'))
        console.log(max)
    if(valueInput < max) {
       ++valueInput
       inputNumber.value = valueInput
    }
})