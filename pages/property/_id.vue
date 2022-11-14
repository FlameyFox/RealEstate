<template>
  <div v-if="$apollo.loading">
    <div class="skeleton-base">
      <div class="left skeleton"></div>
      <div class="right skeleton"></div>
    </div>
  </div>
  <div class="property" v-else-if="this.property">
    <property-hero :property="this.property"></property-hero>
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
import PropertyHero from '~/components/property/propertyHero.vue'

export default {
  components: { propertyFeatures, PropertyHero },

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
              alt
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
            gallery {
              id
              url(imgixParams: { auto: enhance, h: "1440", w: "2560" })
              alt
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
    if (this.property) {
      return {
        title: this.property.address,
        meta: [
          // hid is used as unique identifier. Do not use `vmid` for it as it will not work
          {
            hid: 'description',
            name: 'description',
            content: this.property.description,
          },
        ],
      }
    }
  },
}
</script>

<style lang="scss" scoped>
.skeleton-base {
  display: flex;
  gap: 1.75rem;
  height: 632px;

  .left {
    flex-basis: 33.3333%;
    border-radius: 1.75rem;
    padding: 1.5rem;
  }
  .right {
    flex-basis: 66.6666%;
  }
}

.property {
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
