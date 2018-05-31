exports.homePage = (req, res, next) => {
  res.render('index', {
    title: 'Lesson 4',
    message: 'hello world',
  });
};

exports.random = (req, res, next) => {
  // calculate some random number
  const randomNumber = Math.random();

  // display it on a page along with the number
  res.render('random', {
    title: 'random generator',
    randomNumber,
  });
};
