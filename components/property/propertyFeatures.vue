<template>
  <div class="features">
    <div class="feature" v-for="feature in features" :key="feature.id">
      <h4>{{ feature.featureTitle }}</h4>
      <p>{{ feature.featureDescription }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['features'],
}
</script>

<style lang="scss" scoped>
.features {
  margin-top: 2rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  .feature {
    background-color: $gray;
    border-radius: 1.75rem;
    padding: 1.5rem;
  }
}
</style>
