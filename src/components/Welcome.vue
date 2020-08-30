<template>
  <v-card elevation="6" shaped>
    <v-card-title>Welcome!</v-card-title>
    <v-card-subtitle>Please enter your chat name:</v-card-subtitle>
    <v-card-text>
      <v-form v-model="valid">
        <v-text-field
          v-model="name"
          clearable
          :rules="nameRules"
          required
        ></v-text-field>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-btn color="teal" text @click="enterConversation">
        Enter conversation
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "Welcome",
  data: () => ({
    valid: false,
    name: "",
    nameRules: [
      v => !!v || "Name is required",
      v => (v || "").indexOf(" ") < 0 || "No spaces allowed"
    ]
  }),
  methods: {
    enterConversation() {
      if (this.valid) {
        this.$router.push({
          name: "Conversations",
          params: { name: this.name }
        });
      }
    }
  }
};
</script>
