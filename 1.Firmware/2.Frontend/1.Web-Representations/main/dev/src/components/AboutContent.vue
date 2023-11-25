<template>
  <el-row class="about-content-row" align="middle" justify="center">
    <el-col :span="24" class="about-description-col">
      <div class="about-description">
        <p class="title">{{ title }}</p>
        <p class="description">{{ description }}</p>
      </div>
    </el-col>
    <el-col :span="24" class="about-image-col">
      <el-image
        class="about-image"
        :src="imageSrc"
        fit="cover"
        :preview-src-list="[imageSrc]"
      ></el-image>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'AboutContent',
  props: {
    imageSrc: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
.about-content-row {
  width: 100%;
  height: 100%;
}

.about-image-col, .about-description-col {
  height: fit-content;
  display: flex;
  align-items: center;
}

.about-image {
  border-radius: 8px;
  width: 100%;
  height: 50rem;
  object-fit: cover;
}

.about-description {
  height: 100%;
  padding:0rem 0rem 2rem 0rem;
}

.title {
  font-size: 2.25rem;
  width: fit-content;
}

.description {
  font-size: 1.25rem;
}

@media only screen and (max-width: 1200px) {
  /*.about-content-row {*/
  /*  flex-direction: column;*/
  /*}*/
  .about-image {
    /* Ensuring the aspect ratio is maintained without black borders */
    min-height: 0; /* Override ElementUI's default */
    width: auto;
    min-width: 100%;
    max-height: 30rem;
  }
  .about-image-col, .about-description-col {
    width: 100%;
    max-width: 100%;
    height: auto;
    padding: 2rem 0rem 0rem 0rem;
  }
}
</style>
