var playerCanvas = document.getElementById("playerChart").getContext("2d");

Chart.defaults.global.defaultFontFamily = "Lato";
Chart.defaults.global.defaultFontSize = 14;
Chart.defaults.global.legend.display = false;
Chart.defaults.global.animationSteps = 50;
Chart.defaults.global.animationEasing = "easeOutBounce";

var playerData = {
  labels: ["", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  datasets: [{
    // label: false,
    data: [ , 40, 25, 30, 50, 30, 28, 20],
    lineTension: 0,
    borderColor: '#248c7a',
    borderDash: [0, 0],
    pointStyle: 'circle',
    pointBorderColor: '#248c7a',
    pointBorderWidth: 2,
    pointBackgroundColor: 'white',
    pointRadius: 5,
    pointHoverRadius: 5
  }]
};

var chartOptions = {
  responsive: true,
  // showScale: false,
  scales: {
    yAxes: [{
       afterTickToLabelConversion: function(scaleInstance) {
         //tek reqem olanlara ve 0-a etmeliyem
                for(var i=0; i<scaleInstance.ticks.length; i++) {
                  if(i%2 != 0 || i==scaleInstance.ticks.length-1){
                    scaleInstance.ticks[i]=null;
                    scaleInstance.ticksAsNumbers[i]=null;
                  }
                }
        },
      ticks: {
        beginAtZero: true,
        max: 60,
        stepSize: 10,
        padding: 20
      },
      gridlines: {
        drawBorder: false
    }
   }],
    xAxes: [{
      ticks: {
        padding: 20
      },
      gridLines: {
         drawTicks: false,
         display: false
      }
  }]
  },
  tooltips: {
    enabled: true,
    // backgroundColor: 'green',
    bodyFontColor: 'white',
    custom: function(tooltip) {
        if (!tooltip) return;
        tooltip.displayColors = false;        
    },
    callbacks: {
      	title: function(tooltipItems, data) {
          return '';
        },
        label: function(tooltipItem, data) {
          return " " + tooltipItem.yLabel + " ^ 15%";
        }
      }
  }
};

var lineChart = new Chart(playerCanvas, {
  type: 'line',
  data: playerData,
  options: chartOptions
});

