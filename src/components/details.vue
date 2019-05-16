<template>
	<div class="details">
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