import React from 'react';
import { makeStyles,IconButton } from '@material-ui/core/';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputAdornment from '@material-ui/core/InputAdornment';
import Input from '@material-ui/core/Input';

const useStyles = makeStyles(theme => ({
  container: {
    paddingTop:30,
    paddingBottom:30,
    paddingRight:30,
    paddingLeft:30,
    display: 'inlineBlock',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 320,
  },
  formControl: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2),
    width:90
  }
}))


export default function Modal({id}) {

  // constructor(props) {
  //   super(props);
  //   this.state = {montant: 0};
  //   this.handleChange = this.handleChange.bind(this);

  // }
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }
  function handleChange(event){
    this.setState({ montant : event.target.value });
  }
  function don(){
      // componentDidMount() {
      //   axios.post('http://127.0.0.1:8000/api/paiment', {
      //     donateur_id: 1,
      //     lastName: 'Flintstone'
      //   })
      //   .then(function (response) {
      //     console.log(response);
      //   })
      //   .catch(function (error) {
      //     console.log(error);
      //   });
      // }
  }

  return (
    <div>
        
        <IconButton aria-label="donate" onClick={handleClickOpen}>
            <i className="fas fa-donate clr-blue"></i>
        </IconButton>
      <Dialog open={open} onClose={handleClose} className={classes.container}  aria-labelledby="form-dialog-title">
        <form className={classes.container} autoComplete="off">
        <DialogTitle id="form-dialog-title"></DialogTitle>
         <DialogContent style={{textAlign:'center'}}>
          <DialogContentText style={{textAlign:'center'}}>
            Veuillez entrer vos donnees pour valider votre don.
            <br></br>
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Card holder name"
            type="text"
            className={classes.textField}
            
          />
          <TextField
            margin="dense"
            id="ccn"
            label="Credit card number"
            type="text"
            className={classes.textField}
            
          />
          <br></br>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="MofE">Mois</InputLabel>
                <Select
                  native
                  inputProps={{
                    name: 'month',
                    id: 'MofE',
                  }}
                >
                  <option value="" />
                  <option value={'01'}>01</option>
                  <option value={'02'}>02</option>
                  <option value={'03'}>03</option>
                  <option value={'04'}>04</option>
                  <option value={'04'}>04</option>
                  <option value={'05'}>05</option>
                  <option value={'05'}>05</option>
                  <option value={'06'}>06</option>
                  <option value={'06'}>06</option>
                  <option value={'07'}>07</option>
                  <option value={'07'}>07</option>
                  <option value={'08'}>08</option>
                  <option value={'08'}>08</option>
                  <option value={'09'}>09</option>
                  <option value={'09'}>09</option>
                  <option value={'10'}>10</option>
                  <option value={'10'}>10</option>
                  <option value={'11'}>11</option>
                  <option value={'11'}>11</option>
                  <option value={'12'}>12</option>
                </Select>
                </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="YofE">Annee</InputLabel>
                <Select
                  native
                  inputProps={{
                    name: 'year',
                    id: 'YofE',
                  }}
                >
                  <option value="" />
                  <option value={'20'}>20</option>
                  <option value={'21'}>21</option>
                  <option value={'22'}>22</option>
                  <option value={'23'}>23</option>
                  <option value={'24'}>24</option>
                  <option value={'25'}>25</option>
                  <option value={'26'}>26</option>
                  <option value={'27'}>27</option>
                  <option value={'28'}>28</option>
                  <option value={'29'}>29</option>
                  <option value={'30'}>30</option>
                  <option value={'31'}>31</option>
                </Select>
        </FormControl>
        <TextField
            className={classes.formControl}
            margin="dense"
            id="ccv"
            label="CCV"
            type="text"
            
            />
          <Input
            className={classes.textField}
            margin="dense"
            id="montant"
            label='Montant'
            type='float'
            onChange={handleChange}
            // value={this.state.montant}
            startAdornment={<InputAdornment position="end">MAD</InputAdornment>}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Annuler
          </Button>
          <Button onClick={don} color="primary">
            Confirmer
          </Button>
        </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}