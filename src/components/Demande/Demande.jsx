import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardHeader, CardMedia, CardContent, CardActions,IconButton, Typography } from '@material-ui/core/';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import  FavoriteIcon  from '@material-ui/icons/Favorite';
import   ShareIcon  from '@material-ui/icons/Share';
import Modal from '../testPage/Modal';

const useStyles = makeStyles(theme => ({
  card: {
    minWidth : 270,
    maxWidth : 270,
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
  },
  
}));
function Demande( {titre, id, img, description, restant, montant} ) {
  
  const classes = useStyles(); 
    
  return (
    
    <Card className={classes.card + ' my-4 '}>
      <CardHeader
        action={
          <IconButton className='btnDemande' aria-label="Settings">
            <ExpandMoreIcon />
          </IconButton>
        }
        title= {titre}
        subheader = {montant + '  $'}
      />
      <CardMedia
        className={classes.media}
        image={img}
        title={titre}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">{description}</Typography>
        <div className="progress mt-4">
            <div className="progress-bar bg-success" role="progressbar" style={{width: `${restant}%`}} aria-valuemax='5410' />
        </div>

      </CardContent>

      <CardActions disableSpacing>
        <IconButton aria-label="Add to favorites" >
          <FavoriteIcon className='clr-red'/>
        </IconButton>
        <Modal id={id} />
        
        <IconButton aria-label="Share">
          <ShareIcon />
        </IconButton>
        
      </CardActions>
      
    </Card>
  );
}
export default (Demande)
