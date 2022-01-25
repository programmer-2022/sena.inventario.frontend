import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import MiniDrawer from "../partials/MiniDrawer";

const Rutas = () => {
  return (
    <Routes>
      <Route exact path="/home" element={<MiniDrawer />} />
      <Route exact path="/empleados" element={<h1>Empleados</h1>} />
      <Route exact path="/cargos" element={<h1>Cargos</h1>} />
      <Route exact path="/productos" element={<h1>Productos</h1>} />
      <Route exact path="/proveedores" element={<h1>Proveedores</h1>} />
      <Route exact path="/categorias" element={<h1>Categorias</h1>} />
      <Route exact path="/actas" element={<h1>Actas</h1>} />
      <Route exact path="/usuarios" element={<h1>Usuarios</h1>} />
      <Route exact path="/configuracion" element={<h1>Configuracion</h1>} />
      <Route exact path="/login" element={<Login />} />
      {/* <Route exact path="/" element={<MiniDrawer />} /> */}
    </Routes>
  );
};

export default Rutas;
