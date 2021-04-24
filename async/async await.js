const getData = async () => {
	const response = await fetch('http://jsonplaceholder.typicode.com/users');
	const data = await response.json();
	return data;
};

console.log(1);
console.log(2);
setTimeout(() => {
	console.log(3);
}, 0);
const test = getData();
test.then((data) => {
	console.log(data);
});
console.log(4);
