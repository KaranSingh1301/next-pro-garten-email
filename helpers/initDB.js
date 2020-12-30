import mongoose from 'mongoose';

function initDB() {
    if(mongoose.connection[0].readyState){
        console.log("already connected");
        return;
    }

   mongoose.connect(process.env.DATABASE_ACCESS,{
        useNewUrlParser: true, 
        useUnifiedTopology: true
    });
    mongoose.connection.on('connected', ()=>{
        console.log("connected to mongo");
    })
    mongoose.connection.on('error', (err)=>{
        console.log("error connecting to mongo",err);
    })
 
}

export default initDB;


//VPRBhEyj9a51o8hFs