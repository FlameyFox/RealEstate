<template>
  <div class="properties__property">
    <div class="properties__property--imgcontainer">
      <img src="~/static/img/banner.jpg" alt=" TITLE " />
    </div>
    <div class="properties__property--details">
      <h4 class="properties__property--title">{{ this.property.title }}</h4>
      <h4 class="properties__property--price">
        {{ formatPrice(this.property.price) }}
      </h4>
      <div class="details">
        <div>
          <h5>Size: {{ this.property.details.size }}</h5>
        </div>
        <div>
          <h5>Rooms: {{ this.property.details.rooms }}</h5>
        </div>
        <div>
          <h5>Features: {{ this.property.details.features }}</h5>
        </div>
        <div>
          <h5>Date: {{ this.property.details.date }}</h5>
        </div>
      </div>
    </div>
    <div class="properties__property--actions">
      <a href="#" class="btn seemore">Se more</a>
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
    height: 20rem;
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

    .details{
      display: flex;
      justify-content: space-between;

      > div{
        display: flex;
        flex-direction: column;
      }
    }
  }
  &--title {
    font-size: 1.5rem;
  }
}
</style>
