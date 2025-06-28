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
  answer: {
    type: String,
    default: "",
  },
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
    <div class="row-statement my-auto text-center text-xl" :class="props.class">
      <slot name="statement" />
      <span class="text-xl">Answer is {{ answer }}</span>
    </div>
    <div class="row-options">
      <div v-if="$slots.A" class="option">
        <slot name="A" />
      </div>
      <div v-if="$slots.B" class="option">
        <slot name="B" />
      </div>
      <div v-if="$slots.C" class="option">
        <slot name="C" />
      </div>
      <div v-if="$slots.D" class="option">
        <slot name="D" />
      </div>
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

.option {
  flex: 1;
  margin: 0 0.5rem;
  background-color: var(--ctp-latte-surface0);
  border-radius: 0.5rem;
  padding: 1rem;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.option:hover {
  background-color: var(--ctp-latte-surface1);
}

html.dark .option {
  background-color: var(--ctp-mocha-surface0);
}

html.dark .option:hover {
  background-color: var(--ctp-mocha-surface1);
}
</style>
