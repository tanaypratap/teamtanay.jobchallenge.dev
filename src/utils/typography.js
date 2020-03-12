import Typography from "typography"
import Wordpress2016 from "typography-theme-wordpress-2016"

Wordpress2016.overrideThemeStyles = () => {
  return {
    "a.gatsby-resp-image-link": { boxShadow: `none` },
    a: { boxShadow: `none` },
    h3: { fontWeight: 400 },
    h2: { fontWeight: 200 },
    h1: { fontWeight: 100 },
    body: {
      fontWeight: 200,
      fontSize: "smaller",
    },
  }
}

delete Wordpress2016.googleFonts

const typography = new Typography(Wordpress2016)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const background = "#f8f8f8"
export const backgroundGrey = "#f8f8f8"
export const backgroundOrange = "#fae9de"
export const backgroundGreen = "#c7fffb"
export const rhythm = typography.rhythm
export const scale = typography.scale
