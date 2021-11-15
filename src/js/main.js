// slider buuner
const swiper = new Swiper(".mySwiper", {
  effect: 'fade',
  loop: true,
  allowTouchMove: false,
  autoplay: {
    disableOnInteraction: true,
    delay: 5000,
  },
});

//slider mini
let swiprSlider = ['.banner-slider', '.day-one-slider', '.day-two-slider', '.day-three-slider', '.day-four-slider', '.day-five-slider', '.day-six-slider', '.day-seven-slider'];
const sliderList = []
for (let i = 0; i < swiprSlider.length; i++) {
  sliderList.push(new Swiper(swiprSlider[i], {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 10,
    centerInsufficientSlides: true,
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      1160: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      1324: {
        slidesPerView: 3,
        spaceBetween: 50
      },
    },
    navigation: {
      nextEl: $(swiprSlider[i]).find('.swiper-button-next')[0],
      prevEl: $(swiprSlider[i]).find('.swiper-button-prev')[0]
    }
  }));

}

// mob menu
const nav = ['hamburger','navigation__price','navigation__team','navigation__order'];

const icons = document.getElementById('hamburger');
for (let i = 0; i < nav.length; i++) {
  let res = document.getElementById(nav[i]);
  res.addEventListener('click', (event) => {
    icons.classList.toggle("open");
    document.getElementById("hamburger__menu").classList.toggle("navigation__list--open");
  });
}


// icons.addEventListener('click', (event) => {
//   icons.classList.toggle("open");
//   document.getElementById("hamburger__menu").classList.toggle("navigation__list--open");
// });
// navigationPrice.addEventListener('click', (event) => {
//   icons.classList.toggle("open");
//   document.getElementById("hamburger__menu").classList.toggle("navigation__list--open");
// });

// стилизация кнопок добавлниния и отнимания 
$('.number input').on('input change paste', function () {
  $(this).val(this.value.replace(/[^0-9\-]/, '')); // запрещаем ввод любых символов, кроме цифр и знака минуса
});
$('.number .number__controls > div').on('click', function () {
  var input = $(this).closest('.number').find('input'); // инпут
  var value = parseInt(input.val()) || 0; // получаем value инпута или 0
  if ($(this).hasClass('nc-minus')) {
    value = value - 1; // вычитаем из value 1
  }
  if ($(this).hasClass('nc-plus')) {
    value = value + 1; // прибавляем к value 1
  }
  input.val(value).change(); // выводим полученное value в инпут; триггер .change() - на случай, если на изменение этого инпута у вас уже объявлен еще какой-то обработчик
});

//Team slider 
var swiperTeam = new Swiper(".teamSwiper ", {
  slidesPerView: 1,
  spaceBetween: 100,
  slidesPerGroup: 3,
  loop: true,
  breakpoints: {
    640: {
      slidesPerView: 2,
      // spaceBetween: 20
    },
    760: {
      slidesPerView: 3,
      // spaceBetween: 50
    },
    1160: {
      slidesPerView: 3,
      // spaceBetween: 100
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//modals
fetch(`./src/js/modal.json`, {
  method: 'GET'
}).then(res => {
  if (!res.ok) {
    throw new Error("HTTP error " + res.status);
  }
  return res.json();
})
  .then(stepData => {
    const modal = document.getElementById('js-modal'),
      modalImg = document.getElementById('js-modal-img'),
      modalTitle = document.getElementById('js-modal-title'),
      modalContent = document.getElementById('js-modal-text');
    stepData.forEach(item => {
      const btn = document.getElementById(item.id);
      btn?.addEventListener('click', () => {
        modal?.classList.add('modal--open');
        modalImg.setAttribute('src', item.imgUrl);
        modalImg.setAttribute('alt', item.title);
        modalTitle.innerHTML = item.title;
        modalContent.innerHTML = item.text;
      });
      const span = document.getElementsByClassName("close")[0];
      span?.addEventListener('click', () => {
        modal?.classList.remove('modal--open');
      });
      window.addEventListener('click', (event) => {
        if (event.target == modal) {
          modal?.classList.remove('modal--open');
        }
      });
    });
  });

// Плавный скрол
function scrollTo(e) {
  window.scroll({
    left: 0,
    top: e.offsetTop - 100,
    behavior: 'smooth'
  })
}
let scrollSmooth = [
  {
    button: '.navigation__price',
    position: '#price'
  },
  {
    button: '.navigation__team',
    position: '#team'
  },
  {
    button: '.navigation__order',
    position: '#application'
  }

];
scrollSmooth.forEach(element => {

  let btn = document.querySelectorAll(element.button),
    pos = document.querySelector(element.position);
  for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', () => {
      scrollTo(pos);
    });
  }
});

// const formInt = document.querySelector('form');
// formInt.addEventListener('submit', (e) => {
//   e.preventDefault();
//   let application = [{
//     name:  document.getElementById('full_name').value,
//     quantity: document.getElementById('Quantity').value,
//     dataStart: document.getElementById('date-start').value,
//     dataEnd: document.getElementById('date-end').value,
//     coment: document.getElementById('coment').value,
//   },
// ];

//   let form__price = document.querySelectorAll('.form__price');

//   for (let i = 0; i < form__price.length; i++) {
//     if(form__price[i].checked){
//       application.price = form__price[i].value;
//       break;
//     }
//   }
//   console.log(application);
//   fetch('./application.json', {
//      method: 'POST',
//      body: application
//   });
// }); 
