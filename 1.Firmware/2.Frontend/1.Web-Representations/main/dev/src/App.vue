<template>
  <NavBar :theme="currentTheme" @update:theme="updateTheme"/>
  <Hero />
  <Section title="About Us" id="about" theme="theme-light" style="height: fit-content;">
    <AboutContent 
      title="Our Vision" 
      description="jsdjflkjdsfjldsjfl lkdsf lsjfdslkfdksdlkjfsd sldjflks dflksjdfld dskdj fjsldjf dsflksjfdsklf sfskdflksjdlf." 
      imageSrc="/main/assets/nasa-about-vision.jpg">
    </AboutContent>
  </Section>
  <Section title="Team" id="team" theme="theme-light" style="height: fit-content;">
    <TeamContent 
      title="Team" 
      description="We appreciate our team of exceptional individuals, dedicated to pushing the boundaries of rocket technology in Belgium." 
      imageSrc="/main/assets/nasa-about-vision.jpg">
    </TeamContent>
  </Section>
  <Section title="Sponsors" id="sponsors" theme="theme-light" style="height: fit-content;">
    <SponsorsContent 
      title="Sponsors"
      description="We are proud to be supported by a diverse group of organizations and companies that share our vision and values. Our sponsors play a pivotal role in enabling us to achieve our goals and make a positive impact. Below are some of the sponsors who have contributed significantly to our journey.">
    </SponsorsContent>
  </Section>
  <Footer></Footer>
</template>

<script>
export default {
  data() {
    return {
      currentTheme: 'theme-transparent-nav'
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    updateTheme(newTheme) {
      this.currentTheme = newTheme;
    },
    handleScroll() {
      const top = window.pageYOffset || document.documentElement.scrollTop;
      if (top > 0) {
        this.currentTheme = 'theme-dark-nav';
      } else {
        this.currentTheme = 'theme-transparent-nav';
      }
    }
  }
};
</script>


<style scoped>
</style>
