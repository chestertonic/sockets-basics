var moment = require('moment');
var now = moment();

console.log(now.format());
console.log(now.format('X'));
console.log(now.format('x') + typeof now.format('x'));
console.log(now.valueOf() + typeof now.valueOf());

var timestamp = 1454375262592;
var timestampMoment = moment.utc(timestamp);

console.log(timestampMoment);
console.log(timestampMoment.format('DD-MM-YY h:mm:ss'));

console.log(timestampMoment.local());
console.log(timestampMoment.local().format('DD-MM-YY h:mm:ss'));
