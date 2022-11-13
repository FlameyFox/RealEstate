<template>
  <div class="hero">
    <div class="info">
      <h1 v-if="this.property.address">{{ this.property.address }}</h1>
      <h2>Details</h2>
      <ul>
        <li>Price: {{ formatPrice(this.property.price) }}</li>
        <li>Size: {{ this.property.squareMeters }}m<sup>2</sup></li>
        <li>Rooms: {{ this.property.rooms }}</li>
      </ul>
    </div>
    <div class="slider" v-if="toggleSlider" :class="toggleSlider ? 'active' : ''">
      <p @click="toggleSlider = !toggleSlider" class="close">Close</p>
      <VueSlickCarousel :arrows="true" :dots="true">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </VueSlickCarousel>
    </div>
    <div class="image" @click="toggleSlider = !toggleSlider">
      <div class="badge">Added 2 days ago</div>
      <img
        :alt="this.property.featuredImage.alt"
        :src="this.property.featuredImage.url"
      />
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  props: ['property'],
  components: { VueSlickCarousel },
  data() {
    return {
      toggleSlider: false,
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
.hero {
  display: flex;
  gap: 1.75rem;
  margin-bottom: 2rem;

  .slider {
    max-width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 70vw;
    height: 80vh;
    background: rgba(0, 0, 0, 0.4);
    display: none;
    z-index: 2;
    &.active {
      display: block;
    }
  }

  .info {
    flex-basis: 33.3333%;
    border-radius: 1.75rem;
    background-color: $gray;
    padding: 1.5rem;

    sup {
      font-size: 70%;
    }
    h1 {
      font-size: clamp(1.4rem, 4vw, 2.6rem);
      line-height: 1.2;
      margin-bottom: 1rem;
    }
  }
  .image {
    flex-basis: 66.6666%;
    position: relative;
    cursor: pointer;
    .badge {
      position: absolute;
      top: 1rem;
      left: 1rem;
      background: $primary;
      color: #fff;
      border-radius: 1.75rem;
      padding: 0.75rem 1.5rem;
    }

    img {
      border-radius: 1.75rem;
    }
  }
}
</style>
