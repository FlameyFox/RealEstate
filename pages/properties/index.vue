<template>
  <div>
    <h1>Properties</h1>
    <h2>Find your home</h2>
    <div>
      <div v-if="$apollo.loading">Loading properties...</div>
      <propertiesViewGrid v-else></propertiesViewGrid>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>

<style lang="scss" scoped>
h1{
  font-size: clamp(1.4rem,4vw,3rem);
}

h2{
  font-size: clamp(1rem,4vw,2.4rem);
  margin-bottom: 2rem;

}
</style>
