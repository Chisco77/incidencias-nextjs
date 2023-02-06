import express from "express";
import cors from "cors";
import IncidenciaRoute from "./routes/IncidenciaRoute.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(IncidenciaRoute);

app.listen(5000, ()=> console.log('Server up and running...'));
