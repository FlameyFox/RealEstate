<template>
  <div v-if="this.loading">
    <div class="skeleton-base">
      <div class="left skeleton"></div>
      <div class="right skeleton"></div>
    </div>
    <div class="skeleton-base small">
      <div class="skeleton"></div>
      <div class="skeleton"></div>
      <div class="skeleton"></div>
      <div class="skeleton"></div>
    </div>
  </div>
  <div class="property" v-else-if="this.property">
    <property-hero :property="this.property"></property-hero>
    <property-features
      v-if="this.property.features.length > 0"
      :features="this.property.features"
    ></property-features>
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

  data() {
    return {
      property: null,
      loading: true,
    }
  },

  async mounted() {
    this.property = (
      await this.$apollo.query({
        fetchPolicy: 'no-cache',
        query: gql`
          query SINGLE_PROPERTY($slug: String) {
            property(filter: { slug: { eq: $slug } }) {
              id
              slug
              _firstPublishedAt
              _status
              address
              badge
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
        variables: {
          slug: this.$route.params.slug,
        },
      })
    ).data.property

    this.loading = false
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
    height: 100%;
  }
  .right {
    flex-basis: 66.6666%;
    border-radius: 1.75rem;
    height: 100%;
  }

  &.small {
    margin-top: 2rem;

    .skeleton {
      width: 25%;
      height: 96px;
      border-radius: 1.75rem;
    }
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
