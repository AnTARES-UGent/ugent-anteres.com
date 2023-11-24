<template>
  <div :class="[theme]" style="width: 100%; height: fit-content;" id="navbar">    
    <el-row class="row-bg" justify="center" style="width: 100%; height: fit-content; padding: 1em;">
      <a class="nav-item" href="/">Home</a>
      <a class="nav-item" href="/#about">About</a>
      <a class="nav-item" href="/#team">Team</a>
      <a class="nav-item" href="/#sponsors">Sponsors</a>
      <a class="nav-item" href="/#join">Join</a>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "NavigationBar",
  props: {
    theme: {
      type: String,
      default: 'theme-transparent-nav'
    }
  },
  methods: {
    navigate(destination) {
      console.log(`Navigate to: ${destination}`);
      // Implement your navigation logic here
      // For example, you could use this.$router.push(...) if using Vue Router
    }
  }
};
</script>


<style scoped>
  #navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: var(--color-nav-background);
    color: var(--color-nav-on-background);
    z-index: 1000;
  }

  .nav-item {
    text-decoration: none;
    color: inherit;
    cursor: pointer;
    margin-left: 0.25em;
    margin-right: 0.25em;
    padding-left: 0.25em;
    padding-right: 0.25em;
  }

  .nav-item::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: var(--color-nav-on-background);
    transition: width 0.3s ease-in-out;
  }

  .nav-item:hover::after {
    width: 100%;
  }
</style>