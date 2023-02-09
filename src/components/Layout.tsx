import React from "react";
// Next.js
import Head from 'next/head'
// Project imports
import Header from '@/components/Header'
import AppFooter from "./AppFooter";

//======================|| Main Layout ||===========================

export default function Layout({children}: { children: React.ReactNode }) {
    return (
        <>
            <Head>
                <title>Magnificent</title>
            </Head>
            <style jsx global>{`
              *,
              *::before,
              *::after {
                box-sizing: border-box;
              }

              body {
                margin: 0;
                padding: 0;
                color: #333;
                background-color: #FEFDF8;
              }
            `}</style>
            <Header/>
            <div>{children}</div>
            <AppFooter />
        </>
    )
}