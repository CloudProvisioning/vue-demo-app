import DataService from '../../services/data-service'
import { notifyResultMixin } from '../../mixins/notify-result'

export default {
  name: 'data-view',
  components: {},
  props: [],
  mixins: [notifyResultMixin],
  data () {
    return {
      dataService: new DataService(),
      isInitialized: false,
      allData: [{}],
      tableData: [{}],
      pageSizes: [5, 10, 25, 50, 100],
      currentPageSize: 10,
      currentPage: 1
    }
  },
  methods: {
    getTableData: function () {
      this.dataService.getData()
      .then((result) => {
        this.allData = result.data.payload;
        if (!this.isInitialized) {
          this.notifyResult(result.data.status, result.data.message, result.data.elapsed);
          this.isInitialized = true;
        }
        this.onPageChange();
      })
      .catch((error) => { 
        console.log(error); 
      })
    },
    onSizeChange: function () {
      this.currentPage = 1;
      this.onPageChange();
    },
    onPageChange: function () {

      if(this.currentPage == 1) {
        this.tableData = this.allData.slice(0, this.currentPageSize);
      }
      else if((this.currentPage * this.currentPageSize - 1 + this.currentPageSize) > this.allData) {
        this.tableData = this.allData.slice(this.currentPage * this.currentPageSize - 1, this.allData);
      }
      else {
        this.tableData = this.allData.slice(this.currentPage * this.currentPageSize - this.currentPageSize, this.currentPage * this.currentPageSize);
      }
    },
    onRowDelete: function (row) {
      this.dataService.removeRowData(row)
      .then((result) => {
        this.notifyResult(result.data.status, result.data.message, result.data.elapsed);
        this.getTableData();
      })
      .catch((error) => { 
        console.log(error);
      });
    }
  },
  created() {
    this.getTableData();
  }
}
