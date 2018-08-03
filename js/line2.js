var playerCanvas = document.getElementById("playerChart2").getContext("2d");

Chart.defaults.global.defaultFontFamily = "Lato";
Chart.defaults.global.defaultFontSize = 14;
Chart.defaults.global.legend.display = false;
Chart.defaults.global.animationSteps = 50;
Chart.defaults.global.animationEasing = "easeOutBounce";

var playerData = {
  labels: ["", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  datasets: [{
    // label: false,
    data: [ , 452, 750, 600, 900, 450, 600, 675, 300],
    lineTension: 0,
    borderColor: '#254663',
    borderDash: [0, 0],
    backgroundColor: '#c5c1c1',
    pointStyle: 'circle',
    pointBorderColor: '#254663',
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
        max: 900,
        stepSize: 300,
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
    // backgroundColor: '#248c7a',
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
          return " " + tooltipItem.yLabel + " ^ 5%";
        }
      }
  }
};

var lineChart = new Chart(playerCanvas, {
  type: 'line',
  data: playerData,
  options: chartOptions
});

