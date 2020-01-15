<template>
  <v-card>
    <v-card-title>Please review this case:</v-card-title>
    <v-card-text>
      <v-textarea disabled no-resize filled v-bind:value="currentCase.record" />
    </v-card-text>
  </v-card>
</template>

<script>
  export default {
    name: 'CaseReview',
    data () {
      return {
        currentCase: {}
      }
    },
    mounted () {
      this.$axios.$get('/case')
        .then(response => {
          this.currentCase = response;
        }).catch(() => {});
    },
  };
</script>
