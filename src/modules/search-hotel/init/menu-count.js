import MenuCount from '../../menu-count/menu-count';

// eslint-disable-next-line no-unused-vars
const menuCount = new MenuCount({
  baseElement: '.js-menu-count-search-hotel',
  itemsCount: [
    {
      title: 'взрослые',
    },
    {
      title: 'дети',
    },
    {
      title: 'младенцы',
      index: 1,
    },
  ],

  descriptionTypes: [
    { type: 'guests', description: ['гость', 'гостя', 'гостей'] },
    { type: 'child', description: ['младенец', 'младенца', 'младенцев'] },
  ],

  placeholder: 'Сколько гостей',
});
