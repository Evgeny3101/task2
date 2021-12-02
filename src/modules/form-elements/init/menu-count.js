import MenuCount from '../../menu-count/menu-count';

const baseElementsMenuCount = document.querySelectorAll('.js-menu-count');
const menuCountConfigArr = [
  {
    itemsCount: [
      {
        title: 'спальни',
        index: 0,
        value: 2,
      },
      {
        title: 'кровати',
        index: 1,
        minValue: 1,
        value: 2,
      },
      {
        title: 'ванные комнаты',
        index: 2,
      },
    ],

    descriptionTypes: [
      { type: 'bedrooms', description: ['спальня', 'спальни', 'спален'] },
      { type: 'beds', description: ['кровать', 'кровати', 'кроватей'] },
      {
        type: 'bathrooms',
        description: ['ванная комната', 'ванные комнаты', 'ванных комнаты'],
      },
    ],
  },
  {
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
    areControlButtons: true,
  },
  {
    itemsCount: [
      {
        title: 'взрослые',
        value: 2,
      },
      {
        title: 'дети',
        value: 1,
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
    areControlButtons: true,
  },
];
const menuCountArr = [];

// установка
menuCountConfigArr.forEach((config, i) => {
  const newConfig = config;
  newConfig.baseElement = baseElementsMenuCount[i];
  menuCountArr[i] = new MenuCount(newConfig);
});
