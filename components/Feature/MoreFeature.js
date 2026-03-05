import React from 'react';
import {
  useTheme,
} from '@mui/material/styles';
import Container from '@mui/material/Container';
import useMediaQuery from '@mui/material/useMediaQuery';
import ScrollAnimation from 'react-scroll-animation-wrapper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useTranslation } from 'next-i18next';
import { useText } from 'theme/common';
import Title from '../Title';
import useStyles from './feature-style';

function MoreFeature() {
  const { classes, cx } = useStyles();
  const { classes: text } = useText();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { t } = useTranslation('common');

  return (
    <div className={classes.moreFeature}>
      <Container fixed={isDesktop}>
        <div className={classes.item}>
          <Grid container spacing={6} alignItems="center">
            <Grid item md={6} xs={12}>
              <div className={cx(classes.text, isMobile && classes.center)}>
                <span className="ion-ios-lock-outline" />
                <Title
                  text={t('morefeature_title1')}
                  align={isMobile ? 'center' : 'left'}
                />
                <Typography
                  className={text.subtitle2}
                  display="block"
                  align={isMobile ? 'center' : 'left'}
                >
                  {t('morefeature_subtitle1')}
                </Typography>
              </div>
            </Grid>
            <Grid item md={6} xs={12}>
              <ScrollAnimation
                animateOnce
                animateIn="fadeInLeftShort"
                delay={300}
                duration={0.3}
              >
                <figure className={classes.illustration}>
                  <img src="/images/cfluent/illustration1.png" alt="feature" />
                </figure>
              </ScrollAnimation>
            </Grid>
          </Grid>
        </div>
        <div className={classes.item}>
          <Grid
            container
            direction={isMobile ? 'column-reverse' : 'row'}
            spacing={6}
            alignItems="center"
          >
            <Grid item md={6} xs={12}>
              <ScrollAnimation
                animateOnce
                animateIn="fadeInRightShort"
                offset={-100}
                delay={300}
                duration={0.3}
              >
                <figure className={classes.illustration}>
                  <img src="/images/cfluent/illustration2.png" alt="feature" />
                </figure>
              </ScrollAnimation>
            </Grid>
            <Grid item md={6} xs={12}>
              <div className={cx(classes.text, isMobile && classes.center)}>
                <span className="ion-ios-analytics-outline" />
                <Title
                  text={t('morefeature_title2')}
                  align={isMobile ? 'center' : 'left'}
                />
                <Typography
                  className={text.subtitle2}
                  display="block"
                  align={isMobile ? 'center' : 'left'}
                >
                  {t('morefeature_subtitle2')}
                </Typography>
              </div>
            </Grid>
          </Grid>
        </div>
        <div className={classes.item}>
          <Grid container>
            <Grid item sm={12}>
              <div className={cx(classes.text, classes.center)}>
                <span className="ion-ios-flash-outline" />
                <div className={classes.lastFeature}>
                  <Title
                    className={text.subtitle2}
                    text={t('morefeature_title3')}
                    align="center"
                  />
                  <Typography
                    display="block"
                    align="center"
                    className={text.subtitle2}
                  >
                    {t('morefeature_subtitle3')}
                  </Typography>
                  <Grid item md={7} xs={12} lg={8} style={{ marginTop: theme.spacing(2) }}>
                    <ScrollAnimation
                      animateOnce
                      animateIn="fadeInLeftShort"
                      delay={300}
                      duration={0.3}
                    >
                      <figure className={classes.illustration}>
                        <img
                          src="/images/cfluent/illustration3.png"
                          alt="feature"
                        />
                      </figure>
                    </ScrollAnimation>
                  </Grid>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
}

export default MoreFeature;
