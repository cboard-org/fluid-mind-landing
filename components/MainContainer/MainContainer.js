import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from 'tss-react/mui';
import Header from '../Header';
import Footer from '../Footer/Footer';
import FooterWithCounter from '../Footer/FooterWithCounter';

const sectionMargin = margin => (margin * 20);
const useStyles = makeStyles({ uniqId: 'main_container' })(theme => ({
  mainWrap: {
    position: 'relative',
    width: '100%',
    overflow: 'hidden',
    background: theme.palette.background.paper,
  },
  spaceTop: {
    marginTop: sectionMargin(6),
    [theme.breakpoints.down('md')]: {
      marginTop: sectionMargin(3),
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: sectionMargin(2),
    }
  },
}));

function MainContainer(props) {
  const { classes } = useStyles();
  const {
    onToggleDark, onToggleDir, children,
    invert, footerCounter
  } = props;

  return (
    <Fragment>
      <div className={classes.mainWrap}>
        <Header
          onToggleDark={onToggleDark}
          onToggleDir={onToggleDir}
          invert={invert}
        />
        {children}
        <section id="footer" className={classes.spaceTop}>
          { footerCounter ? (
            <FooterWithCounter toggleDir={onToggleDir} />
          ) : (
            <Footer invert toggleDir={onToggleDir} />
          )}
        </section>
      </div>
    </Fragment>
  );
}

MainContainer.propTypes = {
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  invert: PropTypes.bool,
  footerCounter: PropTypes.bool,
};

MainContainer.defaultProps = {
  invert: false,
  footerCounter: false,
};

export default MainContainer;
