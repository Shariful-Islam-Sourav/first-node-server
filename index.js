const express = require("express");
const app = express();
const cors = require("cors");
const port = 5000;
const users = [
  {
    id: 0,
    name: "De Paul",
    username: "Paul",
    email: "paul@de.biz",
    phone: "1-750-810-8091 x76442",
  },
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    phone: "1-770-736-8031 x56442",
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    phone: "010-692-6593 x09125",
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
    phone: "1-463-123-4447",
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
    phone: "493-170-9623 x156",
  },
  {
    id: 5,
    name: "Chelsey Dietrich",
    username: "Kamren",
    email: "Lucio_Hettinger@annie.ca",
    phone: "(254)954-1289",
  },
  {
    id: 6,
    name: "Mrs. Dennis Schulist",
    username: "Leopoldo_Corkery",
    email: "Karley_Dach@jasper.info",
    phone: "1-477-935-8478 x6430",
  },
  {
    id: 7,
    name: "Kurtis Weissnat",
    username: "Elwyn.Skiles",
    email: "Telly.Hoeger@billy.biz",
    phone: "210.067.6132",
  },
  {
    id: 8,
    name: "Nicholas Runolfsdottir V",
    username: "Maxime_Nienow",
    email: "Sherwood@rosamond.me",
    phone: "586.493.6943 x140",
  },
];

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("This is from Node. Express js is here");
});

app.get("/users", (req, res) => {
  const searchQuery = req.query.search;
  if (searchQuery) {
    const searchedUsers = users.filter((user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    res.send(searchedUsers);
  } else {
    res.send(users);
  }
});
app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  const user = users[id];
  res.send(JSON.stringify(user));
});

app.post("/users", (req, res) => {
  const newUser = req.body;
  newUser.id = users.length;

  
  users.push(newUser);
  res.json(newUser);
  console.log("Post Hitted", req.body);
});

app.listen(port, () => {
  console.log(`Listening from port ${port}`);
});
