<template>
  <div class="properties__property">
    <div class="properties__property--imgcontainer">
      <img v-if="this.property.featuredImage" :src="this.property.featuredImage.url" alt=" TITLE " />
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
          <h5>Features: <abbr title="Show features here">xxx</abbr></h5>
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
      <nuxt-link :to="'/property/' + this.property.id" class="btn seemore">See more</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    property: Object,
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
    height: clamp(10rem,15vw,20rem);
    margin-bottom: 1rem;
    img {
      border-radius: 1rem;
      height: 100%;
      width: 100%;
      object-fit: cover;
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

  &--actions{
    .btn{
      background-color: $primary;
      color:#FFF;
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
