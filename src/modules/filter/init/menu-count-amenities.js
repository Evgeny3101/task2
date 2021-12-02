import MenuCount from '../../menu-count/menu-count';

// eslint-disable-next-line no-unused-vars
const menuCount = new MenuCount({
  baseElement: '.js-menu-count-amenities',
  itemsCount: [
    {
      title: 'спальни',
      index: 0,
    },
    {
      title: 'кровати',
      minValue: 1,
      index: 1,
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
});
