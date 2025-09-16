const shadowTokens = {
  light: "0px 1px 3px rgba(0, 0, 0, 0.1)",
  medium: "0px 3px 6px rgba(0, 0, 0, 0.15)",
  dark: "0px 5px 10px rgba(0, 0, 0, 0.2)",
};

const spacingTokens = {
  small: "4px",
  medium: "8px",
  large: "16px",
};

const typographyTokens = {
  header: {
    fontSize: "24px",
    fontWeight: "bold",
  },
  button: {
    fontSize: "16px",
    fontWeight: "medium",
  },
};

const compositeTokes = {
  header: {
    ...typographyTokens.header,
    boxShadow: shadowTokens.medium,
    margin: spacingTokens.large,
  },
  button: {
    ...typographyTokens.button,
    boxShadow: shadowTokens.light,
    padding: spacingTokens.medium,
  },
};

function applyStyles(element: HTMLElement, token: keyof typeof compositeTokes) {
  const styles = compositeTokes[token];
  element.style.fontSize = styles.fontSize;
  element.style.fontWeight = styles.fontWeight;
  element.style.boxShadow = styles.boxShadow;
}

// Aplicando estilos a um botão
const buttonElement = document.getElementById("myButton");
if (buttonElement) {
  applyStyles(buttonElement, "button");
}
