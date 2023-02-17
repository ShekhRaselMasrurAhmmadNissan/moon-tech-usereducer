const { createBrowserRouter } = require('react-router-dom');
const { default: Main } = require('../Layout/Main');
const { default: About } = require('../Pages/About');
const { default: Cart } = require('../Pages/Cart');
const { default: Home } = require('../Pages/Home');
const { default: TopRated } = require('../Pages/TopRated');

const routes = createBrowserRouter([
	{
		path: '/',
		element: <Main />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{ path: 'about', element: <About /> },
			{ path: 'top-rated', element: <TopRated /> },
			{ path: 'cart', element: <Cart /> },
		],
	},
]);
export default routes;
