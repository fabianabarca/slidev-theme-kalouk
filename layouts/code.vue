<!--
  Usage:
```md
---
layout: code
language: typescript
---

# Title of the Code

::code::

The initial content of the code block (can be edited)

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
  <div class="slidev-layout two-cols-header w-full h-full" :class="layoutClass">
    <div class="col-header">
      <slot />
    </div>
    <div class="col-left mr-3" :class="props.class">
      <slot name="code" />
    </div>
    <div class="col-right ml-3" :class="props.class">
      <slot name="right" />
    </div>
  </div>
</template>

<style scoped>
.two-cols-header {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
}

.col-header {
  grid-area: 1 / 1 / 2 / 3;
}
.col-left {
  grid-area: 2 / 1 / 3 / 2;
}
.col-right {
  grid-area: 2 / 2 / 3 / 3;
}
.col-bottom {
  align-self: end;
  grid-area: 3 / 1 / 3 / 3;
}
</style>
