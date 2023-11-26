import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/home";
import ProductDetailsPage from "./pages/product-details";
const App = () => {
    return (
    
        <Routes>
            <Route path= "/" element={<HomePage/>}/>
            {/* if we use : , we make it dynamic */}
            <Route path="/products/:productId" element={<ProductDetailsPage/>}/>
        </Routes>
    
    );
};

export default App;