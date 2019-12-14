import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { green } from '@material-ui/core/colors';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: green[500],
  },
  heart: {
    backgroundColor: red,
  },
}));

export default function SpellCard(props) {
    
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const { spell, i } = props;

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  
  return (
      <li className={i} key={spell.spell}>
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            S
          </Avatar>
        }
    
        title={spell.spell}
        subheader={spell.type}
      /> 
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" className={classes.heart}>
          <FavoriteIcon />
        </IconButton>
        <Typography paragraph>What it does?</Typography>
      
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          
          <Typography paragraph className="efect">
            {spell.effect}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
    </li>
  );
}
