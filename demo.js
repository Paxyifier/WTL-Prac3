// Import events module
var events = require('events');
// Create an eventEmitter object
var eventEmitter = new events.EventEmitter();
// Following is the syntax to bind an event handler with an event −
// Bind event and event handler as follows
eventEmitter.on('eventName', eventHandler);
// We can fire an event programmatically as follows −
// Fire an event
eventEmitter.emit('eventName');