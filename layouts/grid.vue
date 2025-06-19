<template>
  <div class="slidev-layout grid">
    <n-grid cols="2 s:3 m:4 l:5 xl:6 2xl:7" responsive="screen">
      <n-grid-item>
        <div class="light-green">1</div>
      </n-grid-item>
      <n-grid-item>
        <div class="light-green">2</div>
      </n-grid-item>
    </n-grid>
  </div>
</template>

<script setup>
import { NGrid, NGridItem } from "naive-ui";
</script>
