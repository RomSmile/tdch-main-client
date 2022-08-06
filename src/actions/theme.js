export const THEME = {
  LIGHT: "THEME_LIGHT",
  DARK: "THEME_DARK",
}

export const setLight = () => ({
  type: THEME.LIGHT
});

export const setDark = () => ({
  type: THEME.DARK
})