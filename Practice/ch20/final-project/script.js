const headerNavs = [
  { title: '얄코강좌는', link: '#about' },
  { title: 'HTML', link: '#html' },
];

const headerNavUl = document.querySelector('.header__nav > ul');
for (const item of headerNavs) {
  const $li = document.createElement('li');
  $li.classList.add('header__nav-item');
  $li.innerHTML = `
  <a href="${item.link}">${item.title}</a>`;
  headerNavUl.appendChild($li);
}
//about
const aboutCards = [
  {
    img: './images/about_1.svg',
    title: '빠른 강의',
    descs: ['군더더기 없는 진행으로', '여러분의 시간을 절약합니다.'],
  },
  {
    img: './images/about_2.svg',
    title: '손쉬운 학습',
    descs: ['강의 페이지를 활용해서', '편리하게 실습할 수 있습니다.'],
  },
  {
    img: './images/about_3.svg',
    title: '플레이그라운드',
    descs: ['강의를 위해 제작한 도구가', '반복 학습을 도와줍니다.'],
  },
];

// const $aboutDiv = document.querySelector('.about');

// for (i = 0; i < aboutCards.length; i++) {
//   const cardBox = aboutCards[i];

//   const cardDiv = document.createElement('div');
//   cardDiv.classList.add('about__card');

//   const imgs = document.createElement('img');
//   imgs.classList.add('about__icon');
//   imgs.setAttribute.add('src');

//   const $h2 = document.createElement('h2');
//   $h2.classList.add('about__title' + '_' + (i + 1));

//   const $p = document.createElement('p');
//   $p.classList.add('about__text');

//   //   for (const item of cardBox.length){
//   //     const $word = document
//   //   }

//   cardBox.appendChild(cardDiv);
//   cardDiv.appendChild(imgs);
//   cardDiv.appendChild($h2);
//   cardDiv.appendChild($p);
//   $aboutDiv.appendChild(cardBox);
// }

// document.addEventListener('DOMContentLoaded', () => {
//   const aboutContainer = document.querySelector('.about');

//   aboutCards.forEach((card, index) => {
//     const cardDiv = document.createElement('div');
//     cardDiv.classList.add('about_card');

//     // 이미지
//     const img = document.createElement('img');
//     img.classList.add('about_icon');
//     img.setAttribute('src', card.img);
//     img.setAttribute('alt', '');

//     // 제목
//     const h2 = document.createElement('h2');
//     h2.classList.add('about_title', `about_title_${index + 1}`);
//     h2.textContent = card.title;

//     // 설명
//     const p = document.createElement('p');
//     p.classList.add('about_text');
//     p.innerHTML = card.descs.join('<br>');

//     // 조립
//     cardDiv.appendChild(img);
//     cardDiv.appendChild(h2);
//     cardDiv.appendChild(p);
//     aboutContainer.appendChild(cardDiv);
//   });
// });
const $aboutDiv = document.querySelector('#about > div.about');
let htmlTag = '';
for (const item of aboutCards) {
  const desc = item.descs.join('<br>');
  const tag = `
  <div class="about__card">
    <img class="about__icon" src="${item.img}" alt="">
    <h2 class="about__title _${item.titlenum}">
      "${item.title}"
    </h2>
    <p class="about__text">
      "${desc}"
      </p>
  </div>`;
  htmlTag += tag;
}
$aboutDiv.innerHTML = htmlTag;

const currList = document.querySelectorAll(
  '#curriculum .curriculum__list > li'
);

const currPro = document.querySelector(
  '#curriculum .curriculum__progress .bar'
);

currList.forEach((item, index) => {
  item.addEventListener(
    'mouseenter',
    () => (currPro.style.width = `${200 * index}px`)
  );
});

currList.forEach((item) => {
  item.addEventListener('mouseleave', () => (currPro.style.width = 0));
});

const contactTabs = document.querySelectorAll(
  '#contact .contact__tab input[name="contact"]'
);
const contactCon = document.querySelector(
  '#contact .contact__slides .contact__slide-con'
);

contactTabs.forEach((item, idx) => {
  const $marginLeft = [0, '-100vw'][idx];

  // let marginLeft2;
  // if (idx === 0) {
  //   marginLeft2 = 0;
  // } else if (idx === 1) {
  //   marginLeft2 = '-100vw';
  // }
  item.addEventListener('click', () => {
    contactCon.style.marginLeft = $marginLeft;
  });
});

const headerBtn = document.querySelector('.header .header__menu-btn');
const headerNav = document.querySelector('.header .header__nav');

headerBtn.addEventListener('click', (e) => {
  headerBtn.classList.toggle('on');
  headerNav.classList.toggle('active');

  e.stopPropagation(); // 더블링 금지
});

const $body = document.querySelector('body');
$body.addEventListener('click', () => {
  headerBtn.classList.remove('on');
  headerNav.classList.remove('active');
});
// headerNav.addEventListener('mouseleave', (e) => {
//   headerBtn.classList.remove('on');
//   headerNav.classList.remove('active');
// });
