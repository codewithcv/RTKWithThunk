import Product from "./components/Product";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Cart from "./components/Cart";
import RootLayout from "./components/RootLayout";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout></RootLayout>}>
        <Route index element={<Dashboard></Dashboard>}></Route>
        <Route path="/cart" element={<Cart></Cart>}></Route>
      </Route>
    )
  );

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
