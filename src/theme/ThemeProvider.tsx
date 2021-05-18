import React from 'react'
import {
  StylesProvider,
  ThemeProvider as MUIThemeProvider,
} from '@material-ui/core/styles'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { themeStyled, themeMaterialUI } from './theme'
import GlobalStyles from './global'

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <StylesProvider injectFirst>
      <MUIThemeProvider theme={themeMaterialUI}>
        <StyledThemeProvider theme={themeStyled}>
          <GlobalStyles />
          {children}
        </StyledThemeProvider>
      </MUIThemeProvider>
    </StylesProvider>
  )
}
