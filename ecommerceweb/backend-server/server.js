const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const knex = require('knex');
const bcrypt = require('bcrypt');


const app = express();
app.use(bodyParser.json());
app.use(cors());




const db = knex({
    client : 'pg',
    connection :{
        host : '127.0.0.1',
        user : 'postgres',
        password : 'test',
        database : 'fashionwebs'
    }
})

db.raw('SELECT 1')
  .then(() => {
    console.log('Connected to the database');
  })
  .catch((error) => {
    console.error('Error connecting to the database:', error);
  });


const users = [
  {
    id: 1,
    email: 'john@example.com',
    password: 'password123',
    name: 'John Doe',
    phone: 98998885
  },
  {
    id: 2,
    email: 'jane@example.com',
    password: 'abc123',
    name: 'Jane Smith',
    phone: 34343434
  },
  // Add more users as needed
];

const cartItems = [];

const favorites = [];

app.post('/login', (req, res) => {
  const { email, password } = req.body;

  db.select('id', 'email', 'password')
    .from('users')
    .where('email', '=', email)
    .then(data => {
      if (data.length > 0) {
        const user = data[0];
        bcrypt.compare(password, user.password, (err, result) => {
          if (result) {
            res.json({ message: 'Login successful', user: { id: user.id, email: user.email } });
          } else {
            res.status(401).json({ message: 'Invalid email or password' });
          }
        });
      } else {
        res.status(401).json({ message: 'Invalid email or password' });
      }
    })
    .catch(error => {
      console.error('Error during login:', error);
      res.status(500).json({ message: 'Internal server error' });
    });
});





app.post('/register', (req, res) => {
  const { email, password, name, phone } = req.body;

  if (!email || !password || !name) {
    res.status(400).json({ message: 'Please provide all the required fields' });
    return;
  }

  // Generate a salt for password hashing
  const saltRounds = 10;
  bcrypt.genSalt(saltRounds, (err, salt) => {
    if (err) {
      console.error('Error generating salt:', err);
      res.status(500).json({ message: 'Internal server error' });
      return;
    }

    // Hash the password
    bcrypt.hash(password, salt, (err, hash) => {
      if (err) {
        console.error('Error hashing password:', err);
        res.status(500).json({ message: 'Internal server error' });
        return;
      }

      // Create a new user object with hashed password
      const newUser = {
        email: email,
        password: hash,
        name: name,
        phone: phone
      };

      // Insert the user into the database
      db('users')
        .insert(newUser)
        .returning(['id', 'email', 'name']) // Return the ID, email, and name of the inserted user
        .then(user => {
          const registeredUser = user[0];
          res.json({ message: 'Registration successful', user: registeredUser });
        })
        .catch(err => {
          console.error('Error during registration:', err);
          res.status(500).json({ message: 'Internal server error' });
        });
    });
  });
});



app.get('/users/:userId', (req, res) => {
  const userId = parseInt(req.params.userId);

  db.select('*')
    .from('users')
    .where('id', '=', userId)
    .then(data => {
      if (data.length > 0) {
        const user = data[0];
        res.json(user);
      } else {
        res.status(404).json({ message: 'User not found' });
      }
    })
    .catch(error => {
      console.error('Error fetching user details:', error);
      res.status(500).json({ message: 'Internal server error' });
    });
});


app.post('/api/favorites', (req, res) => {
  const { id, name, price, image, userId } = req.body;

  const newFavorite = {
    productid: id,
    name: name,
    price: price,
    image: image,
    userid: userId,
  };

  db('favorites')
    .insert(newFavorite)
    .returning('*')
    .then(favorite => {
      const addedFavorite = favorite[0];
      res.json({ message: 'Item added to favorites', item: addedFavorite });
    })
    .catch(err => {
      console.error('Error adding item to favorites:', err);
      res.status(500).json({ message: 'Internal server error' });
    });
});




app.get('/api/favorites', (req, res) => {
  const userId = req.query.userId;

  db.select('*')
    .from('favorites')
    .where('userid', '=', userId)
    .then(favorites => {
      res.json({ favorites });
    })
    .catch(error => {
      console.error('Error fetching favorites:', error);
      res.status(500).json({ message: 'Internal server error' });
    });
});


