<template>
  <div class="slidev-layout layout w-full h-full">
    <div class="row-header">
      <slot />
    </div>
    <div class="row-grid">
      <div class="grid">
        <div class="card" v-if="$slots.A">
          <slot name="A" />
        </div>
        <div class="card" v-if="$slots.B">
          <slot name="B" />
        </div>
        <div class="card" v-if="$slots.C">
          <slot name="C" />
        </div>
        <div class="card" v-if="$slots.D">
          <slot name="D" />
        </div>
        <div class="card" v-if="$slots.E">
          <slot name="E" />
        </div>
        <div class="card" v-if="$slots.F">
          <slot name="F" />
        </div>
        <div class="card" v-if="$slots.G">
          <slot name="G" />
        </div>
        <div class="card" v-if="$slots.H">
          <slot name="H" />
        </div>
        <div class="card" v-if="$slots.I">
          <slot name="I" />
        </div>
      </div>
    </div>
    <div class="row-bottom text-center">
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

.row-grid {
  grid-row: 2;
  width: 100%;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.row-bottom {
  grid-row: 3;
  align-self: end;
  font-size: 0.875rem;
}

.grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  width: 100%;
  justify-content: center;
}

@media (min-width: 640px) {
  .grid {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    max-width: 100%;
  }
}

.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 0.25rem;
  padding: 1rem;
  background-color: var(--ctp-latte-surface0);
  color: var(--ctp-latte-text);
  height: 100%;
  min-width: 200px;
}

html.dark .card {
  background: var(--ctp-mocha-surface0);
  color: var(--ctp-mocha-text);
}

.card-icon {
  margin-left: auto;
}
</style>
