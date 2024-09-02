import express from 'express';
// import path from 'path';

// console.log(path);
const app = express();
const PORT = process.env.PORT || 3001;

app.get('/', (req, res) => {
  console.log("Enter the first endpoint");
  res.send('222222, Server is running!');
});

app.listen(PORT, () => {
  console.log(`Server is listening on port http://localhost:${PORT}`);
});
