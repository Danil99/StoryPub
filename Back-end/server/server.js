'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _headers = require('./middleware/headers.js');

var _headers2 = _interopRequireDefault(_headers);

var _login = require('./middleware/login.js');

var _login2 = _interopRequireDefault(_login);

var _verify = require('./middleware/verify.js');

var _verify2 = _interopRequireDefault(_verify);

var _searchQuery = require('./middleware/searchQuery.js');

var _searchQuery2 = _interopRequireDefault(_searchQuery);

var _userData = require('./middleware/userData.js');

var _userData2 = _interopRequireDefault(_userData);

var _deleteOrAddFriends = require('./middleware/deleteOrAddFriends.js');

var _deleteOrAddFriends2 = _interopRequireDefault(_deleteOrAddFriends);

var _incrementLike = require('./middleware/incrementLike.js');

var _incrementLike2 = _interopRequireDefault(_incrementLike);

var _onAddComment = require('./middleware/onAddComment.js');

var _onAddComment2 = _interopRequireDefault(_onAddComment);

var _onDeleteComment = require('./middleware/onDeleteComment.js');

var _onDeleteComment2 = _interopRequireDefault(_onDeleteComment);

var _addPost = require('./middleware/addPost.js');

var _addPost2 = _interopRequireDefault(_addPost);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var router = _express2.default.Router();

app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: true }));

app.use(_headers2.default);

app.post('/login', _login2.default);
app.post('/verify', _verify2.default);
app.post('/searchQuery', _searchQuery2.default);
app.post('/userData', _userData2.default);

app.post('/addPost', _addPost2.default);

// app.get('/image.png', (req, res) => {
//   res.sendfile(path.resolve('./uploads/image.png'));
// });

app.patch('/deleteOrAddFriends', _deleteOrAddFriends2.default);
app.patch('/incrementLike', _incrementLike2.default);

app.put('/onAddComment', _onAddComment2.default);
app.put('/onDeleteComment', _onDeleteComment2.default);

app.listen(8080, function () {
  console.log('Server is started');
});