# vue-echarts

> echarts的vue封装，一旦options变化会自动重新渲染。

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

## 获取原始 echarts 对象

```javascript
import VueEcharts from "@wolfx/vue-echarts";
console.log(VueEcharts.echarts);
```
