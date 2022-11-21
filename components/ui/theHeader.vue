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
          <a @click="openModal()">Login</a>
        </li>
      </ul>
    </div>
    <div v-if="this.loginModal" class="login modal">
      <span @click="openModal()">Close modal</span>
      <h2>Login</h2>
      <form>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <input type="submit" title="Login" name="Login" value="Login" />
      </form>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      loginModal: false,
    }
  },
  methods: {
    openModal() {
      this.loginModal = !this.loginModal

      document.body.classList.toggle('sliderActive')
    },
  },
  beforeDestroy() {
    document.body.classList.remove('sliderActive')
  },
}
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
        cursor: pointer;

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
          color: #555;
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
  .modal {
    position: fixed;
    top: 50vh;
    left: 50vw;
    transform: translate(-50%, -50%);

    background-color: #fff;
    border-radius: 1.75rem;
    padding: 2.75rem;
    width: 30rem;
    z-index: 99;

    > span{
      cursor: pointer;
    }

    h2 {
      font-size: clamp(1.2rem, 4vw, 2rem);
      text-align: center;
      margin-bottom: 2rem;
    }

    form {
      display: flex;
      flex-direction: column;

      input {
        background-color: $gray;
        border: 0;
        padding: 1rem 1.5rem;
        border-radius: 1.75rem;
        margin-bottom: 1rem;

        &[type='submit'] {
          cursor: pointer;
          transition: all 0.3s ease-in-out;
          &:hover {
            background-color: $primary;
            color: #fff;
          }
        }
      }
    }
  }
}
</style>
