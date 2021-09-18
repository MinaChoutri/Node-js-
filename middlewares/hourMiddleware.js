const verifyHour = (req, res, next) => {
  const date = new Date();
  const hour = date.getHours();
  if (8 <= hour && hour < 12) {
    return next();
  }

  return res.status(404).send({
    message: "we are closed",
    data: {},
  });
};

module.exports = {
  verifyHour,
};
