<template>
  <div v-if="$apollo.loading">Loading properties...</div>
  <div v-else>
    <h1 v-if="this.property.address">{{ this.property.address }}</h1>
    <h2>DETAILS</h2>
  </div>
</template>

<script>
import gql from 'graphql-tag'

export default {
  apollo: {
    property: {
      query: gql`
        query SINGLE_PROPERTY($id: ItemId) {
          property(filter: { id: { eq: $id } }) {
            id
            _firstPublishedAt
            _status
            address
            price
            rooms
            squareMeters
            featuredImage {
              url(imgixParams: { auto: enhance, h: "320", w: "462" })
            }
          }
        }
      `,
      variables() {
        return {
          id: this.$route.params.id,
        }
      },
    },
  },
}
</script>
