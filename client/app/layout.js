"use client"

import { ToastContainer } from "react-toastify";
import { DataProvider } from "./context/DataContext";
import "./styles/globals.css";
import Navbar from "./components/Navbar";
import getToken from "./utils/cookie";
import { useEffect, useState } from "react";

export default function RootLayout({ children }) {

  const [token, setToken] = useState(null);

  useEffect(() => {
    const fetchToken = async () => {
      const token = await getToken();
      setToken(token); // Store the token securely in the state
    };
    fetchToken();
  }, [])
  return (
    <html lang="en">
      <body className="bg-gray-900 text-gray-200 h-screen" cz-shortcut-listen="true">
        <ToastContainer position="top-right" autoClose={3000} theme="dark" />
        <DataProvider token={token}>
          <Navbar />
          <main className="p-4 mx-auto min-h-[80vh] max-w-7xl">
            {children}
          </main>
        </DataProvider>
      </body>
    </html>
  );
}
