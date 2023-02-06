import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditIncidencia = () => {
  const [idusuario, setIdUsuario] = useState("IdUsuario");
  const [idtipoincidencia, setIdTipoIncidencia] = useState("IdTipoIncidencia");
  const [estado, setEstado] = useState("Estado");
  const [descripcion, setDescripcion] = useState("Descripcion");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getIncidenciaById();
  }, []);

  const updateIncidencia = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/incidencias/${id}`, {
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

  const getIncidenciaById = async () => {
    const response = await axios.get(`http://localhost:5000/incidencias/${id}`);
    setIdUsuario(response.data.idusuario);
    setIdTipoIncidencia(response.data.idtipoincidencia);
    setEstado(response.data.estado);
    setDescripcion(response.data.descripcion);
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={updateIncidencia}>
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
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditIncidencia;
