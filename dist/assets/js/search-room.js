!function(e){function t(t){for(var i,r,a=t[0],u=t[1],l=t[2],h=0,f=[];h<a.length;h++)r=a[h],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&f.push(s[r][0]),s[r]=0;for(i in u)Object.prototype.hasOwnProperty.call(u,i)&&(e[i]=u[i]);for(c&&c(t);f.length;)f.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],i=!0,a=1;a<n.length;a++){var u=n[a];0!==s[u]&&(i=!1)}i&&(o.splice(t--,1),e=r(r.s=n[0]))}return e}var i={},s={4:0},o=[];function r(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=i,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="";var a=window.webpackJsonp=window.webpackJsonp||[],u=a.push.bind(a);a.push=t,a=a.slice();for(var l=0;l<a.length;l++)t(a[l]);var c=u;o.push([32,0]),n()}({1:function(e,t,n){"use strict";function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var s=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.setConfig(n),this.handleMinusBtnClick=this.minusOne.bind(this),this.handlePlusBtnClick=this.plusOne.bind(this),t.append(this.createHTML())}var t,n,s;return t=e,(n=[{key:"setConfig",value:function(e){this.title=e.title||"",this.minValue=e.minValue||0,this.value=e.value||this.minValue,this.descIndex=e.index||0}},{key:"createHTML",value:function(){var e=document.createElement("div");return e.classList.add("menu-count-item"),e.innerHTML='\n    <div class="menu-count-item__title">\n      <h3 class="title title_size-3">'.concat(this.title,'</h3>\n    </div>\n    <div class="menu-count-item__container-button">\n      <button class="menu-count-item__minus-btn" type="button">-</button>\n      <div class="menu-count-item__result">').concat(this.value,'</div>\n      <button class="menu-count-item__plus-btn" type="button">+</button>\n    </div>'),this.minusBtnDOM=e.querySelector(".menu-count-item__minus-btn"),this.plusBtnDOM=e.querySelector(".menu-count-item__plus-btn"),this.resultDOM=e.querySelector(".menu-count-item__result"),this.isMinValue=this.value===this.minValue,this.isMinValue&&this.minusBtnDOM.classList.add("btn-deactive"),e}},{key:"plusOne",value:function(){this.value+=1,this.isMinValue=!1,this.resultDOM.innerText=this.value,this.value===1+this.minValue&&this.minusBtnDOM.classList.remove("btn-deactive")}},{key:"minusOne",value:function(){this.value>=1+this.minValue&&(this.value-=1),this.value===this.minValue&&(this.isMinValue=!0),this.resultDOM.innerText=this.value,this.value===this.minValue&&this.minusBtnDOM.classList.add("btn-deactive")}},{key:"clearResult",value:function(){this.value=this.minValue,this.resultDOM.innerText=this.value,this.minusBtnDOM.classList.add("btn-deactive")}}])&&i(t.prototype,n),s&&i(t,s),e}();function o(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var r=function(){function e(t,n){(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.items=[],this.setConfig(n),this.findElement(t),this.installComponents(),this.createHandlers(),this.setListeners(),this.textFieldDOM.value=this.addTypeDescription(this.countValuesByTypes()),this.config.areControlButtons)&&(!this.items.some((function(e){return!1===e.isMinValue}))&&this.hideClearButton())}var t,n,i;return t=e,(n=[{key:"findElement",value:function(e){this.mainDOM="string"==typeof e?document.querySelector(e):e,this.textFieldDOM=this.mainDOM.querySelector("input")}},{key:"setConfig",value:function(e){var t=e.placeholder,n=e.areControlButtons,i=e;i.placeholder=t||"",i.areControlButtons=n||!1,this.config=i}},{key:"installComponents",value:function(){var e=this,t=this.config,n=t.itemsCount,i=t.areControlButtons,o=this.mainDOM,r=this.textFieldDOM,a=this.items;this.menuDOM=document.createElement("div"),this.menuDOM.classList.add("menu-count-dropdown");var u=document.createElement("div"),l=document.createElement("ul");u.classList.add("menu-count-dropdown__wrapper"),l.classList.add("menu-count-dropdown__items-container"),u.append(l),this.menuDOM.append(u),n.forEach((function(e,t){var n=document.createElement("li");n.classList.add("menu-count-dropdown__item"),a[t]=new s(n,e),l.append(n)})),i&&(u.insertAdjacentHTML("beforeend",'\n        <div class="menu-count-dropdown__control-buttons">\n          <div>\n            <button class="button button_fade05 js-clear" type="button">очистить</button>\n          </div>\n          <div>\n            <button class="button button_blue js-apply" type="button">применить</button>\n          </div>\n        </div>'),this.applyBtn=u.querySelector(".js-apply"),this.clearBtn=u.querySelector(".js-clear"),this.handleButtonApplyClick=function(){var t=e.countValuesByTypes();r.value=e.addTypeDescription(t),e.closeMenu()},this.handleButtonClearClick=function(){a.forEach((function(e){return e.clearResult()})),e.hideClearButton()}),o.append(this.menuDOM)}},{key:"createHandlers",value:function(){var e=this,t=this.config.areControlButtons;this.handleDropdownMenuClick=this.switchMenu.bind(this),this.handleDropdownMenuMouseleave=this.closeMenu.bind(this),this.handlePlusBtnClick=function(){if(t&&e.showClearButton(),!t){var n=e.countValuesByTypes();e.textFieldDOM.value=e.addTypeDescription(n)}},this.handleMinusBtnClick=function(){if(t&&!e.items.some((function(e){return!1===e.isMinValue}))&&e.hideClearButton(),!t){var n=e.countValuesByTypes();e.textFieldDOM.value=e.addTypeDescription(n)}}}},{key:"setListeners",value:function(){var e=this,t=this.config.areControlButtons;this.mainDOM.addEventListener("mouseleave",this.handleDropdownMenuMouseleave),this.textFieldDOM.addEventListener("click",this.handleDropdownMenuClick),this.items.forEach((function(t){t.plusBtnDOM.addEventListener("click",t.handlePlusBtnClick),t.minusBtnDOM.addEventListener("click",t.handleMinusBtnClick),t.plusBtnDOM.addEventListener("click",e.handlePlusBtnClick),t.minusBtnDOM.addEventListener("click",e.handleMinusBtnClick)})),t&&(this.applyBtn.addEventListener("click",this.handleButtonApplyClick),this.clearBtn.addEventListener("click",this.handleButtonClearClick))}},{key:"removeListeners",value:function(){var e=this,t=this.config.areControlButtons;this.mainDOM.removeEventListener("mouseleave",this.handleDropdownMenuMouseleave),this.textFieldDOM.removeEventListener("click",this.handleDropdownMenuClick),this.items.forEach((function(t){t.plusBtnDOM.removeEventListener("click",t.handlePlusBtnClick),t.minusBtnDOM.removeEventListener("click",t.handleMinusBtnClick),t.plusBtnDOM.removeEventListener("click",e.handlePlusBtnClick),t.minusBtnDOM.removeEventListener("click",e.handleMinusBtnClick)})),t&&(this.applyBtn.removeEventListener("click",this.handleButtonApplyClick),this.clearBtn.removeEventListener("click",this.handleButtonClearClick))}},{key:"countValuesByTypes",value:function(){var e=this,t=this.config.descriptionTypes,n=[];return t.forEach((function(t,i){n[i]=0,e.items.forEach((function(e){e.descIndex===i&&(n[i]+=e.value)}))})),n}},{key:"addTypeDescription",value:function(e){var t=this.config,n=t.descriptionTypes,i=t.placeholder,s="";return e.forEach((function(e,t){if(0!==e){var i=(o=e,n[t][o%100>4&&o%100<20?2:[2,0,1,1,1,2][o%10<5?o%10:5]]);s+="".concat(e," ").concat(i,", ")}var o})),""===(s=s.slice(0,-2))&&(s=i),s}},{key:"closeMenu",value:function(){this.menuDOM.classList.remove("current"),this.textFieldDOM.classList.remove("count-active")}},{key:"switchMenu",value:function(){this.menuDOM.classList.toggle("current"),this.textFieldDOM.classList.toggle("count-active")}},{key:"showClearButton",value:function(){this.clearBtn.style.visibility="visible"}},{key:"hideClearButton",value:function(){this.clearBtn.style.visibility="hidden"}}])&&o(t.prototype,n),i&&o(t,i),e}();t.a=r},2:function(e,t,n){"use strict";(function(e){n(4);t.a=function(t,n,i){var s=e(n),o=e(i),r=s.datepicker(t).data("datepicker"),a=e('span.datepicker--button[data-action="clear"]');e(".datepicker--buttons").append('<span class="datepicker--button apply">Применить</span>');var u=e("span.datepicker--button.apply");function l(e){if(Boolean(e)){a.removeClass("datepicker--button_hide");var t=e.split(",");s.val(t[0]),o.val(t[1])}else a.addClass("datepicker--button_hide"),s.val(""),o.val("")}return r.update("onSelect",l),l(),u.on("click",(function(){r.hide();var e=s.val().split(",");s.val(e[0])})),s.on("focusin",(function(){o.addClass("text-field_checked")})).on("focusout",(function(){o.removeClass("text-field_checked")})),o.on("focusin",(function(){s.addClass("text-field_checked")})).on("focusout",(function(){s.removeClass("text-field_checked")})).on("click",(function(){r.show()})),r}}).call(this,n(0))},20:function(e,t,n){var i=n(3),s=n(21);"string"==typeof(s=s.__esModule?s.default:s)&&(s=[[e.i,s,""]]);var o={insert:"head",singleton:!1};i(s,o);e.exports=s.locals||{}},21:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);n(20);var i=n(1);function s(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var o=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.mainDOM=t,this.currentItem=0,this.findElements(),this.setHandlers(),this.setListeners()}var t,n,i;return t=e,(n=[{key:"findElements",value:function(){var e=this.mainDOM;this.imgsDOM=e.querySelectorAll(".js-images-slider-container__image"),this.controlBtnsDOM=e.querySelectorAll(".js-images-slider-circles__button"),this.prevBtnDOM=e.querySelector(".js-images-slider-arrows__prev"),this.nextBtnDOM=e.querySelector(".js-images-slider-arrows__next")}},{key:"setHandlers",value:function(){var e=this;this.handleControlButtonClick=function(t){return e.goToImage.bind(e,t)},this.handleButtonPrevClick=this.toPrevImage.bind(this),this.handleButtonNextClick=this.toNextImage.bind(this),this.handleImagesSliderMouseover=this.showArrows.bind(this),this.handleImagesSliderMouseleave=this.hideArrows.bind(this)}},{key:"setListeners",value:function(){var e=this;this.controlBtnsDOM.forEach((function(t,n){return t.addEventListener("click",e.handleControlButtonClick(n))})),this.prevBtnDOM.addEventListener("click",this.handleButtonPrevClick),this.nextBtnDOM.addEventListener("click",this.handleButtonNextClick),this.mainDOM.addEventListener("mouseover",this.handleImagesSliderMouseover),this.mainDOM.addEventListener("mouseleave",this.handleImagesSliderMouseleave)}},{key:"toPrevImage",value:function(){0===this.currentItem&&(this.currentItem=this.imgsDOM.length),this.currentItem-=1,this.showSelectedImage()}},{key:"toNextImage",value:function(){this.currentItem+=1,this.currentItem===this.imgsDOM.length&&(this.currentItem=0),this.showSelectedImage()}},{key:"goToImage",value:function(e){this.currentItem=e,this.showSelectedImage()}},{key:"showArrows",value:function(){this.nextBtnDOM.style.zIndex=1,this.prevBtnDOM.style.zIndex=1}},{key:"hideArrows",value:function(){this.nextBtnDOM.style.zIndex=0,this.prevBtnDOM.style.zIndex=0}},{key:"showSelectedImage",value:function(){var e=this.currentItem;this.mainDOM.querySelector(".circle-current").classList.remove("circle-current"),this.mainDOM.querySelector(".image-current").classList.remove("image-current"),this.imgsDOM[e].classList.add("image-current"),this.controlBtnsDOM[e].classList.add("circle-current")}}])&&s(t.prototype,n),i&&s(t,i),e}(),r=n(2);n(6),n(7),new i.a(".js-menu-count-guest",{itemsCount:[{title:"взрослые",value:2},{title:"дети",value:1},{title:"младенцы",index:1,value:1}],descriptionTypes:[["гость","гостя","гостей"],["младенец","младенца","младенцев"]],placeholder:"Сколько гостей"}),new i.a(".js-menu-count",{itemsCount:[{title:"спальни",index:0},{title:"кровати",minValue:1,index:1},{title:"ванные комнаты",index:2}],descriptionTypes:[["спальня","спальни","спален"],["кровать","кровати","кроватей"],["ванная комната","ванные комнаты","ванных комнаты"]]});Object(r.a)({dateFormat:"dd M",multipleDatesSeparator:" - ",range:!0,multipleDates:!0,offset:5,toggleSelected:!0,showButtonPanel:!0,clearButton:!0,prevHtml:'<i class="month-selection__icon material-icons">arrow_back</i>',nextHtml:'<i class="month-selection__icon material-icons">arrow_forward</i>',navTitles:{days:"MM yyyy"}},".js-datepicker-main-field").selectDate([new Date(2019,7,19),new Date(2019,7,23)]),document.querySelectorAll(".js-images-slider").forEach((function(e){return new o(e)}))},6:function(e,t,n){(function(e,t){var n;t(((n=e(".checkbox-list__button")).find(".checkbox-list-button__icon-up").hide(),void n.on("click",(function(t){var n=t.currentTarget,i=e(n).find(".checkbox-list-button__icon-up"),s=e(n).find(".checkbox-list-button__icon-down");e(n.parentElement).find(".checkbox-list__menu").slideToggle(".active"),i.toggle(),s.toggle()}))))}).call(this,n(0),n(0))},7:function(e,t,n){"use strict";(function(e){n(8);var t=[".range-slider__field1",".range-slider__field2"],i=[];t.forEach((function(e,t){i[t]=document.querySelector(e)})),e(".js-range-slider__container").rangeSlider({sliderValues:[5e3,1e4],sliderType:"range",maxValue:15500,minValue:0,step:100,textField:t,updateValues:function(e){var t=e.map((function(e){return"".concat(e.toLocaleString(),"₽")}));return t[0]+=" - ",t}})}).call(this,n(0))},8:function(e,t,n){(function(e){function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}!function(e){var n={};function i(t){if(n[t])return n[t].exports;var s=n[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=e,i.c=n,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"==t(e)&&e&&e.__esModule)return e;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)i.d(s,o,function(t){return e[t]}.bind(null,o));return s},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=11)}([function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,,,,,function(n,i,s){"use strict";function o(e,t){var n=Math.round(e/t)*t,i=t.toString().includes(".")?t.toString().split(".").pop().length:0;return Number(n.toFixed(i))}function r(e,t){var n=document.createElement("div");n.innerHTML=e;var i=n.firstElementChild;return t&&t.append(i),i}function a(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}s.r(i),s(0),s(1),s(2),s(3),s(4),s(5);var u=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.DOM=void 0,this.DOM=r('<div class="js-range-slider"></div>')}var t,n;return t=e,(n=[{key:"setClassPosition",value:function(e){e?this.DOM.classList.add("js-range-slider_vertical"):this.DOM.classList.add("js-range-slider_horizontal")}}])&&a(t.prototype,n),e}();function l(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var c=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.observers=void 0,this.observers=[]}var t,n;return t=e,(n=[{key:"subscribe",value:function(e){this.observers.push(e)}},{key:"notify",value:function(e){this.observers.forEach((function(t){return t(e)}))}}])&&l(t.prototype,n),e}();function h(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var f=function(){function e(t,n,i){var s=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.pos=n,this.isInvert=i,this.Observable=new c,this.coord=void 0,this.DOM=void 0,this.buttonSize=void 0,this.handleButtonMousedown=function(e){var t=s.pos,n=t.page,i=t.offsetFrom,o=t.offsetSize,r=t.clientSize,a=s.isInvert,u=e.target,l=u.parentElement,c=e[n],h=u[i],f=l[r]-u[o];return document.onmousemove=function(e){var t,i=e[n];(t=a?c-i+(f-h):h-(c-i))<0&&(t=0),t>f&&(t=f),s.setCoord(t),s.Observable.notify({isMouseDown:!0})},document.onmouseup=function(){s.Observable.notify({isMouseDown:!1}),document.onmousemove=null,document.onmouseup=null},!1},this.DOM=r('<div class="js-range-slider__button"></div>',t),this.buttonSize=this.DOM[this.pos.offsetSize]}var t,n;return t=e,(n=[{key:"setCoord",value:function(e){this.coord=e}},{key:"toPosition",value:function(){this.DOM.setAttribute("style","".concat(this.pos.offset," : ").concat(this.coord,"px"))}}])&&h(t.prototype,n),e}();function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function v(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var p=function(){function e(t,n,i){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.pos=n,this.isProgress=i,this.buttonSize=0,this.DOM=void 0,this.buttonsCoord=void 0,this.DOM=r('\n      <div class="js-range-slider__interval">\n        <div class="js-slider-interval"></div>\n      </div>',t)}var t,n;return t=e,(n=[{key:"setButtonSize",value:function(e){this.buttonSize=e}},{key:"setCoords",value:function(e){var t=function(e){return function(e){if(Array.isArray(e))return d(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(e);this.isProgress?this.buttonsCoord=[0,t[0]]:(this.buttonsCoord=t,this.checkOverrun())}},{key:"toPosition",value:function(){var e=this.buttonsCoord,t=this.buttonSize,n=e[1]-e[0],i=e[0]+t/2;this.DOM.setAttribute("style"," ".concat(this.pos.offset,": ").concat(i,"px;\n        ").concat(this.pos.size,": ").concat(n,"px;\n      "))}},{key:"checkOverrun",value:function(){(this.buttonsCoord[0]>this.buttonsCoord[1]||this.buttonsCoord[1]<this.buttonsCoord[0])&&this.buttonsCoord.reverse()}}])&&v(t.prototype,n),e}();function b(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var m=function(){function e(t,n,i){var s=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.isLabelOnClick=n,this.positionName=i,this.DOM=void 0,this.input=void 0,this.coord=void 0,this.handleButtonMousedown=function(){s.DOM.children[0].classList.remove("js-button-label_hide")},this.handleButtonMouseup=function(){s.DOM.children[0].classList.add("js-button-label_hide")},this.createElements(t)}var t,n;return t=e,(n=[{key:"setCoord",value:function(e){this.coord=e}},{key:"toPosition",value:function(){this.DOM.setAttribute("style","".concat(this.positionName," : ").concat(this.coord,"px"))}},{key:"setValue",value:function(e){this.input.value=e}},{key:"createElements",value:function(e){this.DOM=r('<div class="js-range-slider__container-label">\n        <div class="js-button-label">\n          <input class="js-button-label__input" readonly> </input>\n        </div>\n      </div>',e),this.input=this.DOM.querySelector("input")}}])&&b(t.prototype,n),e}(),y=function e(t,n,i){var s=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.Observable=new c,this.value=void 0,this.coord=void 0,this.DOM=void 0,this.lineDOM=void 0,this.numberDOM=void 0,this.handlePointClick=function(){s.Observable.notify({value:s.value})},this.DOM=r('<div class="js-scale-point"></div>',t),n&&(this.numberDOM=r('<div class="js-scale-point__number"></div>',this.DOM)),this.lineDOM=r(i?'<div class="js-scale-point__long-line"></div>':'<div class="js-scale-point__short-line"></div>',this.DOM)};function g(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var O=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.config=n,this.points=[],this.DOM=void 0,this.DOM=r('<div class="js-scale-range"></div>',t),this.createPoints()}var t,n;return t=e,(n=[{key:"setScale",value:function(e){this.setValue(),this.determineСoordScale(e)}},{key:"setValue",value:function(){var e,t=this.config,n=t.minValue,i=t.maxValue,s=t.step,r=t.isInvert,a=(Math.abs(n)+i)/(this.points.length-1);e=r?i:n,this.points.forEach((function(t){var n=t;n.value=o(e,s),n.numberDOM&&(n.numberDOM.innerText=String(n.value)),e=r?e-a:e+a}))}},{key:"createPoints",value:function(){for(var e=this.config,t=e.points,n=e.numberForEach,i=e.longForEach,s=0;s<t;s+=1){var o=s%n==0,r=s%i==0;this.points[s]=new y(this.DOM,o,r)}}},{key:"determineСoordScale",value:function(e){var t=this.config.isInvert,n=e/(this.points.length-1),i=t?e:0;this.points.forEach((function(e){e.coord=i,i=t?i-=n:i+=n}))}}])&&g(t.prototype,n),e}();function M(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var w=function(){function e(t,n){var i=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.index=n,this.Observable=new c,this.DOM=void 0,this.handleTextFieldBlur=function(){var e;e=i.DOM instanceof HTMLInputElement?Number(i.DOM.value)||0:Number(i.DOM.innerText)||0,i.Observable.notify({value:e,index:i.index})},this.find(t)}var t,n;return t=e,(n=[{key:"find",value:function(e){var t=document.querySelector(e);if(!t)throw new Error("Text field not found.");this.DOM=t}},{key:"setValue",value:function(e){this.DOM instanceof HTMLInputElement?this.DOM.value=e:this.DOM.innerText=e}}])&&M(t.prototype,n),e}();function k(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var D=function(){function e(t,n){var i=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.parent=t,this.config=n,this.range=void 0,this.button=[],this.textField=[],this.label=[],this.interval=void 0,this.scale=void 0,this.pos=void 0,this.step=void 0,this.rangeSize=void 0,this.handleWindowResize=function(){i.setElementSizes(),i.setValues(i.config.sliderValues),i.convertValues(i.config.sliderValues),i.toPositionElements()},this.setPositionVariables(),this.installComponents(),this.setElementSizes(),this.setValues(this.config.sliderValues),this.convertValues(this.config.sliderValues),this.toPositionElements()}var t,n;return t=e,(n=[{key:"setValues",value:function(e){var t;this.config.sliderValues=e,(t=this.config.updateValues?this.config.updateValues(e):e.map((function(e){return e.toString()})))||(t=e.map((function(e){return e.toString()}))),this.textField&&this.textField.forEach((function(e,n){e.setValue(t[n])})),this.label&&this.label.forEach((function(e,n){e.setValue(t[n])}))}},{key:"convertValues",value:function(e){var t=this,n=this.config,i=n.minValue;if(n.isRange)e.forEach((function(e,n){var s=t.step*(e+Math.abs(i));t.button[n].setCoord(s)}));else{var s=this.step*(e[0]+Math.abs(i));this.button[0].setCoord(s)}}},{key:"toPositionElements",value:function(){var e=this,t=this.config,n=t.isLabel,i=t.isInvert,s=this.button.map((function(e){return e.coord})),o=this.button.map((function(t){return t.DOM[e.pos.offsetSize]}));this.button.forEach((function(e){return e.toPosition()})),this.interval&&(this.interval.setCoords(s),this.interval.toPosition()),n&&this.label.forEach((function(e,t){i?e.setCoord(s[t]+o[t]):e.setCoord(s[t]),e.toPosition()}))}},{key:"setPositionVariables",value:function(){var e=this.config,t=e.isVertical,n=e.isInvert;this.pos=t?{size:"height",offset:n?"bottom":"top",clientSize:"clientHeight",offsetSize:"offsetHeight",page:"pageY",offsetFrom:"offsetTop"}:{size:"width",offset:n?"right":"left",clientSize:"clientWidth",offsetSize:"offsetWidth",page:"pageX",offsetFrom:"offsetLeft"}}},{key:"installComponents",value:function(){var e=this,t=this.config,n=t.isRange,i=t.isProgress,s=t.isInvert,o=t.isVertical,r=t.isLabel,a=t.isLabelOnClick,l=t.isScale,c=t.textField,h=n||i;this.range=new u,this.range.setClassPosition(o),this.button=[];for(var d=n?2:1,v=0;v<d;v+=1)this.button[v]=new f(this.range.DOM,this.pos,s);h&&(this.interval=new p(this.range.DOM,this.pos,i)),r&&(this.label=[],this.button.forEach((function(t,n){e.label[n]=new m(e.range.DOM,a,e.pos.offset)}))),l&&(this.scale=new O(this.range.DOM,this.config)),c&&c.forEach((function(t,n){e.textField[n]=new w(t,n)})),this.parent.append(this.range.DOM)}},{key:"setElementSizes",value:function(){var e=this.config,t=e.minValue,n=e.maxValue,i=Math.abs(n-t),s=this.button[0].DOM[this.pos.offsetSize];this.rangeSize=this.range.DOM[this.pos.clientSize]-s,this.step=this.rangeSize/i,this.interval&&this.interval.setButtonSize(s),this.scale&&this.scale.setScale(this.rangeSize)}}])&&k(t.prototype,n),e}();function C(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var E=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.config=t,this.Observable=new c;var n=this.config.sliderValues;this.setNewValues(n)}var t,n;return t=e,(n=[{key:"convertCoords",value:function(e){var t=e.buttonsCoords,n=e.stepInCoord,i=this.config.minValue,s=t.map((function(e){return e/n+i}));this.setNewValues(s)}},{key:"updateValue",value:function(e,t){var n=this.config.sliderValues;n[t]=e,this.setNewValues(n)}},{key:"setNewValues",value:function(e){var t=[];this.config.isRange?(t.push(Math.min.apply(null,e)),t.push(Math.max.apply(null,e))):t=e,t=this.checkLimit(t),t=this.putInStep(t),this.config.sliderValues=t,this.Observable.notify({value:t})}},{key:"checkLimit",value:function(e){var t=this.config,n=t.minValue,i=t.maxValue,s=[];return e.forEach((function(e){e<n?s.push(n):e>i?s.push(i):s.push(e)})),s}},{key:"putInStep",value:function(e){var t=this.config.step,n=[];return e.forEach((function(e,i){n[i]=o(e,t)})),n}}])&&C(t.prototype,n),e}();function S(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var _=function(){function e(t,n,i){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.model=t,this.view=n,this.config=i,this.isMouseDown=!1,this.subscribeToChangeValue(),this.subscribeButtons(),this.subscribeTextField(),this.subscribePoint()}var t,n;return t=e,(n=[{key:"subscribeToChangeValue",value:function(){var e=this;this.model.Observable.subscribe((function(t){var n=t.value;e.isMouseDown||(e.view.convertValues(n),e.view.toPositionElements()),e.view.setValues(n)}))}},{key:"subscribeButtons",value:function(){var e=this;this.view.button.forEach((function(t,n){t.Observable.subscribe((function(i){var s=i.isMouseDown,o=e.view,r=o.step,a=o.label,u=e.config,l=u.isRange,c=u.isLabel,h=e.view.button.map((function(e){return e.coord}));e.isMouseDown=s,l&&(s?(t.DOM.classList.add("js-range-slider__button_lift-up"),c&&a[n].DOM.classList.add("js-button-label_lift-up")):(t.DOM.classList.remove("js-range-slider__button_lift-up"),c&&a[n].DOM.classList.remove("js-button-label_lift-up"))),s&&e.view.toPositionElements(),e.model.convertCoords({buttonsCoords:h,stepInCoord:r})}))}))}},{key:"subscribeTextField",value:function(){var e=this;this.view.textField&&this.view.textField.forEach((function(t){t.Observable.subscribe((function(t){var n=t.value,i=t.index;e.model.updateValue(n,i)}))}))}},{key:"subscribePoint",value:function(){var e=this;this.view.scale&&this.view.scale.points.forEach((function(t){t.Observable.subscribe((function(n){var i,s=n.value;if(e.config.isRange){var o=e.view.button[0].coord,r=(e.view.button[1].coord-o)/2+o;i=t.coord>r?1:0}else i=0;e.model.updateValue(s,i)}))}))}}])&&S(t.prototype,n),e}();function B(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function L(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?B(Object(n),!0).forEach((function(t){x(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):B(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function x(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function j(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var V=function(){function e(t,n,i){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.defaultConfig=i,this.model=void 0,this.view=void 0,this.controller=void 0,this.mainDOM=void 0,this.currentConfig=void 0,this.findDOM(t),this.setConfig(n)}var t,n;return t=e,(n=[{key:"setConfig",value:function(e){var t=L(L(L({},this.defaultConfig),this.currentConfig),e),n=t.sliderType,i=t.value1Slider,s=t.value2Slider;"number"==typeof i&&(t.sliderValues[0]=i,delete t.value1Slider),"number"==typeof s&&(t.sliderValues[1]=s,delete t.value2Slider),n&&(t.isSingle="single"===n,t.isRange="range"===n,t.isProgress="progress"===n),this.currentConfig=t,this.init()}},{key:"init",value:function(){this.model=new E(this.currentConfig),this.currentConfig.sliderValues=this.model.config.sliderValues,this.view=new D(this.mainDOM,this.currentConfig),this.controller=new _(this.model,this.view,this.currentConfig),this.setListeners()}},{key:"setListeners",value:function(){var e=this.controller.view,t=this.currentConfig.isLabel&&this.currentConfig.isLabelOnClick;window.addEventListener("resize",e.handleWindowResize),e.button.forEach((function(e){e.DOM.addEventListener("mousedown",e.handleButtonMousedown)})),e.textField.forEach((function(e){e.DOM&&e.DOM.addEventListener("blur",e.handleTextFieldBlur)})),e.scale&&e.scale.points.forEach((function(e){e.DOM.addEventListener("click",e.handlePointClick)})),t&&e.label.forEach((function(t,n){t.handleButtonMouseup(),e.button[n].DOM.addEventListener("mousedown",t.handleButtonMousedown),document.addEventListener("mouseup",t.handleButtonMouseup)}))}},{key:"removeListeners",value:function(){var e=this.controller.view,t=this.currentConfig.isLabel&&this.currentConfig.isLabelOnClick;window.removeEventListener("resize",e.handleWindowResize),e.button.forEach((function(e){e.DOM.removeEventListener("mousedown",e.handleButtonMousedown)})),e.textField.forEach((function(e){e.DOM&&e.DOM.removeEventListener("blur",e.handleTextFieldBlur)})),e.scale&&e.scale.points.forEach((function(e){e.DOM.removeEventListener("click",e.handlePointClick)})),t&&e.label.forEach((function(t,n){t.handleButtonMousedown(),e.button[n].DOM.removeEventListener("mousedown",t.handleButtonMousedown),document.removeEventListener("mouseup",t.handleButtonMouseup)}))}},{key:"delete",value:function(){this.removeListeners(),this.mainDOM.innerHTML=""}},{key:"findDOM",value:function(e){var t;if(!(t="string"==typeof e?document.querySelector(e):e))throw new Error("Main DOM element not found.");this.mainDOM=t}}])&&j(t.prototype,n),e}();function P(e){return(P="function"==typeof Symbol&&"symbol"==t(Symbol.iterator)?function(e){return t(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":t(e)})(e)}!function(e){var t=e,n={init:function(e){return this.each((function(n,i){var s=new V(i,e,t.fn.rangeSlider.defaultConfig);t.fn.rangeSlider.sliders.push(s)}))},delete:function(){return this.each((function(e,n){t.fn.rangeSlider.sliders.forEach((function(e,i){return e.mainDOM===n&&(e.delete(),delete t.fn.rangeSlider.sliders[i]),!1}))}))},config:function(e){return this.each((function(n,i){t.fn.rangeSlider.sliders.forEach((function(t){return t.mainDOM===i&&(t.delete(),t.setConfig(e)),!1}))}))},setListeners:function(){return this.each((function(e,n){t.fn.rangeSlider.sliders.forEach((function(e){return e.mainDOM===n&&e.setListeners(),!1}))}))},removeListeners:function(){return this.each((function(e,n){t.fn.rangeSlider.sliders.forEach((function(e){return e.mainDOM===n&&e.removeListeners(),!1}))}))}};t.fn.rangeSlider=function(e){if(n[e]){for(var i=arguments.length,s=new Array(i>1?i-1:0),o=1;o<i;o++)s[o-1]=arguments[o];return n[e].apply(this,s)}if("object"===P(e)||!e){var r=e;return n.init.apply(this,[r])}return t.error("Method named ".concat(e," does not exist for jQuery.rangeSlider"))},t.fn.rangeSlider.sliders=[],t.fn.rangeSlider.defaultConfig={sliderType:"single",sliderValues:[-25,25],minValue:-100,maxValue:100,step:1,textField:[],isVertical:!1,isInvert:!1,isLabel:!1,isLabelOnClick:!1,isScale:!1,points:13,numberForEach:4,longForEach:2}}(e)}])}).call(this,n(0))}});