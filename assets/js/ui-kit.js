!function(e){function t(t){for(var i,r,a=t[0],u=t[1],l=t[2],f=0,h=[];f<a.length;f++)r=a[f],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&h.push(o[r][0]),o[r]=0;for(i in u)Object.prototype.hasOwnProperty.call(u,i)&&(e[i]=u[i]);for(c&&c(t);h.length;)h.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],i=!0,a=1;a<n.length;a++){var u=n[a];0!==o[u]&&(i=!1)}i&&(s.splice(t--,1),e=r(r.s=n[0]))}return e}var i={},o={7:0},s=[];function r(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=i,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="";var a=window.webpackJsonp=window.webpackJsonp||[],u=a.push.bind(a);a.push=t,a=a.slice();for(var l=0;l<a.length;l++)t(a[l]);var c=u;s.push([28,0]),n()}({1:function(e,t,n){"use strict";function i(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var o=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.setConfig(n),this.handleMinusBtnClick=this.minusOne.bind(this),this.handlePlusBtnClick=this.plusOne.bind(this),t.append(this.createHTML())}var t,n,o;return t=e,(n=[{key:"setConfig",value:function(e){this.title=e.title||"",this.minValue=e.minValue||0,this.value=e.value||this.minValue,this.descIndex=e.index||0}},{key:"createHTML",value:function(){var e=document.createElement("div");return e.classList.add("menu-count-item"),e.innerHTML='\n    <div class="menu-count-item__title">\n      <h3 class="title title_size-3">'.concat(this.title,'</h3>\n    </div>\n    <div class="menu-count-item__container-button">\n      <button class="menu-count-item__minus-btn" type="button">-</button>\n      <div class="menu-count-item__result">').concat(this.value,'</div>\n      <button class="menu-count-item__plus-btn" type="button">+</button>\n    </div>'),this.minusBtnDOM=e.querySelector(".menu-count-item__minus-btn"),this.plusBtnDOM=e.querySelector(".menu-count-item__plus-btn"),this.resultDOM=e.querySelector(".menu-count-item__result"),this.isMinValue=this.value===this.minValue,this.isMinValue&&this.minusBtnDOM.classList.add("btn-deactive"),e}},{key:"plusOne",value:function(){this.value+=1,this.isMinValue=!1,this.resultDOM.innerText=this.value,this.value===1+this.minValue&&this.minusBtnDOM.classList.remove("btn-deactive")}},{key:"minusOne",value:function(){this.value>=1+this.minValue&&(this.value-=1),this.value===this.minValue&&(this.isMinValue=!0),this.resultDOM.innerText=this.value,this.value===this.minValue&&this.minusBtnDOM.classList.add("btn-deactive")}},{key:"clearResult",value:function(){this.value=this.minValue,this.resultDOM.innerText=this.value,this.minusBtnDOM.classList.add("btn-deactive")}}])&&i(t.prototype,n),o&&i(t,o),e}();function s(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var r=function(){function e(t,n){(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.items=[],this._setConfig(n),this._findElement(t),this._installComponents(),this._createHandlers(),this.setListeners(),this.textFieldDOM.value=this._addTypeDescription(this._countValuesByTypes()),this.config.areControlButtons)&&(!this.items.some((function(e){return!1===e.isMinValue}))&&this._hideClearButton())}var t,n,i;return t=e,(n=[{key:"setListeners",value:function(){var e=this,t=this.config.areControlButtons;this.mainDOM.addEventListener("mouseleave",this.handleDropdownMenuMouseleave),this.textFieldDOM.addEventListener("click",this.handleDropdownMenuClick),this.items.forEach((function(t){t.plusBtnDOM.addEventListener("click",t.handlePlusBtnClick),t.minusBtnDOM.addEventListener("click",t.handleMinusBtnClick),t.plusBtnDOM.addEventListener("click",e.handlePlusBtnClick),t.minusBtnDOM.addEventListener("click",e.handleMinusBtnClick)})),t&&(this.applyBtn.addEventListener("click",this.handleButtonApplyClick),this.clearBtn.addEventListener("click",this.handleButtonClearClick))}},{key:"removeListeners",value:function(){var e=this,t=this.config.areControlButtons;this.mainDOM.removeEventListener("mouseleave",this.handleDropdownMenuMouseleave),this.textFieldDOM.removeEventListener("click",this.handleDropdownMenuClick),this.items.forEach((function(t){t.plusBtnDOM.removeEventListener("click",t.handlePlusBtnClick),t.minusBtnDOM.removeEventListener("click",t.handleMinusBtnClick),t.plusBtnDOM.removeEventListener("click",e.handlePlusBtnClick),t.minusBtnDOM.removeEventListener("click",e.handleMinusBtnClick)})),t&&(this.applyBtn.removeEventListener("click",this.handleButtonApplyClick),this.clearBtn.removeEventListener("click",this.handleButtonClearClick))}},{key:"closeMenu",value:function(){this.menuDOM.classList.remove("current"),this.textFieldDOM.classList.remove("count-active")}},{key:"switchMenu",value:function(){this.menuDOM.classList.toggle("current"),this.textFieldDOM.classList.toggle("count-active")}},{key:"_findElement",value:function(e){this.mainDOM="string"==typeof e?document.querySelector(e):e,this.textFieldDOM=this.mainDOM.querySelector("input")}},{key:"_setConfig",value:function(e){var t=e.placeholder,n=e.areControlButtons,i=e;i.placeholder=t||"",i.areControlButtons=n||!1,this.config=i}},{key:"_installComponents",value:function(){var e=this.config,t=e.itemsCount,n=e.areControlButtons,i=this.mainDOM,s=this.items;this.menuDOM=document.createElement("div"),this.menuDOM.classList.add("menu-count-dropdown");var r=document.createElement("div"),a=document.createElement("ul");r.classList.add("menu-count-dropdown__wrapper"),a.classList.add("menu-count-dropdown__items-container"),r.append(a),this.menuDOM.append(r),t.forEach((function(e,t){var n=document.createElement("li");n.classList.add("menu-count-dropdown__item"),s[t]=new o(n,e),a.append(n)})),n&&(r.insertAdjacentHTML("beforeend",'\n        <div class="menu-count-dropdown__control-buttons">\n          <div>\n            <button class="button button_fade05 js-clear" type="button">очистить</button>\n          </div>\n          <div>\n            <button class="button button_blue js-apply" type="button">применить</button>\n          </div>\n        </div>'),this.applyBtn=r.querySelector(".js-apply"),this.clearBtn=r.querySelector(".js-clear")),i.append(this.menuDOM)}},{key:"_createHandlers",value:function(){var e=this,t=this.config.areControlButtons,n=this.textFieldDOM,i=this.items;t&&(this.handleButtonApplyClick=function(){var t=e._countValuesByTypes();n.value=e._addTypeDescription(t),e.closeMenu()},this.handleButtonClearClick=function(){i.forEach((function(e){return e.clearResult()})),e._hideClearButton()}),this.handleDropdownMenuClick=this.switchMenu.bind(this),this.handleDropdownMenuMouseleave=this.closeMenu.bind(this),this.handlePlusBtnClick=function(){if(t&&e._showClearButton(),!t){var n=e._countValuesByTypes();e.textFieldDOM.value=e._addTypeDescription(n)}},this.handleMinusBtnClick=function(){if(t&&!e.items.some((function(e){return!1===e.isMinValue}))&&e._hideClearButton(),!t){var n=e._countValuesByTypes();e.textFieldDOM.value=e._addTypeDescription(n)}}}},{key:"_showClearButton",value:function(){this.clearBtn.style.visibility="visible"}},{key:"_hideClearButton",value:function(){this.clearBtn.style.visibility="hidden"}},{key:"_countValuesByTypes",value:function(){var e=this,t=this.config.descriptionTypes,n=[];return t.forEach((function(t,i){n[i]=0,e.items.forEach((function(e){e.descIndex===i&&(n[i]+=e.value)}))})),n}},{key:"_addTypeDescription",value:function(e){var t=this.config,n=t.descriptionTypes,i=t.placeholder,o="";return e.forEach((function(e,t){if(0!==e){var i=(s=e,n[t][s%100>4&&s%100<20?2:[2,0,1,1,1,2][s%10<5?s%10:5]]);o+="".concat(e," ").concat(i,", ")}var s})),""===(o=o.slice(0,-2))&&(o=i),o}}])&&s(t.prototype,n),i&&s(t,i),e}();t.a=r},28:function(e,t,n){"use strict";n.r(t),function(e){n(29),n(9),n(6),n(7),n(5);for(var t=n(1),i=document.querySelectorAll(".js-menu-count"),o=[],s=[{itemsCount:[{title:"спальни",index:0,value:2},{title:"кровати",index:1,minValue:1,value:2},{title:"ванные комнаты",index:2}],descriptionTypes:[["спальня","спальни","спален"],["кровать","кровати","кроватей"],["ванная комната","ванные комнаты","ванных комнаты"]]},{itemsCount:[{title:"взрослые"},{title:"дети"},{title:"младенцы",index:1}],descriptionTypes:[["гость","гостя","гостей"],["младенец","младенца","младенцев"]],placeholder:"Сколько гостей",areControlButtons:!0},{itemsCount:[{title:"взрослые",value:2},{title:"дети",value:1},{title:"младенцы",index:1}],descriptionTypes:[["гость","гостя","гостей"],["младенец","младенца","младенцев"]],placeholder:"Сколько гостей",areControlButtons:!0}],r=0;r<3;r+=1)o[r]=new t.a(i[r],s[r]),o[r].removeListeners(),o[r].switchMenu();document.querySelectorAll(".checkbox-list__button")[1].click(),document.querySelectorAll(".images-slider-arrows__prev")[0].style.zIndex="1",document.querySelectorAll(".images-slider-arrows__next")[0].style.zIndex="1";var a=document.querySelector(".payment");a.querySelector(".js-datepicker-main-field").value="19.08.2019",a.querySelector(".js-datepicker-second-field").value="23.08.2019",e(".js-date-birth-text-field").inputmask({placeholder:"ДД.ММ.ГГГГ",alias:"datetime",inputFormat:"dd.mm.yyyy",min:"01.01.1900",max:"01.01.2021"})}.call(this,n(0))},29:function(e,t,n){var i=n(3),o=n(30);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var s={insert:"head",singleton:!1};i(o,s);e.exports=o.locals||{}},30:function(e,t,n){},5:function(e,t){function n(e){var t=e.classList.contains("like-button_checked"),n=e.querySelector("i");n.innerText=t?"favorite":"favorite_border"}function i(){this.classList.toggle("like-button_checked"),n(this)}document.querySelectorAll(".js-like-button").forEach((function(e){n(e),e.addEventListener("click",i)}))},6:function(e,t,n){(function(e,t){var n;t(((n=e(".checkbox-list__button")).find(".checkbox-list-button__icon-up").hide(),void n.on("click",(function(t){var n=t.currentTarget,i=e(n).find(".checkbox-list-button__icon-up"),o=e(n).find(".checkbox-list-button__icon-down");e(n.parentElement).find(".checkbox-list__menu").slideToggle(".active"),i.toggle(),o.toggle()}))))}).call(this,n(0),n(0))},7:function(e,t,n){"use strict";(function(e){n(8);e(".js-range-slider__container").rangeSlider({sliderValues:[5e3,1e4],sliderType:"range",maxValue:15500,minValue:0,step:100,textField:[".js-range-slider__field1",".js-range-slider__field2"],updateValues:function(e){var t=e.map((function(e){return"".concat(e.toLocaleString(),"₽")}));return t[0]+=" - ",t}})}).call(this,n(0))},8:function(e,t,n){(function(e){function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}!function(e){var n={};function i(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=e,i.c=n,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"==t(e)&&e&&e.__esModule)return e;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var s in e)i.d(o,s,function(t){return e[t]}.bind(null,s));return o},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=11)}([function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,,,,,function(n,i,o){"use strict";function s(e,t){var n=Math.round(e/t)*t,i=t.toString().includes(".")?t.toString().split(".").pop().length:0;return Number(n.toFixed(i))}function r(e,t){var n=document.createElement("div");n.innerHTML=e;var i=n.firstElementChild;return t&&t.append(i),i}function a(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}o.r(i),o(0),o(1),o(2),o(3),o(4),o(5);var u=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.DOM=void 0,this.DOM=r('<div class="js-range-slider"></div>')}var t,n;return t=e,(n=[{key:"setClassPosition",value:function(e){e?this.DOM.classList.add("js-range-slider_vertical"):this.DOM.classList.add("js-range-slider_horizontal")}}])&&a(t.prototype,n),e}();function l(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var c=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.observers=void 0,this.observers=[]}var t,n;return t=e,(n=[{key:"subscribe",value:function(e){this.observers.push(e)}},{key:"notify",value:function(e){this.observers.forEach((function(t){return t(e)}))}}])&&l(t.prototype,n),e}();function f(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var h=function(){function e(t,n,i){var o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.pos=n,this.isInvert=i,this.Observable=new c,this.coord=void 0,this.DOM=void 0,this.buttonSize=void 0,this.handleButtonMousedown=function(e){var t=o.pos,n=t.page,i=t.offsetFrom,s=t.offsetSize,r=t.clientSize,a=o.isInvert,u=e.target,l=u.parentElement,c=e[n],f=u[i],h=l[r]-u[s];return document.onmousemove=function(e){var t,i=e[n];(t=a?c-i+(h-f):f-(c-i))<0&&(t=0),t>h&&(t=h),o.setCoord(t),o.Observable.notify({isMouseDown:!0})},document.onmouseup=function(){o.Observable.notify({isMouseDown:!1}),document.onmousemove=null,document.onmouseup=null},!1},this.DOM=r('<div class="js-range-slider__button"></div>',t),this.buttonSize=this.DOM[this.pos.offsetSize]}var t,n;return t=e,(n=[{key:"setCoord",value:function(e){this.coord=e}},{key:"toPosition",value:function(){this.DOM.setAttribute("style","".concat(this.pos.offset," : ").concat(this.coord,"px"))}}])&&f(t.prototype,n),e}();function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function v(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var p=function(){function e(t,n,i){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.pos=n,this.isProgress=i,this.buttonSize=0,this.DOM=void 0,this.buttonsCoord=void 0,this.DOM=r('\n      <div class="js-range-slider__interval">\n        <div class="js-slider-interval"></div>\n      </div>',t)}var t,n;return t=e,(n=[{key:"setButtonSize",value:function(e){this.buttonSize=e}},{key:"setCoords",value:function(e){var t=function(e){return function(e){if(Array.isArray(e))return d(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(e);this.isProgress?this.buttonsCoord=[0,t[0]]:(this.buttonsCoord=t,this.checkOverrun())}},{key:"toPosition",value:function(){var e=this.buttonsCoord,t=this.buttonSize,n=e[1]-e[0],i=e[0]+t/2;this.DOM.setAttribute("style"," ".concat(this.pos.offset,": ").concat(i,"px;\n        ").concat(this.pos.size,": ").concat(n,"px;\n      "))}},{key:"checkOverrun",value:function(){(this.buttonsCoord[0]>this.buttonsCoord[1]||this.buttonsCoord[1]<this.buttonsCoord[0])&&this.buttonsCoord.reverse()}}])&&v(t.prototype,n),e}();function b(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var m=function(){function e(t,n,i){var o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.isLabelOnClick=n,this.positionName=i,this.DOM=void 0,this.input=void 0,this.coord=void 0,this.handleButtonMousedown=function(){o.DOM.children[0].classList.remove("js-button-label_hide")},this.handleButtonMouseup=function(){o.DOM.children[0].classList.add("js-button-label_hide")},this.createElements(t)}var t,n;return t=e,(n=[{key:"setCoord",value:function(e){this.coord=e}},{key:"toPosition",value:function(){this.DOM.setAttribute("style","".concat(this.positionName," : ").concat(this.coord,"px"))}},{key:"setValue",value:function(e){this.input.value=e}},{key:"createElements",value:function(e){this.DOM=r('<div class="js-range-slider__container-label">\n        <div class="js-button-label">\n          <input class="js-button-label__input" readonly> </input>\n        </div>\n      </div>',e),this.input=this.DOM.querySelector("input")}}])&&b(t.prototype,n),e}(),y=function e(t,n,i){var o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.Observable=new c,this.value=void 0,this.coord=void 0,this.DOM=void 0,this.lineDOM=void 0,this.numberDOM=void 0,this.handlePointClick=function(){o.Observable.notify({value:o.value})},this.DOM=r('<div class="js-scale-point"></div>',t),n&&(this.numberDOM=r('<div class="js-scale-point__number"></div>',this.DOM)),this.lineDOM=r(i?'<div class="js-scale-point__long-line"></div>':'<div class="js-scale-point__short-line"></div>',this.DOM)};function g(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var O=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.config=n,this.points=[],this.DOM=void 0,this.DOM=r('<div class="js-scale-range"></div>',t),this.createPoints()}var t,n;return t=e,(n=[{key:"setScale",value:function(e){this.setValue(),this.determineСoordScale(e)}},{key:"setValue",value:function(){var e,t=this.config,n=t.minValue,i=t.maxValue,o=t.step,r=t.isInvert,a=(Math.abs(n)+i)/(this.points.length-1);e=r?i:n,this.points.forEach((function(t){var n=t;n.value=s(e,o),n.numberDOM&&(n.numberDOM.innerText=String(n.value)),e=r?e-a:e+a}))}},{key:"createPoints",value:function(){for(var e=this.config,t=e.points,n=e.numberForEach,i=e.longForEach,o=0;o<t;o+=1){var s=o%n==0,r=o%i==0;this.points[o]=new y(this.DOM,s,r)}}},{key:"determineСoordScale",value:function(e){var t=this.config.isInvert,n=e/(this.points.length-1),i=t?e:0;this.points.forEach((function(e){e.coord=i,i=t?i-=n:i+=n}))}}])&&g(t.prototype,n),e}();function M(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var w=function(){function e(t,n){var i=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.index=n,this.Observable=new c,this.DOM=void 0,this.handleTextFieldBlur=function(){var e;e=i.DOM instanceof HTMLInputElement?Number(i.DOM.value)||0:Number(i.DOM.innerText)||0,i.Observable.notify({value:e,index:i.index})},this.find(t)}var t,n;return t=e,(n=[{key:"find",value:function(e){var t=document.querySelector(e);if(!t)throw new Error("Text field not found.");this.DOM=t}},{key:"setValue",value:function(e){this.DOM instanceof HTMLInputElement?this.DOM.value=e:this.DOM.innerText=e}}])&&M(t.prototype,n),e}();function k(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var D=function(){function e(t,n){var i=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.parent=t,this.config=n,this.range=void 0,this.button=[],this.textField=[],this.label=[],this.interval=void 0,this.scale=void 0,this.pos=void 0,this.step=void 0,this.rangeSize=void 0,this.handleWindowResize=function(){i.setElementSizes(),i.setValues(i.config.sliderValues),i.convertValues(i.config.sliderValues),i.toPositionElements()},this.setPositionVariables(),this.installComponents(),this.setElementSizes(),this.setValues(this.config.sliderValues),this.convertValues(this.config.sliderValues),this.toPositionElements()}var t,n;return t=e,(n=[{key:"setValues",value:function(e){var t;this.config.sliderValues=e,(t=this.config.updateValues?this.config.updateValues(e):e.map((function(e){return e.toString()})))||(t=e.map((function(e){return e.toString()}))),this.textField&&this.textField.forEach((function(e,n){e.setValue(t[n])})),this.label&&this.label.forEach((function(e,n){e.setValue(t[n])}))}},{key:"convertValues",value:function(e){var t=this,n=this.config,i=n.minValue;if(n.isRange)e.forEach((function(e,n){var o=t.step*(e+Math.abs(i));t.button[n].setCoord(o)}));else{var o=this.step*(e[0]+Math.abs(i));this.button[0].setCoord(o)}}},{key:"toPositionElements",value:function(){var e=this,t=this.config,n=t.isLabel,i=t.isInvert,o=this.button.map((function(e){return e.coord})),s=this.button.map((function(t){return t.DOM[e.pos.offsetSize]}));this.button.forEach((function(e){return e.toPosition()})),this.interval&&(this.interval.setCoords(o),this.interval.toPosition()),n&&this.label.forEach((function(e,t){i?e.setCoord(o[t]+s[t]):e.setCoord(o[t]),e.toPosition()}))}},{key:"setPositionVariables",value:function(){var e=this.config,t=e.isVertical,n=e.isInvert;this.pos=t?{size:"height",offset:n?"bottom":"top",clientSize:"clientHeight",offsetSize:"offsetHeight",page:"pageY",offsetFrom:"offsetTop"}:{size:"width",offset:n?"right":"left",clientSize:"clientWidth",offsetSize:"offsetWidth",page:"pageX",offsetFrom:"offsetLeft"}}},{key:"installComponents",value:function(){var e=this,t=this.config,n=t.isRange,i=t.isProgress,o=t.isInvert,s=t.isVertical,r=t.isLabel,a=t.isLabelOnClick,l=t.isScale,c=t.textField,f=n||i;this.range=new u,this.range.setClassPosition(s),this.button=[];for(var d=n?2:1,v=0;v<d;v+=1)this.button[v]=new h(this.range.DOM,this.pos,o);f&&(this.interval=new p(this.range.DOM,this.pos,i)),r&&(this.label=[],this.button.forEach((function(t,n){e.label[n]=new m(e.range.DOM,a,e.pos.offset)}))),l&&(this.scale=new O(this.range.DOM,this.config)),c&&c.forEach((function(t,n){e.textField[n]=new w(t,n)})),this.parent.append(this.range.DOM)}},{key:"setElementSizes",value:function(){var e=this.config,t=e.minValue,n=e.maxValue,i=Math.abs(n-t),o=this.button[0].DOM[this.pos.offsetSize];this.rangeSize=this.range.DOM[this.pos.clientSize]-o,this.step=this.rangeSize/i,this.interval&&this.interval.setButtonSize(o),this.scale&&this.scale.setScale(this.rangeSize)}}])&&k(t.prototype,n),e}();function C(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var _=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.config=t,this.Observable=new c;var n=this.config.sliderValues;this.setNewValues(n)}var t,n;return t=e,(n=[{key:"convertCoords",value:function(e){var t=e.buttonsCoords,n=e.stepInCoord,i=this.config.minValue,o=t.map((function(e){return e/n+i}));this.setNewValues(o)}},{key:"updateValue",value:function(e,t){var n=this.config.sliderValues;n[t]=e,this.setNewValues(n)}},{key:"setNewValues",value:function(e){var t=[];this.config.isRange?(t.push(Math.min.apply(null,e)),t.push(Math.max.apply(null,e))):t=e,t=this.checkLimit(t),t=this.putInStep(t),this.config.sliderValues=t,this.Observable.notify({value:t})}},{key:"checkLimit",value:function(e){var t=this.config,n=t.minValue,i=t.maxValue,o=[];return e.forEach((function(e){e<n?o.push(n):e>i?o.push(i):o.push(e)})),o}},{key:"putInStep",value:function(e){var t=this.config.step,n=[];return e.forEach((function(e,i){n[i]=s(e,t)})),n}}])&&C(t.prototype,n),e}();function E(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var S=function(){function e(t,n,i){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.model=t,this.view=n,this.config=i,this.isMouseDown=!1,this.subscribeToChangeValue(),this.subscribeButtons(),this.subscribeTextField(),this.subscribePoint()}var t,n;return t=e,(n=[{key:"subscribeToChangeValue",value:function(){var e=this;this.model.Observable.subscribe((function(t){var n=t.value;e.isMouseDown||(e.view.convertValues(n),e.view.toPositionElements()),e.view.setValues(n)}))}},{key:"subscribeButtons",value:function(){var e=this;this.view.button.forEach((function(t,n){t.Observable.subscribe((function(i){var o=i.isMouseDown,s=e.view,r=s.step,a=s.label,u=e.config,l=u.isRange,c=u.isLabel,f=e.view.button.map((function(e){return e.coord}));e.isMouseDown=o,l&&(o?(t.DOM.classList.add("js-range-slider__button_lift-up"),c&&a[n].DOM.classList.add("js-button-label_lift-up")):(t.DOM.classList.remove("js-range-slider__button_lift-up"),c&&a[n].DOM.classList.remove("js-button-label_lift-up"))),o&&e.view.toPositionElements(),e.model.convertCoords({buttonsCoords:f,stepInCoord:r})}))}))}},{key:"subscribeTextField",value:function(){var e=this;this.view.textField&&this.view.textField.forEach((function(t){t.Observable.subscribe((function(t){var n=t.value,i=t.index;e.model.updateValue(n,i)}))}))}},{key:"subscribePoint",value:function(){var e=this;this.view.scale&&this.view.scale.points.forEach((function(t){t.Observable.subscribe((function(n){var i,o=n.value;if(e.config.isRange){var s=e.view.button[0].coord,r=(e.view.button[1].coord-s)/2+s;i=t.coord>r?1:0}else i=0;e.model.updateValue(o,i)}))}))}}])&&E(t.prototype,n),e}();function L(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?L(Object(n),!0).forEach((function(t){x(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):L(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function x(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function B(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var V=function(){function e(t,n,i){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.defaultConfig=i,this.model=void 0,this.view=void 0,this.controller=void 0,this.mainDOM=void 0,this.currentConfig=void 0,this.findDOM(t),this.setConfig(n)}var t,n;return t=e,(n=[{key:"setConfig",value:function(e){var t=j(j(j({},this.defaultConfig),this.currentConfig),e),n=t.sliderType,i=t.value1Slider,o=t.value2Slider;"number"==typeof i&&(t.sliderValues[0]=i,delete t.value1Slider),"number"==typeof o&&(t.sliderValues[1]=o,delete t.value2Slider),n&&(t.isSingle="single"===n,t.isRange="range"===n,t.isProgress="progress"===n),this.currentConfig=t,this.init()}},{key:"init",value:function(){this.model=new _(this.currentConfig),this.currentConfig.sliderValues=this.model.config.sliderValues,this.view=new D(this.mainDOM,this.currentConfig),this.controller=new S(this.model,this.view,this.currentConfig),this.setListeners()}},{key:"setListeners",value:function(){var e=this.controller.view,t=this.currentConfig.isLabel&&this.currentConfig.isLabelOnClick;window.addEventListener("resize",e.handleWindowResize),e.button.forEach((function(e){e.DOM.addEventListener("mousedown",e.handleButtonMousedown)})),e.textField.forEach((function(e){e.DOM&&e.DOM.addEventListener("blur",e.handleTextFieldBlur)})),e.scale&&e.scale.points.forEach((function(e){e.DOM.addEventListener("click",e.handlePointClick)})),t&&e.label.forEach((function(t,n){t.handleButtonMouseup(),e.button[n].DOM.addEventListener("mousedown",t.handleButtonMousedown),document.addEventListener("mouseup",t.handleButtonMouseup)}))}},{key:"removeListeners",value:function(){var e=this.controller.view,t=this.currentConfig.isLabel&&this.currentConfig.isLabelOnClick;window.removeEventListener("resize",e.handleWindowResize),e.button.forEach((function(e){e.DOM.removeEventListener("mousedown",e.handleButtonMousedown)})),e.textField.forEach((function(e){e.DOM&&e.DOM.removeEventListener("blur",e.handleTextFieldBlur)})),e.scale&&e.scale.points.forEach((function(e){e.DOM.removeEventListener("click",e.handlePointClick)})),t&&e.label.forEach((function(t,n){t.handleButtonMousedown(),e.button[n].DOM.removeEventListener("mousedown",t.handleButtonMousedown),document.removeEventListener("mouseup",t.handleButtonMouseup)}))}},{key:"delete",value:function(){this.removeListeners(),this.mainDOM.innerHTML=""}},{key:"findDOM",value:function(e){var t;if(!(t="string"==typeof e?document.querySelector(e):e))throw new Error("Main DOM element not found.");this.mainDOM=t}}])&&B(t.prototype,n),e}();function P(e){return(P="function"==typeof Symbol&&"symbol"==t(Symbol.iterator)?function(e){return t(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":t(e)})(e)}!function(e){var t=e,n={init:function(e){return this.each((function(n,i){var o=new V(i,e,t.fn.rangeSlider.defaultConfig);t.fn.rangeSlider.sliders.push(o)}))},delete:function(){return this.each((function(e,n){t.fn.rangeSlider.sliders.forEach((function(e,i){return e.mainDOM===n&&(e.delete(),delete t.fn.rangeSlider.sliders[i]),!1}))}))},config:function(e){return this.each((function(n,i){t.fn.rangeSlider.sliders.forEach((function(t){return t.mainDOM===i&&(t.delete(),t.setConfig(e)),!1}))}))},setListeners:function(){return this.each((function(e,n){t.fn.rangeSlider.sliders.forEach((function(e){return e.mainDOM===n&&e.setListeners(),!1}))}))},removeListeners:function(){return this.each((function(e,n){t.fn.rangeSlider.sliders.forEach((function(e){return e.mainDOM===n&&e.removeListeners(),!1}))}))}};t.fn.rangeSlider=function(e){if(n[e]){for(var i=arguments.length,o=new Array(i>1?i-1:0),s=1;s<i;s++)o[s-1]=arguments[s];return n[e].apply(this,o)}if("object"===P(e)||!e){var r=e;return n.init.apply(this,[r])}return t.error("Method named ".concat(e," does not exist for jQuery.rangeSlider"))},t.fn.rangeSlider.sliders=[],t.fn.rangeSlider.defaultConfig={sliderType:"single",sliderValues:[-25,25],minValue:-100,maxValue:100,step:1,textField:[],isVertical:!1,isInvert:!1,isLabel:!1,isLabelOnClick:!1,isScale:!1,points:13,numberForEach:4,longForEach:2}}(e)}])}).call(this,n(0))}});