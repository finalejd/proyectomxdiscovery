// Importar módulos necesarios de React y React Router
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PrivateRoute, AdminPrivateRoute } from "./components/PrivateRoute";
import Layout from "./components/Layout";

// Importar componentes de las páginas y otros componentes necesarios
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import SoloProduct from "./pages/SoloProduct";
import Nosotros from "./pages/Nosotros";
import AdminPage from "./pages/AdminPage";
import AddProductPage from "./pages/AddProductPage";
import EditProductPage from "./pages/EditProductPage";
import SearchByCate from "./pages/SearchByCate";
import CartPage from "./pages/CartPage";
import UserProfile from "./pages/UserProfile";
import SoloOrder from "./pages/SoloOrder";
import Servicios from "./pages/Servicios";
import Contacto from "./pages/Contacto";

function App() {
  return (
    // Configuración del enrutador principal de la aplicación
    <BrowserRouter>
      {/* Definición de las rutas de la aplicación */}
      <Routes>
        {/* Ruta principal que envuelve todo con el componente Layout */}
        <Route path="/" element={<Layout />}>
          {/* Rutas públicas accesibles para todos los usuarios */}
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="Servicios" element={<Servicios />} />
          <Route path="Nosotros" element={<Nosotros />} />
          <Route path="Contacto" element={<Contacto />} />
          {/* Ruta de inicio de la aplicación */}
          <Route index element={<HomePage />} />

          {/* Ruta para ver un producto específico */}
          <Route path="product/:slug" element={<SoloProduct />} />

          {/* Rutas relacionadas con las categorías */}
          <Route path="cate" element={<Nosotros />} />
          <Route path="cate/:cate" element={<SearchByCate />} />

          {/* Rutas privadas accesibles solo para usuarios autenticados */}
          <Route element={<PrivateRoute />}>
            <Route path="cart" element={<CartPage />} />
            <Route path="profile" element={<UserProfile />} />
            <Route path="order/:id" element={<SoloOrder />} />
          </Route>

          {/* Rutas privadas de administrador accesibles solo para administradores autenticados */}
          <Route path="admin" element={<AdminPrivateRoute />}>
            <Route index element={<AdminPage />} />
            <Route path="add" element={<AddProductPage />} />
            <Route path="edit/:id" element={<EditProductPage />} />
          </Route>
        </Route>
      </Routes>

    </BrowserRouter>
  );
}

// Exportar el componente principal de la aplicación
export default App;
