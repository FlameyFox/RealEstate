<template>
  <header>
    <div class="logo">
      <nuxt-link to="/">FlameyEstates</nuxt-link>
    </div>
    <div class="menu">
      <ul>
        <li>
          <nuxt-link to="/">Home</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/properties">Properties</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/blog">Blog</nuxt-link>
        </li>
        <li>
          <nuxt-link to="#login">Login</nuxt-link>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;

  .logo {
    flex-basis: 40%;
    display: flex;

    font-size: clamp(18px, 3vw, 32px);
    font-weight: 700;
  }

  .menu {
    flex-basis: 30%;
    ul {
      display: flex;
      justify-content: space-between;
    }

    li {
      list-style: none;

      a {
        padding: 0.25rem 0.5rem;
        font-size: clamp(14px, 2vw, 20px);
        color: #222;
        text-decoration: none;
        position: relative;
        transition: color 0.2s ease-in-out;

        &:visited,
        &:active {
          color: #222;
        }

        &::after {
          position: absolute;
          content: '';
          width: 100%;
          height: 2px;
          top: 100%;
          left: 0;
          background: $primary;
          transition: transform 0.5s ease-in-out;
          transform: scaleX(0);
          transform-origin: right;
        }
        &:hover {
          color: #999;
        }

        &.nuxt-link-exact-active {
          &::after {
            transform: scaleX(1);
            transform-origin: left;
          }
        }
      }
    }
  }
}
</style>
