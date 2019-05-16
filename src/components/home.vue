<template>
  <div class="home">
    <div class="bs-component">
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
          <a class="navbar-brand" href="#">Navbar</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarColor01">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                  <router-link class="nav-link" to="/">Listing</router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/contact">contact</router-link>
                </li>
              </ul>
              <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="text" placeholder="Search" v-model="filterText" id="filterText">
                <!-- <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button> -->
              </form>
          </div>
      </nav>
      <div id="source-button" class="btn btn-primary btn-xs" style="display: none;">&lt; &gt;</div>
    </div>
    
    <h1>{{title}}</h1>
    <div class="row text-center">
      <div class="col-md-4" v-for="(data,index) in filteredNames"  :key="index">
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
      return this.products.filter(function (data) {
        if (data.positionName.match(filter)) {
          return data
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