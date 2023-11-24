<template>
  <el-row class="team-content-row">
    <el-col :span="12" class="team-description-col">
      <div class="team-description">
        <p class="title">{{ title }}</p>
        <p class="description">
          {{ description }}
        </p>
        <button>Join Us</button>
      </div>
    </el-col>
    <el-col :span="12" class="team-members-col">
      <el-scrollbar class="members-list">
        <div v-if="!renderMembers" class="member-card placeholder-card">Loading...</div>
        <div v-if="renderMembers" v-for="member in teamMembers" :key="member.id" class="member-card">
          <el-image class="member-image" :src="member.imageSrc" fit="cover" @click="redirectTo(member.socialLink)"></el-image>
          <div class="member-info">
            <p class="member-name" @click="redirectTo(member.socialLink)">{{ member.name }}</p>
            <el-scrollbar class="roles-scrollbar" tag="div">
              <el-space wrap class="roles-row">
                <el-tag v-for="role in member.roles" :key="role" class="role-tag">
                  {{ role }}
                </el-tag>
              </el-space>
            </el-scrollbar>
          </div>
        </div>
      </el-scrollbar>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'TeamContent',
  props: {
    teamMembers: {
      type: Array,
      default: [
        {
          id: 1,
          name: 'Alex Johnson',
          imageSrc: '/images/members/alex.jpg',
          roles: ['Engineer', 'Designer', 'Engineer', 'Designer', 'Engineer', 'Designer', 'Engineer', 'Designer'],
          socialLink: 'https://www.linkedin.com/in/alexjohnson'
        },
        {
          id: 2,
          name: 'Maria Garcia',
          imageSrc: '/images/members/maria.jpg',
          roles: ['Project Manager'],
          socialLink: 'https://www.linkedin.com/in/mariagarcia'
        },
        {
          id: 3,
          name: 'Sam Lee',
          imageSrc: '/images/members/sam.jpg',
          roles: ['Developer', 'Researcher'],
          socialLink: 'https://www.linkedin.com/in/samlee'
        },
        {
          id: 4,
          name: 'Joe Rogan',
          imageSrc: '/images/members/sam.jpg',
          roles: ['Developer', 'Researcher'],
          socialLink: 'https://www.linkedin.com/in/joerogan'
        },
        {
          id: 5,
          name: 'Bran Ferren',
          imageSrc: '/images/members/sam.jpg',
          roles: ['Developer', 'Researcher'],
          socialLink: 'https://www.google.com/search?client=firefox-b-d&sca_esv=585104753&sxsrf=AM9HkKlzoG_oYe_8wkJyD5PcgQF6_H2pKg:1700848666206&q=Bran+Ferren&si=ALGXSlYzFQQn5id74gU-GPAR8UsllKNebHx5zj2txQsc1FfqFPhSBbgx_kCTz0iRaD1ZjpRwHOj71DC73jjqQPFUXMesQXS_bxMe3cHOclAEaU85n2_SACzXcrWgLvis-ezIrohFGSkemeOY7tMG6nEGscuER0ddk1apveKp6TjvZHoByw8EynxkEr2Jy80k9SBQztcfaq8DOSpaT0gMfevaQd9Mo-VSneZZLceNAJDIh5P_HeaK8xdGZtwtqbCbE5rfdnckkKUFVo2ml1XINZIkNu_KNT-UWQ%3D%3D&sa=X&ved=2ahUKEwi9isOEm92CAxUHsKQKHdoCCMcQmxMoAXoECD8QAw'
        },
        {
          id: 6,
          name: 'Bran Ferren',
          imageSrc: '/images/members/sam.jpg',
          roles: ['Developer', 'Researcher'],
          socialLink: 'https://www.google.com/search?client=firefox-b-d&sca_esv=585104753&sxsrf=AM9HkKlzoG_oYe_8wkJyD5PcgQF6_H2pKg:1700848666206&q=Bran+Ferren&si=ALGXSlYzFQQn5id74gU-GPAR8UsllKNebHx5zj2txQsc1FfqFPhSBbgx_kCTz0iRaD1ZjpRwHOj71DC73jjqQPFUXMesQXS_bxMe3cHOclAEaU85n2_SACzXcrWgLvis-ezIrohFGSkemeOY7tMG6nEGscuER0ddk1apveKp6TjvZHoByw8EynxkEr2Jy80k9SBQztcfaq8DOSpaT0gMfevaQd9Mo-VSneZZLceNAJDIh5P_HeaK8xdGZtwtqbCbE5rfdnckkKUFVo2ml1XINZIkNu_KNT-UWQ%3D%3D&sa=X&ved=2ahUKEwi9isOEm92CAxUHsKQKHdoCCMcQmxMoAXoECD8QAw'
        },
        // ... more members ...
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
  data() {
    return {
      initialHeight: null,
      renderMembers: false // Initially set to false
    };
  },

  mounted() {
    this.$nextTick(() => {
      this.setInitialMaxHeight();
      this.renderMembers = true; // Enable rendering of member cards
    });
  },
  methods: {
    setInitialMaxHeight() {
      const teamMembersCol = this.$el.querySelector('.team-members-col');
      if (teamMembersCol) {
        const initialHeight = teamMembersCol.offsetHeight;
        console.log(initialHeight);
        teamMembersCol.style.maxHeight = `${initialHeight}px`;
      }
    },
    redirectTo(link) {
      window.location.href = link;
    },
  }
};
</script>

<style scoped>
.team-content-row {
  width: 100%;
  height: 100%;
}

.team-description-col {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.team-description-col, .team-members-col {
  height: 100%;
  display: flex;
}

.members-list {
  width: 100%;
  height: 30rem;
}
.member-card {
  display: flex;
  margin-bottom: 1rem;
}

.member-image {
  border-radius: 2rem;
  width: 4rem;
  height: 4rem;
  min-width: 4rem;
  min-height: 4rem;
  margin-right: 1rem;
  cursor: pointer;
}

.member-info {
  display: flex;
  flex-direction: column;
}

.member-name {
  margin-top: 0;
  font-weight: bold;
  cursor: pointer;
}

.roles-scrollbar {
  max-width: 30rem;
  max-height: 3rem;
}

.roles-row {
  flex-wrap: wrap;
  width: 100%;
}

.role-tag {
  background-color: var(--color-surface);
  border-color: var(--color-surface);
  color: var(--color-on-surface);
  border-radius: 1rem;
  margin: 0rem 0.25rem;
}

.title {
  font-size: 2.25rem;
  width: fit-content;
}

.description {
  font-size: 1.25rem;
}

@media only screen and (max-width: 1200px) {
  .team-content-row {
    flex-direction: column;
  }

  .team-description-col, .team-members-col {
    width: 100%;
    max-width: 100%;
    height: auto;
    padding: 2rem 0rem 0rem 0rem;
  }

  .team-members-col {
    height: 30rem;
  }

  .members-list {
    height: calc(30rem - 2rem);
  }
}
</style>
