/* eslint-disable no-underscore-dangle */
import Chart from 'chart.js';

class PieChart  {
  constructor (id) {
    this.init(id)
  }

  init(id) {
    this.canvas = document.getElementById(id);
    this.ctx = this.canvas.getContext('2d');
    this.elem = this.canvas.parentElement;

    this.setChart();
    this.connectingNumbersVotes()
    this.chart.options.onHover = this.handleChartHover.bind(this);
  }

  getGradient(color1, color2) {
    const gradient = this.ctx.createLinearGradient(0, 0, 0, 120);
    
    gradient.addColorStop('0', color1);
    gradient.addColorStop('1', color2);
    
    return gradient;
  }

  setChart() {
    const {ctx} = this;
    const gradients = [
      this.getGradient('#919191', '#3D4975'),
      this.getGradient('#BC9CFF', '#8BA4F9'),
      this.getGradient('#6FCF97', '#66D2EA'),
      this.getGradient('#FFE39C', '#FFBA9C'),
    ]

    this.chart = new Chart(ctx, {
      type: 'pie',
      data: {
        datasets: [
          {
            data: [0, 260, 260, 520],
            backgroundColor: gradients,
    
            hoverBackgroundColor: gradients,
    
            borderWidth: 1,
            hoverBorderColor: gradients,
    
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

  handleChartHover(event) {
    const {chartNumberDOM, chartContainerDOM} = this;
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