import { AppBar, Toolbar, Typography, Button, Box, Container } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

/**
 * Navigation 컴포넌트
 *
 * 포트폴리오 사이트의 전역 네비게이션 바
 * Home, About Me, Projects 3개의 탭으로 구성
 */
function Navigation() {
  const location = useLocation();

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About Me', path: '/about' },
    { label: 'Projects', path: '/projects' },
  ];

  return (
    <AppBar position="sticky" sx={{ backgroundColor: 'primary.main' }}>
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 0, md: 2 } }}>
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{
              textDecoration: 'none',
              color: 'primary.contrastText',
              fontWeight: 700,
              fontSize: { xs: '1.25rem', md: '1.5rem' },
            }}
          >
            My Portfolio
          </Typography>

          <Box sx={{ display: 'flex', gap: { xs: 1, md: 2 } }}>
            {navItems.map((item) => (
              <Button
                key={item.path}
                component={Link}
                to={item.path}
                sx={{
                  color: 'primary.contrastText',
                  fontSize: { xs: '0.875rem', md: '1rem' },
                  fontWeight: location.pathname === item.path ? 700 : 500,
                  borderBottom: location.pathname === item.path ? 2 : 0,
                  borderColor: 'secondary.main',
                  borderRadius: 0,
                  px: { xs: 1, md: 2 },
                  '&:hover': {
                    backgroundColor: 'primary.dark',
                  },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navigation;
