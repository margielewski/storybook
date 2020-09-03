import React from 'react'
import { ThemeProvider, CSSReset, theme } from "@chakra-ui/core";


export default function Chakra({ children }) {
    return (
        <ThemeProvider theme={theme}>
            <CSSReset />
            {children}
        </ThemeProvider>
    )
}
