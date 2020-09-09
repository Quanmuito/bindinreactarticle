console.log("...Starting");

// Creating bound functions

this.a = 8; // 'this' refers to global 'window' object in brower.
console.log(window.a);

const obj = {
	a: 64,
	b: 65,
	getA: function () {
		return this.a; // 'this' refers to 'obj' object.
	},
	getB: function () {
		return this.b; // 'this' refers to 'obj' object.
	},
};

let testA = obj.getA();
let testB = obj.getB();
console.log(testA, testB); // print 64 65

const getAv2 = obj.getA; // ~ function getAv2() { return this.a; }
const getBv2 = obj.getB; // ~ function getBv2() { return this.b; }
testA = getAv2();
testB = getBv2();
console.log(testA, testB); // print 8 undefined

const getAv3 = getAv2.bind(obj);
const getBv3 = getBv2.bind(obj);
testA = getAv3();
testB = getBv3();
console.log(testA, testB); // print 64 65

// Passing as callback

const obj2 = {
	name: "John",
	getName: function () {
		console.log(this.name);
	},
};

obj2.getName(); // print John

setTimeout(obj2.getName, 5000);
setTimeout(obj2.getName.bind(obj2), 5000);
