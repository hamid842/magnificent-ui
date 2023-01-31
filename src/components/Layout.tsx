import Head from 'next/head'
import Header from '@/components/Header'
import React from "react";
import Footer from "./Footer";

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
                color: #333;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
                'Helvetica Neue', Arial, Noto Sans, sans-serif, 'Apple Color Emoji',
                'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
              }
            `}</style>
            <Header/>
            <div>{children}</div>
            <Footer />
        </>
    )
}