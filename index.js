const app = require('./app');

// Controllers
require('./controllers')(app);

// Hosting
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Listening to ${PORT}`);
});