var express = require('express');
var _router = express.Router();
var path = require('path');

_router.post('/download', function(req, res, next) {
    filepath = path.join(_dirname,'..blogs/view-blog/view-blog.component') + '/' + req.body.filename;
    res.sendFile(filepath);
});
