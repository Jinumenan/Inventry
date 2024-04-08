import express from 'express';
import { connect } from 'mongoose';
import cors from 'cors';
import inventoryApi from './Router/InventroyRoute.js';
import inventoryProfileApi from './Router/InventoryProfileRoute.js'

const app = express();
app.use(cors())
app.use(express.json())

connect('mongodb://localhost:27017/FreshLeaf');

app.use('/server/inventory',inventoryApi)
app.use('/server/inventory',inventoryProfileApi);

app.listen(3001, () => {
    console.log("Server is running on port 3001");
});


// bg-[#c2e670] 