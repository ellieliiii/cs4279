const config = require('../config/config');

const admin = config.admin;

const getAuthToken = async (req, res, next) => {
  if (
    req.headers.authorization &&
    req.headers.authorization.split(' ')[0] === 'Bearer'
  ) {
    req.authToken = req.headers.authorization.split(' ')[1];
  } else {
    req.authToken = null;
  }
  next();
};


const checkIfAuthenticated = async (req, res, next) => {
  getAuthToken(req, res, async () => {
    try {
      const { authToken } = req;
      // console.log(authToken)
      const userInfo = await admin
        .auth()
        .verifyIdToken(authToken);
      req.body.userId = userInfo.uid;
      req.body.username = req.body.username || userInfo.name;
      // console.log(userInfo)
      return next();
    } catch (error) {
      console.log(error)
      return res
        .status(401)
        .send({ error: 'You are not authorized to make this request' });
    }
  });
};

module.exports = {
    checkIfAuthenticated
}; 