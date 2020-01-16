<template>
  <v-container fluid>
    <v-row v-if="!done">
      <v-col cols="12" sm="8">
        <v-card>
          <v-card-title>Please review this case:</v-card-title>
          <v-card-text>
            <v-textarea disabled no-resize filled auto-grow v-bind:value="currentCase.record" />
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="4">
        <v-card>
          <v-card-title>Select condition</v-card-title>
          <v-list three-line subheader color="secondary" max-height="50vh" class="overflow-y-auto lighten-1">
            <v-list-item-group mandatory v-model="condition">
              <v-list-item v-for="condition in conditions" :key="condition.id">
                <v-list-item-content>
                  <v-list-item-title v-text="condition.code" />
                  <v-list-item-subtitle v-text="condition.description" />
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
          <v-card-actions>
            <v-spacer/>
            <v-btn color="primary" @click="onNext()">Next case</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-card class="py-6" v-else>
      <v-card-text class="headline text-center">
        You are done!
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
  export default {
    name: 'CaseReview',
    data () {
      setInterval(() => {
        this.timeElapsed += 100;
      }, 100);
      return {
        done: false,
        currentCase: {},
        condition: null,
        conditions: [],
        timeElapsed: 0,
        onNext: () => {
          const condition = this.conditions[this.condition];
          this.$axios.$patch(`/case/${this.currentCase.id}`, {
            doctor: this.user.id,
            condition: condition.id,
            time: this.timeElapsed,
          }).then(() => {
            this.getNextCase();
          })
        },
        getNextCase: () => {
          this.$axios.$get('/case')
            .then(response => {
              this.currentCase = response;
              this.timeElapsed = 0;
            }).catch(() => {
            this.done = true;
          });
        },
      }
    },
    computed: {
      user () {
        return this.$store.state.user;
      }
    },
    mounted () {
      this.getNextCase();
      this.$axios.$get('/condition')
        .then(response => {
          this.conditions = response;
        }).catch(() => {});
    },
  };
</script>
