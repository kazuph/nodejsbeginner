var events = require('events');
var emitter = new events.EventEmitter();

emitter.on('occurrence', function(arg1){
  console.log(arg1);
});

emitter.emit('occurrence', 'occured!');
emitter.emit('occurrence', 'のび太さんのえっち！');
