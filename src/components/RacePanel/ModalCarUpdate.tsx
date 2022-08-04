import { FC } from 'react';
import { Modal, Box, Backdrop, Typography, Divider } from '@mui/material';
import { motion } from 'framer-motion';

import CarUpdate from './CarUpdate';

import { IModalCarUpdate } from '../../types';
import { modalStyle } from '../../util/styles';

const ModalCarUpdate: FC<IModalCarUpdate> = ({ open, setOpen, id }) => {
  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500
      }}
    >
      <Box
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        sx={modalStyle}
      >
        <Divider>
          <Typography variant="h6" component="div">
            Update settings
          </Typography>
        </Divider>
        <CarUpdate id={id} setOpen={setOpen} />
      </Box>
    </Modal>
  );
};

export default ModalCarUpdate;
