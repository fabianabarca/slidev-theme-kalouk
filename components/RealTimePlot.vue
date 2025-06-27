<template>
  <h2>Prueba SSE</h2>
  <p>{{ connectionStatus }}</p>
  <p class="font-monospace">{{ lastMessage || 'Esperando mensaje...' }}</p>

  <div style="width: 100%; height: 400px; position: relative;">
    <canvas ref="chartCanvas"></canvas>
  </div>
</template>

<script setup lang="ts">
// Import Chart.js and Luxon for time handling
import Chart from "chart.js/auto";
import "chartjs-adapter-luxon";
import { onMounted, onUnmounted, ref } from "vue";
// Import the Luxon library for date handling

const N = 20; // Number of states to keep in the plot
const stateData = [];
let chart;
let eventSource;

// Vue reactive variables
const connectionStatus = ref('Conectando...');
const lastMessage = ref('');
const chartCanvas = ref(null);

onMounted(() => {
  // Chart.js setup with time scale on x-axis
  const ctx = chartCanvas.value.getContext("2d");
  chart = new Chart(ctx, {
  type: "line",
  data: {
    datasets: [
      {
        label: "",
        data: stateData,
        borderColor: "blue",
        fill: false,
        tension: 0.1,
      },
    ],
  },
  options: {
    animation: false,
    responsive: true,
    maintainAspectRatio: false,
    parsing: false, // Required for custom {x, y} objects
    scales: {
      x: {
        type: "time",
        time: {
          unit: "second",
          tooltipFormat: "HH:mm:ss",
          displayFormats: {
            second: "HH:mm:ss",
          },
        },
        title: {
          display: true,
          text: "Hora",
        },
      },
      y: { beginAtZero: true },
    },
  },
  });

  console.log("Intentando conectar a SSE en https://web.kalouk.xyz/sse/...");
  eventSource = new EventSource("https://web.kalouk.xyz/sse/");

  eventSource.onopen = function (event) {
    console.log("SSE conexión abierta:", event);
    document.getElementById("onopen").innerText =
      "Conexión SSE abierta exitosamente.";
  };

  eventSource.onmessage = function (event) {
    console.log("Mensaje SSE recibido:", event);
    try {
      const parsed = JSON.parse(event.data);
      document.getElementById("onmessage").innerText = event.data;

      // Update chart with new state and timestamp (timestamp is already in ms)
      const state = parseInt(parsed.state, 10);
      const timestamp = parseInt(parsed.timestamp, 10); // Already in ms

      stateData.push({ x: timestamp, y: state });

      if (stateData.length > N) {
        stateData.shift();
      }
      chart.update();
    } catch (e) {
      console.warn("No se pudo parsear el mensaje SSE como JSON:", event.data);
      document.getElementById("onmessage").innerText = event.data;
    }
  };

  eventSource.onerror = function (event) {
    console.error("Error en la conexión SSE:", event);
    if (event.target && event.target.readyState === EventSource.CLOSED) {
      console.error("La conexión SSE se ha cerrado.");
    }
    document.getElementById("onopen").innerText = "Error en la conexión SSE.";
    document.getElementById("onmessage").innerText = "";
  };
});

onUnmounted(() => {
  if (eventSource) {
    console.log("Cerrando conexión SSE...");
    eventSource.close();
  }
  if (chart) {
    chart.destroy();
  }
});
</script>
