var context = require.context('./tests', true, /Test$/);
context.keys().forEach(context);
