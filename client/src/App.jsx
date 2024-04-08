// import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom';

import InventryAddtoform from "./Pages/InventryAddtoform"
import InventryAnalytics from "./Pages/InventryAnalytics"
import InventryCalculation from "./Pages/InventryCalculation"
import InventryProfile from "./Pages/InventryProfile"
import InventryCreateForm from "./Pages/InventrySup/InventryCreateForm"
import InventryUpdateform from "./Pages/InventrySup/InventryUpdateform"
import OwnerDashboard from "./Pages/OwnerDashboard"
import InventryCreateProfile from './Pages/InventrySup/InventryCreateProfile';

function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<OwnerDashboard/>}/>
        <Route path='/Inventry_info' element={<InventryProfile/>}/>
        <Route path='/InventryProfile' element= {<InventryProfile/>}/>
        <Route path='/InventryAddtoform' element={<InventryAddtoform/>}/>
        <Route path='/InventryUpdateform/:id' element={<InventryUpdateform/>}/>
        <Route path='/InventryAnalytics' element={<InventryAnalytics/>}/>
        <Route path='/InventryCreateForm' element = {<InventryCreateForm/>}/>
        <Route path='/InventryCalculation' element={<InventryCalculation/>}/>
        <Route path='/InventryCreateProfile' element={<InventryCreateProfile/>}/>

        {/* <Route path='/back' element ={<Add_to_form/>}/> */}
        <Route/>
    </Routes>
     </BrowserRouter>
    
    </>
  )
}

export default App
