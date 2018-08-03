// var ctx1 = $(".doughnut-chart");
var options = {
    responsive: true,
    title: {
      display: false
    },
    legend: {
        display: false
    },
    tooltips: {
    enabled: false
  }
};



    var ctx1 = $("#doughnut-chart-1");
    var data1 = {
        datasets: [
            {
                data: [58, 42],
                backgroundColor: ["#4fce4f", "lightgray"]
            }
        ]
    };
    var chart1 = new Chart(ctx1, {
        type: "doughnut",
        data: data1,
        options: options
    });

