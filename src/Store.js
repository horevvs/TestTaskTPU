

import axios from 'axios'

const result = await axios.get('https://jsonplaceholder.typicode.com/albums');


let initstate = {
    count: result.data,
    shows:true,
    result:222
}

export default initstate