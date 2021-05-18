import { createMuiTheme } from '@material-ui/core/styles'
import { purple } from '@material-ui/core/colors'

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
