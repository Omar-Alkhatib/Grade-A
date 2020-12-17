const jwt = require("jsonwebtoken");

//checking if login or not
const authentication = (req, res, next) => {
  const token = req.headers('x-auth')
  if (!token) {
    res.status(401).json("Please login first");
  }
  jwt.verify(token, process.env.SECRET, (err, result) => {
    if (err) throw err;
    next();
  });
};

//Admin permission middleware
const adminPermission = (req, res, next) => {
  const token = res.headers('x-auth');
  jwt.verify(token, process.env.SECRET), (err, result) => {
    if (err) throw err;
    if (result.role_id === 1) {
      next()
    } else {
      res.json("You don't have the permission")
    }
  }
};

//instructor  permission middleware
const instructorPermission = (req, res, next) => {
  const token = res.headers('x-auth');
  jwt.verify(token, process.env.SECRET), (err, result) => {
    if (err) throw err;
    if (result.role_id === 2) {
      next()
    } else {
      res.json("You don't have the permission")
    }
  }
};

//student permission
const studentPermission = (req, res, next) => {
  const token = res.headers('x-auth');
  jwt.verify(token, process.env.SECRET), (err, result) => {
    if (err) throw err;
    if (result.role_id === 3) {
      next()
    } else {
      res.json("You don't have the permission")
    }
  }
};

module.exports = {
  authentication,
  adminPermission,
  instructorPermission,
  studentPermission
};
