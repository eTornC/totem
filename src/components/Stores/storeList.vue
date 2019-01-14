<template>
	<div class="py-5 px-5 flexxx justify-content-center">
        <template v-for="store in stores" >
            <!-- li :key="store.name">{{store.name}}</li-->
			<Pantalla :key="store.name" :store="store" class="d-inline" />
		</template>

	</div>
</template>

<script>
import urls from '../../api/config';

import Pantalla from './Pantalla.vue';
import axios from 'axios';

export default {
	components: {
		Pantalla,
	},
	data() {
		return {
			stores: [],

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
		}
	}
}
</script>

<style>
.flexxx {
	display: flex;
	flex-wrap: wrap;
}


</style>
