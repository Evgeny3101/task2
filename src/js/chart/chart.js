import Chart from "chart.js";

const canvas = document.getElementById('js-chart');
const ctx = canvas.getContext("2d");

function getGrd(color1,color2) {
  const grd = ctx.createLinearGradient(0, 0, 0, 120);
  grd.addColorStop("0", color1);
  grd.addColorStop("1", color2);
  return grd;
}

const pieChart = new Chart(ctx, {
type: 'pie',
data: {
  datasets: [
    {
      data: [0, 260, 260, 520],
      backgroundColor: [
        getGrd("#919191","#3D4975"),
        getGrd("#BC9CFF","#8BA4F9"),
        getGrd("#6FCF97","#66D2EA"),
        getGrd("#FFE39C","#FFBA9C"),
      ],

      hoverBackgroundColor: [
        getGrd("#919191","#3D4975"),
        getGrd("#BC9CFF","#8BA4F9"),
        getGrd("#6FCF97","#66D2EA"),
        getGrd("#FFE39C","#FFBA9C"),
      ],

      borderWidth: 2,
      hoverBorderColor: [
        getGrd("#919191","#3D4975"),
        getGrd("#BC9CFF","#8BA4F9"),
        getGrd("#6FCF97","#66D2EA"),
        getGrd("#FFE39C","#FFBA9C"),
      ],

      text: [
        '#3D4975',
        '#8BA4F9',
        '#66D2EA',
        '#FFBA9C',
      ]
    }
  ]
},
options: {
  cutoutPercentage: 88,
  legend: {
    display: false
  },
  tooltips: {
    enabled: false,
    mode: 'index'
  },
  onHover: mouseHover
}
});

function mouseHover(evt) {
  const activePoints = pieChart.getElementsAtEvent(evt);
  if (activePoints[0]) {
    const chartData = activePoints[0]['_chart'].config.data;
    const idx = activePoints[0]['_index'];

    const value = chartData.datasets[0].data[idx];
    const color = chartData.datasets[0].text[idx];

    document.querySelector('.chart__number').textContent = value;
    document.querySelector('.chart').style.color = color
  }
}

const firstValue = pieChart.config.data.datasets[0];
for(let i = 0; i < firstValue.data.length; i++ ) {
  if(firstValue.data[i] > 0) {
    const value = firstValue.data[i];
    const color = firstValue.text[i];

    document.querySelector('.chart__number').textContent = value;
    document.querySelector('.chart').style.color = color

    break
  }
}
