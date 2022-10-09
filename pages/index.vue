<template>
  <div>
    <div class="banner">
      <img class="banner__img" src="~/static/img/banner.jpg" />
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
        <h2>Let find your home</h2>
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
      <div class="grid properties">
        <div class="properties__property">
          <div class="properties__property--imgcontainer">
            <img src="~/static/img/banner.jpg" alt=" TITLE " />
          </div>
          <div class="properties__property--details">
            <h4 class="properties__property--title">Bay City 32 Blvrd</h4>
            <h4 class="properties__property--price">$5.100.000</h4>
            <div class="stats">
              <div><h5>Size:</h5></div>
              <div><h5>Rooms:</h5></div>
              <div><h5>Extras:</h5></div>
              <div><h5>Time:</h5></div>
            </div>
          </div>
          <div class="properties__property--actions">
            <a href="#" class="btn seemore">Se more</a>
          </div>
        </div>
      </div>
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
  }
}
#firstsection {
  margin-top: 2rem;

  display: flex;
  gap: 2rem;

  .left {
    background-color: #eee;
    padding: 2rem;
    border-radius: 1.75rem;
    flex-basis: 40%;

    h2 {
      font-size: 3rem;
      line-height: 1.2;
      margin-bottom: 1rem;
    }
  }

  .right {
    flex-basis: 60%;
    padding: 2rem;

    h2 {
      font-size: 3rem;
      margin-bottom: 1rem;
      line-height: 1.2;
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

.properties {
  &.grid {
    display: grid;
    gap: 1rem;
    grid-template-columns:repeat(3,1fr);
  }

  &__property {

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
    &--details{
      background-color: $gray;
      padding: 1rem;
      border-radius: 1rem;
    }
    &--title {
      font-size: 1.5rem;
    }
  }
}
</style>