app.post('/api/cart', (req, res) => {
  const { id, name, price, image, userId } = req.body;

  const newCartItem = {
    productid: id,
    name: name,
    price: price,
    image: image,
    userid: userId,
  };

  db('cart')
    .insert(newCartItem)
    .returning('*')
    .then(item => {
      const addedItem = item[0];
      res.json({ message: 'Item added to cart', item: addedItem });
    })
    .catch(error => {
      console.error('Error adding item to cart:', error);
      res.status(500).json({ message: 'Internal server error' });
    });
});


app.get('/api/cart', (req, res) => {
  const userId = req.query.userId;

  db.select('*')
    .from('cart')
    .where('userid', '=', userId)
    .then(cartItems => {
      res.json({ cartItems });
    })
    .catch(error => {
      console.error('Error fetching cart items:', error);
      res.status(500).json({ message: 'Internal server error' });
    });
});


// app.post('/api/place-order', (req, res) => {
//   const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);
//   const order = {
//     id: Date.now(),
//     items: cartItems,
//     totalPrice: totalPrice,
//   };

//   // Clear cartItems
//   cartItems.length = 0;

//   res.json({ message: 'Order placed successfully', order: order });
// });

// app.post('/api/place-order', (req, res) => {
//   const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);
//   const order = {
//     id: Date.now(),
//     items: cartItems,
//     totalPrice: totalPrice,
//     timestamp: new Date().toISOString(), // Add timestamp property with the current date and time
//   };

//   // Clear cartItems
//   cartItems.length = 0;

//   res.json({ message: 'Order placed successfully', order: order });
// });





app.post('/api/place-order', (req, res) => {
  const { userId } = req.body;
  const timestamp = new Date().toISOString();

  db.transaction((trx) => {
    db('cart')
      .transacting(trx)
      .where('userid', userId)
      .select('price') // Select only the 'price' column
      .then((items) => {
        const totalPrice = items.reduce((total, item) => total + parseFloat(item.price), 0);
        const formattedTotalPrice = totalPrice.toFixed(2); // Format the total price with 2 decimal places

        const newOrder = {
          totalprice: formattedTotalPrice,
          time: timestamp,
          userid: userId,
        };

        return db('orders')
          .transacting(trx)
          .insert(newOrder)
          .returning(['id', 'totalprice']) // Include 'totalprice' in the returning clause
          .then((order) => {
            return db('cart')
              .transacting(trx)
              .where('userid', userId)
              .del()
              .then(() => {
                trx.commit();
                const placedOrder = order[0];
                res.json({ message: 'Order placed successfully', order: placedOrder });
              })
              .catch((error) => {
                trx.rollback();
                console.error('Error deleting cart items:', error);
                res.status(500).json({ message: 'Internal server error' });
              });
          })
          .catch((error) => {
            trx.rollback();
            console.error('Error placing order:', error);
            res.status(500).json({ message: 'Internal server error' });
          });
      })
      .catch((error) => {
        trx.rollback();
        console.error('Error fetching cart items:', error);
        res.status(500).json({ message: 'Internal server error' });
      });
  });
});


app.get('/api/order-history', (req, res) => {
  const { userId } = req.query;

  db.select(['id', 'time', 'totalprice'])
    .from('orders')
    .where('userid', userId)
    .then((orders) => {
      res.json({ orderHistory: orders });
    })
    .catch((error) => {
      console.error('Error fetching order history:', error);
      res.status(500).json({ message: 'Internal server error' });
    });
});

app.get('/api/orders', (req, res) => {
  res.json({ orderHistory });
});


app.delete('/api/cart/:itemId', (req, res) => {
  const itemId = parseInt(req.params.itemId);

  db('cart')
    .where('id', itemId)
    .del()
    .then(() => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.error('Error deleting item from cart:', error);
      res.status(500).json({ message: 'Internal server error' });
    });
});


app.delete('/api/favorites/:itemId', (req, res) => {
  const itemId = parseInt(req.params.itemId);

  db('favorites')
    .where('id', itemId)
    .del()
    .then(() => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.error('Error deleting item from favorites:', error);
      res.status(500).json({ message: 'Internal server error' });
    });
});




const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

