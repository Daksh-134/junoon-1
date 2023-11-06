const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 4000; 
const MONGO_URL=

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/submit', (req, res) => {
  // Access form data from the request
  const { name, email, phone, message } = req.body;

  // Here, you can handle the form data as needed. For example, you can send an email or save it to a database.

  // Respond with a confirmation message
  res.json({ message: 'Form submitted successfully' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
