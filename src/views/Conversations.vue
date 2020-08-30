<template>
  <div>
    <initialize-data />
    <conversation
      v-for="id in convoIds"
      :conversation="conversations[id]"
      :id="id"
      :key="id"
    />
  </div>
</template>

<script>
import { Conversation, InitializeData } from "@/components";
import { mapState } from "vuex";

export default {
  name: "Conversations",
  components: {
    Conversation,
    InitializeData
  },
  computed: {
    ...mapState({
      conversations: state => state.conversations.all,
      convoIds: state => state.conversations.allIds
    })
  }
};
</script>
