<template>
  <div ref="echarts" style="width: 100%;height: 100%;"></div>
</template>

<script>
import echarts from "echarts";

export default {
  name: "VueEcharts",
  props: ["option", "renderer"],
  mounted() {
    this.myChart = echarts.init(this.$refs.echarts, null, {renderer: this.renderer || "canvas"});
    this.myChart.setOption(this.option);
    this.myChart.on("click", param => {
      this.$emit("click", param);
    });
    window.addEventListener("resize", this.resizeChart);
  },
  activated() {
    this.resizeChart();
  },
  destroyed() {
    this.myChart.dispose();
    window.removeEventListener("resize", this.resizeChart);
  },
  watch: {
    option: {
      //深度监听，可监听到对象、数组的变化
      handler(newV, oldV) {
        // do something, 可使用this
        this.myChart.setOption(this.option);
      },
      deep: true
    }
  },
  methods: {
    resizeChart() {
      this.myChart.resize();
    }
  }
};
</script>
