import { createMuiTheme } from '@material-ui/core/styles'
import { purple } from '@material-ui/core/colors'

/**
 * Exemplo utilizando theme styled components
 */
// import styled from 'styled-components'
// export const Title = styled.h1`
//   color: ${({ theme }) => theme.colors.primary};
// `

/**
 * Exemplo utilizando theme material UI
 */
// import styled from 'styled-components'
// import { withTheme } from '@material-ui/core/styles'
// export const Title = withTheme(styled.h1`
//   color: ${(props) => props.theme.palette.primary.main};
// `)

const primary = purple[500]

export const themeStyled = {
  colors: {
    primary,
  },
}

export const themeMaterialUI = createMuiTheme({
  palette: {
    primary: {
      main: primary,
    },
  },
})
