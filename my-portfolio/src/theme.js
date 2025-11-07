import { createTheme } from '@mui/material/styles';

// 컬러 팔레트 디자인 시스템 (New Source Magazine 스타일)
const theme = createTheme({
  palette: {
    primary: {
      main: '#C41E3A',      // 메인 레드
      light: '#E63950',     // 밝은 레드
      dark: '#A01729',      // 어두운 레드
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#FFB300',      // 골드
      light: '#FFC933',     // 밝은 골드
      dark: '#E69D00',      // 어두운 골드
      contrastText: '#2D2D2D',
    },
    background: {
      default: '#FFE5E8',   // 메인 배경 (연한 핑크)
      paper: '#FFFFFF',     // 카드/페이퍼 배경
      secondary: '#FFD1D6', // 보조 배경
      tertiary: '#FFC4CA',  // 삼차 배경
    },
    text: {
      primary: '#2D2D2D',   // 주요 텍스트
      secondary: '#5A5A5A', // 보조 텍스트
      disabled: '#8E8E8E',  // 비활성 텍스트
    },
    divider: '#E0E0E0',
    action: {
      active: '#C41E3A',
      hover: 'rgba(196, 30, 58, 0.04)',
      selected: 'rgba(196, 30, 58, 0.08)',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '3rem',
      fontWeight: 700,
      color: '#2D2D2D',
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 600,
      color: '#2D2D2D',
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 600,
      color: '#2D2D2D',
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 500,
      color: '#2D2D2D',
    },
    body1: {
      fontSize: '1rem',
      color: '#5A5A5A',
      lineHeight: 1.6,
    },
    body2: {
      fontSize: '0.875rem',
      color: '#8E8E8E',
      lineHeight: 1.5,
    },
  },
  spacing: 8,
  shape: {
    borderRadius: 8,
  },
  shadows: [
    'none',
    '0 2px 4px rgba(196, 30, 58, 0.1)',
    '0 4px 8px rgba(196, 30, 58, 0.15)',
    '0 8px 16px rgba(196, 30, 58, 0.2)',
    '0 16px 24px rgba(196, 30, 58, 0.25)',
    '0 24px 32px rgba(196, 30, 58, 0.3)',
  ],
});

export default theme;
