<template>
    <div class="center grid">
        <b-container class="bv-example-row">

        <vs-row justify="center" class="mt-2">
            <vs-col w="12" >
                <vs-input block v-model="cari" placeholder="Cari di Twitter">
                <template #icon>
                    <b-icon icon="search"></b-icon>
                </template>
                </vs-input>
            </vs-col>

        </vs-row>

        <vs-row class="mt-4">
            <vs-col w="12">
               <b-list-group rounded class="trend-tweet">
                   <b-list-group-item>
                       <h4> <b>Trend Untuk Anda</b> </h4>
                   </b-list-group-item>
                    

                    <b-list-group-item v-for="(value, key) in tweetData" :key="key">
                        <vs-row>
                            <vs-col w="11">
                                <small>{{ value.judul }} </small>
                                <b>{{ value.tweet }} </b> <br>
                                <small>{{ value.jumlah }}  </small>
                            </vs-col>
                            <vs-col w="1">
                                <b-dropdown dropleft no-caret id="dropdown-1" variant="white">
                                    <template #button-content>
                                        <div class="d-flex justify-content-center align-items-center">
                                            <b-icon icon="three-dots" style="font-size: 5px;color:black;"></b-icon> 
                                        </div>
                                    </template>
                                    <b-dropdown-item>
                                        <b-icon icon="emoji-frown" style="font-size: 5px;color:black;"></b-icon> 
                                         Tidak tertarik dengan hal ini
                                    </b-dropdown-item>
                                    <b-dropdown-item>
                                        <b-icon icon="emoji-frown" style="font-size: 5px;color:black;"></b-icon> 
                                        Trend ini berbahaya atau spam
                                    </b-dropdown-item>
                                </b-dropdown>

                                <!-- <b-badge class="badge-dots">
                                    <b-icon icon="three-dots"></b-icon>
                                </b-badge> -->
                            </vs-col>
                        </vs-row>
                        
                    </b-list-group-item>


                    
                </b-list-group>

            </vs-col>

        </vs-row>


        <vs-row class="mt-4">
            <vs-col w="12">
               <b-list-group rounded class="trend-tweet">
                   <b-list-group-item>
                       <h4> <b>Untuk diikuti</b> </h4>
                   </b-list-group-item>
                    
                    <b-list-group-item v-for="(item, key) in followData" :key="key">
                        <b-row>
                            <b-col cols="2">
                                <vs-avatar>
                                    <img :src="item.gambar" alt="">
                                </vs-avatar>
                            </b-col>
                            <b-col cols="6">
                                <div class="ml-2">
                                    <b>{{ item.nama }}</b> <br>
                                    <small>{{ item.username }}</small>
                                </div>
                            </b-col>
                            <b-col cols="3">
                                <vs-button dark flat>
                                Ikuti
                                </vs-button> 
                            </b-col>
                        </b-row>
                        
                    </b-list-group-item>
                </b-list-group>

            </vs-col>

        </vs-row>

        <vs-row class="mt-4">
            <vs-col w="12">
               <b-list-group>
                    
                    <b-list-group-item>
                        <vs-row>
                            <vs-col w="12">
                                <small>
                                    <a href="">Persyaratan</a> &nbsp;
                                    <a href="">Layanan</a>  &nbsp;
                                    <a href="">Kebijakan Privasi</a>  &nbsp;
                                    <a href="">Kebijakan Penggunaan Kuki</a> &nbsp;
                                    <a href="">Aksesibilitas</a> &nbsp;
                                    <a href="">Informasi iklan</a>  &nbsp; <br>
                                     &copy; 2022 Twitter, Inc.
                                </small>
                            </vs-col>
                        </vs-row>
                        
                    </b-list-group-item>
                </b-list-group>

            </vs-col>

        </vs-row>

        </b-container>

    </div>

    
</template>


<script>


export default {
  name: 'MyTrend',
  data() {
    return {
        cari : '',


    };
  },
  computed: {
        tweetData() {
            return this.$store.state.tweetData
        },
        followData(){
            return this.$store.state.followData

        }
    },
  methods: {
  },
}
</script>


