!function(e){const t={};function i(n){if(t[n])return t[n].exports;const o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=e,i.c=t,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){typeof Symbol!=="undefined"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&typeof e==="object"&&e&&e.__esModule)return e;const n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&typeof e!=="string")for(const o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){const t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=11)}([function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},,,,,,function(e,t,i){i.r(t);i(0),i(1),i(2),i(3),i(4),i(5);function n(e,t){let i=Math.round(e/t)*t; const n=t.toString().includes(".")?t.toString().split(".").pop().length:0;return i=Number(i.toFixed(n))}function o(e,t){const i=document.createElement("div");i.innerHTML=e;const n=i.firstElementChild;return t&&t.append(n),n}function s(e,t){for(let i=0;i<t.length;i++){const n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}const r=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.observers=void 0,this.observers=[]}let t; let i; let n;return t=e,(i=[{key:"subscribe",value(e){this.observers.push(e)}},{key:"notify",value(e){this.observers.forEach((function(t){return t(e)}))}}])&&s(t.prototype,i),n&&s(t,n),e}();function a(e,t){for(let i=0;i<t.length;i++){const n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}const u=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.config=t,this.Observable=new r;const i=this.config.sliderValues;this.setNewValues(i)}let t; let i; let o;return t=e,(i=[{key:"convertCoords",value(e){const t=e.buttonsCoords; const i=e.stepInCoord; const n=this.config.minValue; const o=t.map((function(e){return e/i+n}));this.setNewValues(o)}},{key:"updateValue",value(e,t){const i=this.config.sliderValues;i[t]=e,this.setNewValues(i)}},{key:"setNewValues",value(e){let t=[];this.config.isRange?(t.push(Math.min.apply(null,e)),t.push(Math.max.apply(null,e))):t=e,t=this.checkLimit(t),t=this.putInStep(t),this.config.sliderValues=t,this.Observable.notify({value:t})}},{key:"checkLimit",value(e){const t=this.config; const i=t.minValue; const n=t.maxValue; const o=[];return e.forEach((function(e){e<i?o.push(i):e>n?o.push(n):o.push(e)})),o}},{key:"putInStep",value(e){const t=this.config.step; const i=[];return e.forEach((function(e,o){i[o]=n(e,t)})),i}}])&&a(t.prototype,i),o&&a(t,o),e}();function l(e,t){for(let i=0;i<t.length;i++){const n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}const c=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.DOM=void 0,this.DOM=o('<div class="js-range-slider"></div>')}let t; let i; let n;return t=e,(i=[{key:"setClassPosition",value(e){e?this.DOM.classList.add("js-range-slider_vertical"):this.DOM.classList.add("js-range-slider_horizontal")}}])&&l(t.prototype,i),n&&l(t,n),e}();function h(e,t){for(let i=0;i<t.length;i++){const n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}const f=function(){function e(t,i,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.pos=i,this.isInvert=n,this.Observable=new r,this.coord=void 0,this.DOM=void 0,this.handleButtonMousedown=void 0,this.DOM=o('<div class="js-range-slider__button"></div>',t),this.handleButtonMousedown=this.move.bind(this)}let t; let i; let n;return t=e,(i=[{key:"move",value(e){const t=this; const i=this.pos; const n=i.page; const o=i.offsetFrom; const s=i.offsetSize; const r=i.clientSize; const a=this.isInvert; const u=e.target; const l=u.parentElement; const c=e[n]; const h=u[o]; const f=l[r]-u[s];return document.onmousemove=function(e){let i; const o=e[n];(i=a?c-o+(f-h):h-(c-o))<0&&(i=0),i>f&&(i=f),t.setCoord(i),t.Observable.notify({isMouseDown:!0})},document.onmouseup=function(){t.Observable.notify({isMouseDown:!1}),document.onmousemove=null,document.onmouseup=null},!1}},{key:"setCoord",value(e){this.coord=e}},{key:"toPosition",value(){this.DOM.setAttribute("style","".concat(this.pos.offset," : ").concat(this.coord,"px"))}}])&&h(t.prototype,i),n&&h(t,n),e}();function d(e){return function(e){if(Array.isArray(e))return v(e)}(e)||function(e){if(typeof Symbol!=="undefined"&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if(typeof e==="string")return v(e,t);let i=Object.prototype.toString.call(e).slice(8,-1);i==="Object"&&e.constructor&&(i=e.constructor.name);if(i==="Map"||i==="Set")return Array.from(e);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return v(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(e,t){(t==null||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}function b(e,t){for(let i=0;i<t.length;i++){const n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}const p=function(){function e(t,i,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.pos=i,this.isProgress=n,this.buttonSize=0,this.DOM=void 0,this.buttonsCoord=void 0,this.DOM=o('\n      <div class="js-range-slider__interval">\n        <div class="js-slider-interval"></div>\n      </div>',t)}let t; let i; let n;return t=e,(i=[{key:"setButtonValue",value(e){this.buttonSize=e}},{key:"setCoords",value(e){const t=d(e);this.isProgress?this.buttonsCoord=[0,t[0]]:(this.buttonsCoord=t,this.checkOverrun())}},{key:"toPosition",value(){const e=this.buttonsCoord; const t=this.buttonSize; const i=e[1]-e[0]; const n=e[0]+t/2;this.DOM.setAttribute("style"," ".concat(this.pos.offset,": ").concat(n,"px;\n        ").concat(this.pos.size,": ").concat(i,"px;\n      "))}},{key:"checkOverrun",value(){(this.buttonsCoord[0]>this.buttonsCoord[1]||this.buttonsCoord[1]<this.buttonsCoord[0])&&this.buttonsCoord.reverse()}}])&&b(t.prototype,i),n&&b(t,n),e}();function y(e,t){for(let i=0;i<t.length;i++){const n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}const g=function(){function e(t,i,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.isLabelOnClick=i,this.positionName=n,this.DOM=void 0,this.input=void 0,this.coord=void 0,this.handleButtonMousedown=void 0,this.handleButtonMouseup=void 0,this.createElements(t),i&&(this.handleButtonMousedown=this.show.bind(this),this.handleButtonMouseup=this.hide.bind(this))}let t; let i; let n;return t=e,(i=[{key:"setCoord",value(e){this.coord=e}},{key:"toPosition",value(){this.DOM.setAttribute("style","".concat(this.positionName," : ").concat(this.coord,"px"))}},{key:"show",value(){this.DOM.children[0].classList.remove("js-button-label_hide")}},{key:"hide",value(){this.DOM.children[0].classList.add("js-button-label_hide")}},{key:"setValue",value(e){this.input.value=String(e)}},{key:"createElements",value(e){this.DOM=o('<div class="js-range-slider__container-label">\n        <div class="js-button-label">\n          <input class="js-button-label__input" readonly> </input>\n        </div>\n      </div>',e),this.input=this.DOM.querySelector("input")}}])&&y(t.prototype,i),n&&y(t,n),e}();function m(e,t){for(let i=0;i<t.length;i++){const n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}const w=function(){function e(t,i,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.Observable=new r,this.value=void 0,this.coord=void 0,this.DOM=void 0,this.lineDOM=void 0,this.numberDOM=void 0,this.handlePointClick=void 0,this.DOM=o('<div class="js-scale-point"></div>',t),i&&(this.numberDOM=o('<div class="js-scale-point__number"></div>',this.DOM)),this.lineDOM=o(n?'<div class="js-scale-point__long-line"></div>':'<div class="js-scale-point__short-line"></div>',this.DOM),this.handlePointClick=this.clickPoint.bind(this)}let t; let i; let n;return t=e,(i=[{key:"clickPoint",value(){this.Observable.notify({value:this.value})}}])&&m(t.prototype,i),n&&m(t,n),e}();function O(e,t){for(let i=0;i<t.length;i++){const n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}const M=function(){function e(t,i){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.config=i,this.points=[],this.DOM=void 0,this.DOM=o('<div class="js-scale-range"></div>',t),this.createPoints()}let t; let i; let s;return t=e,(i=[{key:"setScale",value(e){this.setValue(),this.determineСoordScale(e)}},{key:"setValue",value(){let e; const t=this.config; const i=t.minValue; const o=t.maxValue; const s=t.step; const r=t.isInvert; const a=(Math.abs(i)+o)/(this.points.length-1);e=r?o:i,this.points.forEach((function(t){const i=t;i.value=n(e,s),i.numberDOM&&(i.numberDOM.innerText=String(i.value)),e=r?e-a:e+a}))}},{key:"createPoints",value(){for(let e=this.config,t=e.points,i=e.numberForEach,n=e.longForEach,o=0;o<t;o+=1){const s=o%i==0; const r=o%n==0;this.points[o]=new w(this.DOM,s,r)}}},{key:"determineСoordScale",value(e){const t=this.config.isInvert; const i=e/(this.points.length-1); let n=t?e:0;this.points.forEach((function(e){e.coord=n,n=t?n-=i:n+=i}))}}])&&O(t.prototype,i),s&&O(t,s),e}();function k(e,t){for(let i=0;i<t.length;i++){const n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}const D=function(){function e(t,i){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.index=i,this.Observable=new r,this.DOM=void 0,this.handleTextFieldBlur=void 0,this.isInput=void 0,this.find(t),this.handleTextFieldBlur=this.getValue.bind(this)}let t; let i; let n;return t=e,(i=[{key:"find",value(e){const t=document.querySelector(e);if(!t)throw new Error("Text field not found.");this.isInput=t.nodeName==="INPUT",this.DOM=t}},{key:"getValue",value(){let e;e=this.isInput?Number(this.DOM.value)||0:Number(this.DOM.innerText)||0,this.Observable.notify({value:e,index:this.index})}},{key:"setValue",value(e){this.isInput?this.DOM.value=String(e):this.DOM.innerText=String(e)}}])&&k(t.prototype,i),n&&k(t,n),e}();function E(e,t){for(let i=0;i<t.length;i++){const n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}const S=function(){function e(t,i){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.parent=t,this.config=i,this.range=void 0,this.button=[],this.textField=[],this.label=[],this.interval=void 0,this.scale=void 0,this.pos=void 0,this.step=void 0,this.rangeSize=void 0,this.handleWindowResize=void 0,this.setPositionVariables(),this.installComponents(),this.setElementsParameters(),this.setValues(this.config.sliderValues),this.convertValues(this.config.sliderValues),this.setCoords(),this.toPositionElements(),this.setListeners()}let t; let i; let n;return t=e,(i=[{key:"setValues",value(e){this.config.sliderValues=e,this.textField&&this.textField.forEach((function(t,i){t.setValue(e[i])})),this.label&&this.label.forEach((function(t,i){t.setValue(e[i])}))}},{key:"convertValues",value(e){const t=this; const i=this.config; const n=i.minValue;if(i.isRange)e.forEach((function(e,i){const o=t.step*(e+Math.abs(n));t.button[i].setCoord(o)}));else{const o=this.step*(e[0]+Math.abs(n));this.button[0].setCoord(o)}}},{key:"setCoords",value(){const e=this; const t=this.config; const i=t.isLabel; const n=t.isInvert; const o=this.button.map((function(e){return e.coord})); const s=this.button.map((function(t){return t.DOM[e.pos.offsetSize]}));this.interval&&this.interval.setCoords(o),i&&this.label.forEach((function(e,t){n?e.setCoord(o[t]+s[t]):e.setCoord(o[t])}))}},{key:"toPositionElements",value(){this.button.forEach((function(e){return e.toPosition()})),this.interval&&this.interval.toPosition(),this.label&&this.label.forEach((function(e){return e.toPosition()}))}},{key:"setListeners",value(){const e=this; const t=this.config.isLabel&&this.config.isLabelOnClick;this.handleWindowResize=this.resizeSlider.bind(this),window.addEventListener("resize",this.handleWindowResize),this.button.forEach((function(e){e.DOM.addEventListener("mousedown",e.handleButtonMousedown)})),this.textField.forEach((function(e){e.DOM&&e.DOM.addEventListener("blur",e.handleTextFieldBlur)})),this.scale&&this.scale.points.forEach((function(e){e.DOM.addEventListener("click",e.handlePointClick)})),t&&this.label.forEach((function(t,i){t.hide(),e.button[i].DOM.addEventListener("mousedown",t.handleButtonMousedown),document.addEventListener("mouseup",t.handleButtonMouseup)}))}},{key:"removeListeners",value(){const e=this; const t=this.config.isLabelOnClick;window.removeEventListener("resize",this.handleWindowResize),this.button.forEach((function(e){e.DOM.removeEventListener("mousedown",e.handleButtonMousedown)})),this.textField.forEach((function(e){e.DOM&&e.DOM.removeEventListener("blur",e.handleTextFieldBlur)})),this.scale&&this.scale.points.forEach((function(e){e.DOM.removeEventListener("click",e.handlePointClick)})),t&&this.label.forEach((function(t,i){t.show(),e.button[i].DOM.removeEventListener("mousedown",t.handleButtonMousedown),document.removeEventListener("mouseup",t.handleButtonMouseup)}))}},{key:"setPositionVariables",value(){const e=this.config; const t=e.isVertical; const i=e.isInvert;this.pos=t?{size:"height",offset:i?"bottom":"top",clientSize:"clientHeight",offsetSize:"offsetHeight",page:"pageY",offsetFrom:"offsetTop"}:{size:"width",offset:i?"right":"left",clientSize:"clientWidth",offsetSize:"offsetWidth",page:"pageX",offsetFrom:"offsetLeft"}}},{key:"installComponents",value(){const e=this; const t=this.config; const i=t.isRange; const n=t.isProgress; const o=t.isInvert; const s=t.isVertical; const r=t.isLabel; const a=t.isLabelOnClick; const u=t.isScale; const l=t.textField; const h=i||n;this.range=new c,this.range.setClassPosition(s),this.button=[];for(let d=i?2:1,v=0;v<d;v+=1)this.button[v]=new f(this.range.DOM,this.pos,o);h&&(this.interval=new p(this.range.DOM,this.pos,n)),r&&(this.label=[],this.button.forEach((function(t,i){e.label[i]=new g(e.range.DOM,a,e.pos.offset)}))),u&&(this.scale=new M(this.range.DOM,this.config)),l&&l.forEach((function(t,i){e.textField[i]=new D(t,i)})),this.parent.append(this.range.DOM)}},{key:"updateRangeSize",value(){const e=this.config; const t=e.minValue; const i=e.maxValue; const n=this.button[0].DOM[this.pos.offsetSize]; const o=this.range.DOM[this.pos.clientSize];this.rangeSize=o-n;const s=Math.abs(i-t);this.step=this.rangeSize/s}},{key:"setElementsParameters",value(){if(this.updateRangeSize(),this.interval){const e=this.button[0].DOM[this.pos.offsetSize];this.interval.setButtonValue(e)}this.scale&&this.scale.setScale(this.rangeSize)}},{key:"resizeSlider",value(){this.updateRangeSize(),this.setValues(this.config.sliderValues),this.convertValues(this.config.sliderValues),this.setCoords(),this.toPositionElements()}}])&&E(t.prototype,i),n&&E(t,n),e}();function C(e,t){for(let i=0;i<t.length;i++){const n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}const V=function(){function e(t,i){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.mainDOM=t,this.config=i,this.model=void 0,this.view=void 0,this.isMouseDown=!1,this.setNewConfig(this.config)}let t; let i; let n;return t=e,(i=[{key:"init",value(){this.model=new u(this.config),this.config.sliderValues=this.model.config.sliderValues,this.view=new S(this.mainDOM,this.config),this.subscribeToChangeValue(),this.subscribeButtons(),this.subscribeTextField(),this.subscribePoint()}},{key:"setNewConfig",value(e){const t=e; const i=e.sliderType; const n=e.value1Slider; const o=e.value2Slider;typeof n==="number"&&(t.sliderValues[0]=n,delete t.value1Slider),typeof o==="number"&&(t.sliderValues[1]=o,delete t.value2Slider),i&&(t.isSingle=i==="single",t.isRange=i==="range",t.isProgress=i==="progress"),delete t.sliderType,this.config=t,this.init()}},{key:"subscribeToChangeValue",value(){const e=this;this.model.Observable.subscribe((function(t){const i=t.value;e.isMouseDown||(e.view.convertValues(i),e.view.setCoords(),e.view.toPositionElements()),e.view.setValues(i)}))}},{key:"subscribeButtons",value(){const e=this;this.view.button.forEach((function(t,i){t.Observable.subscribe((function(n){const o=n.isMouseDown; const s=e.view; const r=s.step; const a=s.label; const u=e.config; const l=u.isRange; const c=u.isLabel; const h=e.view.button.map((function(e){return e.coord}));e.isMouseDown=o,l&&(o?(t.DOM.classList.add("js-range-slider__button_lift-up"),c&&a[i].DOM.classList.add("js-button-label_lift-up")):(t.DOM.classList.remove("js-range-slider__button_lift-up"),c&&a[i].DOM.classList.remove("js-button-label_lift-up"))),o&&(e.view.setCoords(),e.view.toPositionElements()),e.model.convertCoords({buttonsCoords:h,stepInCoord:r})}))}))}},{key:"subscribeTextField",value(){const e=this;this.view.textField&&this.view.textField.forEach((function(t){t.Observable.subscribe((function(t){const i=t.value; const n=t.index;e.model.updateValue(i,n)}))}))}},{key:"subscribePoint",value(){const e=this;this.view.scale&&this.view.scale.points.forEach((function(t){t.Observable.subscribe((function(i){let n; const o=i.value;if(e.config.isRange){const s=e.view.button[0].coord; const r=(e.view.button[1].coord-s)/2+s;n=t.coord>r?1:0}else n=0;e.model.updateValue(o,n)}))}))}}])&&C(t.prototype,i),n&&C(t,n),e}();function P(e){return(P=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol==="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}!function(e){const t=e; const i={init(e){return this.each((function(i,n){const o=t.extend({},t.fn.rangeSlider.config,e); const s=new V(n,o);t.fn.rangeSlider.sliders.push(s)}))},delete(){return this.each((function(e,i){t.fn.rangeSlider.sliders.forEach((function(e,n){return e.mainDOM===i&&(e.view.removeListeners(),t(e.mainDOM).empty(),delete t.fn.rangeSlider.sliders[n]),!1}))}))},config(e){return this.each((function(i,n){t.fn.rangeSlider.sliders.forEach((function(i){if(i.mainDOM===n){t(i.mainDOM).empty();const o=t.extend({},i.config,e);return i.setNewConfig(o)}return!1}))}))},setListeners(){return this.each((function(e,i){t.fn.rangeSlider.sliders.forEach((function(e){return e.mainDOM===i&&(e.view.setListeners(),!1)}))}))},removeListeners(){return this.each((function(e,i){t.fn.rangeSlider.sliders.forEach((function(e){return e.mainDOM===i&&(e.view.removeListeners(),!1)}))}))}};t.fn.rangeSlider=function(e){if(i[e]){for(var n=arguments.length,o=new Array(n>1?n-1:0),s=1;s<n;s++)o[s-1]=arguments[s];return i[e].apply(this,o)}if(P(e)==="object"||!e){const r=e;return i.init.apply(this,[r])}return t.error("Method named ".concat(e," does not exist for jQuery.rangeSlider"))},t.fn.rangeSlider.config={sliderType:"single",sliderValues:[-25,25],minValue:0,maxValue:100,step:1,textField:[],isVertical:!1,isInvert:!1,isLabel:!1,isLabelOnClick:!1,isScale:!1,points:13,numberForEach:4,longForEach:2},t.fn.rangeSlider.sliders=[]}(jQuery)}]);