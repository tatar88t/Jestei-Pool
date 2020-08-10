/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_showMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/showMenu */ "./src/js/modules/showMenu.js");
/* harmony import */ var _modules_showPlaylistFeatures__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/showPlaylistFeatures */ "./src/js/modules/showPlaylistFeatures.js");
/* harmony import */ var _modules_rating__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/rating */ "./src/js/modules/rating.js");



new WOW().init();
var header = $('.header'),
    scrollPrev = 0;
$(window).scroll(function () {
  var scrolled = $(window).scrollTop();

  if (scrolled > 10 && scrolled > scrollPrev) {
    header.removeClass('animate__fadeInDown');
    header.addClass('animate__fadeOutUp');
    header.addClass('out');
  } else {
    header.removeClass('out');
    header.removeClass('animate__fadeOutUp');
    header.addClass('animate__fadeInDown');
  }

  scrollPrev = scrolled;
});
$(".footer__up, .benefits__button a").click(function () {
  let link = $(this).attr("href");
  $("html, body").animate({
    scrollTop: $(link).offset().top + "px"
  });
  return false;
});
Object(_modules_showMenu__WEBPACK_IMPORTED_MODULE_0__["default"])();
Object(_modules_showPlaylistFeatures__WEBPACK_IMPORTED_MODULE_1__["default"])();
Object(_modules_rating__WEBPACK_IMPORTED_MODULE_2__["default"])();

/***/ }),

/***/ "./src/js/modules/rating.js":
/*!**********************************!*\
  !*** ./src/js/modules/rating.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function rating() {
  let stars = document.querySelectorAll('.playlist__list-item-stars label');
  stars.forEach(star => star.addEventListener('click', e => {
    e.preventDefault();
    let chosen = document.querySelectorAll('.playlist__list-item-stars label:hover, .playlist__list-item-stars label:hover ~ label');
    chosen.forEach(mark => {
      console.log(mark);
      mark.style.cssText = "background-position: 0px -21px";
    });
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (rating);

/***/ }),

/***/ "./src/js/modules/showMenu.js":
/*!************************************!*\
  !*** ./src/js/modules/showMenu.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function showMenu() {
  let trigger = document.querySelector('.header__burger'),
      menu = document.querySelector('.menu');
  trigger.addEventListener('click', () => {
    menu.classList.toggle('menu_active');
    trigger.classList.toggle('header__burger_active');
  });
  window.addEventListener('resize', () => {
    menu.classList.remove('menu_active');
    trigger.classList.remove('header__burger_active');
  });
}

;
/* harmony default export */ __webpack_exports__["default"] = (showMenu);

/***/ }),

/***/ "./src/js/modules/showPlaylistFeatures.js":
/*!************************************************!*\
  !*** ./src/js/modules/showPlaylistFeatures.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function showPlaylistFeatures() {
  let trigger = document.querySelectorAll('.playlist__list-item-open');
  let playlistItem = document.querySelectorAll('.playlist__list-item');

  const createFeatures = () => {
    let attrUp = "img/up-shevron.png";
    let attrDown = "img/down-shevron.png";
    playlistItem.forEach(item => {
      let playlistFeatures = item.parentNode.insertBefore(document.createElement('div'), item.nextSibling);
      playlistFeatures.classList.add('playlist__features');
      let stars = item.querySelector('.playlist__list-item-stars'); // console.log(stars.innerHTML)

      playlistFeatures.innerHTML = `
            <div class="playlist__list-item-icon_implicit">
                <img src="./img/r-sign-icon.png">
            </div>
            <div class="playlist__list-item-code_implicit">101</div>
            <div class="playlist__list-item-code_implicit">5A</div>
            <div class="playlist__list-item-stars_implicit">
                ${stars.innerHTML}
<!--                <img src="./img/star-icon-empty.png" alt="иконка-звезда">-->
<!--                <img src="./img/star-icon-empty.png" alt="иконка-звезда">-->
<!--                <img src="./img/star-icon-empty.png" alt="иконка-звезда">-->
<!--                <img src="./img/star-icon-empty.png" alt="иконка-звезда">-->
<!--                <img src="./img/star-icon-empty.png" alt="иконка-звезда">-->
            </div>

        `;
    });
    trigger.forEach(btn => {
      btn.addEventListener('click', e => {
        btn.parentNode.nextSibling.classList.toggle('playlist__features_active');

        if (btn.childNodes[1].getAttribute('src') === attrDown) {
          btn.childNodes[1].setAttribute("src", attrUp);
        } else {
          btn.childNodes[1].setAttribute("src", attrDown);
        }

        window.addEventListener('resize', () => {
          btn.parentNode.nextSibling.classList.remove('playlist__features_active');
          btn.childNodes[1].setAttribute("src", attrDown);
        });
      });
    });
  };

  createFeatures();
}

/* harmony default export */ __webpack_exports__["default"] = (showPlaylistFeatures);

/***/ })

/******/ });
//# sourceMappingURL=script.js.map