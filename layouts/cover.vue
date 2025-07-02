<script setup lang="ts">
const props = defineProps({
  image: {
    type: String,
  },
});

console.log("Cover layout loaded with image:", props.image);
</script>

<template>
  <div class="slidev-layout cover">
    <div v-if="props.image" class="absolute top-5 right-5">
      <img :src="`/${props.image}`" alt="Image" width="300" />
    </div>
    <div class="mt-auto w-full text-left">
      <slot />
    </div>
  </div>
</template>
