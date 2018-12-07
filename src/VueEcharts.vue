<template>
  <div ref="echarts" style="width: 100%;height: 100%;"></div>
</template>

<script>
import echarts from "echarts";
export default {
  name: "VueEcharts",
  props: ["option"],
  mounted() {
    this.myChart = echarts.init(this.$refs.echarts);
    this.myChart.setOption(this.option);
    this.myChart.on("click", param => {
      this.$emit("click", param);
    });
  },
  destroyed() {
    this.myChart.dispose();
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
  }
};
</script>
