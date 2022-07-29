import { Component } from 'react';
import { Box, Typography } from '@mui/material';

interface IProps {
  children: JSX.Element;
}
interface IState {
  hasError: boolean;
}
const Error = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'white',
  color: 'black',
  border: '3px solid #F3E600',
  borderRadius: '10px',
  boxShadow: 24,
  p: 4
};

export default class ErrorBoundry extends Component<IProps, IState> {
  state = { hasError: false };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError)
      return (
        <Box sx={Error}>
          <Typography variant="h2" component="h2" sx={{ color: 'black' }}>
            Извините, произошла ошибка, но мы уже её устраняем
          </Typography>
        </Box>
      );
    return this.props.children;
  }
}
