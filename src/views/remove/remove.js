import DataService from '../../services/data-service'
import { notifyResultMixin } from '../../mixins/notify-result'

export default {
  name: 'remove',
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
    onRemoveClick: function () {
      this.isProcessing = true;
      this.dataService.removeData(this.count)
      .then((result) => {
        this.notifyResult(result.data.status, result.data.message, result.data.elapsed);
        this.isProcessing = false;
      })
      .catch((error) => { 
        console.log(error); 
      });
    }
  }
}
