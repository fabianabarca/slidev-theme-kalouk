<!--
  Usage:

```md
---
layout: chart
---

# Title of the Chart

::bottom::

Footer content
```
-->

<script setup lang="ts">
const props = defineProps({
  dataset: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: "line",
  },
  class: {
    type: String,
  },
  layoutClass: {
    type: String,
  },
});

import Chart from "primevue/chart";

import axios from "axios";
import { ref, onMounted } from "vue";

onMounted(async () => {
  chartData.value = await setChartData();
  chartOptions.value = setChartOptions();
});

const chartData = ref();
const chartOptions = ref();

let cachedChartData: any = null;

const setChartData = async () => {
  if (cachedChartData) {
    return cachedChartData;
  }
  const documentStyle = getComputedStyle(document.documentElement);

  try {
    const response = await axios.get(
      `https://web.kalouk.xyz/api/datasets/${props.dataset}`
    );
    const apiData = response.data;
    let payload = apiData.payload;
    if (
      payload &&
      Array.isArray(payload.labels) &&
      Array.isArray(payload.datasets) &&
      payload.datasets.length >= 2
    ) {
      cachedChartData = {
        labels: payload.labels,
        datasets: [
          {
            label: payload.datasets[0].label,
            data: payload.datasets[0].data,
            fill: false,
            borderColor: documentStyle.getPropertyValue("--p-cyan-500"),
            tension: 0.4,
          },
          {
            label: payload.datasets[1].label,
            data: payload.datasets[1].data,
            fill: false,
            borderColor: documentStyle.getPropertyValue("--p-gray-500"),
            tension: 0.4,
          },
        ],
      };
      return cachedChartData;
    } else {
      console.error("Invalid payload structure:", payload);
      return {
        labels: [],
        datasets: [],
      };
    }
  } catch (error) {
    console.error("Error fetching dataset:", error);
    return {
      labels: [],
      datasets: [],
    };
  }
};

const setChartOptions = () => {
  const documentStyle = getComputedStyle(document.documentElement);
  const textColor = documentStyle.getPropertyValue("--p-text-color");
  const textColorSecondary = documentStyle.getPropertyValue(
    "--p-text-muted-color"
  );
  const surfaceBorder = documentStyle.getPropertyValue(
    "--p-content-border-color"
  );

  return {
    maintainAspectRatio: false,
    aspectRatio: 0.6,
    plugins: {
      legend: {
        labels: {
          color: textColor,
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: textColorSecondary,
        },
        grid: {
          color: surfaceBorder,
        },
      },
      y: {
        ticks: {
          color: textColorSecondary,
        },
        grid: {
          color: surfaceBorder,
        },
      },
    },
  };
};
</script>

<template>
  <div class="slidev-layout layout w-full h-full" :class="layoutClass">
    <div class="row-header">
      <slot />
    </div>
    <div class="row-chart">
      <Chart :type="props.type" :data="chartData" :options="chartOptions" />
    </div>
    <div class="row-bottom text-center">
      <slot name="bottom" />
    </div>
  </div>
</template>

<style scoped>
.layout {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  height: 100%;
  gap: 1rem;
  padding: 1rem;
}

.row-header {
  grid-row: 1;
}

.row-chart {
  grid-row: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 0;
  overflow: hidden;
  width: 100%;
  height: 100%;
}

.row-chart :deep(.p-chart) {
  width: 100% !important;
  height: 100% !important;
  max-width: 100%;
  max-height: 100%;
}

.row-bottom {
  grid-row: 3;
  align-self: end;
}
</style>
