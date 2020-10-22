import ItemsCount from './itemCount'

class MenuForCount {
  constructor(elem, config) {
    this.mainDOM = document.querySelector(elem);
    this.config = config;
    this.items = [];

    this.handleDropdownMenuClick = this.switchMenu.bind(this)
    this.handleDropdownMenuMouseleave = this.closeMenu.bind(this)


    this.installComponents();
    this.setListeners();
  }

  installComponents() {
    const { itemsCount, descriptionTypes } = this.config;

    this.menuDOM = document.createElement('div');
    this.menuDOM.classList.add('dropdown-menu-count');

    const wrapper = document.createElement('div');
    wrapper.classList.add('dropdown-menu-count__wrapper');
    this.menuDOM.append(wrapper)


    itemsCount.forEach((itemConfig, i) => {
      this.items[i] = new ItemsCount(wrapper, itemConfig)
    })

    //
    this.textFieldDOM = this.mainDOM.querySelector('input')
    this.mainDOM.append(this.menuDOM);
  }

  setListeners() {
    // открыть/закрыть меню
    this.mainDOM.addEventListener('mouseleave', this.handleDropdownMenuMouseleave);
    this.textFieldDOM.addEventListener('click', this.handleDropdownMenuClick);

    //  слушатели для + и -
    this.items.forEach((item, i) => {
      item.plusBtnDOM.addEventListener('click', item.plusOne.bind(item));
      item.minusBtnDOM.addEventListener('click', item.minusOne.bind(item));
    })



  }




  // закрыть меню
  closeMenu() {
    this.menuDOM.classList.remove('current');
    this.textFieldDOM.classList.remove('count-active');
  };

  // открыть/закрыть меню
  switchMenu() {
    this.menuDOM.classList.toggle('current');
    this.textFieldDOM.classList.toggle('count-active');
  };
}

export default  MenuForCount;
