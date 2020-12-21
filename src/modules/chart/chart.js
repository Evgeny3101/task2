import Chart from 'chart.js';

// подключение диаграммы
const canvas = document.getElementById('js-chart');
const ctx = canvas.getContext('2d');

function getGradient(color1, color2) {
  const gradient = ctx.createLinearGradient(0, 0, 0, 120);
  gradient.addColorStop('0', color1);
  gradient.addColorStop('1', color2);
  return gradient;
}

const pieChart = new Chart(ctx, {
  type: 'pie',
  data: {
    datasets: [
      {
        data: [0, 260, 260, 520],
        backgroundColor: [
          getGradient('#919191', '#3D4975'),
          getGradient('#BC9CFF', '#8BA4F9'),
          getGradient('#6FCF97', '#66D2EA'),
          getGradient('#FFE39C', '#FFBA9C'),
        ],

        hoverBackgroundColor: [
          getGradient('#919191', '#3D4975'),
          getGradient('#BC9CFF', '#8BA4F9'),
          getGradient('#6FCF97', '#66D2EA'),
          getGradient('#FFE39C', '#FFBA9C'),
        ],

        borderWidth: 1,
        hoverBorderColor: [
          getGradient('#919191', '#3D4975'),
          getGradient('#BC9CFF', '#8BA4F9'),
          getGradient('#6FCF97', '#66D2EA'),
          getGradient('#FFE39C', '#FFBA9C'),
        ],

        text: ['#3D4975', '#8BA4F9', '#66D2EA', '#FFBA9C'],
      },
    ],
  },
  options: {
    cutoutPercentage: 90,
    legend: {
      display: false,
    },
    tooltips: {
      enabled: false,
      mode: 'index',
    },
  },
});

// ==============================
// подключение количества голосов
const colorsArr = pieChart.config.data.datasets[0].text;
const valuesArr = pieChart.config.data.datasets[0].data;
const chartNumberDOM = document.querySelector('.js-chart__number');
const chartContainerDOM = document.querySelector('.js-chart__container');

// установит 1е значение
for (let i = 0; i < valuesArr.length; i += 1) {
  if (valuesArr[i] > 0) {
    chartNumberDOM.textContent = valuesArr[i];
    chartContainerDOM.style.color = colorsArr[i];

    break;
  }
}

// смена значений при наведении
function handleChartHover(event) {
  const activePoints = pieChart.getElementsAtEvent(event);
  if (activePoints[0]) {
    const chartData = activePoints[0]._chart.config.data;
    const idx = activePoints[0]._index;

    const value = chartData.datasets[0].data[idx];
    const color = chartData.datasets[0].text[idx];

    chartNumberDOM.textContent = value;
    chartContainerDOM.style.color = color;
  }
}

pieChart.options.onHover = handleChartHover;
