import { RouterProvider } from 'react-router-dom';
import './App.css';
import ProductProvider from './Context/ProductProvider';
import logo from './logo.svg';
import routes from './Routes/Router';

function App() {
	return (
		<div>
			<ProductProvider>
				<RouterProvider router={routes} />
			</ProductProvider>
		</div>
	);
}

export default App;
