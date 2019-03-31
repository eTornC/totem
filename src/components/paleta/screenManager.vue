<template>
  <div id="screenManager">
    <div class="row rowFist">
      <div class="col-2 sidebar">
        <div class="sidenav">
          <br>
          <button v-on:click="add_column" type="button" class="btn btn-primary boton">Add Colum</button>
          <button v-on:click="add_row" type="button" class="btn btn-primary boton">Add row</button>
        </div>
      </div>
      <div class="col-10" id="show">
        <row :jsonConfig="row"  class="px-3 py-3 mx-0"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "screenManager",

  data() {
    return {
      msg: "hola",
      html: null,
      select: {
        row: null,
        column: null
      },
      jsonConfig: {
        cols: [
          {
            id: "r1c1",
            width: 4,
            rows: [
              {
                id: "r1-1c1",
                content: "Alo"
              },
              {
                id: "r1-2c1",
                content: "Alo"
              },
              {
                id: "r1-2c3",
                content: "Alo"
              }
            ]
          },
          {
            id: "r1c2",
            width: 4,
            content: "Aloha"
          },
          {
            id: "r1c3",
            width: 4,
            rows: [
              {
                id: "r1-1c1",
                content: "Alo"
              },
              {
                id: "r1-2c1",
                content: "Alo"
              }
            ]
          }
        ]
      }
    };
  },
  created() {},
  methods: {
    add_row() {
      //console.log(newRowPosicion);
    },
    add_column() {}
  },

  mounted() {}
};
</script>

<style>
.row {
  border: 1px solid #eee;
  box-sizing: border-box;
  margin: 0;
}
.rowFist {
  margin: 0;
}
.sidebar {
  border: 1px solid #eee;
  box-sizing: border-box;
}

.boton {
  width: 200px;
  margin: 10px;
}

.screen-column {
  border: 1px solid rgb(255, 153, 0);
  box-sizing: border-box;
  padding: 0px;
}

.screen-column:hover {
  border: 2px solid aquamarine;
}
</style>
