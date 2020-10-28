import { Vue } from "vue/types/vue";

declare class VueEcharts extends Vue{
  option: any;
  renderer: any;
  carousel: any;
  loopShow: any;
  myChart: any;

  initCarousel(): void;
  clearCarousel(): void;
  resizeChart(): void;
  getChart(): any;

}
