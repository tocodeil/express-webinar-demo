module.exports = function(req, res, next) {
  var isAjaxRequest = req.xhr;
  if (isAjaxRequest) {
    res.render = function(view, data) {
      res.send(data);
    }
  }

  next();
}

