import type { DefineComponent } from "vue";

export interface VueEchartsProps {
  option?: Record<string, unknown>;
  noMerge?: boolean;
  renderer?: string;
  carousel?: Record<string, unknown> | null;
}

export interface VueEchartsMethods {
  initCarousel(): void;
  clearCarousel(): void;
  resizeChart(): void;
  getChart(): any;
}

declare const VueEcharts: DefineComponent<
  VueEchartsProps,
  {},
  {},
  {},
  {},
  VueEchartsMethods
>;

export default VueEcharts;
