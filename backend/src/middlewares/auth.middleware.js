const foodPartnerModel = require("../models/foodpartner.model")
const userModel = require("../models/user.model")
const jwt = require("jsonwebtoken");


async function authFoodPartnerMiddleware(req, res, next) {

      const token = req.cookies.token;

      if (!token) {
            return res.status(401).json({
                  message: "Please login first"
            })
      }

      try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET)

            const foodPartner = await foodPartnerModel.findById(decoded.id);
            
            if (!foodPartner) {
                  return res.status(401).json({
                        message: "Food partner not found"
                  });
            }
            req.foodPartner = foodPartner
            next()

      } catch (err) {

            return res.status(401).json({
                  message: "Invalid token"
            })

      }

}

async function authUserMiddleware(req, res, next) {

      const token = req.cookies.token;

      if (!token) {
            return res.status(401).json({
                  message: "Please login first"
            })
      }

      try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            
            console.log("DECODED:", decoded);

            const user = await userModel.findById(decoded.id);
            
            console.log("USER:", user);

            req.user = user

            next()

      } catch (err) {

            console.log("AUTH ERROR:", err);

            return res.status(401).json({
                  message: "Invalid token"
            })

      }

}


module.exports = {
      authFoodPartnerMiddleware,
      authUserMiddleware
}