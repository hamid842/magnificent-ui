import {ReactNode} from "react";
// Next.js
import Head from 'next/head'
import dynamic from 'next/dynamic'
// Project imports
const Header = dynamic(() => import('./Header'))
const AppFooter = dynamic(() => import('./AppFooter'))

//======================|| Main Layout ||===========================

export default function Layout({children}: { children: ReactNode }) {
    return (
        <>
            <Head>
                <title>Magnificent</title>
                <link rel="shortcut icon" href="/public/favicon.ico"/>
                <link rel="stylesheet"
                      href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"/>

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
                overflow-x: hidden;
                background-color: #FEFDF8;
              }

              #nprogress .bar {
                background: #B6923E !important;
                height: 4px !important;
              }

              #nprogress .peg {
                box-shadow: 0 0 10px #FFBB00, 0 0 5px #FFBB00;
              }


              @media print {
                @page {
                  size: A4;
                }
              }
            `}</style>
            <Header/>
            <div style={{minHeight: '100vh'}}>{children}</div>
            <AppFooter/>
        </>
    )
}