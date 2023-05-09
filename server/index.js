const express = require("express");
const app = express();
const cors = require("cors");
const port = 3042;

app.use(cors());
app.use(express.json());

const balances = {
  "03448d50a3ff3e69f30aafbe6b22591584a8e8b6f2cbebf0d22417c76c2ac70ba4": 100,
  "02f0bbe2dc5bf6c26f146622346c1cd953fa9fe4ef482554ce49ee853582e76f15": 50,
  "03c3bb3b0a22dc8c9b1fb033ec65520cb92752a98d7e4f5ab36922f3c347c820f6": 75,
};

app.get("/balance/:address", (req, res) => {
  const { address } = req.params;
  const balance = balances[address] || 0;
  res.send({ balance });
});

app.post("/send", (req, res) => {
  const { sender, recipient, amount } = req.body;

  setInitialBalance(sender);
  setInitialBalance(recipient);

  if (balances[sender] < amount) {
    res.status(400).send({ message: "Not enough funds!" });
  } else {
    balances[sender] -= amount;
    balances[recipient] += amount;
    res.send({ balance: balances[sender] });
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});

function setInitialBalance(address) {
  if (!balances[address]) {
    balances[address] = 0;
  }
}
