const mongoose = require ('mongoose');

const emailsSchema =new mongoose.Schema({
    email:{
        type:String,
        required:[true, 'please add a email']
    }
});

// const Email =mongoose.model("Email", emailsSchema);

module.export = mongoose.models.Email || mongoose.model("Email", emailsSchema);