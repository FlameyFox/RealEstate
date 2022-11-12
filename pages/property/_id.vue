<template>
  <div v-if="$apollo.loading">Loading property...</div>
  <div class="property" v-else-if="this.property">
    <div class="hero">
      <img
        :alt="this.property.featuredImage.alt"
        :src="this.property.featuredImage.url"
      />
    </div>
    <h1 v-if="this.property.address">{{ this.property.address }}</h1>
    <h2>DETAILS</h2>
    <div>
      <div v-html="$md.render(this.property.description)"></div>
    </div>
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
            description
            price
            rooms
            squareMeters
            featuredImage {
              url(imgixParams: { auto: enhance, h: "1080", w: "1920" })
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

<style lang="scss" scoped>
.property {
  h1 {
    font-size: clamp(1.4rem, 4vw, 3rem);
  }

  .hero {
    margin-bottom: 2rem;
    img {
      border-radius: 1.75rem;
    }
  }
}
</style>
