<template>
	<div class="py-5 px-5 flexxx justify-content-center">
    <template v-for="store in stores" >
      <div :key="store.name" class="store my-2 mx-2">
        <img :src="urls.host + urls.routes.prefix + store.photopath" class="img-card"> 
        <h1 class="mb-3 mt-2">{{ store.name }}</h1>
        
        <div class="row justify-content-center">
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
            title: 'Imprimir tiquet T' + res.data.number ,
            showConfirmButton: false,
            timer: 2000
          })
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

.store {
	width: 350px;
	height: 500px;
	border: 1px solid rgba( 50, 50, 50, 0.5);
	border-radius: 3px;
	box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);

}

.img-card {
	height: 150px;
	width: auto;

	margin: auto;
}

</style>
