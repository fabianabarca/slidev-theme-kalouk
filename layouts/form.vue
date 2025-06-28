<template>
  <div class="slidev-layout layout w-full h-full" :class="layoutClass">
    <div class="card flex justify-center">
      <Form
        v-slot="$form"
        :resolver="resolver"
        :initialValues="initialValues"
        @submit="onFormSubmit"
        class="flex flex-col gap-4"
      >
        <div class="flex flex-col gap-2">
          <RadioButtonGroup
            name="ingredient"
            class="flex flex-wrap gap-4"
            v-model="selectedOption"
          >
            <label
              for="cheese"
              class="option"
              :class="{ selected: selectedOption === 'Cheese' }"
            >
              <RadioButton
                inputId="cheese"
                value="Cheese"
                class="hidden-radio"
              />
              Cheese
            </label>
            <label
              for="tomato"
              class="option"
              :class="{ selected: selectedOption === 'Tomato' }"
            >
              <RadioButton
                inputId="tomato"
                value="Tomato"
                class="hidden-radio"
              />
              Tomato
            </label>
            <label
              for="ham"
              class="option"
              :class="{ selected: selectedOption === 'Ham' }"
            >
              <RadioButton inputId="ham" value="Ham" class="hidden-radio" />
              Ham
            </label>
          </RadioButtonGroup>
          <Message
            v-if="$form.ingredient?.invalid"
            severity="error"
            size="small"
            variant="simple"
          >
            {{ $form.ingredient.error?.message }}
          </Message>
        </div>
        <Toast />
        <Button type="submit" severity="help" label="Submit" />
      </Form>
    </div>
  </div>
</template>

<script setup>
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

const selectedOption = ref("");

const toast = useToast();
const initialValues = ref({
  ingredient: "",
});
const resolver = ref(
  zodResolver(
    z.object({
      ingredient: z
        .string()
        .min(1, { message: "At least one ingredient is required." }),
    })
  )
);

const onFormSubmit = ({ valid, values }) => {
  if (valid) {
    toast.add({
      severity: "success",
      summary: `Form submitted! You selected: ${values.ingredient}`,
      life: 4000,
    });
  }
};
</script>

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

.option.selected {
  background-color: var(--ctp-latte-blue);
  color: var(--ctp-latte-base);
  border-color: var(--ctp-latte-blue);
}

html.dark .option {
  background-color: var(--ctp-mocha-surface0);
}

html.dark .option:hover {
  background-color: var(--ctp-mocha-surface1);
}

html.dark .option.selected {
  background-color: var(--ctp-mocha-blue);
  color: var(--ctp-mocha-base);
  border-color: var(--ctp-mocha-blue);
}

.hidden-radio {
  position: absolute;
  opacity: 0;
  pointer-events: none;
}
</style>
