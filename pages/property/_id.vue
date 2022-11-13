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
    <property-features :features="this.property.features"></property-features>
    <div class="description">
      <h2>Description</h2>
      <div v-html="$md.render(this.property.description)"></div>
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag'
import propertyFeatures from '~/components/property/propertyFeatures.vue'

export default {
  components: { propertyFeatures },
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
            features {
              id
              featureTitle
              featureDescription
              icon {
                url
              }
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

  head() {
    return {
      title: "test",
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content: 'My custom description',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.property {
  h1 {
    font-size: clamp(1.8rem, 4vw, 3.4rem);
  }

  .hero {
    margin-bottom: 2rem;
    img {
      border-radius: 1.75rem;
    }
  }

  .description {
    background-color: $gray;
    border-radius: 1.75rem;
    padding: 1.5rem;
    width: 100%;
    margin-top: 2rem;

    h2 {
      font-size: clamp(1.4rem, 4vw, 2.6rem);
    }
  }
}
</style>
