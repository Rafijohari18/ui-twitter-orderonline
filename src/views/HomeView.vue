<template>
  <div class="grid">
      <b-container fluid>
        <b-row>
          <b-col md="3">
            <MySidebar />
          </b-col> 
          <b-col cols="12" md="6">
            <MyContent />
          </b-col>
          <b-col cols="12" md="3">
            <MyTrend />
          </b-col>
        
        <!-- <HelloWorld /> -->
        
    </b-row>
</b-container>

    </div>
</template>

<script>
// @ is an alias to /src
import MySidebar from '@/components/MySidebar.vue'
import MyContent from '@/components/MyContent.vue'
import MyTrend from '@/components/MyTrend.vue'
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    MySidebar,
    MyContent,
    MyTrend,
    // HelloWorld,
  }
}
</script>
