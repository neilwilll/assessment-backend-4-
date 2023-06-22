const express = require('express');
const app = express();

// Define an array of possible fortunes
const fortunes = [
  'You will find great success in the near future.',
  'A pleasant surprise is waiting for you.',
  'Take risks, they will pay off in unexpected ways.',
  'Good things come to those who wait patiently.',
  'Your hard work will be rewarded in due time.'
];

// Route to handle the fortune request
app.get('/api/fortune', (req, res) => {
  const randomIndex = Math.floor(Math.random() * fortunes.length);
  const fortune = fortunes[randomIndex];
  res.json({ fortune });
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

