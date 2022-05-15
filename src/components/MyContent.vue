<template>
<b-list-group>
    <b-list-group-item> 
      <b>Beranda</b> 
        <b-row class="mt-2">
            <b-col cols="1">
            <vs-avatar>
                <img fluid src="https://cdn4.vectorstock.com/i/1000x1000/80/88/person-gray-photo-placeholder-man-vector-22808088.jpg" alt="">
            </vs-avatar>
            </b-col>

            <b-col cols="11">
                 <b-form-textarea
                id="textarea"
                class="no-outline ml-2"
                v-model="text"
                placeholder="Apa Yang Sedang Terjadi ?"
                rows="3"
                max-rows="6"
                ></b-form-textarea>
              
              <hr class="ml-2">
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
                <vs-button primary flat>
                Tweet
                </vs-button> 
            </vs-col>

      </vs-row>

    </b-list-group-item>
    <b-list-group-item v-for="(value, key) in listData" :key="key">
        <vs-row>
            <vs-col w="1">
                <vs-avatar>
                    <img :src="value.profile" alt="">
                </vs-avatar>
            </vs-col>

            <vs-col w="11">
                <div class="ml-2">
                    <b>{{ value.nama }}</b>
                    {{ value.username }}. {{ value.waktu }} <br>
                    {{ value.tweet }}
                </div>

            </vs-col>

            <vs-col offset="1" w="11" class="mt-2">
                <img :src="value.gambar" fluid alt="">
            </vs-col>

        </vs-row>
    </b-list-group-item>
</b-list-group>
</template>


<script>

export default {
  name: 'MyContent',
  data() {
    return {
        text : '',
    };
  },
  computed: {
        listData() {
            return this.$store.state.contentData
        }
    },
  methods: {
  },
}
</script>


