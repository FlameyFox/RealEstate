<template>
  <div v-if="loading">
    <div class="skeleton-base">
      <div class="skeleton"></div>
      <div class="skeleton"></div>
      <div class="skeleton"></div>
    </div>
  </div>
  <div class="grid properties" v-else-if="allProperties">
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

  data() {
    return {
      allProperties: [],
      loading: true,
    }
  },

  async mounted() {
    this.allProperties = (
      await this.$apollo.query({
        fetchPolicy: 'no-cache',
        query: gql`
          {
            allProperties {
              id
              slug
              _firstPublishedAt
              _status
              address
              price
              rooms
              squareMeters
              features {
                id
                featureTitle
                featureDescription
                icon {
                  url
                }
              }
              featuredImage {
                url(imgixParams: { auto: enhance, h: "420", w: "600" })
                alt
              }
            }
          }
        `,
        variables: {
          id: this.$route.params.id,
        },
      })
    ).data.allProperties

    this.loading = false
  },
}
</script>

<style lang="scss" scoped>
.skeleton-base {
  display: flex;
  gap: 2rem;

  .skeleton {
    width: 33.333%;
    border-radius: 1.75rem;
    max-height: 515px;
    height: 30vw;
    min-height: 441px;
  }
}

.properties {
  &.grid {
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
