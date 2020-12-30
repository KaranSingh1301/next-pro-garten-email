
import initDB from '../../helpers/initDB';
// import Email from '../../../models/email';


initDB();
export default (req,res) =>{
    res.json({message:"hello"})
}

// export default async (req,res) =>{
//    try{
//        const email = await Email.create(req.body.email);

//        res.status(201).json({success: true, data: email})
//    }
//    catch(error){
//        res.status(400).json({ success : false});
//    }
// }
