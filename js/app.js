

console.log('Hello World')

const stringifyFormData = fd => {
    const data = {};
    for (let field of fd.keys()) {
        data[field] = fd.get(field)
    }
    return JSON.stringify(data, null, 2);
};

const handleSubmit = e => {
    e.preventDefault();
    console.log('Hey')
    const data = new FormData(e.target);
        const stringified = stringifyFormData(data);
        console.log(stringified);
}
const form = document.getElementById('form');

form.addEventListener('submit', handleSubmit);