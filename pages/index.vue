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
      <div v-for="(property, index) in allProperties" :key="index">
        {{ property }}
      </div>
      <propertiesViewGrid :properties="this.properties"></propertiesViewGrid>
    </section>
  </div>
</template>

<script>
import gql from 'graphql-tag'

export default {
  name: 'IndexPage',

  apollo: {
    allProperties: gql`
      {
        allProperties {
          id
          address
          _status
          _firstPublishedAt
        }
      }
    `,
  },

  data() {
    return {
      properties: [
        {
          id: 1,
          title: 'Bay City 32 Blvrd',
          price: '5100000',
          details: {
            size: 324,
            rooms: 12,
            features: 'Many',
            date: 'DATE',
          },
        },
        {
          id: 2,
          title: 'Bay City 76 Blvrd',
          price: '5700000',
          details: {
            size: 334,
            rooms: 12,
            features: 'Many',
            date: 'DATE',
          },
        },
        {
          id: 2,
          title: 'Fox Park 60',
          price: '690000',
          details: {
            size: 146,
            rooms: 6,
            features: 'Yip',
            date: 'DATE',
          },
        },
      ],
    }
  },
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
    background-color: $gray;
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
</style>
