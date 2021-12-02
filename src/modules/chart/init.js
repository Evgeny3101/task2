import PieChart from './chart';

// eslint-disable-next-line no-unused-vars
const chartVoites = new PieChart({
  id: 'js-chart',
  data: [0, 260, 260, 520],
  textColors: ['#3D4975', '#8BA4F9', '#66D2EA', '#FFBA9C'],
  gradientColors: [
    ['#919191', '#3D4975'],
    ['#BC9CFF', '#8BA4F9'],
    ['#6FCF97', '#66D2EA'],
    ['#FFE39C', '#FFBA9C'],
  ],
});
