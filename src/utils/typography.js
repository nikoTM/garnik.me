import Typography from 'typography';
import fairyGateTheme from 'typography-theme-fairy-gates';

fairyGateTheme.overrideThemeStyles = _ => ({
  html: {
    overflowY: 'auto'
  },
  body: {
    backgroundColor: '#333333'
  }
});

const typography = new Typography(fairyGateTheme);

export default typography;
