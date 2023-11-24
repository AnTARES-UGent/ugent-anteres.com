<template>
  <el-col class="sponsors-content-row">
    <el-col :span="24" class="sponsors-col">
      <div class="sponsors-description">
        <p class="title">{{ title }}</p>
        <p class="description">{{ description }}</p>
      </div>
      <div class="sponsors-list">
        <el-scrollbar>
          <el-space wrap class="sponsors-space">
            <div v-for="sponsor in sponsors" :key="sponsor.id" class="sponsor-card" @click="redirectTo(sponsor.link)">
              <el-image class="sponsor-image" :src="sponsor.imageSrc" fit="cover"></el-image>
            </div>
          </el-space>
        </el-scrollbar>
      </div>
    </el-col>
  </el-col>
</template>

<script>
export default {
  name: 'SponsorsContent',
  props: {
    sponsors: {
      type: Array,
      default: [
        {
          id: 1,
          name: 'Sponsor One',
          imageSrc: '/images/sponsors/sponsor1.png',
          link: 'https://www.sponsor1.com'
        },
        {
          id: 2,
          name: 'Sponsor Two',
          imageSrc: '/images/sponsors/sponsor2.png',
          link: 'https://www.sponsor2.com'
        },
        {
          id: 3,
          name: 'Sponsor Three',
          imageSrc: '/images/sponsors/sponsor3.png',
          link: 'https://www.sponsor3.com'
        },
        {
          id: 4,
          name: 'Sponsor One',
          imageSrc: '/images/sponsors/sponsor1.png',
          link: 'https://www.sponsor1.com'
        },
        {
          id: 5,
          name: 'Sponsor Two',
          imageSrc: '/images/sponsors/sponsor2.png',
          link: 'https://www.sponsor2.com'
        },
        {
          id: 6,
          name: 'Sponsor Three',
          imageSrc: '/images/sponsors/sponsor3.png',
          link: 'https://www.sponsor3.com'
        },
        {
          id: 7,
          name: 'Sponsor One',
          imageSrc: '/images/sponsors/sponsor1.png',
          link: 'https://www.sponsor1.com'
        },
        {
          id: 8,
          name: 'Sponsor Two',
          imageSrc: '/images/sponsors/sponsor2.png',
          link: 'https://www.sponsor2.com'
        },
        {
          id: 9,
          name: 'Sponsor Three',
          imageSrc: '/images/sponsors/sponsor3.png',
          link: 'https://www.sponsor3.com'
        },
      ],
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  },
  methods: {
    redirectTo(link) {
      window.location.href = link;
    }
  }
};
</script>

<style scoped>
.sponsors-content-row {
  width: 100%;
  height: 100%;
}

.sponsors-col {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.sponsors-description {
  width: 100%;
}

.sponsors-list {
  width: 100%;
  height: fit-content;
  max-height: 30rem;
  padding: 2rem 0rem 0rem 0rem;
}

.sponsors-space {
  width: 100%;
  max-height: 30rem;
  justify-content: center;
}
.sponsor-card {
  cursor: pointer;
  margin: 0.5rem;
}

.sponsor-image {
  border-radius: 1rem;
  width: 4rem;
  height: 4rem;
}

.title {
  font-size: 2.25rem;
}

.description {
  font-size: 1.25rem;
}

@media only screen and (max-width: 1200px) {
  /* Responsive adjustments if needed */
}
</style>
