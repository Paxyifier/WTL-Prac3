var eventDemo = require('events');
var eventEmitter = new eventDemo.EventEmitter();
eventEmitter.on('myEvent',()=>{
    console.log(" I'm First");
});
var myEventHandler = ()=>{
    console.log('Hello Events');
}
eventEmitter.on('myEvent',myEventHandler);
eventEmitter.emit('myEvent');

var fun1 = (msg) => {
    console.log('Message from fun1: '+msg);
};
var fun2 = (msg) => {
    console.log('Message from fun2: '+msg);
};
eventEmitter.on('myEvent',fun1);
eventEmitter.on('myEvent',fun1);
eventEmitter.on('myEvent',fun2);

eventEmitter.removeListener('myEvent',fun1);

eventEmitter.emit('myEvent')

eventEmitter.removeAllListeners('myEvent');

eventEmitter.emit('myEvent',"Event occurred");

const EventEmitter = require('events');

var eventEmitter1 = new EventEmitter();
var eventEmitter2 = new EventEmitter();

console.log('Default max listener for eventEmitter1 is : ',eventEmitter1.getMaxListeners());

console.log('Default max listener for eventEmitter2 is : ', eventEmitter2.getMaxListeners());

EventEmitter.defaultMaxListeners = 2;

console.log('Default max listener for eventEmitter1 is : ',eventEmitter1.getMaxListeners());

console.log('Default max listener for eventEmitter2 is : ', eventEmitter2.getMaxListeners());

eventEmitter1.setMaxListeners(5);

console.log('Default max listener for eventEmitter1 is : ',eventEmitter1.getMaxListeners());

console.log('Default max listener for eventEmitter2 is : ', eventEmitter2.getMaxListeners());

var fun1 = (msg) => {
    console.log('Message from fun1: '+msg);
};
var fun2 = (msg) => {
    console.log('Message from fun2: '+msg);
};

for (let i = 0; i<3; i++)
    eventEmitter1.addListener('myEvent1',fun1)
for(let i = 0; i<3; i++)
    eventEmitter2.addListener('myEvent2',fun2)
eventEmitter1.emit('myEvent1','Event1 Occurred');
eventEmitter2.emit('myEvent2','Event2 Occurred');

eventEmitter.prependListener('myEvent',fun2);

console.log(eventEmitter.listeners('myEvent'))
console.log(eventEmitter.listenerCount('myEvent'))
eventEmitter.emit('myEvent','Event Occurred');