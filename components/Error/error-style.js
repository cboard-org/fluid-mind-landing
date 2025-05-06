import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles({ uniqId: 'error' })(theme => ({
  errorWrap: {
    width: '100%',
    minHeight: 640,
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(-15),
    [theme.breakpoints.down('sm')]: {
      paddingTop: theme.spacing(20),
    },
  },
  flex: {
    display: 'flex',
    justifyContent: 'center'
  },
  deco: {
    position: 'relative',
    '& svg': {
      fill: theme.palette.primary.light,
      position: 'relative',
      width: 212,
      height: 240
    },
    '& h3': {
      color: theme.palette.primary.dark,
      fontSize: 96,
      textTransform: 'capitalize',
      fontWeight: 700,
      zIndex: 1,
      position: 'absolute',
      width: '100%',
      textAlign: 'center',
      top: 70,
      left: 0
    },
    '&:before': {
      content: '""',
      width: 320,
      height: 230,
      position: 'absolute',
      top: theme.spacing(-3),
      left: theme.spacing(-5),
    }
  },
  text: {
    [theme.breakpoints.up('sm')]: {
      paddingLeft: theme.spacing(5),
      borderLeft: `1px solid ${theme.palette.divider}`,
    },
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
      margin: theme.spacing(5, 0, 20),
    },
    '& h4': {
      fontWeight: theme.typography.fontWeightBold,
      marginBottom: theme.spacing(4)
    },
  },
  button: {
    marginTop: theme.spacing(4)
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default useStyles;
