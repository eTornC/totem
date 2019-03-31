<template>
	<div class="store_pantalla my-2 mx-2">
		<h1 class="mb-3 mt-2">Torns {{ store.name }}</h1>
		<h3 class="mb-1">Torn Actual: {{ computedActualTurn }}</h3>
        <div class="mb-3">
			<button class="btn btn-primary" @click="nextTurn()">Passar torn</button>
		</div>
		<div id="turns-list-modal-wrapper">
            <div id="turns-list-modal">

                <div class="row mt-2 turns-row">

                    <div class="col-md-4 turn-column">
                        <h3>Normal</h3>
                        <template v-for="(turn, index) in normalTurns">
                            <p :key="index">T{{ turn.number }}</p>
                        </template>
                    </div>

                    <div class="col-md-4 turn-column">
                        <h3>Mòbil</h3>
                        <template v-for="(turn, index) in mobileTurns">
                            <p :key="index">M{{ turn.number }}</p>
                        </template>
                    </div>

                    <div class="col-md-4 turn-column turn-column-end">
                        <h3>VIP</h3>
                        <template v-for="(turn, index) in vipTurns">
                            <p :key="index">V{{ turn.number }}</p>
                        </template>
                    </div>

                </div>
            </div>
        </div>
	</div>
</template>

<script>
import urls from '../../api/config.js';
import axios from 'axios';

export default {
	props: {
		store: Object
	},
	data() {
		return {
			urls,

			actualTurn: 0,
			turnInterval: {},

			availableHours: [],
            selectedHour: '',
            
            normalTurns: [],
            mobileTurns: [],
            vipTurns: [],
			resfescar:null,
			
			actual_normalTurns: [],
            actual_mobileTurns: [],
            actual_vipTurns: [],

		}
    },
    
	methods: {
         inverval(){
            this.actual_normalTurns = [];
            this.actual_mobileTurns = [];
            this.actual_vipTurns = [];
            const url = urls.host + urls.routes.prefix 
                        + urls.routes.store + '/' + this.store.id + '/turns';
             axios.get(url)
                .then(res => {
                    res.data.forEach(item => {
                        //console.log(item.type);
                        switch (item.type) {
                            case 'NORMAL':
                                this.actual_normalTurns.push(item);
                                break;
                            case 'VIP':
                                this.actual_vipTurns.push(item);
                                break;
                            case 'BUCKET_QUEUE':
                                this.actual_mobileTurns.push(item);
                                break;
                        }
					});
					
					if(this.normalTurns != this.actual_normalTurns){
						this.normalTurns = this.actual_normalTurns;
					}
					if(this.vipTurns != this.actual_vipTurns){
						this.vipTurns = this.actual_vipTurns;
					}
					if(this.mobileTurns != this.actual_mobileTurns){
						this.mobileTurns = this.actual_mobileTurns;
					}

                })
                .catch(err => {
                    console.error(err);
                })           
        },
		nextTurn() {
			const url = urls.host + urls.routes.prefix + urls.routes.store + '/' + this.store.id + '/nextTurn';
			axios.post(url)
				.then(res => {
					if (res.data.done) {
                        this.updateActualTurn();
						this.$swal('success');
					} else {
						this.$swal(JSON.stringify(res.data));
					}
				})
				.catch(err => {
                    console.error(err)
				});
        },
        updateActualTurn() {
			const url = urls.host + urls.routes.prefix + urls.routes.store + '/' + this.store.id + '/actualTurn';
			axios.get(url)
				.then(res => {
					if (res.data.error) {
						this.actualTurn = {};
					} else {
						this.actualTurn = res.data;
					}
				})
				.catch(err => {
					console.log(err)
				});
		},
    },
    created() {
        this.updateActualTurn();
        this.resfescar =  setInterval(this.inverval, 1000);

	},
	
	computed: {
		computedActualTurn() {
			switch (this.actualTurn.type) {
				case 'VIP':
					return 'V' + ("0" + this.actualTurn.number).slice(-2);
				case 'NORMAL':
					return 'T' + ("0" + this.actualTurn.number).slice(-2);
				case 'MOBILE':
					return 'M' + ("0" + this.actualTurn.number).slice(-2);
				default:
					return 'NO TURNS';
			}
		}
	}
}
</script>

<style>

.store_pantalla {
	width: 700px;
	height: 700px;
	border: 1px solid rgba( 50, 50, 50, 0.5);
	border-radius: 3px;
	box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);

}

.img-card_pantalla {
	height: 150px;
	width: auto;

	margin: auto;
}

.turn-column{
	border-right: 1px solid black;
}
.turn-column-end{
	border: none;
}
</style>
