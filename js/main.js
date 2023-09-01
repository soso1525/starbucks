

const searchEl = document.querySelector('.search'); // class 가 search 인 요소 조회
const searchInputEl = searchEl.querySelector('input'); // input 태그 조회

searchEl.addEventListener('click', function () {
  searchInputEl.focus(); // focus를 강제 적용하는 함수.
});

searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});


// blur는 focus 해제를 의미.
searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});


// badge
const badgeEl = document.querySelector('header .badges');
window.addEventListener('scroll', _.throttle(function () {
  if (window.scrollY > 500) {
    gsap.to(badgeEl, .5, {
      opacity: 0,
      display: 'none'
    })

    gsap.to('#to-top', .2, {
      x: 0
    })

  } else {
    gsap.to(badgeEl, .5, {
      opacity: 1,
      display: 'block'
    })

    gsap.to('#to-top', .2, {
      x: 100
    })
  }
}, 300));


const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7,
    opacity: 1
  })
});


new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay: true,
  loop: true
});


new Swiper('.promotion .swiper-container', {
  // direction: 'horizontal', // 수평 슬라이드
  autoplay: { // 자동 재생 여부
    delay: 5000 // 5초마다 슬라이드 바뀜
  },
  loop: true, // 반복 재생 여부
  slidesPerView: 3, // 한 번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  pagination: { // 페이지 번호 사용 여부
    el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
    clickable: true // 사용자의 페이지 번호 요소 제어 가능 여부
  },
  navigation: { // 슬라이드 이전/다음 버튼 사용 여부
    prevEl: '.promotion .swiper-prev', // 이전 버튼 선택자
    nextEl: '.promotion .swiper-next' // 다음 버튼 선택자
  }
})


/**
 * Awards Swiper
 */
new Swiper('.awards .swiper-container', {
  direction: 'horizontal',
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5, // 한 슬라이드에 5개 보여줌
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-prev'
  }
})



/**
 * promotion 영역 숨김
 */
const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;

promotionToggleBtn.addEventListener('click', function () {
  isHidePromotion = !isHidePromotion

  if (isHidePromotion) {
    // 프로모션 영역 숨기기
    promotionEl.classList.add('hide');
  } else {
    // 프로모션 영역 보이기
    promotionEl.classList.remove('hide');
  }
})



/**
 * 이미지가 둥둥 떠다니는 느낌 주기.
 */

function random(min, max) {
  return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}

function floatingObject(selector, delay, size) {
  // gsap.to(요소, 시간, 옵션)
  gsap.to(
    selector, // 요소
    random(1.5, 2.5), // 시간
    { // 옵션
      y: size,
      yoyo: true,
      repeat: -1,
      ease: Power1.easeInOut,
      delay: random(0, delay)
    }
  )
}

floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);



/**
 * Scroll Magic
 */

const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function(spyEl) {
  new ScrollMagic
    .Scene({ // 요소를 감시
      triggerElement: spyEl, // 감시 대상 지정
      triggerHook: 0.8 // view port의 시작점(위) 0, 끝점(아래) 1, 중간은 0.5
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
})


/**
 * footer year 
 */

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();


const toTopEl = document.querySelector('#to-top');
toTopEl.addEventListener('click', function() {
  gsap.to(window, .7, {
    scrollTo: 0
  })
}) 