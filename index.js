let d3 = require('d3');

let cpa, drl;

let cpaChart = d3.select('#cpa-chart')
let drlChart = d3.select('#drl-chart')

Promise.all([fetch('./cpa.json'), fetch('./drl.json')]).then(
    response => {
        [cpa, drl] = response.map(e => e.json())
    }
).then(
    () => {
        // Draw CPA chart
        cpaXScale = d3.scaleBand(cpa.map(e => e.semester), [50, 550])
        cpaY1Scale = d3.scaleLinear([0, 200], [100, 300])
        cpaY2Scale = d3.scaleLinear([0.0, 4.0], [100, 300])
        // Axis
        cpaXAxis = d3.axisBottom(cpaXScale)
        cpaY1Axis = d3.axisLeft(cpaY1Scale).ticks(5)
        cpaY2Axis = d3.axisRight(cpaY2Scale).ticks(10)
        // Title
        cpaChart.append('text').text('Biểu đồ học tập')
        // Draw axis
        cpaChart.append('g').attr('transform', 'translate(0, 300)').call(cpaXAxis)
        cpaChart.append('g').attr('transform', 'translate(50, 0)').call(cpaY1Axis)
        cpaChart.append('g').attr('transform', 'translate(550, 0)').call(cpaY2Axis) 
    }
)