import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { useState } from 'react';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: '60%',
    height: 'auto',
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2, 4, 3),
  },
  cerrar: {
    textAlign: 'right',
    fontWeight: 'bold',
    cursor: 'pointer',
  }
}));

const PlanModal = ({title, content}) => {
    const classes = useStyles();
    const [modalStyle] = useState(getModalStyle);
    const [open, setOpen] = useState(false);
  
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
    const body = (
      <div style={modalStyle} className={classes.paper}>
        <h2 id="simple-modal-title">{title}</h2>
        <p id="simple-modal-description">
          {content}
        </p>
        <p className={classes.cerrar} onClick={handleClose}>Cerrar</p>
      </div>
    );
  
    return (
      <div>
        <button className='btn-cobertura' onClick={handleOpen}>¿Qué cubre?</button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          {body}
        </Modal>
      </div>
   );
}
 
export default PlanModal;