<template>
  <div class="grid properties" v-if="properties">
    <propertiesProperty v-for="property in properties" :property="property" :key="property.id"></propertiesProperty>
  </div>
</template>

<script>
export default {
  props: {
    properties: Array,
  },
}
</script>

<style lang="scss" scoped>
.properties {
  &.grid {
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
