const Navigation = {
  hamburger: document.querySelector('.js-nav-hamburger'),
  hamburgerIcon: document.querySelector('.js-nav-icon'),
  menu: document.querySelector('.js-nav'),
  menuLinks: Array.from(document.querySelectorAll('.js-nav-link')),
  active: document.querySelector('.nav__link--active'),

  init: function () {
    this.bindEvents();
  },
  bindEvents: function () {
    const _this = this;
    this.menuLinks.forEach(link => {
      link.addEventListener('click', function (e) {
        _this.menuLinks.forEach(link => {
          if (link.classList.contains('nav__link--active')) {
            link.classList.remove('nav__link--active');
          }
        })
        _this.menu.classList.remove('active');
        _this.hamburgerIcon.classList.remove('open');
        e.currentTarget.classList.add('nav__link--active');
      })
    })



    if (window.innerWidth < 900) {
      this.hamburger.addEventListener('click', function () {
        _this.menu.classList.toggle('active');
        _this.hamburgerIcon.classList.toggle('open');
      })
    }
  },
}
Navigation.init();


//Defining height of element based on another element
const heightDefiner = {
  promoVideo: document.querySelector('.js-promo-video'),
  wrapperText: document.querySelector('.js-wrapper-text'),
  wrapperVideo: document.querySelector('.js-wrapper-video'),

  init: function () {
    this.bindEvents();
  },
  bindEvents: function () {
    const _this = this;
    if (window.innerWidth > 600) {

      var clientHeight = document.querySelector('.js-promo-text').offsetHeight;
      _this.promoVideo.style.height = clientHeight + 'px';
      _this.wrapperText.style.height = clientHeight + 'px';
      _this.wrapperVideo.style.height = clientHeight + 'px';
    }
  },
}

heightDefiner.init();