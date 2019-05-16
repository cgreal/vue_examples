<template>
  <div class="home">
    <h1>{{title}}</h1>
    <div class="row text-center">
      <div class="col-md-4 col-lg4" v-for="(data,index) in products" :key="index">
          <img :src="data.imageUrl" class="img-fluid">
          <h3 @click="goTodetail(data.jobId)" >{{data.positionName}}</h3>
          <div>{{data.townName}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      title: 'Home',
      filterText: '',
      products:[
      {
        jobId:1,
        positionName:"Aşçı",
        companyName:"kebapçıoğlu Kebap",
        imageUrl:require('../assets/logo.png'),
        distance:"8,53 km yakınında",
        latitude:41.050968170166023,
        longitude:29.062856674194339,
        cityName:"İstanbul",
        townName:"Ataşehir"
      },
      {
        jobId:2,
        positionName:"Fırıncı",
        companyName:"Testoğlu Lahmacun Pide Ve Kebap",
        imageUrl:require('../assets/logo.png'),
        distance:"3,23 km yakınında",
        latitude:41.050968170166023,
        longitude:29.062856674194339,
        cityName:"İstanbul",
        townName:"Çengelköy Mahallesi"
      },
      {
        jobId:3,
        positionName:"Tamirci",
        companyName:"Tesisat a.ş.",
        imageUrl:require('../assets/logo.png'),
        distance:"2,53 km yakınında",
        latitude:41.050968170166023,
        longitude:29.062856674194339,
        cityName:"İstanbul",
        townName:"Fatih"
      },
      {
        jobId:4,
        positionName:"Boyacı",
        companyName:"Boyacı a.ş.",
        imageUrl:require('../assets/logo.png'),
        distance:"1,53 km yakınında",
        latitude:41.050968170166023,
        longitude:29.062856674194339,
        cityName:"İstanbul",
        townName:"Bakırköy"
      }
      ]
    }
  },
  methods:{
    goTodetail(prodId) {
      let proId=prodId
      this.$router.push({name:'details',params:{Pid:proId}})
    }
  },
  computed: {
    filteredNames: function () {
      let filter = new RegExp(this.filterText, 'i')
      return this.products.filter(function (name) {
        if (name.positionName.match(filter)) {
          return name
        }
      })
    }
  }
}
</script>

<style scoped>
.row h3{
  cursor:pointer;
}
</style>