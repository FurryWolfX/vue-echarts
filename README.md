# vue-echarts

> echarts的vue封装，一旦options变化会自动重新渲染。

> 该组件将echarts作为外部依赖，需要用户自己引入。

# 示例代码

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
    <script crossorigin="*" integrity="sha384-gb8mitZ44MWVFB3GKzmtx1OCjOh3Cj4mgusyTvNzl1Nu31l0em1FrApJindwVAe0" src="https://lib.baomitu.com/echarts/4.2.1/echarts.min.js"></script>
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
    components: {VueEcharts},
    data() {
      return {
        option,
      };
    }
  }
</script>
```

## 重置大小

默认情况下改变窗口大小会自动触发重置，如果需要手动触发，获取组件的 `ref` 后调用组件的 `resizeChart()` 方法。
