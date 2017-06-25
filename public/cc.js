var barChartData = {
    labels: ["齋藤", "西本", "高尾", "田島", "Microsoft", "GAH", "Recruit"],
    datasets: [
        {
            fillColor: /*"#7fc2ef"*/ "rgba(127,194,239,0.7)",
            strokeColor: /*"#7fc2ef"*/ "rgba(127,194,239,0.7)",
            highlightFill: /*"#a5d1f4"*/ "rgba(165,209,244,0.7)",
            highlightStroke: /*"#a5d1f4"*/ "rgba(165,209,244,0.7)",
            data: [40, 54, 77, 32, 20, 78, 95]
        }
    ]

}
window.onload = function() {
    var ctx = document.getElementById("chart").getContext("2d");
    window.myBar = new Chart(ctx).Bar(barChartData, {
        responsive: true,
        // アニメーションを停止させる場合は下記を追加
        /* animation : false */
    });
}
