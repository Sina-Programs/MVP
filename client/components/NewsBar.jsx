import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-even',
    overflow: 'hidden',
    backgroundColor: 'rgba(36, 52, 71, 1)',
    marginLeft: '5%',
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: 'mediumseagreen',
  },
  titleBar: {
    background: 'rgba(20,29,38, .8)',
  },
}));

export default function NewsBar(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={2.5}>
        {props.news.map((article, idx) => (
          <GridListTile
            key={idx}
            className='NewsTile'
            onClick={() => {
              window.open(article.url, '_blank');
            }}
          >
            <img src={article.image} alt={article.category} />
            <GridListTileBar
              title={article.headline}
              subtitle={article.source}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
