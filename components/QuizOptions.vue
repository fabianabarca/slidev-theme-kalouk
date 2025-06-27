<template>
  <form class="flex flex-col gap-2">
    <label
      v-for="(option, idx) in options"
      :key="idx"
      class="flex items-center gap-2"
    >
      <input type="radio" :name="name" :value="option" />
      <span>{{ option }}</span>
    </label>
  </form>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const props = defineProps({
  name: {
    type: String,
    default: "quiz-options",
  },
});

const options = ref<string[]>([]);

onMounted(() => {
  // Find the slot content (list items)
  const slot = document.querySelector(".row-options ul");
  if (slot) {
    options.value = Array.from(slot.querySelectorAll("li")).map(
      (li) => li.textContent?.trim() ?? "",
    );
    slot.style.display = "none"; // Hide the original list
  }
});
</script>
