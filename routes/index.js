/* GET '/' */
exports.index = function(req, res) {
  res.render('index', { titulo: 'Transport' });
};