// Write your solution here!

const drivers = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendDriver(name) {
	drivers.push(name);
}

function destructivelyPrependDriver(name) {
	drivers.unshift(name);
}

function destructivelyRemoveLastDriver() {
	drivers.pop();
}

function destructivelyRemoveFirstDriver() {
	drivers.shift();
}

function appendDriver(name) {
	return [...drivers, name];
}

function prependDriver(name) {
	return [name, ...drivers];
}

function removeLastDriver() {
	const newArray = drivers.slice(0, drivers.length - 1)
	return newArray
}

function removeFirstDriver() {
	const newArray = drivers.slice(1)
	return newArray
}