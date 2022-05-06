import React, { useState } from 'react';
import {Box, Button, Modal, Typography} from '@material-ui/core';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const buttonStyle = {
  display: 'block',
  marginLeft: 'auto',
  marginRight: 0
}

const App = ({widgetParams}) => {
    const [isOpen, setIsOpen] = useState(true);
    const handleClose = (event, reason) => {
      if (reason && reason == "backdropClick")
          return;
    }
    const handleClick = () => {
      setIsOpen(false);
    }
    return (
        <div>
            <Modal
            open={isOpen}
            onClose={handleClose}
            >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Modal inside the widget
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  Hello {widgetParams.appName}
                </Typography>
                <Button onClick={handleClick} color="primary" variant="contained" style={buttonStyle}>Close</Button>
            </Box>
            </Modal>
        </div>
    );
}

export default App;