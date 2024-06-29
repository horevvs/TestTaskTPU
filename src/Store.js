

import axios from 'axios'


// const apiUrl = 'https://jsonplaceholder.typicode.com/albums';
// axios.get(apiUrl).then((resp) => {
//     const allPersons = resp.data;
//     console.log(allPersons[1])
// });


const result = await axios.get('https://jsonplaceholder.typicode.com/albums');



// let response = await fetch('https://jsonplaceholder.typicode.com/posts/1');

// let initstate2 = await response.json(); // читаем ответ в формате JSON





let initstate = {
    count2: result.data,
}

// console.log(initstate);

// let initstate = {
//     count:[1,2,3,4],
//     count2: 20,
// }


// initstate.count = initstate2


// console.log(initstate.count.id)

export default initstate