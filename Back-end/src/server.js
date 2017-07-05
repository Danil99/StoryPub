import express from 'express';
import bodyParser from 'body-parser';

import headers from './middleware/headers.js';
import login from './middleware/login.js';
import verify from './middleware/verify.js';
import searchQuery from './middleware/searchQuery.js';
import userData from './middleware/userData.js';
import deleteOrAddFriends from './middleware/deleteOrAddFriends.js';
import incrementLike from './middleware/incrementLike.js';
import onAddComment from './middleware/onAddComment.js';
import onDeleteComment from './middleware/onDeleteComment.js';
import addPost from './middleware/addPost.js';

let app = express();
let router = express.Router();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));

app.use(headers);

app.post('/login', login)
app.post('/verify', verify)
app.post('/searchQuery', searchQuery)
app.post('/userData', userData)

app.post('/addPost', addPost)

// app.get('/image.png', (req, res) => {
//   res.sendfile(path.resolve('./uploads/image.png'));
// });

app.patch('/deleteOrAddFriends', deleteOrAddFriends)
app.patch('/incrementLike', incrementLike)

app.put('/onAddComment', onAddComment)
app.put('/onDeleteComment', onDeleteComment)

app.listen(8080, () => {
  console.log('Server is started');
})
