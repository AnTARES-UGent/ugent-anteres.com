<template>
  <section id="about" class="about-section">
    <div class="progress-indicator">
      <div v-for="n in slides" :key="n.id" :class="{'active': n.id === activeSlide}" @click="goToSlide(n.id)" class="bar"></div>
    </div>
    <el-row class="slides-container">
      <el-col :span="24" class="slide" v-for="slide in slides" :key="slide.id" v-show="activeSlide === slide.id">
        <div class="slide-content">
          <h3 class="slide-title">{{ slide.title }}</h3>
          <p class="slide-description">{{ slide.description }}</p>
          <div class="floating-image">
            <img :src="slide.image" alt="Slide Image">
          </div>
        </div>
      </el-col>
    </el-row>
    <a href="#nextSection" class="skip-link">
      <svg class="down-arrow" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 16L8 12H16L12 16Z" fill="currentColor"/>
      </svg>
      Skip
    </a>
  </section>
</template>

<script>
export default {
  name: "AboutSection",
  data() {
    return {
      activeSlide: 1,
      slides: [
        { id: 1, title: 'Title 1', description: 'Description 1', image: 'path-to-your-image-1.png' },
        { id: 2, title: 'Title 2', description: 'Description 2', image: 'path-to-your-image-2.png' },
        { id: 3, title: 'Title 3', description: 'Description 3', image: 'path-to-your-image-3.png' }
      ],
      animationDuration: 300,
      scrollCounter: 0,
      scrollThreshold: 500,
      isAnimationDone: false,
      isEnteringSection: false,
      isExitingSection: false
    };
  },
  methods: {
    goToSlide(slideNumber) {
      this.activeSlide = slideNumber;
      this.scrollCounter = 0;
    },
    handleScroll(event) {
      const section = document.getElementById('about');
      const sectionRect = section.getBoundingClientRect();
      const isSectionInView = sectionRect.top < window.innerHeight && sectionRect.bottom > 0;
      const windowHeight = window.innerHeight;
      const scrollingDown = event.deltaY > 0;
      const scrollingUp = event.deltaY < 0;

      if (this.isExitingSection) {
        console.log("unlocking");
        this.unlockParentScroll();
        this.isExitingSection = false;
        this.isAnimationDone = false;
        return;
      }

      if (!this.isEnteringSection) {
        if ((scrollingDown && sectionRect.top > 0) || 
            (scrollingUp && sectionRect.top < 0)) {
          console.log("locking"); 
          this.isEnteringSection = true;
          event.preventDefault();
          this.centerSection();
          setTimeout(() => {this.lockParentScroll(); this.isAnimationDone = true;}, this.animationDuration+1);
          return;
        }
      }

      if(!this.isAnimationDone && this.isExitingSection) {
        event.preventDefault();
        return;
      }

      if(this.isAnimationDone) {
        this.scrollCounter += Math.abs(event.deltaY);
      }

      if ((scrollingDown && this.activeSlide === this.slides.length) || 
          (scrollingUp && this.activeSlide === 1)) {
        console.log("exiting");
        this.isEnteringSection = false;
        this.isExitingSection = true;
        event.preventDefault();
        return;
      }

      if (this.scrollCounter >= this.scrollThreshold) {
        if (scrollingDown && this.activeSlide < this.slides.length) {
          this.goToSlide(this.activeSlide + 1);
        } else if (scrollingUp && this.activeSlide > 1) {
          this.goToSlide(this.activeSlide - 1);
        }
        this.scrollCounter = 0;
      }

      event.preventDefault();
    },
    smoothScrollToElement(elementId, duration) {
      const element = document.getElementById(elementId);
      if (!element) return;

      const startingY = window.pageYOffset;
      const elementRect = element.getBoundingClientRect();
      const targetY = startingY + elementRect.top - (window.innerHeight - elementRect.height) / 2;
      const startTime = 'now' in window.performance ? performance.now() : new Date().getTime();

      const scroll = () => {
        const now = 'now' in window.performance ? performance.now() : new Date().getTime();
        const time = Math.min(1, ((now - startTime) / duration));
        const timeFunction = (time < 0.5 ? 2 * time * time : -1 + (4 - 2 * time) * time);

        window.scroll(0, Math.ceil((timeFunction * (targetY - startingY)) + startingY));

        if (window.pageYOffset === targetY) return;

        requestAnimationFrame(scroll);
      }

      scroll();
    },
    centerSection() {
      this.smoothScrollToElement('about', 500);
    },
    lockParentScroll() {
      document.body.style.overflow = 'hidden';
    },
    unlockParentScroll() {
      document.body.style.overflow = 'scroll';
    }
  },
  mounted() {
    window.addEventListener('wheel', this.handleScroll, { passive: false });
  },
  beforeUnmount() {
    window.removeEventListener('wheel', this.handleScroll);
    this.unlockParentScroll();
  }
};
</script>

<style scoped>
.about-section {
  min-height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.progress-indicator {
  position: absolute;
  left: 0;
  top: 15%; /* Adjusted to position the bars correctly */
  padding: 1em;
  height: 70%; /* Fill 80% of the section's height */
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Distribute bars evenly */
  gap: 0.5em;
}

.bar {
  width: 5px;
  height: 100%; /* Adjust the height of each bar */
  background-color: #fff;
  border-radius: 5px;
  opacity: 0.5;
  transition: opacity 0.3s ease;
  cursor: pointer;
  z-index: 10;
}

.bar.active {
  opacity: 1; /* Active bar indicator opacity */
}

.slides-container {
  width: 100%;
  height: 80%; /* Adjust the container height */
}

.slide {
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity 0.5s ease-in-out;
}

.slide-content {
  text-align: center;
}

.slide-title {
  font-size: 1.5em;
}

.slide-description {
  font-size: 1em;
}

.floating-image {
  position: absolute;
  max-width: 300px;
  opacity: 0.9;
}

.skip-link {
  position: absolute;
  right: 1rem;
  bottom: 1rem;
  text-decoration: underline;
  color: #fff;
  cursor: pointer;
}

.down-arrow {
  margin-right: 0.5rem;
}
</style>
