/* eslint-disable no-underscore-dangle */
import Chart from 'chart.js';

class PieChart {
  constructor(config) {
    this.init(config);
  }

  init(config) {
    const { id } = config;
    this.canvas = document.getElementById(id);
    this.ctx = this.canvas.getContext('2d');
    this.elem = this.canvas.parentElement;

    this.setChart(config);
    this.connectingNumbersVotes();
    this.chart.options.onHover = this.handlerChartHover.bind(this);
  }

  getGradient(color1, color2) {
    const gradient = this.ctx.createLinearGradient(0, 0, 0, 120);

    gradient.addColorStop('0', color1);
    gradient.addColorStop('1', color2);

    return gradient;
  }

  setChart(config) {
    const { ctx } = this;
    const { data, textColors, gradientColors } = config;
    const gradients = [];
    gradientColors.forEach((colors, i) => {
      gradients[i] = this.getGradient(colors[0], colors[1]);
    });

    this.chart = new Chart(ctx, {
      type: 'pie',
      data: {
        datasets: [
          {
            data,
            backgroundColor: gradients,

            hoverBackgroundColor: gradients,

            borderWidth: 1,
            hoverBorderColor: gradients,

            text: textColors,
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
  }

  connectingNumbersVotes() {
    const { elem } = this;
    const colorsArr = this.chart.config.data.datasets[0].text;
    const valuesArr = this.chart.config.data.datasets[0].data;

    this.chartNumberDOM = elem.querySelector('.js-chart__number');
    this.chartContainerDOM = elem.querySelector('.js-chart__container');

    // установит 1е значение
    for (let i = 0; i < valuesArr.length; i += 1) {
      if (valuesArr[i] > 0) {
        this.chartNumberDOM.textContent = valuesArr[i];
        this.chartContainerDOM.style.color = colorsArr[i];

        break;
      }
    }
  }

  handlerChartHover(event) {
    const { chartNumberDOM, chartContainerDOM } = this;
    const activePoints = this.chart.getElementsAtEvent(event);

    if (activePoints[0]) {
      const chartData = activePoints[0]._chart.config.data;
      const idx = activePoints[0]._index;

      const value = chartData.datasets[0].data[idx];
      const color = chartData.datasets[0].text[idx];

      chartNumberDOM.textContent = value;
      chartContainerDOM.style.color = color;
    }
  }
}

export default PieChart;
