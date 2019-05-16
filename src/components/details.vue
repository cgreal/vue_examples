<template>
	<div class="details">
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
		<div class="container">
			<div class="row">
				<div class="col-md-12 text-center" v-for="(list,index) in jobs" :key="index"> 
					<div v-if="proId == list.jobId">
						<img :src="list.imageUrl" class="img-fluid">
						<h1>{{list.companyName}}</h1>
						<div>{{list.description}}</div>
						<div>{{list.address}}</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		name:'details',
		data(){
			return{
				proId:this.$route.params.Pid,
				title:"details",
				jobs:[
				{
					jobId:1,
					positionName:"Aşçı",
					companyName:"kebapçıoğlu Kebap",
					durationDay:0,
					durationDayText:"Taze çıktı!",
					imageUrl:require('../assets/logo.png'),
					countryCode:"TR",
					countryName:"Turkey",
					cityName:"İstanbul",
					townName:"Ataşehir",
					address:"bilmem ne mahallesi blabla sokak Ataşehir",
					postalCode:34768,
					hasLatitude:true,
					hasLongitude:true,
					latitude:41.0266502,
					longitude:29.1157803,
					description:"Firma açıklması",
					status:1,
					contactPhone:{
						countryCallingCode:"+90",
						areaCode:"879",
						number:"9797979"
					}
				},
				{
					jobId:2,
					positionName:"Fırıncı",
					companyName:"Testoğlu Lahmacun Pide Ve Kebap",
					durationDay:0,
					durationDayText:"Taze çıktı!",
					imageUrl:require('../assets/logo.png'),
					countryCode:"TR",
					countryName:"Turkey",
					cityName:"İstanbul",
					townName:"Çengelköy",
					address:"Çengelköy mahallesi İstanbul Turkey",
					postalCode:34768,
					hasLatitude:true,
					hasLongitude:true,
					latitude:41.0266502,
					longitude:29.1157803,
					description:"syovsvyosvyoyvsoby",
					status:1,
					contactPhone:{
						countryCallingCode:"+90",
						areaCode:"879",
						number:"9797979"
					}
				},
				{
				jobId:3,
					positionName:"Tamirci",
					companyName:"Tesisat a.ş.",
					durationDay:0,
					durationDayText:"Taze çıktı!",
					imageUrl:require('../assets/logo.png'),
					countryCode:"TR",
					countryName:"Turkey",
					cityName:"İstanbul",
					townName:"Fatih",
					address:"Fatih mahallesi İstanbul Turkey",
					postalCode:34768,
					hasLatitude:true,
					hasLongitude:true,
					latitude:21.0266502,
					longitude:19.1157803,
					description:"syovsvyosvyoyvsoby",
					status:1,
					contactPhone:{
						countryCallingCode:"+90",
						areaCode:"879",
						number:"9797979"
					}
				},
				{
					jobId:4,
					positionName:"Boyacı",
					companyName:"Boyacı a.ş.",
					durationDay:0,
					durationDayText:"Taze çıktı!",
					imageUrl:require('../assets/logo.png'),
					countryCode:"TR",
					countryName:"Turkey",
					cityName:"İstanbul",
					townName:"Bakırköy",
					address:"Bakırköy mahallesi İstanbul Turkey",
					postalCode:34768,
					hasLatitude:true,
					hasLongitude:true,
					latitude:41.0266502,
					longitude:82.1157803,
					description:"syovsvyosvyoyvsoby",
					status:1,
					contactPhone:{
						countryCallingCode:"+90",
						areaCode:"879",
						number:"9797979"
					}
				}
				]
				 
			}
		}
		
	}
</script>