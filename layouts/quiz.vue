<!--
  Usage:
```md
---
layout: quiz
---

Title of the Quiz

::statement::

Statement of the quiz

::options::

- Option A
- [x] Option B
- Option C
- ...
```
-->

<script setup lang="ts">
import QuizOptions from "../components/QuizOptions.vue";
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
  <div class="slidev-layout layout w-full h-full" :class="layoutClass">
    <div class="row-title">
      <slot />
    </div>
    <div class="row-statement my-auto text-center" :class="props.class">
      <slot name="statement" />
    </div>
    <div class="row-options" :class="props.class">
      <slot name="options" />
      <QuizOptions />
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

.row-title {
  grid-row: 1;
}

.row-statement {
  grid-row: 2;
}

.row-options {
  grid-row: 3;
  display: flex;
  align-self: end;
  justify-content: center;
}
</style>
