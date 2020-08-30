<template>
  <v-card class="mb-3" elevation="6">
    <v-card-title>Conversation ID: {{ id }}</v-card-title>
    <v-card-text>
      <message
        v-for="message in conversation.messages"
        :message="message"
        :key="message.id"
      />
      <v-text-field
        v-model="newMessage"
        append-outer-icon="mdi-send"
        filled
        clear-icon="mdi-close-circle"
        clearable
        type="text"
        @click:append-outer="send"
        @click:clear="clear"
        @keyup.enter="send"
        placeholder="Type something..."
      ></v-text-field>
    </v-card-text>
  </v-card>
</template>

<script>
import Message from "./Message";

export default {
  name: "Conversation",
  components: {
    Message
  },
  props: {
    conversation: {
      type: Object,
      required: true
    },
    id: {
      type: String,
      required: true
    }
  },
  data: () => ({
    newMessage: ""
  }),
  created() {
    this.$store.state.db
      .collection("conversations")
      .doc(this.id)
      .onSnapshot(convo => {
        // latency compensation: hasPendingWrites ? data not been written yet : has been written
        // could be used to show "member is typing..."
        let source = convo.metadata.hasPendingWrites ? "Local" : "Server";

        console.log(`Source ${source}`);

        if (convo && convo.data()) {
          convo.data().messages.forEach(message => {
            this.$store.commit("conversations/ADD_MESSAGE", {
              conversationId: this.id,
              message
            });
          });
        }
      });
  },
  methods: {
    clear() {
      this.newMessage = "";
    },
    send() {
      this.$store.dispatch("conversations/sendMessage", {
        text: this.newMessage,
        created: Date.now(),
        conversationId: this.id,
        sender: this.$store.state.users.currentUser
      });
      this.clear();
    }
  }
};
</script>
