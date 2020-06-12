import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    width: '30%',
    margin: '0px auto auto auto',
  },
});

export default function CompanyCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          style={{
            padding: '5%',
            margin: 'auto',
            background: 'rgba(20,29,38, 1)',
          }}
          component='img'
          alt='Company Logo'
          height='300'
          image={props.companyData.logo}
          title='Company Logo'
        />
      </CardActionArea>
      <CardContent style={{ background: 'rgba(20,29,38, 1)', color: 'white' }}>
        <Typography gutterBottom variant='h5' component='h2'>
          {props.companyData.name
            ? props.companyData.name +
              ': ' +
              '(' +
              props.companyData.ticker +
              ')'
            : 'Company: (ticker)'}
        </Typography>
        <div>
          <span>
            {props.companyData.country
              ? 'Country: ' + props.companyData.country
              : 'Country'}
          </span>
        </div>
        <div>
          <span>
            {props.companyData.country
              ? 'Exchange: ' + props.companyData.exchange
              : 'Exchange'}
          </span>
        </div>
        <div>
          <span>
            {props.companyData.finnhubIndustry
              ? 'Sector: ' + props.companyData.finnhubIndustry
              : 'Sector'}
          </span>
        </div>
      </CardContent>
      <CardActions style={{ background: 'rgba(20,29,38, 1)' }}>
        <Button
          size='small'
          style={{
            background: 'rgba(46, 49, 49, 1)',
            color: 'mediumseagreen',
            width: '50%',
          }}
        >
          Share
        </Button>
        <Button
          size='small'
          style={{
            background: 'rgba(46, 49, 49, 1)',
            color: 'mediumseagreen',
            width: '50%',
          }}
          onClick={() => {
            window.open(props.companyData.weburl, '_blank');
          }}
        >
          Website
        </Button>
      </CardActions>
    </Card>
  );
}
