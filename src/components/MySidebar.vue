<template>

<div class="hidden">
    
    <template>
      <vs-button @click="activeSidebar = !activeSidebar" flat icon>
                <b-icon icon="menu-button-wide"></b-icon>
      </vs-button>
    </template>

    <vs-sidebar
        v-model="active"
        :open.sync="activeSidebar">

      <vs-row class="mt-3 mb-2">
        <vs-col offset="1" w="9">
          <img src="@/assets/images/logo.png" alt="" style="max-width:30px;height:auto;">
        </vs-col>

        <vs-col w="2">
          <div style="font-size: 2rem;" class="close mr-3">
            <b-icon icon="x-lg" v-if="activeSidebar"  @click="hideSidebar" class="rounded-circle bg-danger p-2" variant="light"></b-icon>
          </div>
        </vs-col>

      </vs-row>

      <vs-sidebar-item id="beranda">
      <template #icon>
        <b-icon icon="house-door"></b-icon>
      </template>
      Beranda
    </vs-sidebar-item>
    <vs-sidebar-item id="jelajahi">
      <template #icon>
        <b-icon icon="hash"></b-icon>
      </template>
      Jelajahi
    </vs-sidebar-item>
    <vs-sidebar-item id="notifikasi">
      <template #icon>
        <b-icon icon="bell"></b-icon>
      </template>
      Notifikasi
    </vs-sidebar-item>

    <vs-sidebar-item id="pesan">
      <template #icon>
        <b-icon icon="inbox"></b-icon>
      </template>
      Pesan
    </vs-sidebar-item>
    <vs-sidebar-item id="markah">
      <template #icon>
        <b-icon icon="bookmark"></b-icon>
      </template>
      Markah
    </vs-sidebar-item>
    <vs-sidebar-item id="daftar">
      <template #icon>
        <b-icon icon="file-text"></b-icon> 
      </template>
      Daftar
    </vs-sidebar-item>
    <vs-sidebar-item id="profile">
      <template #icon>
        <b-icon icon="person"></b-icon>
      </template>
      Profile
    </vs-sidebar-item>
        <vs-sidebar-item id="lainnya">
      <template #icon>
        <b-icon icon="three-dots"></b-icon>
      </template>
      Lainnya
    </vs-sidebar-item>

    <vs-sidebar-item id="button">
      <vs-button
        size="xl"
        primary
        flat
        @click="activetweet=!activetweet">
        Tweet
    </vs-button>


    </vs-sidebar-item>




    <template #footer>
      <b-row>
        <b-col cols="3">
          <vs-avatar>
          <img src="https://cdn4.vectorstock.com/i/1000x1000/80/88/person-gray-photo-placeholder-man-vector-22808088.jpg" alt="">
        </vs-avatar>
        </b-col>
        <b-col cols="7">
          <b>{{ nama  }}</b> <br>
          {{ statusLogin == true ? VuexUsername :  username}}
        </b-col>
        <b-col cols="2">
          <b-dropdown dropup no-caret id="dropdown-1" variant="white">
              <template #button-content>
                  <div class="d-flex justify-content-center align-items-center">
                      <b-icon icon="three-dots" style="font-size: 5px;color:black;"></b-icon> 
                  </div>
              </template>
              
                <b-dropdown-item @click="logout">
                  
                  <b-icon icon="lock-fill" style="font-size: 5px;color:black;"></b-icon> 
                    <b>Keluar dari {{ statusLogin  == true ? VuexUsername  : username   }}</b> 

                </b-dropdown-item>
              
          </b-dropdown>
         
        </b-col>
      </b-row>

    </template>
    <vs-dialog v-model="activetweet" width="550px" >

        <div class="con-form">
          <b-row class="mt-2">
            <b-col cols="1">
              <vs-avatar>
                  <img src="https://cdn4.vectorstock.com/i/1000x1000/80/88/person-gray-photo-placeholder-man-vector-22808088.jpg" alt="">
              </vs-avatar>
            </b-col>

            <b-col cols="11">
                 <b-form-textarea
                id="textarea"
                class="no-outline"
                v-model="text"
                placeholder="Apa Yang Sedang Terjadi ?"
                rows="3"
                max-rows="6"
                ></b-form-textarea>
              
              <hr>
            </b-col>
        </b-row>

        <vs-row>
            <vs-col offset="1" w="9" style="font-size: 25px;cursor:pointer;">
                   <input type="file" ref="file" style="display: none">
                <b-icon @click="$refs.file.click()" variant="info" icon="image" class="ml-2"></b-icon>
                <b-icon  variant="info" icon="camera" class="ml-4"></b-icon>
                <b-icon  variant="info" icon="emoji-smile" class="ml-4"></b-icon>
                <b-icon  variant="info" icon="pin-map" class="ml-4"></b-icon>
            </vs-col>

            <vs-col w="2">
                <vs-button primary flat size="large">
                Tweet
                </vs-button> 
            </vs-col>

        </vs-row>

        </div>

      </vs-dialog>

    </vs-sidebar>
</div>
</template>


<script>

export default {
  name: 'MySidebar',
  data() {
    return {
      active: 'home',
      nama: 'Rafi Johari',
      username: '@rafi_johari',
      activetweet: false,
      activeSidebar: true,
      email: '',
      password: '',
      text : '',
      remember: false
    };
  },
  computed: {
    statusLogin() {
      return this.$store.state.userData.status;
    },
    VuexUsername() {
      return this.$store.state.userData.username;
    },
  },
  methods: {
    hideSidebar(){
      this.activeSidebar = false;
    },
    logout (){
      this.$store.dispatch('logout',this.$store.state.userData)
         if(this.$store.state.userData.status == undefined ){
          this.$router.push('/login');
        }
    }
  },
}
</script>

<style lang="stylus">
  getColor(vsColor, alpha = 1)
      unquote("rgba(var(--vs-"+vsColor+"), "+alpha+")")
  getVar(var)
      unquote("var(--vs-"+var+")")
  .not-margin
    margin 0px
    font-weight normal
    padding 10px
  .con-form
    width 100%
    .flex
      display flex
      align-items center
      justify-content space-between
      a
        font-size .8rem
        opacity .7
        &:hover
          opacity 1
    .vs-checkbox-label
      font-size .8rem
    .vs-input-content
      margin 10px 0px
      width calc(100%)
      .vs-input
        width 100%
  .footer-dialog
    display flex
    align-items center
    justify-content center
    flex-direction column
    width calc(100%)
    .new
      margin 0px
      margin-top 20px
      padding: 0px
      font-size .7rem
      a
        color getColor('primary') !important
        margin-left 6px
        &:hover
          text-decoration underline
    .vs-button
      margin 0px
  </style>

