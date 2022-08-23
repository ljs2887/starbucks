const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function () {
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});

const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function() {
  console.log('window.scrollY');
  if (window.scrollY > 500) {
    // 배지 숨기기
    // gsap.to(요소, 지속시간, 옵션) ;
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    });
    // 버튼 보이기 (맨 위로 움직이게 하는 버튼)
    gsap.to(toTopEl, .2, {
      x: 0
    });
  } else {
    // 배지 보이기
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
    // 버튼 숨기기 (맨 위로 움직이게 하는 버튼)
    gsap.to(toTopEl, .2, {
      x: 100
    });
  }
}, 300));
// _.throttle(함수, 시간)


// 상단으로 스크롤 버튼을 클릭하면
toTopEl.addEventListener('click', function () {
  // 페이지 위치를 최상단으로 부드럽게(0.7초 동안) 이동.
  gsap.to(window, .7, {
    scrollTo: 0
  })
})


const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
  // gsap.to(요소, 지속시간, 옵션) ;
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7,
    opacity: 1
  });
});

// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay: true,
  loop: true
});

new Swiper('.promotion .swiper-container', {
  slidesPerView: 3, //한번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  loop: true,
  // autoplay: {
  //   delay: 5000
  // },
  pagination: {
    el: '.promotion .swiper-pagination', //페이지 번호 요소 선택자,
    clickable: true // 사용자의 페이지 번호 요소 제어
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
});

new Swiper('.awards .swiper-container', {
  // direction: 'horizontal', // 수평 슬라이드
  autoplay: true, // 자동 재생 여부
  loop: true, // 반복 재생 여부
  spaceBetween: 30, 
  slidesPerView: 5, 
  // slidesPerGroup: 5, // 한 번에 슬라이드 할 개수(전체 개수로 나뉘어야 함)
  navigation: { 
    prevEl: '.awards .swiper-prev', 
    nextEl: '.awards .swiper-next' 
  }
});

const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHiderPromotion = false;
promotionToggleBtn.addEventListener('click', function() {
  isHiderPromotion = !isHiderPromotion
  if (isHiderPromotion) {
    // 숨김 처리
    promotionEl.classList.add('hide');
  } else {
    // 보임 처리
    promotionEl.classList.remove('hide');
  }
})

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector, delay, size) {
  gsap.to(selector, random(1.5, 2.5), {
    y: size,
    repeat: -1, // 무한반복
    yoyo: true,
    ease: Power1.easeInOut,
    delay: random(0, delay)
  });
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);

const spyEls = document.querySelectorAll('section.scroll-spy')
spyEls.forEach(function (spyEl) {
    new ScrollMagic
      .Scene({
        triggerElement: spyEl, //보여짐 여부를 감시할 요소를
        triggerHook: .8
      })
      .setClassToggle(spyEl, 'show')
      .addTo(new ScrollMagic.Controller());
})


// 올해가 몇 년도인지 계산
 const thisYear = document.querySelector('.this-year');
 thisYear.textContent = new Date().getFullYear();