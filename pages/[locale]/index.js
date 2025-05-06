import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { makeStyles } from 'tss-react/mui';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import CssBaseline from '@mui/material/CssBaseline';
// Use this below for Server Side Render/Translation (SSR)
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// Use this below for Static Site Generation (SSG)
import { getStaticPaths, makeStaticProps } from 'lib/getStatic';
import brand from 'public/text/brand';
import MainContainer from 'components/MainContainer';
import Header from 'components/Header';
import Banner from 'components/Banner';
import Promotion from 'components/Promotion';
import Feature from 'components/Feature';
import Benefit from 'components/Benefit';
import Testimonials from 'components/Testimonials';
import Faq from 'components/Faq';
import FooterWithCounter from 'components/Footer/FooterWithCounter';
import PageNav from 'components/PageNav';
import Notification from 'components/Notification';

const sectionMargin = margin => (margin * 20);
const useStyles = makeStyles({ uniqId: 'home' })(theme => ({
  mainWrap: {
    position: 'relative',
    width: '100%',
    overflow: 'hidden',
    background: theme.palette.background.paper,
  },
  spaceBottom: {
    marginBottom: theme.spacing(20),
    [theme.breakpoints.down('lg')]: {
      marginBottom: sectionMargin(6),
    }
  },
  spaceTop: {
    marginTop: theme.spacing(20),
    [theme.breakpoints.down('lg')]: {
      marginTop: sectionMargin(6),
    }
  },
  spaceBottomShort: {
    marginBottom: theme.spacing(10),
  },
  spaceTopShort: {
    marginTop: theme.spacing(10),
  },
  containerWrap: {
    marginTop: -40,
    '& > section': {
      position: 'relative'
    }
  }
}));

function Landing(props) {
  const { classes } = useStyles();
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.only('md'));
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));
  const { onToggleDark, onToggleDir } = props;

  return (
    <Fragment>
      <Head>
        <title>
          { brand.crypto.name + ' - Home Page' }
        </title>
      </Head>
      <CssBaseline />
      <section id="home" />
      <MainContainer
        onToggleDark={onToggleDark}
        onToggleDir={onToggleDir}
        footerCounter
      >
        <Fragment>
          <main className={classes.containerWrap}>
            <section id="banner">
              <Banner />
            </section>
            <section id="promotions">
              <Promotion />
            </section>
            <section id="feature" className={isTablet ? classes.spaceTopShort : ''}>
              <Feature />
            </section>
            <section id="benefit" className={classes.spaceTopShort}>
              <Benefit />
            </section>
            <section id="testimonials" className={classes.spaceTop}>
              <Testimonials />
            </section>
            <section id="faq" className={classes.spaceTop}>
              <Faq />
            </section>
            {!isMobile && (
              <Notification />
            )}
          </main>
          {!isMobile && (
            <PageNav />
          )}
        </Fragment>
      </MainContainer>
    </Fragment>
  );
}

Landing.propTypes = {
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired,
};

export default Landing;

// Use this below for Server Side Render/Translation (SSR)
// export const getStaticProps = async ({ locale }) => ({ props: { ...await serverSideTranslations(locale, ['common']) } });

// Use this below for Static Site Generation (SSG)
const getStaticProps = makeStaticProps(['common']);
export { getStaticPaths, getStaticProps };
