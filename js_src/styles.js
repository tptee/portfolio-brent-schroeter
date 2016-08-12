const app = {
  fontFamily: '\'Raleway\', \'Helvetica\', \'Arial\', sans-serif',
  fontSize: 14,
};

const contentBody = {
  marginLeft: 'auto',
  marginRight: 'auto',
  maxWidth: 960,
  paddingTop: 20,
  position: 'relative',
  width: '90%',
};

const h1 = {
  fontSize: 48,
};

const h2 = {
  fontSize: 36,
};

const h3 = {
  fontSize: 24,
};

const linkNoUnderline = {
  color: 'inherit',
  textDecoration: 'none',
};

const navContainer = {
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  paddingTop: 20,
};

const navEdge = {
  borderBottom: 'solid 1px #000',
  boxSizing: 'border-box',
  flex: 1,
  height: 31,
};

const navItem = {
  normal: {
    borderBottom: 'solid 1px #000',
    boxSizing: 'border-box',
    color: '#000',
    flexBasis: 100,
    height: 31,
    overflow: 'visible',
    textAlign: 'center',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
  },
  active: {
    borderBottom: 'solid 3px #37F',
    boxSizing: 'border-box',
    color: '#000',
    flexBasis: 100,
    height: 31,
    overflow: 'visible',
    textAlign: 'center',
    textDecoration: 'none',
    transition: 'border-bottom-width 0.1s',
    whiteSpace: 'nowrap',
  },
};

const navSpacer = {
  borderBottom: 'solid 1px #000',
  boxSizing: 'border-box',
  flexBasis: 20,
  height: 31,
};

const styles = {
  app,
  contentBody,
  h1,
  h2,
  h3,
  navigation: {
    container: navContainer,
    edge: navEdge,
    item: navItem,
    spacer: navSpacer,
  },
  links: {
    noUnderline: linkNoUnderline,
  },
};

export default styles;
