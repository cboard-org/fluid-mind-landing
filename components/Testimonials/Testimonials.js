import React, { useState, useRef } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Carousel from 'react-slick';
import { useTranslation } from 'next-i18next';
import imgApi from 'public/images/imgAPI';
import { useText } from 'theme/common';
import Title from '../Title';
import TestiCard from '../Cards/Testimonial';
import useStyle from './testi-style';

function Testimonials() {
  const slider = useRef(null);
  const { classes, cx } = useStyle();
  const { classes: text } = useText();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const { t } = useTranslation('common');
  const [active, setActive] = useState(0);
  const [activeTransition, setActiveTransition] = useState(0);

  const testiContent = [
    {
      text: t('testimonial_1.text'),
      name: t('testimonial_1.name'),
      avatar: imgApi.avatar[6],
      title: t('testimonial_1.title'),
    },
    {
      text: t('testimonial_2.text'),
      name: t('testimonial_2.name'),
      avatar: imgApi.avatar[7],
      title: t('testimonial_2.title'),
    },
    {
      text: t('testimonial_3.text'),
      name: t('testimonial_3.name'),
      avatar: imgApi.avatar[1],
      title: t('testimonial_3.title'),
    },
    {
      text: t('testimonial_4.text'),
      name: t('testimonial_4.name'),
      avatar: imgApi.avatar[2],
      title: t('testimonial_4.title'),
    },
    {
      text: t('testimonial_5.text'),
      name: t('testimonial_5.name'),
      avatar: imgApi.avatar[3],
      title: t('testimonial_5.title'),
    },
    {
      text: t('testimonial_6.text'),
      name: t('testimonial_6.name'),
      avatar: imgApi.avatar[9],
      title: t('testimonial_6.title'),
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    autoplay: true,
    autoplaySpeed: 7000,
    afterChange: (current) => setActive(current),
    beforeChange: (current, next) => setActiveTransition(next),
  };

  const slideState = (index) => {
    if (index === activeTransition - 1 || index === active - 1) {
      return classes.past;
    }
    if (index === activeTransition + 1 || index === active + 1) {
      return classes.future;
    }
    if (index === activeTransition || index === active) {
      return classes.current;
    }
    return classes.slide;
  };

  return (
    <div className={classes.root}>
      <Container fixed={isDesktop}>
        <Title text={t('testi_title')} align="center" />
        <Typography className={text.subtitle2} align="center">
          {t('testi_subtitle')}
        </Typography>
        <Grid container spacing={6}>
          <Grid item md={1} xs={12} />
          <Grid item md={10} xs={12}>
            <div className={classes.sliderWrap}>
              <div className={classes.carousel}>
                <button
                  type="button"
                  className={cx(classes.nav, classes.prev)}
                  onClick={() => slider.current.slickPrev()}
                >
                  <i className="ion-ios-arrow-back" />
                </button>
                <Carousel ref={slider} {...settings}>
                  {testiContent.map((item, index) => (
                    <div
                      key={index.toString()}
                      className={cx(classes.item, slideState(index))}
                    >
                      <div className={classes.slideContent}>
                        <TestiCard
                          text={item.text}
                          name={item.name}
                          title={item.title}
                          avatar={item.avatar}
                          active={index === active}
                        />
                      </div>
                    </div>
                  ))}
                </Carousel>
                <button
                  type="button"
                  className={cx(classes.nav, classes.next)}
                  onClick={() => slider.current.slickNext()}
                >
                  <i className="ion-ios-arrow-forward" />
                </button>
              </div>
              <div className={classes.pagination}>
                <ul>
                  {[...Array(testiContent.length)].map((e, index) => (
                    <li
                      key={index.toString()}
                      className={index === active ? classes.active : ''}
                    >
                      <button
                        type="button"
                        onClick={() => slider.current.slickGoTo(index)}
                      >
                        &nbsp;
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Testimonials;
