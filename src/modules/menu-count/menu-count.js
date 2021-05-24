import { declOfNum } from '../../assets/js/mixins';
import ItemCount from './components/item-count';

class MenuForCount {
  constructor(config) {
    this._init(config);
  }

  setListeners() {
    const { areControlButtons } = this.config;

    // открыть/закрыть меню
    document.addEventListener('keydown', this.handlerDropdownMenuKeydown);
    this.textFieldDOM.addEventListener('click', this.handlerDropdownMenuClick);

    // кнопки + и -
    this.items.forEach((item) => {
      item.plusBtnDOM.addEventListener('click', item.handlerPlusBtnClick);
      item.minusBtnDOM.addEventListener('click', item.handlerMinusBtnClick);
      item.plusBtnDOM.addEventListener('click', this.handlerPlusBtnClick);
      item.minusBtnDOM.addEventListener('click', this.handlerMinusBtnClick);
    });

    // кнопки контроля
    if (areControlButtons) {
      this.applyBtn.addEventListener('click', this.handlerButtonApplyClick);
      this.clearBtn.addEventListener('click', this.handlerButtonClearClick);
    }
  }

  removeListeners() {
    const { areControlButtons } = this.config;

    // открыть/закрыть меню
    document.removeEventListener('keydown', this.handlerDropdownMenuKeydown);
    this.textFieldDOM.removeEventListener(
      'click',
      this.handlerDropdownMenuClick,
    );

    // кнопки + и -
    this.items.forEach((item) => {
      item.plusBtnDOM.removeEventListener('click', item.handlerPlusBtnClick);
      item.minusBtnDOM.removeEventListener('click', item.handlerMinusBtnClick);
      item.plusBtnDOM.removeEventListener('click', this.handlerPlusBtnClick);
      item.minusBtnDOM.removeEventListener('click', this.handlerMinusBtnClick);
    });

    // кнопки контроля
    if (areControlButtons) {
      this.applyBtn.removeEventListener('click', this.handlerButtonApplyClick);
      this.clearBtn.removeEventListener('click', this.handlerButtonClearClick);
    }
  }

  // для выпадающего меню
  closeMenu() {
    this.menuDOM.classList.remove('menu-count-dropdown_active');
    this.textFieldDOM.classList.remove('text-field_dropdown-active');
  }

  switchMenu() {
    this.menuDOM.classList.toggle('menu-count-dropdown_active');
    this.textFieldDOM.classList.toggle('text-field_dropdown-active');
  }

  // установка
  _init(config) {
    this.items = [];
    this._setConfig(config);
    this._findBaseElement();
    this._installComponents();
    this._createHandlers();
    this.setListeners();

    // при загрузке страницы
    // посчитает значения и выставит результат в инпут
    const valuesByTypes = this._countValuesByTypes();
    this.textFieldDOM.innerText = this._addTypeDescription(valuesByTypes);
    this._setValuesInInput(valuesByTypes);

    // скроет кнопку очистить, если значения минимальны
    if (this.config.areControlButtons) {
      const isMinValue = !this.items.some((item) => item.isMinValue === false);
      if (isMinValue) this._hideClearButton();
    }
  }

  _setConfig(config) {
    const { placeholder, areControlButtons } = config;
    const newConfig = config;

    newConfig.placeholder = placeholder || '';
    newConfig.areControlButtons = areControlButtons || false;

    this.config = newConfig;
  }

  _findBaseElement() {
    const { baseElement } = this.config;

    if (typeof baseElement === 'string') {
      this.baseElement = document.querySelector(baseElement);
    } else this.baseElement = baseElement;

    this.textFieldDOM = this.baseElement.querySelector('.js-menu-count__text');
  }

  _installComponents() {
    const { itemsCount, areControlButtons, descriptionTypes } = this.config;
    const { baseElement, items } = this;
    const inputsFragment = document.createDocumentFragment();

    this.menuDOM = document.createElement('div');
    this.menuDOM.classList.add('menu-count-dropdown');

    const wrapper = document.createElement('div');
    const container = document.createElement('ul');
    wrapper.classList.add('menu-count-dropdown__wrapper');
    container.classList.add('menu-count-dropdown__items-container');
    wrapper.appendChild(container);
    this.menuDOM.appendChild(wrapper);

    itemsCount.forEach((itemConfig, i) => {
      const item = document.createElement('li');
      item.classList.add('menu-count-dropdown__item');
      items[i] = new ItemCount(item, itemConfig);
      container.appendChild(item);
    });

    // inputs
    this.inputTypesDOM = [];
    descriptionTypes.forEach((itemConfig, i) => {
      this.inputTypesDOM[i] = document.createElement('input');
      const item = this.inputTypesDOM[i];

      item.classList.add('menu-count__input');
      item.setAttribute('name', itemConfig.type);
      inputsFragment.appendChild(item);
    });

    // кнопки контроля
    if (areControlButtons) {
      wrapper.insertAdjacentHTML(
        'beforeend',
        `
        <div class="menu-count-dropdown__control-buttons">
          <div>
            <button class="button button_default-text-fade js-menu-count-button-clear" type="button">очистить</button>
          </div>
          <div>
            <button class="button button_regular-text js-menu-count-button-apply" type="button">применить</button>
          </div>
        </div>`,
      );

      this.applyBtn = wrapper.querySelector('.js-menu-count-button-apply');
      this.clearBtn = wrapper.querySelector('.js-menu-count-button-clear');
    }

    // вставить в страницу
    inputsFragment.appendChild(this.menuDOM);
    baseElement.appendChild(inputsFragment);
  }

