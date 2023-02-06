import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddIncidencia = () => {
  const [idusuario, setIdUsuario] = useState("IdUsuario");
  const [idtipoincidencia, setIdTipoIncidencia] = useState("IdTipoIncidencia");
  const [estado, setEstado] = useState("Estado");
  const [descripcion, setDescripcion] = useState("Descripcion");
  const navigate = useNavigate();

  const saveIncidencia = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/incidencias", {
        idusuario,
        idtipoincidencia,
        estado,
        descripcion,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={saveIncidencia}>
        <div className="field">
          <label className="label">Usuario</label>
          <div className="control">
            <input
              type="text"
              className="input"
              value={idusuario}
              onChange={(e) => setIdUsuario(e.target.value)}
              placeholder="IdTipoUsuario"
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Tipo Incidencia</label>
          <div className="control">
            <input
              type="text"
              className="input"
              value={idtipoincidencia}
              onChange={(e) => setIdTipoIncidencia(e.target.value)}
              placeholder="IdTipoIncidencia"
            />
          </div>
        </div>
          <div className="field">
            <label className="label">Estado</label>
            <div className="control">
              <div className="select is-fullwidth">
                <select
                  value={estado}
                  onChange={(e) => setEstado(e.target.value)}
                >
                  <option value="Pendiente">Pendiente</option>
                  <option value="Resuelta">Resuelta</option>
                </select>
              </div>
            </div>
          </div>
          <div className="field">
            <label className="label">Descripcion</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
                placeholder="Descripcion"
              />
            </div>
          </div>
          <div className="field">
            <button type="submit" className="button is-success">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddIncidencia;
