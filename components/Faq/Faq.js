import React from 'react';
import Container from '@mui/material/Container';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'next-i18next';
import { useText } from 'theme/common';
import Parallax from '../Parallax/Hexagonal';
import Title from '../Title';
import useStyles from './faq-style';

function Faq() {
  const { classes } = useStyles();
  const { classes: text } = useText();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  const { t } = useTranslation('common');
  const [expanded, setExpanded] = React.useState(0);
  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

const faqData = [
  {
    q: t('faq_1.q'),
    a: t('faq_1.a')
  },
  {
    q: t('faq_2.q'),
    a: t('faq_2.a')
  },
  {
    q: t('faq_3.q'),
    a: t('faq_3.a')
  },
  {
    q: t('faq_4.q'),
    a: t('faq_4.a')
  },
  {
    q: t('faq_5.q'),
    a: t('faq_5.a')
  },
];

  return (
    <div className={classes.root}>
      <div className={classes.parallax}>
        <Parallax />
      </div>
      <Container fixed>
        <Grid container spacing={6}>
          <Grid item md={6}>
            <Title text={t('faq_title')} align={isMobile ? 'center' : 'left'} />
            <Typography className={text.subtitle2} align={isMobile ? 'center' : 'left'} component="p">
              {t('faq_subtitle')}
            </Typography>
            {!isTablet && (
              <div className={classes.illustration}>
                <img src="/images/cfluent/faq.png" alt="illustration" />
              </div>
            )}
          </Grid>
          <Grid item md={6}>
            <div className={classes.accordion}>
              {faqData.map((item, index) => (
                <div className={classes.item} key={index.toString()}>
                  <Accordion
                    classes={{
                      root: classes.paper
                    }}
                    expanded={expanded === index}
                    onChange={handleChange(index)}
                  >
                    <AccordionSummary
                      classes={{
                        content: classes.content,
                        expanded: classes.expanded,
                      }}
                    >
                      <Typography className={classes.heading}>{item.q}</Typography>
                      <ExpandMoreIcon className={classes.icon} />
                    </AccordionSummary>
                    <AccordionDetails
                      classes={{
                        root: classes.detail,
                      }}
                    >
                      <Typography>
                        {item.a}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </div>
              ))}
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Faq;
