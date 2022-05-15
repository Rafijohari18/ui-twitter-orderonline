import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userData: {},
    listAgenda: [
      {
        hari: "senin",
        kegiatan: "Belajar Vuejs",
        gambar: "assets/images/rafi.jpg",
      },
      { hari: "selasa", kegiatan: "Belajar Laravel" },
      { hari: "rabu", kegiatan: "Belajar Mysql" },
    ],
    contentData: [
      {
        profile:
          "https://images.unsplash.com/flagged/photo-1573740144655-bbb6e88fb18a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
        nama: "Extra Time Indonesia",
        username: "@idextratime",
        tweet: "Sebuah Perbedaan",
        gambar:
          "https://images.unsplash.com/photo-1638913660106-73b4bac0db09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80",
        waktu: "7j",
      },
      {
        profile:
          "https://images.unsplash.com/photo-1590767187868-b8e9ece0974b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8dGlnZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        nama: "SIMAMAUNG",
        username: "@simamaung",
        tweet: "HT 0-2. Kumaha komentarna luur? #TimnasDay",
        gambar:
          "https://images.unsplash.com/photo-1638913662735-a13cfc1dd8d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        waktu: "10j",
      },
    ],
    tweetData: [
      {
        judul: "Sedang Trend di Topik Indonesia",
        tweet: "MomoGi",
        jumlah: "24,4 rb Tweet",
      },
      {
        judul: "Sedang Trend di Topik Indonesia",
        tweet: "Malam Minggu",
        jumlah: "1,16 jt Tweet",
      },
      {
        judul: "Sedang Trend di Topik Indonesia",
        tweet: "Congrats Korea",
        jumlah: "1.950 Tweet",
      },
      {
        judul: "Sedang Trend di Topik Indonesia",
        tweet: "Israel",
        jumlah: "482 rb Tweet",
      },
      {
        judul: "Sedang Trend di Topik Indonesia",
        tweet: "have a safe flight",
        jumlah: "12,1 rb Tweet",
      },
    ],

    followData: [
      {
        nama: "Sekolah Coding",
        username: "@sekolahcoding",
        gambar:
          "https://images.unsplash.com/photo-1562813733-b31f71025d54?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80",
      },
      {
        nama: "Kampung Coding",
        username: "@kampungcoding",
        gambar:
          "https://images.unsplash.com/photo-1554306274-f23873d9a26c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      },
    ],
  },
  mutations: {
    ADD_USER_DATA: (state, data) => {
      state.userData.username = data.username;
      state.userData.password = data.password;
      state.userData.status = true;
    },
    logout(state) {
      state.userData = {};
    },
  },
  actions: {
    logout(state) {
      state.commit("logout");
    },
  },
});
