<template>
  <div>
    <v-card :class="'text-' + position" :color="color">
      <v-card-text>
        <strong>{{ message.sender }}</strong>
        <p>{{ message.text }}</p>
      </v-card-text>
    </v-card>
    <p :class="'text-' + position">{{ message.created | date }}</p>
  </div>
</template>

<script>
export default {
  name: "Message",
  props: {
    message: {
      type: Object,
      required: true
    }
  },
  computed: {
    color() {
      if (this.message.sender === this.$store.state.users.currentUser) {
        return "grey lighten-3";
      } else {
        return "teal lighten-4";
      }
    },
    position() {
      if (this.message.sender === this.$store.state.users.currentUser) {
        return "right";
      } else {
        return "left";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.my.message {
  text-align: right;
}

.message-container {
  border: 1px solid silver;
}
</style>
