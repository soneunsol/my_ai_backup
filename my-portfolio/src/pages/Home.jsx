import { Box, Container, Typography, Button, Card, CardContent } from '@mui/material';
import { Link } from 'react-router-dom';

/**
 * Home 페이지 컴포넌트
 *
 * 포트폴리오 메인 페이지로 5개 섹션으로 구성:
 * 1. Hero 섹션
 * 2. About Me 섹션
 * 3. Skill Tree 섹션
 * 4. Projects 섹션
 * 5. Contact 섹션
 */
function Home() {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #FFE5E8 0%, #FFD1D6 50%, #FFC4CA 100%)',
          py: { xs: 8, md: 12 },
          textAlign: 'center',
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2rem', md: '3rem' },
              fontWeight: 700,
              color: 'text.primary',
              mb: 2,
            }}
          >
            여기는 Hero 섹션입니다
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: '1rem', md: '1.25rem' },
              color: 'text.secondary',
              mb: 4,
            }}
          >
            메인 비주얼, 이름, 간단 소개가 들어갈 예정입니다.
          </Typography>
        </Container>
      </Box>

      {/* About Me Section */}
      <Box
        sx={{
          backgroundColor: 'background.paper',
          py: { xs: 6, md: 10 },
        }}
      >
        <Container maxWidth="md">
          <Card
            sx={{
              backgroundColor: 'background.paper',
              border: '1px solid',
              borderColor: 'divider',
              boxShadow: 2,
            }}
          >
            <CardContent sx={{ p: { xs: 3, md: 5 } }}>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '1.75rem', md: '2.5rem' },
                  fontWeight: 600,
                  color: 'primary.main',
                  mb: 3,
                }}
              >
                여기는 About Me 섹션입니다
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: '1rem', md: '1.125rem' },
                  color: 'text.secondary',
                  mb: 3,
                  lineHeight: 1.8,
                }}
              >
                간단한 자기소개와 '더 알아보기' 버튼이 들어갈 예정입니다.
              </Typography>
              <Button
                component={Link}
                to="/about"
                variant="contained"
                color="primary"
                size="large"
                sx={{
                  px: 4,
                  py: 1.5,
                  fontSize: { xs: '0.875rem', md: '1rem' },
                }}
              >
                더 알아보기
              </Button>
            </CardContent>
          </Card>
        </Container>
      </Box>

      {/* Skill Tree Section */}
      <Box
        sx={{
          backgroundColor: 'background.secondary',
          py: { xs: 6, md: 10 },
        }}
      >
        <Container maxWidth="md">
          <Card
            sx={{
              backgroundColor: 'background.paper',
              border: '1px solid',
              borderColor: 'divider',
              boxShadow: 2,
            }}
          >
            <CardContent sx={{ p: { xs: 3, md: 5 } }}>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '1.75rem', md: '2.5rem' },
                  fontWeight: 600,
                  color: 'primary.main',
                  mb: 3,
                }}
              >
                여기는 Skill Tree 섹션입니다
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: '1rem', md: '1.125rem' },
                  color: 'text.secondary',
                  lineHeight: 1.8,
                }}
              >
                기술 스택을 트리나 프로그레스바로 시각화할 예정입니다.
              </Typography>
            </CardContent>
          </Card>
        </Container>
      </Box>

      {/* Projects Section */}
      <Box
        sx={{
          backgroundColor: 'background.paper',
          py: { xs: 6, md: 10 },
        }}
      >
        <Container maxWidth="md">
          <Card
            sx={{
              backgroundColor: 'background.paper',
              border: '1px solid',
              borderColor: 'divider',
              boxShadow: 2,
            }}
          >
            <CardContent sx={{ p: { xs: 3, md: 5 } }}>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '1.75rem', md: '2.5rem' },
                  fontWeight: 600,
                  color: 'primary.main',
                  mb: 3,
                }}
              >
                여기는 Projects 섹션입니다
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: '1rem', md: '1.125rem' },
                  color: 'text.secondary',
                  mb: 3,
                  lineHeight: 1.8,
                }}
              >
                대표작 썸네일 3-4개와 '더 보기' 버튼이 들어갈 예정입니다.
              </Typography>
              <Button
                component={Link}
                to="/projects"
                variant="contained"
                color="secondary"
                size="large"
                sx={{
                  px: 4,
                  py: 1.5,
                  fontSize: { xs: '0.875rem', md: '1rem' },
                }}
              >
                더 보기
              </Button>
            </CardContent>
          </Card>
        </Container>
      </Box>

      {/* Contact Section */}
      <Box
        sx={{
          backgroundColor: 'background.tertiary',
          py: { xs: 6, md: 10 },
        }}
      >
        <Container maxWidth="md">
          <Card
            sx={{
              backgroundColor: 'background.paper',
              border: '1px solid',
              borderColor: 'divider',
              boxShadow: 2,
            }}
          >
            <CardContent sx={{ p: { xs: 3, md: 5 } }}>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '1.75rem', md: '2.5rem' },
                  fontWeight: 600,
                  color: 'primary.main',
                  mb: 3,
                }}
              >
                여기는 Contact 섹션입니다
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: '1rem', md: '1.125rem' },
                  color: 'text.secondary',
                  lineHeight: 1.8,
                }}
              >
                연락처, SNS, 간단한 메시지 폼이 들어갈 예정입니다.
              </Typography>
            </CardContent>
          </Card>
        </Container>
      </Box>
    </Box>
  );
}

export default Home;
