<template>
  <div ref="echarts" style="width: 100%;height: 100%;"></div>
</template>

<script>
import echarts from "echarts";
import tooltipCarousel from "./echarts-tooltip-carousel";
export default {
  name: "VueEcharts",
  props: {
    option: {
      type: Object,
      default: () => ({})
    },
    renderer: {
      type: String,
      default: "canvas"
    },
    carousel: {
      type: Object,
      default: null
    }
  },
  mounted() {
    this.myChart = echarts.init(this.$refs.echarts, null, {
      renderer: this.renderer || "canvas"
    });
    this.myChart.setOption(this.option);
    this.myChart.on("click", param => {
      this.$emit("click", param);
    });
    this.initCarousel();
    window.addEventListener("resize", this.resizeChart);
  },
  activated() {
    this.resizeChart();
  },
  destroyed() {
    this.clearCarousel();
    this.myChart.dispose();
    window.removeEventListener("resize", this.resizeChart);
  },
  watch: {
    option: {
      //深度监听，可监听到对象、数组的变化
      handler(newV, oldV) {
        // do something, 可使用this
        this.myChart.setOption(this.option);
        this.initCarousel();
      },
      deep: true
    },
    carousel: {
      handler(newV, oldV) {
        this.initCarousel();
      },
      deep: true
    }
  },
  methods: {
    initCarousel() {
      this.clearCarousel();
      if (this.carousel) {
        this.loopShow = tooltipCarousel.loopShowTooltip(
          this.myChart,
          this.option,
          this.carousel
        );
      }
    },
    clearCarousel() {
      if (this.loopShow) {
        // 重启轮播
        this.loopShow.clearLoop();
        this.loopShow = null;
      }
    },
    resizeChart() {
      this.myChart.resize();
    },
    getChart() {
      return this.myChart;
    }
  }
};
</script>
