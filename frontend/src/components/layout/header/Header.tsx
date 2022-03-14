import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import ContractHeroLogo from '../../../assets/logos/contract-hero-logo.svg';

const Header = () => {
  return (
    <AppBar style={{background : "#76b4f9"}} position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'flex', md: 'flex' } }}>
            <img src={ContractHeroLogo} alt="contractHero logo" width={200} />
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
