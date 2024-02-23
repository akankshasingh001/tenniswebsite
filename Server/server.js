const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 8000;
process.setMaxListeners(0);
const jsonFilePath = path.resolve(
  __dirname,
  '../src/JSONFiles/registeredUser.json'
);

const cors = require('cors');
app.use(cors());

app.use(express.json());

app.post('/registerUser', (req, res) => {
  const newRegistration = req.body;

  // Read existing JSON file
  let registrations = [];
  try {
    const fileContent = fs.readFileSync(jsonFilePath, 'utf8');
    registrations = JSON.parse(fileContent);
  } catch (err) {
    console.log('error is happening', err);
  }

  registrations.push(newRegistration);

  // updated data back to JSON file
  fs.writeFileSync(jsonFilePath, JSON.stringify(registrations, null, 2));
  setTimeout(() => {
    res.status(200).send('Registration successful');
  }, 2000);
});

app.get('/signIn', (req, res) => {
  const { email, password } = req.query;
  // Read existing JSON file
  try {
    const fileContent = fs.readFileSync(jsonFilePath, 'utf8');
    const registrations = JSON.parse(fileContent);

    // Checking if userid and password match any registered user
    const user = registrations.find(
      user => user.email === email && user.password === password
    );

    if (user) {
      setTimeout(() => {
        res.status(200).json({ message: 'Sign-in successful', user });
      }, 2000);
    } else {
      setTimeout(() => {
        res.status(401).json({ message: 'Invalid userid or password' });
      }, 2000);
    }
  } catch (err) {
    console.log('Error:', err);
    setTimeout(() => {
      res.status(500).send('Internal Server Error');
    }, 2000);
  }
});

app.listen(PORT, () => console.log(`server running on Port ${PORT}`));
