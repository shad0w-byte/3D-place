/* eslint-disable @next/next/no-page-custom-font */
import React from 'react'
import Script from 'next/script'
import NextHead from 'next/head'



export default function Head({title}) {
    return (
        <>
            <NextHead>
                <>
                    <meta name="keywords" content="victor kiss, ssik824, victor kiss ssik824, programção, projeto programaçaõ, web design, web-design, github project, site 3d, 3d website, react three, react three fiber, react three drei, three.js, front-end, front-end project, projeto front-end"/>

                    <meta name="author" content="ssik824"/>

                    <meta name="description" content="Venha explorar o mundo de ssik824!"/>

                    <meta charSet="UTF-8"/>

                    <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8"/>

                    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                    
                    <meta httpEquiv="Content-Language" content="pt-br"/>

                    <meta name="robots" content="index, follow"/>
                    
                    <meta name="google-site-verification" content="VhQSA-WAgNF6QY7IUMhGqwGRrRVmaGFvypFs0QZHGrM" />

                    <link rel="icon" type="image/x-icon" href="/icon.png"/>

                    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.3/font/bootstrap-icons.css"/>
                    
                    <link rel="preconnect" href="https://fonts.googleapis.com"/>
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
                    <link href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@300;600&display=swap" rel="stylesheet"/>
                    <title>{title}</title> 
                    </>
            </NextHead>
        </>
    )
}
