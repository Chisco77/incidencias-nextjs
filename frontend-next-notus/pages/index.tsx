import { getSession } from 'next-auth/react';
//import Grid from '@mui/material/Grid';
//import Typography from '@mui/material/Typography';
import React from 'react';
import { GetServerSidePropsContext } from 'next';
import { getToken } from 'next-auth/jwt';
import executeQuery from 'lib/db';
//import Button from '@mui/material';
import { Session } from 'next-auth';
import { signIn, signOut, useSession } from "next-auth/react"
import IncidenciaList from "../components/IncidenciaList";
import AddIncidencia from "../components/AddIncidencia";
import EditIncidencia from "../components/EditIncidencia";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import AuthForm from "../components/auth/auth-form"


const Homepage = () => {

  return (

    <BrowserRouter>
       <Routes>
          <Route path="/" element={<IncidenciaList/>}/>
          <Route path="/login" element={<AuthForm/>}/>
          <Route path="add" element={<AddIncidencia/>}/>
          <Route path="edit/:id" element={<EditIncidencia/>}/>
        </Routes>
    </BrowserRouter>

  );
};

export async function getServerSideProps({ req }: { req: any }) {
  const session = await getSession({ req });

  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permenant: false,
      },
    };
  }

  const token = await getToken({
    req,
    secret: process.env.TOKEN_SECRET,
    raw: true,
  });

  return {
    props: {
      session,
      token,
    },
  };
}

export default Homepage;
