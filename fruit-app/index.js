const express = require("express");
const path = require('path');

const exphbs = require("express-handlebars");
const bodyParser = require("body-parser"); // add this line
const app = express();
const pg = require("pg");
const Pool = pg.Pool;
const Fruit = require("./fruit");
const e = require("express");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false })); // add this line
app.use(bodyParser.json()); // add this line

// app.engine('handlebars', exphbs());
// app.set('view engine', 'handlebars');

var hbs = exphbs.create({
    helpers: {
        getStringifiedJson: function (value) {
            return JSON.stringify(value);
        }
    },
    defaultLayout: 'main',
    partialsDir: ['views/partials/']
  });
  app.engine('handlebars', hbs.engine);
  app.set('view engine', 'handlebars');
//   app.set('views', path.join(__dirname, 'views'));

const connectionString = process.env.DATABASE_URL || 'postgresql://thando:thando123@localhost:5432/my_fruits_db';

const pool = new Pool({
    connectionString
});

const fruit = Fruit(pool);

app.get("/api/customers", async function (req, res) {
    // fruit.customerList();
    // //let customer = fruit.getCustomer("zuko");
    // let username = 'fruit.getUsername()';
    // console.log("username ", username);
    // //console.log("One customer ", customer);
    let customers = ["thando", "zulu", "bob"];
    //let customers = fruit.customerList();
    res.json({
        status: "success",
        data: customers
    });

});

app.get("/login", async function (req, res) {
    res.send("THE LOGIN PAGE");

});

app.post("/api/create-customer", async function (req, res) {
    let username = (req.body.username).toLowerCase();
    console.log("posting customer data ", username);
    fruit.createCustomer(username)

    res.redirect("/");

});

app.post("/createFruit", (req, res) => {
    console.log(req.body.fruitName);
    fruit.createFruit(req.body.fruitName)
    res.redirect("/");
});

app.get("readFruit", (req, res) => {
    res.redirect("/");
});

app.post("updateFruit", (req, res) => {
    res.redirect("/");
});

app.get("deleteFruit", (req, res) => {
    res.redirect("/");
});


var portNumber = process.env.PORT || 4000;

//start everything up
app.listen(portNumber, function () {
    console.log('Chocolate example server listening on:', portNumber);
});