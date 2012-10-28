var events = require('events');
var emitter = new events.EventEmitter();

emitter.once('occurrence', function(arg1){
  console.log(arg1);
});

emitter.emit('occurrence', 'occured!');
emitter.emit('occurrence', 'のび太さんのえっち！');
