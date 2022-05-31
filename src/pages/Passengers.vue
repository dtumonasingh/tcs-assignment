<template>
  <section>
    <div  class="table">
      <vue-good-table
        theme="polar-bear"
        :columns="columns"
        :rows="rows"
        :pagination-options="pagination"
        styleClass="vgt-table"
        compactMode        
      />
    </div>
  </section>
</template>

<script>
import { VueGoodTable } from "vue-good-table-next";
// import the styles
import "vue-good-table-next/dist/vue-good-table-next.css";

export default {
  components: {
    "vue-good-table": VueGoodTable,
  },
  data() {
    return {
      columns: [
        {
          label: "Name",
          field: "name",
        },
        {
          label: "Trips",
          field: "trips",
        },
      ],
      rows: [],
      pagination : {
          enabled: true,
          mode: 'records',
          perPage: 5,
          position: 'top',
          perPageDropdown: [3, 7, 9],
          dropdownAllowAll: false,
          setCurrentPage: 2,
          nextLabel: 'next',
          prevLabel: 'prev',
          rowsPerPageLabel: 'Rows per page',
          ofLabel: 'of',
          pageLabel: 'page', // for 'pages' mode
          allLabel: 'All',
          infoFn: (params) => `page:${params.firstRecordOnPage}`,
        }
    };
  },
  beforeMount() {
    fetch("https://mocki.io/v1/e4c46a8a-e4c7-4a08-a84d-a272d8716257")
      .then((result) => result.json())
      .then((data) => {
        this.rows = data.data;
      });
  },
};
</script>

<style></style>
