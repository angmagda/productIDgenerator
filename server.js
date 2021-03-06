var express = require("express");
var cors = require('cors');
var bodyParser = require('body-parser');

var Sequelize = require('sequelize')
   , sequelize = new Sequelize('Ang', 'Magda', 'postgres', { // (db_name, user_name, default password)
       dialect: "postgres", // or 'sqlite', 'postgres', 'mariadb'
       port:    5432
   });

var app = express();
app.use(cors());
app.use(bodyParser.json());
console.log('getting something');


sequelize
   .authenticate()
   .complete(function(err) {
       if (err) {
           console.log('Unable to connect to the database:', err)
       } else {
           console.log('Connection has been established successfully.')
       }
   });



//var User = sequelize.define('User', {
//    id: Sequelize.INTEGER,
//    firstname: Sequelize.STRING,
//    lastname: Sequelize.STRING,
//    position: Sequelize.STRING,
//    hiredate: Sequelize.DATE
//}, {
//    tableName: 'users', // this will define the table's name
//    timestamps: false           // this will deactivate the timestamp columns
//});
//
//User
//    .create({
//        id: 10,
//        firstname: 'bob',
//        lastname: 'builder',
//        position: 'inside sales',
//        hiredate: 2013-01-01
//    })
//    .complete(function(err, user) {
//        console.log(err);
//        /* ... */
//    });

var Product = sequelize.define('products', {
//    id: Sequelize.INTEGER,
   category: Sequelize.STRING,
   productName: Sequelize.STRING,
   manufacturer: Sequelize.STRING,
   manufacturerId: Sequelize.STRING,
   dimensions: Sequelize.STRING,
   color: Sequelize.STRING,
   newProductId: Sequelize.STRING
   
}, {
   tableName: 'products', // this will define the table's name
   timestamps: false           // this will deactivate the timestamp columns
});

// sequelize
//    .sync({ force: true })
//    .complete(function(err) {
//        if (err) {
//            console.log('An error occurred while creating the table:', err)
//        } else {
//            console.log('It worked!')
//        }
//    });

//sequelize.query("SELECT * FROM orders").success(function(myTableRows) {
//    console.log(myTableRows)
//});

app.get('/generator', function (req, res) {

  var chain = new Sequelize.Utils.QueryChainer();

  chain
  .add(sequelize.query("SELECT * FROM categories"))
  .add(sequelize.query("SELECT * FROM manufacturers"))
  .add(sequelize.query("SELECT * FROM materials"))
  .add(sequelize.query("SELECT * FROM colors"))

  .run()
  .success(function(results) {
      // console.log(myTableRows)
      console.log(results[0]);
      res.send({
        categories: results[0],
        manufacturers: results[1],
        materials: results[2],
        colors: results[3]
      });

    })
});


// app.get('/generator', function (req, res) {
//   sequelize.query("SELECT * FROM manufacturers").success(function(myTableRows) {
//       res.json(myTableRows);

//     })
// });

app.get('/products', function (req, res) {
  sequelize.query("SELECT * FROM products").success(function(myTableRows){
    res.json(myTableRows);
  })
});


app.post('/products', function (req,res) {
   var product = req.body.product;
   console.log(product);
   Product.create({
//        id: 22,
       category: product.category,
       productName: product.productName,
       manufacturer: product.manufacturer,
       manufacturerId: product.manufacturerId,
       dimensions: product.dimensions,
       color: product.color,
       newProductId: product.newProductId
       
   })
   .complete(function(err, products) {
       console.log(err);
       sequelize.query("SELECT * FROM products").success(function(myTableRows) {
           res.json(myTableRows);
       });
       /* ... */
   });
});



app.listen(3000);