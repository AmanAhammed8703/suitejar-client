import axios from 'axios'

const Api=axios.create({baseURL:'https://suite-jar-test.herokuapp.com/'});

export default Api;