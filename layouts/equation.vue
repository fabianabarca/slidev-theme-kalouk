<!--
  Usage:

```md
---
layout: equation
---

$$
E = mc^2
$$
```
-->

<script setup lang="ts">
const props = defineProps({
  class: {
    type: String,
  },
  layoutClass: {
    type: String,
  },
});
</script>

<template>
  <div class="slidev-layout equation layout w-full h-full" :class="layoutClass">
    <div class="row-header">
      <slot />
    </div>
    <div class="row-equation mr-2" :class="props.class">
      <slot name="equation" />
    </div>
    <div class="row-bottom text-center" :class="props.class">
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
}

.row-header {
  grid-row: 1;
}

.row-equation {
  grid-row: 2;
  display: flex;
  align-items: center;
  justify-content: center;
}

.row-bottom {
  grid-row: 3;
  align-self: end;
}
</style>
