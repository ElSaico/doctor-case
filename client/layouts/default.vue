<template>
  <v-app id="inspire">
    <v-app-bar app>
      <v-toolbar-title>Doctor Case Review</v-toolbar-title>
      <v-spacer/>
      <v-dialog v-model="loginDialog" persistent max-width="300px">
        <template v-slot:activator="{ on }">
          <v-btn color="primary" v-on="on">Log in</v-btn>
        </template>
        <form v-on:submit.prevent="onSubmit">
          <v-card>
            <v-card-title>Log in</v-card-title>
            <v-card-text>
              <v-container fluid>
                <v-alert dense dismissible transition="fade-transition" type="error" v-model="loginDialogError">
                  {{ loginResponse.message }}
                </v-alert>
                <v-text-field v-model="loginForm.email" label="Email" required/>
                <v-text-field v-model="loginForm.password" label="Password" type="password" required/>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer/>
              <v-btn text @click="loginDialog = false">Close</v-btn>
              <v-btn color="primary" type="submit">Log in</v-btn>
            </v-card-actions>
          </v-card>
        </form>
      </v-dialog>
    </v-app-bar>

    <v-content>
      <v-container fluid class="fill-height">
        <nuxt/>
      </v-container>
    </v-content>

    <v-footer app>
      <span>&copy; 2020 Bruno Marques</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        loginDialog: false,
        loginDialogError: false,
        loginForm: {
          email: '',
          password: '',
        },
        loginResponse: {},
        onSubmit: () => {
          this.$socket.post('/login', this.loginForm, (record, response) => {
            this.loginResponse = record;
            if (response.error) {
              this.loginDialogError = true;
            } else {
              this.loginDialog = false;
            }
          });
        }
      };
    },
    created () {
      this.$vuetify.theme.dark = true;
    }
  };
</script>
