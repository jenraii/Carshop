import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function AddCar(props) {
    const [open, setOpen] = React.useState(false);
    const [car, setCar] = React.useState({
        brand: '', model: '', color: '', fuel: '', year: ''
    })

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleInputChange = (event) => {
    setCar({...car, [event.target.name]: event.target.value })
  }

  const addCar = () => {
    props.saveCar(car);
    handleClose();
  }
    
    return (
        <div>
      <Button style={{margin: 10}} variant="outlined" onClick={handleClickOpen}>
        Add Car
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle id="form-dialog-title">New Car</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            name="brand"
            value={car.brand}
            onChange={e => handleInputChange(e)}
            label="Brand"
            fullWidth
          />
          <TextField
            margin="dense"
            name="model"
            value={car.model}
            onChange={e => handleInputChange(e)}
            label="Model"
            fullWidth
          />
          <TextField
            margin="dense"
            name="color"
            value={car.color}
            onChange={e => handleInputChange(e)}
            label="Color"
            fullWidth
          />
          <TextField
            margin="dense"
            name="fuel"
            value={car.fuel}
            onChange={e => handleInputChange(e)}
            label="Fuel"
            fullWidth
          />
          <TextField
            margin="dense"
            name="year"
            value={car.year}
            onChange={e => handleInputChange(e)}
            label="Year"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={addCar}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
    )
}