  _createHandlers() {
    const { areControlButtons } = this.config;
    const { textFieldDOM, items } = this;
    if (areControlButtons) {
      this.handlerButtonApplyClick = () => {
        const valuesByTypes = this._countValuesByTypes();
        textFieldDOM.innerText = this._addTypeDescription(valuesByTypes);
        this.closeMenu();
      };

      this.handlerButtonClearClick = () => {
        items.forEach((item) => item.clearResult());
        this._hideClearButton();
      };
    }

    this.handlerDropdownMenuClick = this.switchMenu.bind(this);
    this.handlerDropdownMenuKeydown = (e) => {
      if (e.code === 'Escape') {
        this.closeMenu();
      }
    };

    this.handlerPlusBtnClick = () => {
      const valuesByTypes = this._countValuesByTypes();

      if (areControlButtons) {
        this._showClearButton();
      } else {
        this.textFieldDOM.innerText = this._addTypeDescription(valuesByTypes);
      }

      this._setValuesInInput(valuesByTypes);
    };

    this.handlerMinusBtnClick = () => {
      const valuesByTypes = this._countValuesByTypes();

      if (areControlButtons) {
        const isMinValue = !this.items.some(
          (item) => item.isMinValue === false,
        );
        if (isMinValue) this._hideClearButton();
      } else {
        this.textFieldDOM.innerText = this._addTypeDescription(valuesByTypes);
      }

      this._setValuesInInput(valuesByTypes);
    };
  }

  // для кнопки очистить
  _showClearButton() {
    this.clearBtn.classList.remove('menu-count-button_hidden');
  }

  _hideClearButton() {
    this.clearBtn.classList.add('menu-count-button_hidden');
  }

  // посчитает значения по типам и вернет их массивом
  _countValuesByTypes() {
    const { descriptionTypes } = this.config;
    const valuesByTypes = [];

    descriptionTypes.forEach((type, i) => {
      valuesByTypes[i] = 0;

      this.items.forEach((item) => {
        if (item.descIndex === i) valuesByTypes[i] += item.value;
      });
    });
    return valuesByTypes;
  }

  _setValuesInInput(valuesByTypes) {
    const { inputTypesDOM } = this;

    inputTypesDOM.forEach((elem, i) => {
      const value = valuesByTypes[i] || '0';
      elem.setAttribute('value', value);
    });
  }

  // добавит описание типов и вернет строку
  _addTypeDescription(valuesByTypes) {
    const { descriptionTypes, placeholder } = this.config;
    let valuesWithDescript = '';

    // добавление описаний
    valuesByTypes.forEach((value, i) => {
      if (value !== 0) {
        const type = declOfNum(value, descriptionTypes[i].description);

        valuesWithDescript += `${value} ${type}, `;
      }
    });
    valuesWithDescript = valuesWithDescript.slice(0, -2);

    // если значения нет, выставит placeholder
    if (valuesWithDescript === '') valuesWithDescript = placeholder;

    return valuesWithDescript;
  }
}

export default MenuForCount;

// use
// const menuForCountGuests = new MenuForCount('.js-menuForCount', {
//   itemsCount: [
//     {
//       title          : 'взрослые',        // default = ''
//       index          : 0,                 // default = 0
//       minValue       : 1,                 // default = 0
//       value          : 2,                 // default = minValue
//     },  {
//       title          : 'дети',
//     }, {
//       title          : 'младенцы',
//       index          : 1,
//     }
//   ],
//   descriptionTypes: [
//     {type: 'guests', description: ['гость', 'гостя', 'гостей']},
//     {type: 'child', description: ['младенец', 'младенца', 'младенцев']},
//   ],
//   placeholder : 'Сколько гостей',         // default = ''
//   areControlButtons : false               // default = false
// })
