import React from 'react';
import Grid from '@mui/material/Grid';
import ButtonBase from '@mui/material/ButtonBase';
import NextIcon from '@mui/icons-material/ArrowForward';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Slider from 'dandelion-animated-slider';
import { useTranslation } from 'next-i18next';
import useMediaQuery from '@mui/material/useMediaQuery';
import useStyles from './promotion-style';
import imgAPI from 'public/images/imgAPI';


function Promotion() {
  const { classes, cx } = useStyles();
  const { t } = useTranslation('common');
  const isTablet = useMediaQuery(theme => theme.breakpoints.down('lg'));

const sliderData = [
  {
    image: imgAPI.cfluent[0],
    title: t('promo_1.title'),
    desc: t('promo_1.desc')
  },
  {
    image: imgAPI.cfluent[1],
    title: t('promo_2.title'),
    desc: t('promo_2.desc')
  },
  {
    image: imgAPI.cfluent[2],
    title: t('promo_3.title'),
    desc: t('promo_3.desc')
  },
  {
    image: imgAPI.cfluent[3],
    title: t('promo_4.title'),
    desc: t('promo_4.desc')
  }
];

  return (
    <div className={classes.root}>
      <div className={classes.sliderWrap}>
        <Slider
          className="slider-wrapper"
          autoplay={3500}
          previousButton={(
            <NextIcon />
          )}
          nextButton={(
            <NextIcon />
          )}
        >
          {sliderData.map((item, index) => (
            <div className={cx(classes.item, index % 2 === 1 ? classes.odd : classes.even)} key={index.toString()}>
              <Grid container>
                <Grid item xs={12} lg={4}>
                  &nbsp;
                </Grid>
                <Grid item xs={12} lg={7}>
                  {!isTablet && (
                    <section>
                      <div className={classes.imgWrap}>
                        <div className={classes.decoration}>
                          <svg>
                            <use xlinkHref="/images/cfluent/deco-promo.svg#main" />
                          </svg>
                        </div>
                        <figure className={classes.image}>
                          <img src={item.image} alt={item.title} />
                        </figure>
                      </div>
                    </section>
                  )}
                  <Paper className={classes.paper}>
                    <Typography variant="h1">
                      <ButtonBase>
                        {item.title}
                      </ButtonBase>
                    </Typography>
                    <Typography component="p">
                      {item.desc}
                    </Typography>
                  </Paper>
                </Grid>
              </Grid>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Promotion;
