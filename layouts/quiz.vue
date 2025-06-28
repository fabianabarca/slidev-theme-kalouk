<!--
```md
---
layout: quiz
answer: B
---

# Title of the Quiz

::statement::

Statement of the quiz

::A::
Option A

::B::
Option B

::C::
Option C

::D::
Option D
```
-->

<script setup lang="ts">
import { Form } from "@primevue/forms";
import RadioButton from "primevue/radiobutton";
import RadioButtonGroup from "primevue/radiobuttongroup";
import Button from "primevue/button";
import Message from "primevue/message";
import Toast from "primevue/toast";

import { ref } from "vue";
import { zodResolver } from "@primevue/forms/resolvers/zod";
import { useToast } from "primevue/usetoast";
import { z } from "zod";

const props = defineProps({
  answer: {
    type: String,
    required: true,
  },
  class: {
    type: String,
  },
  layoutClass: {
    type: String,
  },
});

const selectedOption = ref("");

const toast = useToast();
const initialValues = ref({
  selection: "",
});
const resolver = ref(
  zodResolver(
    z.object({
      selection: z
        .string()
        .min(1, { message: "At least one selection is required." }),
    })
  )
);

const onFormSubmit = ({ valid, values }) => {
  if (valid) {
    if (values.selection === props.answer) {
      toast.add({
        severity: "success",
        summary: "Correct!",
        detail: `You selected the correct answer: ${values.selection}`,
        life: 4000,
      });
    } else {
      toast.add({
        severity: "error",
        summary: "Incorrect!",
        detail: `You selected: ${values.selection}. The correct answer is: ${props.answer}`,
        life: 4000,
      });
    }
  } else {
    toast.add({
      severity: "warn",
      summary: "Warning",
      detail: "Please select an option before submitting.",
      life: 4000,
    });
  }
  selectedOption.value = "";
};
</script>

<template>
  <div class="slidev-layout layout w-full h-full" :class="layoutClass">
    <div class="row-title">
      <slot />
    </div>
    <div class="row-statement my-auto text-center text-xl" :class="props.class">
      <slot name="statement" />
    </div>
    <Form
      v-slot="$form"
      :resolver="resolver"
      :initialValues="initialValues"
      @submit="onFormSubmit"
    >
      <RadioButtonGroup
        name="selection"
        v-model="selectedOption"
        class="row-options"
      >
        <label
          v-if="$slots.A"
          for="A"
          class="option"
          :class="{ selected: selectedOption === 'A' }"
        >
          <RadioButton inputId="A" value="A" class="hidden-radio" />
          <slot name="A" />
        </label>
        <label
          v-if="$slots.B"
          for="B"
          class="option"
          :class="{ selected: selectedOption === 'B' }"
        >
          <RadioButton inputId="B" value="B" class="hidden-radio" />
          <slot name="B" />
        </label>
        <label
          v-if="$slots.C"
          for="C"
          class="option"
          :class="{ selected: selectedOption === 'C' }"
        >
          <RadioButton inputId="C" value="C" class="hidden-radio" />
          <slot name="C" />
        </label>
        <label
          v-if="$slots.D"
          for="D"
          class="option"
          :class="{ selected: selectedOption === 'D' }"
        >
          <RadioButton inputId="D" value="D" class="hidden-radio" />
          <slot name="D" />
        </label>
      </RadioButtonGroup>
      <Toast />
      <Button
        type="submit"
        severity="secondary"
        icon="pi pi-check"
        class="submit"
        rounded
      />
    </Form>
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
  text-align: center;
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

.option.selected {
  background-color: var(--ctp-latte-sky);
  color: var(--ctp-latte-base);
}

html.dark .option {
  background-color: var(--ctp-mocha-surface0);
}

html.dark .option:hover {
  background-color: var(--ctp-mocha-surface1);
}

html.dark .option.selected {
  background-color: var(--ctp-mocha-sky);
  color: var(--ctp-mocha-base);
}

.option-correct {
  border: 2px solid var(--ctp-latte-green);
}

.hidden-radio {
  position: absolute;
  opacity: 0;
  pointer-events: none;
}

.submit {
  position: fixed;
  top: 3rem;
  right: 3rem;
  z-index: 10;
}
</style>
