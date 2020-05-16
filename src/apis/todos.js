makeGetRequest();

function makeGetRequest() {
    fetch('https://jsonplaceholder.typicode.com/todos?_page=1&_limit=3')
        .then(response => response.json())
        .then(data => data.forEach((value) => {
            console.log(value);
        }))
        .catch((error) => {
            console.log('err ' + error);
        }).finally(() => console.log('done!'));
}