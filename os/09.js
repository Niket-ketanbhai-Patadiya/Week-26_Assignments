const EventEmitter=require("events");

const eventEmitter=new EventEmitter();

const subscribeMessage=(channelName)=>{
    console.log(`Thanks for subscribing to ${channelName}`);
};

eventEmitter.addListener("subscribe",subscribeMessage);

console.log("calling event listener before removing the event");
eventEmitter.emit("subscibe","college wallah");

console.log("calling event listener after removing the event");
eventEmitter.emit("subscibe",subscribeMessage);

eventEmitter.emit("subscibe","college wallah")