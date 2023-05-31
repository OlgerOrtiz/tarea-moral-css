const app = require('./app');

const PORT = process.env.PORT || 8090;

app.listen(PORT);
console.log(`Server running on port ${PORT}`);