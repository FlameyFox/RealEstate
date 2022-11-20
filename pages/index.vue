<template>
  <div>
    <div class="banner">
      <img
        class="banner__img"
        height="600"
        width="1920"
        src="~/static/img/banner.jpg"
      />
    </div>
    <section id="firstsection">
      <aside class="left">
        <h2>Avec isec?</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae at
          amet eos nam minima, aut incidunt magni autem labore. Id maiores
          fugiat necessitatibus aliquam reprehenderit consequuntur porro, ex
          velit accusantium.
        </p>
      </aside>

      <aside class="right">
        <h2>Let's find your home</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem animi
          error tempora autem quis perferendis alias ut, ducimus dolorum
          suscipit quaerat optio, sed saepe dolor dolores porro odio odit! Enim.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur eum
          qui quae corrupti maiores sequi voluptate quaerat, ad fuga soluta
          deserunt quibusdam quia repudiandae amet fugiat, tempore ullam,
          veritatis porro?
          <br /><br />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias quae
          beatae sunt repudiandae soluta voluptas excepturi laboriosam,
          temporibus consequuntur. Veniam maxime earum inventore suscipit,
          minima voluptatum placeat voluptatem similique officiis!
        </p>
      </aside>
    </section>
    <section id="secondsection">
      <h2>Take a look</h2>
      <div v-if="$apollo.loading">Loading properties...</div>
      <propertiesViewGrid v-else></propertiesViewGrid>
    </section>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>

<style lang="scss" scoped>
.banner {
  overflow: hidden;

  .banner__img {
    height: clamp(420px, 35vw, 70vh);
    width: 100%;
    object-fit: cover;
    border-radius: 1.75rem;

    @media screen and (max-width: 768px) {
      height: clamp(340px, 35vw, 70vh);
    }
  }
}
#firstsection {
  margin-top: 2rem;

  display: flex;
  gap: 2rem;

  .left {
    background-color: $gray;
    padding: 2rem;
    border-radius: 1.75rem;
    flex-basis: 40%;

    h2 {
      font-size: clamp(1.4rem, 4vw, 3rem);
      line-height: 1.2;
      margin-bottom: 1rem;
    }
  }

  .right {
    flex-basis: 60%;
    padding: 2rem;

    h2 {
      font-size: clamp(1.4rem, 4vw, 3rem);
      margin-bottom: 1rem;
      line-height: 1.2;
    }
  }

  @media screen and (max-width: 768px) {
    flex-wrap: wrap;

    .left,
    .right {
      flex-basis: 100%;
    }
  }
}

#secondsection {
  margin-top: 8rem;

  h2 {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 3rem;
    line-height: 1.2;
  }
}
</style>
