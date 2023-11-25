<template>
  <section :id="id" :class="theme">
    <el-row type="flex" class="section-header" align="middle">
      <el-col :span="24">
        <div class="title-container">
          <span class="dot-indicator"></span>
          <span class="section-title">{{ title }}</span>
        </div>
      </el-col>
    </el-row>
    <el-row type="flex" class="section-content" align="middle" justify="center">
        <slot></slot>
    </el-row>
    <a v-if="nextSection !== ''" :href="nextSection" class="skip-arrow">
      <svg v-if="theme == 'theme-dark'" width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 16L8 12H16L12 16Z" fill="white"/>
      </svg>
      <svg v-if="theme == 'theme-light'" width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 16L8 12H16L12 16Z" fill="black"/>
      </svg>
    </a>
  </section>
</template>

<script>
export default {
  name: 'GeneralSection',
  props: {
    title: {
      type: String,
      required: true
    },
    id: {
      type: String,
      default: ""
    },
    theme: {
      type: String,
      default: "theme-light"
    },
    nextSection: {
      type: String,
      default: ""
    },
  },
};
</script>

<style scoped>
section {
  color: var(--color-on-background);
  background-color: var(--color-background);
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  place-items: center;
  padding: 7rem 10rem;
}

.section-header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 2rem 2rem 0 2rem;
}

.title-container {
  width: fit-content;
  display: flex;
  align-items: center;
  border-radius: 6.5rem;
}

.dot-indicator {
  height: 1rem;
  width: 1rem;
  background-color: var(--color-on-background);
  border-radius: 50%;
  display: inline-block;
  margin-right: 8px;
}

.section-content {
  width: 100%;
  height: 100%;
}

.skip-arrow {
  position: absolute;
  right: 50%; /* Center the arrow */
  bottom: 0rem; /* Distance from the bottom */
  transform: translateX(-50%); /* Align the center of the arrow with the center of the section */
  transition: opacity 0.3s ease;
}

.skip-arrow:hover {
  opacity: 0.7; /* Slight opacity change on hover for interaction feedback */
}

@media only screen and (max-width: 1200px) {
  .section-header {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      padding: 2rem 1rem 0rem 1rem;
    }

  section {
    height: auto;
    min-height: 100vh;
    padding: 2rem 1rem;
  }
  .section-content {
    flex-direction: column;
  }
}
</style>
