<template>
  <footer>
    <el-space class="theme-dark footer-space" wrap>
      <el-col :span="24" class="footer-col">
        <div>
          <a class="nav-item" href="/">Home</a>
        </div>
        <div>
          <a class="nav-item" href="/#about">About Us</a>
        </div>
        <div>
          <a class="nav-item" href="/#team">Team</a>
        </div>
        <div>
          <a class="nav-item" href="/#sponsors">Sponsors</a>
        </div>
      </el-col>
      <el-col class="footer-col">
        <div>
          <a class="nav-item" href="https://twitter.com" target="_blank">Twitter</a>
        </div>
        <div>
          <a class="nav-item" href="https://linkedin.com" target="_blank">LinkedIn</a>
        </div>
        <div>
          <a class="nav-item" href="mailto:info@example.com">Email</a>
        </div>
      </el-col>
    </el-space>
    <el-row align="middle" justify="center">
      <div class="copyright">
        &copy; {{ new Date().getFullYear() }} Your Company Name. All Rights Reserved.
      </div>
    </el-row>
  </footer>
</template>

<style scoped>
.footer-space {
  padding: 1rem 1rem;
  background-color: var(--color-background);
  color: var(--color-on-background);
  width: 100%;
  align-items: start !important;
}

.footer-col {
  height: fit-content;
  width: 20rem;
}

.nav-item {
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  margin: 0.25em;
  position: relative;
  display: inline-block;
}

.nav-item::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background-color: var(--color-on-background);
  transition: width 0.3s ease-in-out;
}

.nav-item:hover::after {
  width: 100%;
}

.social-media {
  margin-top: 1rem;
}

.copyright {
  padding: 1rem;
}

@media only screen and (max-width: 600px) {
}
</style>
