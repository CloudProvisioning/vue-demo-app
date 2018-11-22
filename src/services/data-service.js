import Axios from 'axios'

export default class DataService {

    // HARDCODED LINK TO BACKEND API!
    serverUrl = 'http://192.168.201.51:31651'

    getData() {
        return Axios.get(this.serverUrl + '/data');
    }

    addData(count) {
        return Axios.post(this.serverUrl + '/add', { count: count });
    }

    removeData(count) {
        return Axios.delete(this.serverUrl + '/remove?count=' + count);
    }

    removeRowData(id) {
        return Axios.delete(this.serverUrl + '/remove-row?id=' + id);
    }

    getTestData() {
        return Axios.get(this.serverUrl + '/test_data');
    }
}