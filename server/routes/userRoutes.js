import express from 'express';
import verifyToken from '../middlewares/authMiddleware.js';
import authorizeRoles from '../middlewares/roleMiddleware.js';


const  router = express.Router();
//seullement admin qui peut acceder 

router.get('/admin', verifyToken, authorizeRoles("admin"), (req,res)=>{
    res.json({message:"Welcome Admin"});

});

//admin et manager peuvent acceder 
router.get('/manager', verifyToken, authorizeRoles("admin", "manager"),(req,res)=>{
    res.json({message:"Welcome Manager"});

});

//acces pour tout utilisateur
router.get('/user',verifyToken, authorizeRoles("admin", "manager","user"), (req,res)=>{
    res.json({message:"Welcome User"});

});


export default router;