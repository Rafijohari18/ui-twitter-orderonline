<template>
  <div class="grid">
      <b-container fluid>
        <b-row>
          <b-col md="12">
            <vs-dialog not-close prevent-close blur v-model="active">
                <template #header>
                <h4 class="not-margin">
                    Masuk ke <b>Twitter</b>
                </h4>
                </template>


                <div class="con-form">
                <vs-input v-model="inputData.username" placeholder="Username">
                    <template #icon>
                     <b-icon icon="person-fill"></b-icon>
                    </template>
                </vs-input>
                <vs-input type="password" v-model="inputData.password" placeholder="Password">
                    <template #icon>
                    <b-icon icon="lock"></b-icon>
                    </template>
                </vs-input>
                <div class="flex">
                    <vs-checkbox v-model="checkbox1">Remember me</vs-checkbox>
                 
                </div>
                </div>

                <template #footer>
                <div class="footer-dialog">
                    <vs-button block @click="submitForm">
                    Sign In
                    </vs-button>


                </div>
                </template>
            </vs-dialog>
          </b-col> 

        <!-- <HelloWorld /> -->
        
    </b-row>
</b-container>

    </div>
</template>

<script>
// @ is an alias to /src

// import HelloWorld from '@/components/HelloWorld.vue'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'LoginView',
  data:() => ({
        active: true,
        inputData: {},
        checkbox1: false
    }),
   computed: {
    ...mapState([
      'userData'
    ]),
  },

  methods: {
    ...mapMutations([
      'ADD_USER_DATA'
    ]),
    submitForm () {
      this.ADD_USER_DATA(this.inputData);
      
      if(this.inputData.username && this.inputData.password ){
        if(this.$store.state.userData.status == true ){
          this.$router.push('/');
        }
      }else{
        alert('Silahkan Isi Username & Password Anda !!');
      }
        
    }
  }


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