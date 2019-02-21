// Side Menu

function openSideMenu() {
  document.getElementById('side-menu').style.width = '250px';
}

function closeSideMenu() {
  document.getElementById('side-menu').style.width = '0';
}

document.addEventListener(
  'click',
  function(e) {
    var snav = document.getElementById('side-menu');
    if (
      e.target.id !== snav.id &&
      !snav.contains(e.target) &&
      !e.target.className.match('openSideMenu')
    )
      closeSideMenu();
  },
  false
);

// Scroll Back To Top
var timeOut;
function scrollToTop() {
  if (document.body.scrollTop != 0 || document.documentElement.scrollTop != 0) {
    window.scrollBy(0, -50);
    timeOut = setTimeout('scrollToTop()', 10);
  } else clearTimeout(timeOut);
}

// Sticky Nav Bar
window.onscroll = function() {
  myNavScroll();
};

const main = document.getElementById('main-nav-scroll');
const sticky = main.offsetTop;

function myNavScroll() {
  if (window.pageYOffset >= sticky) {
    main.classList.add('sticky');
  } else {
    main.classList.remove('sticky');
  }
}

// Typewriter Effect
var TxtType = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('typewrite');
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-type');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtType(elements[i], JSON.parse(toRotate), period);
    }
  }

  // INJECT CSS
  var css = document.createElement('style');
  css.type = 'text/css';
  css.innerHTML = '.typewrite > .wrap { border-right: 0.08em solid #fff}';
  document.body.appendChild(css);
};

// Project Modals
var modal = document.getElementById('myModal');
var btn = document.getElementById('myBtn');
var span = document.getElementsByClassName('close')[0];

btn.onclick = function() {
  modal.style.display = 'block';
};

span.onclick = function() {
  modal.style.display = 'none';
};

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};
