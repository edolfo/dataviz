// GET overall water usage
exports.overall = function(req, res){
  res.render('overall');
};

// GET buckets of consumer types
exports.consumers = function(req, res){
	res.render('consumers');
};