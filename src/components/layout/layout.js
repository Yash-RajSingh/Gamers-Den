import React from 'react'
import Header from '../header/header'
import Footer from '../footer/footer'
import styled from "styled-components";

export const Content = styled.div`
    /* border: 2px solid white; */
`

export const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <Content>
                {children}
            </Content>
            <Footer />
        </>
    )
}