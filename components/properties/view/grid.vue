<template>
  <div class="grid properties" v-if="allProperties">
    <propertiesProperty
      v-for="property in allProperties"
      :property="property"
      :key="property.id"
    ></propertiesProperty>
  </div>
</template>

<script>
import gql from 'graphql-tag'
export default {
  name: 'IndexPage',

  apollo: {
    allProperties: gql`
      {
        allProperties {
          id
          _firstPublishedAt
          _status
          address
          price
          rooms
          squareMeters
          featuredImage {
            url(imgixParams: { auto: enhance, h: "320", w: "500" })
          }
        }
      }
    `,
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
