import uuidv4 from "uuid/v4";

const state = {
  all: {},
  allIds: [],
  allMsIds: []
};

const mutations = {
  SET_CONVERSATION(state, { conversation }) {
    const data = conversation.data();
    state.all = {
      ...state.all,
      [conversation.id]: {
        users: data.users,
        created: data.created,
        messages: []
      }
    };
    state.allIds.push(conversation.id);
  },
  ADD_MESSAGE(state, { conversationId, message }) {
    if (!state.allMsIds.includes(message.id)) {
      state.all[conversationId].messages.push(message);
      state.allMsIds.push(message.id);
    }
  }
};

const actions = {
  async get({ commit, rootState }) {
    // TODO: add try/catch?
    let convoRef = rootState.db.collection("conversations");
    let convos = await convoRef.get();

    convos.forEach(conversation => {
      commit("SET_CONVERSATION", { conversation });
    });
  },
  seed({ rootState }) {
    let convoRef = rootState.db.collection("conversations");

    convoRef.add({
      created: Date.now(),
      users: ["mr_a", "mr_b"],
      messages: [
        { id: uuidv4(), text: "Hi there", sender: "mr_a", created: Date.now() },
        {
          id: uuidv4(),
          text: "Hi to you too!",
          sender: "mr_b",
          created: Date.now()
        }
      ]
    });

    convoRef.add({
      created: Date.now(),
      users: ["mr_a", "mr_b"],
      messages: []
    });
  },
  sendMessage({ rootState }, { text, created, sender, conversationId }) {
    const convoRef = rootState.db
      .collection("conversations")
      .doc(conversationId);

    convoRef
      .update({
        messages: [
          ...state.all[conversationId].messages,
          {
            id: uuidv4(),
            created,
            sender,
            text
          }
        ]
      })
      .then(() => console.log("Message sent."))
      .catch(error => console.log("Error", error));
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
