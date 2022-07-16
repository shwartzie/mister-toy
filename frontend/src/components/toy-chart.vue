<template>
    <h1>HELLASLDFASDLFAS</h1>
    <DoughnutChart :chartData="chartLabels" />
</template>

<script lang="ts">
import { DoughnutChart } from "vue-chart-3"
import { Chart, registerables } from "chart.js"

Chart.register(...registerables)

export default {
    name: "Home",
    props: {
        mappedLabels: Promise,
    },
    data() {
        return {
            chartLabels: {
                labels: [],
                datasets: [
                    {
                        data: [],
                        backgroundColor: [
                            "red",
                            "#0079AF",
                            "#123E6B",
                            "#97B0C4",
                            "#A5C8ED",
                        ],
                    },
                ],
            },
        }
    },
    components: { DoughnutChart },
    created() {
        this.labels()
    },
    methods: {
        labels() {
            this.mappedLabels.then((mappedLables) => {
                
                const { datasets, labels } = this.chartLabels
                const { data } = datasets[0]
                for (const val of Object.values(mappedLables)) {
                    data.push(val)
                }
                for (const key of Object.keys(mappedLables)) {
                    labels.push(key)
                }
            })
        },
    },
}
</script>
