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
        <h1>Welcome to FlameyEstates</h1>
        <h2>Find your home</h2>
      </aside>
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
#firstsection{
  margin-top: 2rem;

  display: flex;
  gap: 2rem;

  .left{
    background-color: #eee;
    padding: 2rem;
    border-radius: 1.75rem;
    flex-basis: 40%;

    h2{
      font-size: 4rem;
    }
  }
}
</style>
