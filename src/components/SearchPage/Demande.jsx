import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
  },
  
  
  
}));

export default function RecipeReviewCard() {
  
    const classes = useStyles(); 
  
  return (
    <Card className={classes.card + ' my-3 '}>
      <CardHeader
        action={
          <IconButton aria-label="Settings">
            <ExpandMoreIcon />
          </IconButton>
        }
        title= {this.props.titre}
        subheader={this.props.date_fin}
      />
      <CardMedia
        className={classes.media}
        image={this.props.img}
        title={this.props.titre}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">{this.props.description}</Typography>
        <div className="progress mt-4">
            <div className="progress-bar bg-success" role="progressbar" style={{width: `${this.props.restantPr}%`}} aria-valuemax={this.props.montant} />
        </div>

      </CardContent>

      <CardActions disableSpacing>
        <IconButton aria-label="Add to favorites" >
          <FavoriteIcon className='clr-red'/>
        </IconButton>
        <IconButton aria-label="donate">
            <i class="fas fa-donate clr-blue"></i>
        </IconButton>
        <IconButton aria-label="Share">
          <ShareIcon />
        </IconButton>
        
      </CardActions>
      
    </Card>
  );
}