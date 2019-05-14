<template>
	<div class="py-5 px-5 flexxx justify-content-center">
    <template v-for="store in stores" >
      <div :key="store.name" class="store-app my-3 mx-4">
        <img :src="urls.host + urls.routes.prefix + store.photo_path" class="img-card-app .md-image"> 
        <h2 class="mb-3 mt-2">{{ store.name }}</h2>
        
        <div class="boton_Torn-app row justify-content-center">
          <div class="mx-2">
            <button class="btn btn-primary" @click="normalTurn(store)">Demanar Turn</button>
          </div>
        </div>

      </div>
    </template>


	</div>
</template>

<script>
import urls from '../api/config';

import axios from 'axios';

export default {
	components: {
	},
	data() {
		return {
			stores: [],
      urls : urls,
			showTurnsModal: false,
			storeModal: {},
		}
	},
	created() {
        const url = urls.host + urls.routes.prefix + urls.routes.stores
		axios.get(url)
			.then(res => {
        this.stores = res.data;

			})
			.catch(err => {
				console.log(err);
			});
	},
	methods: {
		showTurnsListModal(store) {
			this.storeModal = store;
			this.showTurnsModal = true;
		},
		closeModal() {
			this.showTurnsModal = false;
    },
    normalTurn(store) {
			const url = urls.host + urls.routes.prefix + urls.routes.store + '/' + store.id + '/turn';
 
      
			axios.post(url)
				.then(res => {
         this.$swal({
            type: 'success',
            title: 'Turn demanat A' + res.data.number ,
            showConfirmButton: false,
            timer: 2000
					})
					console.log('Torn demanat A' + res.data.number);
					//this.$swal('Imprimir tiquet' + JSON.stringify(res.data));
      })
				.catch(err => {
					this.$swal('Failako');
			});
		},
	}
}
</script>

<style>
.flexxx {
	display: flex;
	flex-wrap: wrap;
}

.store-app {
	position: relative;
	width: 100%;
	height: auto;
	border-bottom: 1px solid rgba( 50, 50, 50, 0.5);
	border-radius: 3px;
	/*box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);*/
	padding-bottom: 30px;

    display: flex;
	
}
.store-app > h2 {
    width: 35%;
    height: 30%;
    align-self: center;
}

.img-card-app {
	height: 150px !important;
    width: 35%;
	margin: 0px;
}
.boton_Torn-app{
    width: 30%;
    margin-left: 0px;
    height: 41%;
    align-self: center;
}

.boton_Torn-app button{
	font-size: 1rem;
}

</style>
