<template>
  <div class="properties__property">
    <div class="properties__property--imgcontainer">
      <nuxt-link :to="'/property/' + this.property.slug">
        <img
          v-if="this.property.featuredImage"
          :src="this.property.featuredImage.url"
          :alt="this.property.featuredImage.alt"
          height="420"
          width="600"
          :title="this.property.address"
        />
      </nuxt-link>
    </div>
    <div class="properties__property--details">
      <h4 class="properties__property--title">{{ this.property.address }}</h4>
      <h4 class="properties__property--price">
        {{ formatPrice(this.property.price) }}
      </h4>
      <div class="details">
        <div>
          <h5>Size: {{ this.property.squareMeters }}</h5>
        </div>
        <div>
          <h5>Rooms: {{ this.property.rooms }}</h5>
        </div>
        <div>
          <h5>
            Date:
            {{ new Date(this.property._firstPublishedAt).toLocaleDateString() }}
          </h5>
        </div>
      </div>
    </div>
    <div class="properties__property--actions">
      <nuxt-link
        title="Go to property"
        :to="'/property/' + this.property.slug"
        class="btn seemore"
        >See more</nuxt-link
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    property: Object,
  },

  data() {
    return {
      featureList: '',
    }
  },
  methods: {
    formatPrice(number) {
      const priceFormat = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0,
      })
      return priceFormat.format(number)
    },
  },
}
</script>

<style lang="scss" scoped>
.properties__property {
  &--imgcontainer {
    height: clamp(10rem, 15vw, 20rem);
    margin-bottom: 1rem;
    overflow: hidden;
    border-radius: 1rem;
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      transition: transform 0.45s ease-in-out;
    }

    &:hover {
      img {
        transform: scale3d(1.075, 1.075, 1.075);
      }
    }
  }
  &--details {
    background-color: $gray;
    padding: 1rem;
    border-radius: 1rem;

    .details {
      display: flex;
      justify-content: space-between;

      > div {
        display: flex;
        flex-direction: column;
      }
    }
  }
  &--title {
    font-size: 1.5rem;
  }

  &--actions {
    .btn {
      background-color: $primary;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      padding: 1rem;
      border-radius: 1rem;
      margin-top: 1rem;
    }
  }
}
</style>
