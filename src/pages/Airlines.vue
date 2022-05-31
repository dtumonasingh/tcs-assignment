<template>
  <section>
    <div class="table">
      <vue-good-table
        theme="polar-bear"
        :columns="columns"
        :rows="rows"
        styleClass="vgt-table"
        :pagination-options="pagination"
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
          label: "country",
          field: "country",
        },
        {
          label: "established",
          field: "established",
        },
        {
          label: "head_quaters",
          field: "head_quaters",
        },
        {
          label: "name",
          field: "name",
        },
        {
          label: "slogan",
          field: "slogan",
        },
        {
          label: "website",
          field: "website",
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
    fetch("https://mocki.io/v1/34aa597a-35bc-4e74-9339-c8a362e34818")
      .then((result) => result.json())
      .then((data) => {
        this.rows = data;
      });
  },
};
</script>

<style></style>
