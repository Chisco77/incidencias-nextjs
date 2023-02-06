//import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useRouter } from 'next/router';
//import Avatar from '@mui/material/Avatar';
//import Box from '@mui/material/Box';
//import Button from '@mui/material/Button';
//import Container from '@mui/material/Container';
//import Grid from '@mui/material/Grid';
//import TextField from '@mui/material/TextField';
//import Typography from '@mui/material/Typography';
import { signIn } from 'next-auth/react';
//import FormHelperText from '@mui/material/FormHelperText';
import { useState } from 'react';
import Auth from "layouts/Auth.tsx";
import Link from "next/link";
import React from "react";

export default function AuthForm() {
  const router = useRouter();
  const [authError, setAuthError] = useState<string | undefined>('');

  const getVisibility = (param: any) => {
    return param ? 'visible' : 'hidden';
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const username = data.get('username');
    const password = data.get('password');

    const result = await signIn('credentials', {
      redirect: false,
      username,
      password,
    });

    if (!result?.error) {
      router.replace('/');
      setAuthError(result?.error);
    } else {
      setAuthError(result?.error);
    }
  };

  AuthForm.layout = Auth;
  return (
    <>
        <div className="relative h-screen justify-center items-center">
          <div className="flex h-screen content-center items-center justify-center">
              <div className="relative flex flex-col min-w-0 break-words mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
                <div className="rounded-t mb-0 px-6 py-6">
                  <div className="text-center mb-3">
                    <h6 className="text-blueGray-500 text-sm font-bold">
                      Inicie sesión
                    </h6>
                  </div>
                  <hr className="mt-6 border-b-1 border-blueGray-300" />
                </div>
                <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                  <form onSubmit={handleSubmit}>
                    <div className="relative mb-3 w-full">
                      <label
                        className="block text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Usuario (identificador en el centro)
                      </label>
                      <input
                        type="text"
                        id="username"
                        name="username"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Usermane"
                      />
                    </div>

                    <div className="relative mb-3 w-full">
                      <label
                        className="block text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Contraseña
                      </label>
                      <input
                        type="password"
                        id="password"
                        name="password"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Password"
                      />
                    </div>
                    <div>
                      <label className="inline-flex items-center cursor-pointer">
                        <input
                          id="customCheckLogin"
                          type="checkbox"
                          className="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                        />
                        <span className="ml-2 text-sm font-semibold text-blueGray-600">
                          Remember me
                        </span>
                      </label>
                    </div>

                    <div className="text-center mt-6">
                      <button
                        className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                        type="submit"
                      >
                        Iniciar sesión
                      </button>
                    </div>
                  </form>
                </div>
              </div>
          </div>
        </div>
      </>
    );
}

AuthForm.layout = Auth;
