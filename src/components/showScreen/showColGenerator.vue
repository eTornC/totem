<template>
  <div :style="'height:'+ config.height +'%'+';border: 0px solid black'" v-if="config.rows">
    <template v-for="(row, index) in config.rows">
      <show-row-component :config="row" :key="index"/>
    </template>
  </div>
  <div v-else :style="'height:'+ config.height+'%' +';border: 0px solid black'" class="px-3 py-3">
    <div class="turnBox">
      <show-content-component :storeId="config.id"/>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: {
    config: Object
  },
  data() {
    return {
      stores: null
    };
  },
  methods: {
    select(ev) {
      ev.target.style.backgroundColor =
        "#" + (((1 << 24) * Math.random()) | 0).toString(16);
    }
  },
  created() {}
};
</script>

<style>
.turnBox {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  overflow: hidden;
}
.col {
  padding: 0;
}
</style>


<style>
.flexxx {
  display: flex;
  flex-wrap: wrap;
}

.header {
  position: relative;
  width: 100%;
  height: 100px;
  color: #5e6270;
}
.logo {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 300px;

}
.header__titel {
  font-size: 4em;
  margin: 30px auto;
}

.store {
  position: relative;
  width: 450px;
  height: 400px;
  border-radius: 3px;
  background-color: #eee;
}
.store__titel {
  color: #4c5261;
  font-size: 3.5em;
  font-weight: 400;
}

.img-card {
  height: 68%;
  width: 100%;
  margin: auto;
}

.store__footer {
  position: absolute;
  bottom: 0px;
  width: 100%;
  height: 60px;
  color: #6a6e71;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.store_queue_person {
  font-size: 1.5em;
  width: 60%;
  margin: 0;
  justify-self: flex-start;
}

.time_content {
  display: flex;
  align-items: center;
  width: 25%;
}

.store_queue_time_icon {
  width: 35px;
}
.store_queue_time {
  margin: 0;
  font-size: 1.5em;

}
.boton_Torn {
  position: absolute;
  bottom: 60px;
  width: 100%;
  margin-left: 0px;
}
</style>
