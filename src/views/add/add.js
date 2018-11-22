import DataService from '../../services/data-service'
import { notifyResultMixin } from '../../mixins/notify-result'

export default {
  name: 'add',
  components: {},
  props: [],
  mixins: [notifyResultMixin],
  data () {
    return {
      dataService: new DataService(),
      count: 1,
      isProcessing: false
    }
  },
  methods: {
    onAddClick: function () {
      this.isProcessing = true;
      this.dataService.addData(this.count)
      .then((result) => {
        this.notifyResult(result.data.status, result.data.message, result.data.elapsed);
        this.isProcessing = false;
      })
      .catch((error) => { 
        // eslint-disable-next-line
        console.log(error); 
      });
    }
  }
}
