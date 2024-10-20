//console.log(Math.PI);

// const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(descriptor)

const chai = {
     name: 'ginger chai',
     price: 250,
     isAvailabel: true
}

Object.defineProperty(chai, 'name', {
     writable: false,
     enumerable: false,
})
console.log(Object.getOwnPropertyDescriptor(chai, "name"));