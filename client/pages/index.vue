<template>
  <v-container>
    <v-card class="py-6" v-if="user === null">
      <v-card-text class="headline text-center">
        Please log in to start reviewing cases.
      </v-card-text>
    </v-card>
    <case-review v-else />
  </v-container>
</template>

<script>
  import CaseReview from '../components/CaseReview'
  export default {
    components: {
      CaseReview,
    },
    computed: {
      user () {
        return this.$store.state.user;
      }
    },
  };
</script>
