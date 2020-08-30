<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-list dense>
        <v-list-item link :to="{ name: 'Home' }" exact>
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link :to="{ name: 'Conversations' }">
          <v-list-item-action>
            <v-icon>mdi-message</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Conversations</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="teal" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Vuetify Chat</v-toolbar-title>
    </v-app-bar>

    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center">
        <router-view />
      </v-row>
    </v-container>

    <v-footer color="teal" app inset>
      <span class="white--text">&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
// https://vuejsdevelopers.com/2017/10/16/vue-js-firestore/
export default {
  name: "App",
  data: () => ({
    drawer: null
  })
};
</script>
