<template>
  <section class="theme-dark hero">
    <el-row type="flex" class="hero-row" align="middle">
      <el-col :span="24">
        <div class="hero-content">
          <h1 class="hero-title">{{ title }}</h1>
          <p class="hero-description">{{ tagline }}</p>
          <a :href="ctaLink" class="hero-cta">{{ ctaText }}</a>
        </div>
      </el-col>
    </el-row>
    <div class="hero-visual">
      <!-- Dynamic visual element goes here -->
    </div>
    <div class="countdown-timer">
      <span>{{ countdown.years }}</span>
      <span>{{ countdown.months }}</span>
      <span>{{ countdown.days }}</span>
      <span>{{ countdown.hours }}</span>
      <span>{{ countdown.minutes }}</span>
      <span>{{ countdown.seconds }}</span>
    </div>
    <a :href="nextSection" class="hero-arrow">
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 16L8 12H16L12 16Z" fill="white"/>
      </svg>
    </a>
  </section>
</template>

<script>
export default {
  name: "HeroSection",
  props: {
    title: {
      type: String,
      default: "AnTARES"
    },
    tagline: {
      type: String,
      default: "Join us on a journey beyond the stars."
    },
    nextSection: {
      type: String,
      default: "/#about"
    },
    launchDate: {
      type: String,
      default: "November 17, 2027 03:24:00"
    },
    ctaLink: {
      type: String,
      default: "/#about"
    },
    ctaText: {
      type: String,
      default: "Discover Our Missions"
    }
  },
  data() {
    return {
      endDate: new Date(this.launchDate), // Set your target date here
      countdown: {
        years: 0,
        months: 0,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      }
    };
  },
  created() {
    this.updateCountdown();
    setInterval(this.updateCountdown, 1000);
  },
  methods: {
    updateCountdown() {
      const now = new Date();
      const distance = this.endDate - now;

      // If the countdown is finished, you might want to display a message or take some action
      if (distance < 0) {
        clearInterval(this.interval);
        return;
      }

      // Time calculations for years, months, days, hours, minutes and seconds
      let remaining = distance;
      this.countdown.years = Math.floor(remaining / (1000 * 60 * 60 * 24 * 365));
      remaining -= this.countdown.years * (1000 * 60 * 60 * 24 * 365);
      this.countdown.months = Math.floor(remaining / (1000 * 60 * 60 * 24 * 30));
      remaining -= this.countdown.months * (1000 * 60 * 60 * 24 * 30);
      this.countdown.days = Math.floor(remaining / (1000 * 60 * 60 * 24));
      remaining -= this.countdown.days * (1000 * 60 * 60 * 24);
      this.countdown.hours = Math.floor((remaining / (1000 * 60 * 60)) % 24);
      this.countdown.minutes = Math.floor((remaining / (1000 * 60)) % 60);
      this.countdown.seconds = Math.floor((remaining / 1000) % 60);
    }
  }
};
</script>


<style scoped>
  .hero {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 3em;
    background: #000; /* You can set a background image here */
    color: #fff;
    min-height: 100vh; /* Ensure full viewport height */
  }

  .hero-row {
    width: 100%;
  }

  .hero-content {
    text-align: left;
  }

  .hero-title {
    font-size: 2.5em;
    margin-bottom: 0.25em;
  }

  .hero-description {
    font-size: 1.2em;
    margin-bottom: 1em;
  }

  .hero-cta {
    padding: 0.5em 1em;
    border: 1px solid #fff;
    text-decoration: none;
    color: #fff;
    background-color: transparent;
    transition: background-color 0.3s, color 0.3s;
  }

  .hero-cta:hover {
    background-color: #fff;
    color: #000;
  }

  .hero-arrow {
    position: absolute;
    left: 50%; /* Center the arrow */
    bottom: 20px; /* Distance from the bottom */
    transform: translateX(-50%); /* Align the center of the arrow with the center of the section */
    transition: opacity 0.3s ease;
  }

  .hero-arrow:hover {
    opacity: 0.7; /* Slight opacity change on hover for interaction feedback */
  }

  .countdown-timer {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 1.5rem;
    color: #fff;
  }

  .countdown-timer span + span:before {
    content: ':';
    opacity: 0.7;
    margin: 0 0.5rem;
  }

  .hero-visual {
    /* Additional styles for your visual element */
  }
</style>
