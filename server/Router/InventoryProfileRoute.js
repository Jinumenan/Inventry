import express from "express"   
import { CreateProfileDetails, getAllProfilDetails, getOneProfileDetails, updateProfileDetailsById } from "../Controller/InventoryProfuileCon.js";



const router = express.Router();

router.post('/inventoryProfileCreate', CreateProfileDetails);
router.get('/inventoryProfileGetAll', getAllProfilDetails);
router.get('/inventoryProfileGetOne/:id', getOneProfileDetails);
router.put('/inventoryProfileUpdate/:id', updateProfileDetailsById);


export default router;  