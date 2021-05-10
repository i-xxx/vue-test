import {http} from "../utils/http";

const testApi = {}

testApi.test = () => {
    http.get('/qms-inspector-order/getList')
}

export default  testApi