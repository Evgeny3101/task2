import { declOfNum } from '../../assets/js/mixins';
import ItemCount from './components/item-count';

class MenuForCount {
  constructor(elem, config) {
    this.items = [];
    this.setConfig(config);
    this.findElement(elem);
    this.installComponents();
    this.createHandlers();
    this.setListeners();

    // при загрузке страницы
    // посчитает значения и выставит результат в инпут
    this.textFieldDOM.value = this.addTypeDescription(this.countValuesByTypes());

    // скроет кнопку очистить, если значения минимальны
    if (this.config.areControlButtons) {
      const isMinValue = !this.items.some((item) => item.isMinValue === false);
      if (isMinValue) this.hideClearButton();
    }
  }

  findElement(elem) {
    if (typeof elem === 'string') this.mainDOM = document.querySelector(elem);
    else this.mainDOM = elem;
    this.textFieldDOM = this.mainDOM.querySelector('input');
  }

  setConfig(config) {
    const { placeholder, areControlButtons } = config;
    const newConfig = config;

    newConfig.placeholder = placeholder || '';
    newConfig.areControlButtons = areControlButtons || false;

    this.config = newConfig;
  }

  installComponents() {
    const { itemsCount, areControlButtons } = this.config;
    const { mainDOM, textFieldDOM, items } = this;

    this.menuDOM = document.createElement('div');
    this.menuDOM.classList.add('menu-count-dropdown');

    const wrapper = document.createElement('div');
    const container = document.createElement('ul');
    wrapper.classList.add('menu-count-dropdown__wrapper');
    container.classList.add('menu-count-dropdown__items-container');
    wrapper.append(container);
    this.menuDOM.append(wrapper);

    itemsCount.forEach((itemConfig, i) => {
      const item = document.createElement('li');
      item.classList.add('menu-count-dropdown__item');
      items[i] = new ItemCount(item, itemConfig);
      container.append(item);
    });

    // кнопки контроля
    if (areControlButtons) {
      wrapper.insertAdjacentHTML(
        'beforeend',
        `
        <div class="menu-count-dropdown__control-buttons">
          <div>
            <input class="button button_fade05 js-clear" type="button" value="очистить">
          </div>
          <div>
            <input class="button button_blue js-apply" type="button" value="применить">
          </div>
        </div>`
      );

      this.applyBtn = wrapper.querySelector('.js-apply');
      this.clearBtn = wrapper.querySelector('.js-clear');

      this.handleButtonApplyClick = () => {
        const valuesByTypes = this.countValuesByTypes();
        textFieldDOM.value = this.addTypeDescription(valuesByTypes);
        this.closeMenu();
      };

      this.handleButtonClearClick = () => {
        items.forEach((item) => item.clearResult());
        this.hideClearButton();
      };
    }

    // вставить в страницу
    mainDOM.append(this.menuDOM);
  }

  createHandlers() {
    const { areControlButtons } = this.config;

    this.handleDropdownMenuClick = this.switchMenu.bind(this);
    this.handleDropdownMenuMouseleave = this.closeMenu.bind(this);
    this.handlePlusBtnClick = () => {
      if (areControlButtons) {
        this.showClearButton();
      }

      if (!areControlButtons) {
        const valuesByTypes = this.countValuesByTypes();
        this.textFieldDOM.value = this.addTypeDescription(valuesByTypes);
      }
    };
    this.handleMinusBtnClick = () => {
      if (areControlButtons) {
        const isMinValue = !this.items.some((item) => item.isMinValue === false);
        if (isMinValue) this.hideClearButton();
      }

      if (!areControlButtons) {
        const valuesByTypes = this.countValuesByTypes();
        this.textFieldDOM.value = this.addTypeDescription(valuesByTypes);
      }
    };
  }

  setListeners() {
    const { areControlButtons } = this.config;

    // открыть/закрыть меню
    this.mainDOM.addEventListener('mouseleave', this.handleDropdownMenuMouseleave);
    this.textFieldDOM.addEventListener('click', this.handleDropdownMenuClick);

    // кнопки + и -
    this.items.forEach((item) => {
      item.plusBtnDOM.addEventListener('click', item.handlePlusBtnClick);
      item.minusBtnDOM.addEventListener('click', item.handleMinusBtnClick);
      item.plusBtnDOM.addEventListener('click', this.handlePlusBtnClick);
      item.minusBtnDOM.addEventListener('click', this.handleMinusBtnClick);
    });

    // кнопки контроля
    if (areControlButtons) {
      this.applyBtn.addEventListener('click', this.handleButtonApplyClick);
      this.clearBtn.addEventListener('click', this.handleButtonClearClick);
    }
  }

  removeListeners() {
    const { areControlButtons } = this.config;

    // открыть/закрыть меню
    this.mainDOM.removeEventListener('mouseleave', this.handleDropdownMenuMouseleave);
    this.textFieldDOM.removeEventListener('click', this.handleDropdownMenuClick);

    // кнопки + и -
    this.items.forEach((item) => {
      item.plusBtnDOM.removeEventListener('click', item.handlePlusBtnClick);
      item.minusBtnDOM.removeEventListener('click', item.handleMinusBtnClick);
      item.plusBtnDOM.removeEventListener('click', this.handlePlusBtnClick);
      item.minusBtnDOM.removeEventListener('click', this.handleMinusBtnClick);
    });

    // кнопки контроля
    if (areControlButtons) {
      this.applyBtn.removeEventListener('click', this.handleButtonApplyClick);
      this.clearBtn.removeEventListener('click', this.handleButtonClearClick);
    }
  }

  // посчитает значения по типам и вернет их массивом
  countValuesByTypes() {
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

  // добавит описание типов и вернет строку
  addTypeDescription(valuesByTypes) {
    const { descriptionTypes, placeholder } = this.config;
    let valuesWithDescript = '';

    // добавление описаний
    valuesByTypes.forEach((value, i) => {
      if (value !== 0) {
        const type = declOfNum(value, descriptionTypes[i]);

        valuesWithDescript += `${value} ${type}, `;
      }
    });
    valuesWithDescript = valuesWithDescript.slice(0, -2);

    // если значения нет, выставит placeholder
    if (valuesWithDescript === '') valuesWithDescript = placeholder;

    return valuesWithDescript;
  }

  // для выпадающего меню
  closeMenu() {
    this.menuDOM.classList.remove('current');
    this.textFieldDOM.classList.remove('count-active');
  }

  switchMenu() {
    this.menuDOM.classList.toggle('current');
    this.textFieldDOM.classList.toggle('count-active');
  }

  // для кнопки очистить
  showClearButton() {
    this.clearBtn.style.visibility = 'visible';
  }

  hideClearButton() {
    this.clearBtn.style.visibility = 'hidden';
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
//     ['гость', 'гостя', 'гостей'],
//     ['младенец', 'младенца', 'младенцев'],
//   ],
//   placeholder : 'Сколько гостей',         // default = ''
//   areControlButtons : false               // default = false
// })
