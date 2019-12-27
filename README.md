# vue-echarts

> echarts 的 vue 封装，一旦 options 变化会自动重新渲染。

> 该组件将 echarts 作为外部依赖，需要用户自己引入。

# 示例代码

## vue-cli 环境下使用

```html
<template>
  <div class="container">
    <vue-echarts :option="option" @click="params => {}"></vue-echarts>
  </div>
</template>

<script>
  import VueEcharts from "@wolfx/vue-echarts";
  export default {
    components: { VueEcharts },
    data() {
      return {
        option
      };
    }
  };
</script>
```

## 重置大小

默认情况下改变窗口大小会自动触发重置，如果需要手动触发，获取组件的 `ref` 后调用组件的 `resizeChart()` 方法。

## 使用 svg 渲染模式

```html
<vue-echarts
  :option="option"
  renderer="svg"
  @click="params => {}"
></vue-echarts>
```

## 自动轮播 tooltip

- interval 轮播时间间隔，单位毫秒，默认为 2000
- loopSeries boolean 类型，默认为 false。true 表示循环所有 series 的 tooltip，false 则显示指定 seriesIndex 的 tooltip。
- seriesIndex 默认为 0，指定某个系列（option 中的 series 索引）循环显示 tooltip，当 loopSeries 为 true 时，从 seriesIndex 系列开始执行。

```html
<template>
  <div class="container">
    <vue-echarts
      :option="option"
      @click="params => {}"
      :carousel="carousel"
    ></vue-echarts>
  </div>
</template>

<script>
  import VueEcharts from "@wolfx/vue-echarts";
  export default {
    components: { VueEcharts },
    data() {
      return {
        option,
        carousel: {
          interval: 2000,
          loopSeries: false,
          seriesIndex: 0
        }
      };
    }
  };
</script>
```

## 直接使用

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>vue-echarts</title>
    <style>
      #app {
        height: 300px;
        width: 300px;
      }
    </style>
  </head>
  <body>
    <div id="app"><vue-echarts :option="option"></vue-echarts></div>
    <script src="https://cdn.bootcss.com/vue/2.5.17/vue.min.js"></script>
    <script
      crossorigin="*"
      integrity="sha384-gb8mitZ44MWVFB3GKzmtx1OCjOh3Cj4mgusyTvNzl1Nu31l0em1FrApJindwVAe0"
      src="https://lib.baomitu.com/echarts/4.2.1/echarts.min.js"
    ></script>
    <script src="./dist/VueEcharts.js"></script>
    <script>
      new Vue({
        el: "#app",
        components: { VueEcharts: VueEcharts.default },
        data: {
          option: {
            xAxis: {
              type: "category",
              boundaryGap: false,
              data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
            },
            yAxis: {
              type: "value"
            },
            series: [
              {
                data: [820, 932, 901, 934, 1290, 1330, 1320],
                type: "line",
                areaStyle: {}
              }
            ]
          }
        }
      });
    </script>
  </body>
</html>
```
