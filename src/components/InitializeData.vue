<template>
  <div>
    <v-btn color="primary" @click="init">Initialize app base state</v-btn>
    <v-btn color="secondary" @click="get">Get</v-btn>
  </div>
</template>

<script>
export default {
  name: "InitializeData",
  methods: {
    init() {
      this.$store.dispatch("users/seed");
      this.$store.dispatch("conversations/seed");
    },
    get() {
      this.$store.dispatch("users/get");
      this.$store.dispatch("conversations/get");
    }
  }
};
</script>
