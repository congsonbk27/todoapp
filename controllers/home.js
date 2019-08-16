/**
 * GET /
 * Home page.
 */
exports.index = (req, res) => {

  console.log('req', req);   	//show request
  res.render('home', 			//render view/home.handlebars
  {
    title: 'Home '+req.query.a + ' sdsds',
    array: req.array
  });
};


exports.sort = (req, res) => {

  console.log('req', req);   	//show request
  res.render('sort_result', 			//render view/sort_result.handlebars
  {
    title: 'S '+req.query.a + ' sdsds',
    array: req.array
  });
};
