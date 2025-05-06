import React, {
  useState, useEffect,
  useRef, useCallback,
} from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'next-i18next';
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';
import { useText } from 'theme/common';
import useStyles from './banner-style';

const particleOptions = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: '#ffffff'
    },
    shape: {
      type: 'circle',
      stroke: {
        width: 0,
        color: '#000000'
      },
      polygon: {
        nb_sides: 5
      }
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false
      }
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: '#ffffff',
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 1,
      direction: 'none',
      random: false,
      straight: false,
      out_mode: 'out',
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: {
        enable: true,
        mode: 'repulse'
      },
      onclick: {
        enable: true,
        mode: 'push'
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3
      },
      repulse: {
        distance: 200,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true
};

function Banner() {
  const { classes, cx } = useStyles();
  const { classes: text } = useText();
  const elem = useRef(null);

  const { t } = useTranslation('common');
  const theme = useTheme();

  const [hide, setHide] = useState(false);

  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleScroll = () => {
    if (!elem.current) {
      return;
    }
    const doc = document.documentElement;
    const elTop = elem.current.offsetTop - 200;
    const elBottom = elTop + elem.current.getBoundingClientRect().height;
    if (doc.scrollTop > elTop && doc.scrollTop < elBottom) {
      setHide(false);
    } else {
      setHide(true);
    }
  };

  const particlesInit = useCallback(async engine => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={classes.root} ref={elem}>
      <div className={classes.canvasWrap}>
        <div className={classes.overlay}>
          <div className={cx(classes.decoInner, hide && classes.hide)}>
            <div id="particles_background" className={classes.particleBackground}>
              <Particles
                id="tsparticles"
                init={particlesInit}
                options={particleOptions}
              />
            </div>
          </div>
        </div>
      </div>
      <Container fixed>
        <div className={classes.bannerWrap}>
          <Grid container alignItems="center" spacing={6}>
            <Grid item xs={12} md={8}>
              <div className={classes.text}>
                <Typography variant="h4" className={text.title2}>
                  {t('crypto-landing.banner_title')}
                </Typography>
                <Typography component="p" className={text.subtitle2}>
                  {t('crypto-landing.banner_subtitle')}
                </Typography>
              </div>
              <div className={classes.btnArea}>
                <Button variant="contained" color="secondary" size="large" fullWidth={isMobile}>
                  {t('crypto-landing.banner_getstarted')}
                </Button>
                <Button variant="outlined" className={classes.invert} size="large" fullWidth={isMobile}>
                  {t('crypto-landing.banner_viewmarket')}
                </Button>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <figure className={classes.objectArt}>
                <img src="/images/crypto/banner-art.png" alt="illustration" />
              </figure>
            </Grid>
          </Grid>
        </div>
      </Container>
      <div className={classes.decoBottom}>
        <svg>
          <use xlinkHref="/images/crypto/deco-banner.svg#main" />
        </svg>
      </div>
    </div>
  );
}

export default Banner;
