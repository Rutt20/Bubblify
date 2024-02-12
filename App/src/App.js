import { Routes, Route,Router, Navigate } from 'react-router-dom';
import { NavigationBar } from "./components/NavigationBar/NavigationBar";
import { Bubbles } from "./components/Bubbles/Bubbles";
import { BubbleItemDetails } from './components/BubbleItemDetails/BubbleItemDetails';
import { Bundles } from './components/Bundles/Bundles';
import { BundleItemDetails } from './components/BundleItemsDetails/BundleItemsDetails';
import { About } from './components/About/About';
import { Cart } from './components/Cart/Cart';
import { HomePage } from './components/HomePage/HomePage';
import { Checkout } from './components/Checkout/Checkout';
import { Confirmed } from './components/Confirmed/Confirmed';
import { NotFound } from './components/NotFound/NotFound';

import Container from "./components/Container";
import { useEffect, useState } from 'react';
import { 
	getAllProducts,
	getProductById,
	getAllBundles,
	getBundleById
} from './services/service';
import { BubblesContext } from './context/BubblesContext';

const App = () => {
	const [products,setProducts] = useState([]);
	const [bundles,setBundles] = useState([]);

	useEffect(() => {
		async function getProducts() {
			const data = await getAllProducts();
			setProducts(data);
		}

		async function getBundles() {
			const data = await getAllBundles();
			setBundles(data);
		}

		getProducts();
		getBundles();
	});

	return (
		<BubblesContext.Provider
			value={{
				products,
				oneProduct: async (id) => {
					const product = await getProductById(id);
					return product;
				},
				bundles,
				oneBundle: async (id) => {
					const bundle = await getBundleById(id);
					return bundle;
				}
			}}
		>
		<div className="App">
			<NavigationBar />
			<Container>
				<Routes>
					<Route exact path='/' element={ <HomePage /> }/>
					<Route exact path='/bubbles' element={ <Bubbles /> }/>
					<Route exact path='/bubbles/:bubbleItemId' element={ <BubbleItemDetails /> }/>
					<Route exact path='/bundles' element={ <Bundles /> }/>
					<Route exact path='/bundles/:bundleItemId' element={ <BundleItemDetails /> }/>
					<Route exact path='/about' element={ <About /> }/>
					<Route exact path='/cart' element={ <Cart /> }/>
					<Route exact path='/checkout' element= { <Checkout/>}/>
					<Route exact path='/confirmed' element={<Confirmed/>} />
					<Route path='*' element={<NotFound />} />
				</Routes>
			</Container>
		</div>
		</BubblesContext.Provider>
	);
}
// <Route path="*" component={ NotFound } />
// <Footer />
export default App;


/*
<Route exact path='/orders' element={<Orders/>}/>
*/
