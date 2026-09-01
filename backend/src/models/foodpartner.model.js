const mongoose = require('mongoose');

const foodPartnerSchema = new mongoose.Schema({
      name: {
            type: String,
            required: true
      },
      contactName: {
            type: String,
            
      },
      phone: {
            type: String,
            
      },
      address: {
            type: String,
      
      },
      email: {
            type: String,
            required: true,
            unique: true
      },
      password: {
            type: String,
            required: true
      }
})

const foodPartnerModel = mongoose.model("foodpartner", foodPartnerSchema);

module.exports = foodPartnerModel;