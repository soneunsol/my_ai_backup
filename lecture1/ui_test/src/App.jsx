import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Paper,
  Grid,
  TextField,
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  useTheme,
  useMediaQuery,
  FormControl,
  InputLabel,
  Select,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Radio,
  RadioGroup,
  FormLabel,
  Slider,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogContentText,
  Card,
  CardContent,
  CardActions,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';
import InfoIcon from '@mui/icons-material/Info';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

/**
 * App 컴포넌트
 * 16개 UI 요소를 섹션 단위로 추가할 수 있는 메인 컴포넌트
 */
function App() {
  // Input 섹션 상태 관리
  const [standardInput, setStandardInput] = useState('');
  const [outlinedInput, setOutlinedInput] = useState('');
  const [filledInput, setFilledInput] = useState('');

  // Navigation 섹션 상태 관리
  const [anchorEl, setAnchorEl] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const menuItems = ['홈', '소개', '서비스', '연락처'];

  // Dropdown 섹션 상태 관리
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedFruit, setSelectedFruit] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  // Checkbox 섹션 상태 관리
  const [checkedItems, setCheckedItems] = useState({
    react: false,
    vue: false,
    angular: false,
    svelte: false
  });

  const handleCheckboxChange = (event) => {
    setCheckedItems({
      ...checkedItems,
      [event.target.name]: event.target.checked
    });
  };

  const handleSelectAll = () => {
    const allChecked = Object.values(checkedItems).every(value => value);
    setCheckedItems({
      react: !allChecked,
      vue: !allChecked,
      angular: !allChecked,
      svelte: !allChecked
    });
  };

  const getCheckedList = () => {
    return Object.entries(checkedItems)
      .filter(([_, checked]) => checked)
      .map(([name, _]) => {
        const labels = {
          react: 'React',
          vue: 'Vue',
          angular: 'Angular',
          svelte: 'Svelte'
        };
        return labels[name];
      });
  };

  // Radio 섹션 상태 관리
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedPlan, setSelectedPlan] = useState('');

  // Slider 섹션 상태 관리
  const [volumeValue, setVolumeValue] = useState(50);
  const [brightnessValue, setBrightnessValue] = useState(75);
  const [temperatureValue, setTemperatureValue] = useState(20);

  // Modal 섹션 상태 관리
  const [openModal1, setOpenModal1] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);

  const handleOpenModal1 = () => setOpenModal1(true);
  const handleCloseModal1 = () => setOpenModal1(false);
  const handleOpenModal2 = () => setOpenModal2(true);
  const handleCloseModal2 = () => setOpenModal2(false);

  // Drag & Drop 섹션 상태 관리
  const [draggedItem, setDraggedItem] = useState(null);
  const [droppedItems, setDroppedItems] = useState([]);
  const [isDraggingOver, setIsDraggingOver] = useState(false);

  const availableItems = [
    { id: 1, name: '아이템 1', color: '#e3f2fd' },
    { id: 2, name: '아이템 2', color: '#f3e5f5' },
    { id: 3, name: '아이템 3', color: '#e8f5e9' }
  ];

  const handleDragStart = (item) => {
    setDraggedItem(item);
  };

  const handleDragEnd = () => {
    setDraggedItem(null);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDraggingOver(true);
  };

  const handleDragLeave = () => {
    setIsDraggingOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDraggingOver(false);

    if (draggedItem && !droppedItems.find(item => item.id === draggedItem.id)) {
      setDroppedItems([...droppedItems, draggedItem]);
    }
    setDraggedItem(null);
  };

  const handleRemoveItem = (itemId) => {
    setDroppedItems(droppedItems.filter(item => item.id !== itemId));
  };

  // Scroll 섹션 상태 관리
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);
  const [isAtBottom, setIsAtBottom] = useState(false);

  const handleScroll = (e) => {
    const { scrollTop, scrollHeight, clientHeight } = e.target;
    const position = scrollTop;
    const maxScroll = scrollHeight - clientHeight;
    const percentage = maxScroll > 0 ? Math.round((scrollTop / maxScroll) * 100) : 0;

    setScrollPosition(Math.round(position));
    setScrollPercentage(percentage);
    setIsAtTop(scrollTop === 0);
    setIsAtBottom(Math.abs(scrollHeight - clientHeight - scrollTop) < 1);
  };

  const scrollToTop = () => {
    document.getElementById('scroll-container').scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToBottom = () => {
    const container = document.getElementById('scroll-container');
    container.scrollTo({ top: container.scrollHeight, behavior: 'smooth' });
  };

  const scrollToMiddle = () => {
    const container = document.getElementById('scroll-container');
    const middle = (container.scrollHeight - container.clientHeight) / 2;
    container.scrollTo({ top: middle, behavior: 'smooth' });
  };

  // Animation 섹션 상태 관리
  const [fadeAnimation, setFadeAnimation] = useState(false);
  const [scaleAnimation, setScaleAnimation] = useState(false);
  const [rotateAnimation, setRotateAnimation] = useState(false);
  const [allAnimation, setAllAnimation] = useState(false);

  const handleFadeAnimation = () => {
    setFadeAnimation(false);
    setTimeout(() => setFadeAnimation(true), 10);
    setTimeout(() => setFadeAnimation(false), 2010);
  };

  const handleScaleAnimation = () => {
    setScaleAnimation(false);
    setTimeout(() => setScaleAnimation(true), 10);
    setTimeout(() => setScaleAnimation(false), 2010);
  };

  const handleRotateAnimation = () => {
    setRotateAnimation(false);
    setTimeout(() => setRotateAnimation(true), 10);
    setTimeout(() => setRotateAnimation(false), 2010);
  };

  const handleAllAnimation = () => {
    setAllAnimation(false);
    setTimeout(() => setAllAnimation(true), 10);
    setTimeout(() => setAllAnimation(false), 3010);
  };

  // Menu 섹션 상태 관리
  const [menu1Anchor, setMenu1Anchor] = useState(null);
  const [menu2Anchor, setMenu2Anchor] = useState(null);
  const [menu3Anchor, setMenu3Anchor] = useState(null);
  const [lastMenuAction, setLastMenuAction] = useState('');

  const handleMenu1Open = (event) => {
    setMenu1Anchor(event.currentTarget);
  };

  const handleMenu1Close = () => {
    setMenu1Anchor(null);
  };

  const handleMenu1ItemClick = (item) => {
    setLastMenuAction(`기본 메뉴: ${item} 선택됨`);
    alert(`기본 메뉴에서 "${item}"을(를) 선택했습니다!`);
    handleMenu1Close();
  };

  const handleMenu2Open = (event) => {
    setMenu2Anchor(event.currentTarget);
  };

  const handleMenu2Close = () => {
    setMenu2Anchor(null);
  };

  const handleMenu2ItemClick = (item) => {
    setLastMenuAction(`설정 메뉴: ${item} 선택됨`);
    alert(`설정 메뉴에서 "${item}"을(를) 선택했습니다!`);
    handleMenu2Close();
  };

  const handleMenu3Open = (event) => {
    setMenu3Anchor(event.currentTarget);
  };

  const handleMenu3Close = () => {
    setMenu3Anchor(null);
  };

  const handleMenu3ItemClick = (item) => {
    setLastMenuAction(`프로필 메뉴: ${item} 선택됨`);
    alert(`프로필 메뉴에서 "${item}"을(를) 선택했습니다!`);
    handleMenu3Close();
  };

  // Sidebar 섹션 상태 관리
  const [leftDrawerOpen, setLeftDrawerOpen] = useState(false);
  const [rightDrawerOpen, setRightDrawerOpen] = useState(false);
  const [lastSidebarAction, setLastSidebarAction] = useState('');

  const toggleLeftDrawer = (open) => () => {
    setLeftDrawerOpen(open);
  };

  const toggleRightDrawer = (open) => () => {
    setRightDrawerOpen(open);
  };

  const handleSidebarItemClick = (side, item) => {
    setLastSidebarAction(`${side} 사이드바: ${item} 클릭됨`);
    alert(`${side} 사이드바에서 "${item}"을(를) 클릭했습니다!`);
    if (side === '왼쪽') {
      setLeftDrawerOpen(false);
    } else {
      setRightDrawerOpen(false);
    }
  };

  // Hover 섹션 상태 관리
  const [hoveredBox, setHoveredBox] = useState(null);
  const [hoverCount, setHoverCount] = useState({
    color: 0,
    shadow: 0,
    scale: 0,
    rotate: 0,
    all: 0
  });

  const handleHoverEnter = (boxName) => {
    setHoveredBox(boxName);
    setHoverCount(prev => ({
      ...prev,
      [boxName]: prev[boxName] + 1
    }));
  };

  const handleHoverLeave = () => {
    setHoveredBox(null);
  };

  // Swipe 섹션 상태 관리
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [swipeDirection, setSwipeDirection] = useState('');
  const [swipeCount, setSwipeCount] = useState({ left: 0, right: 0, up: 0, down: 0 });
  const [lastSwipe, setLastSwipe] = useState('');
  const [currentPosition, setCurrentPosition] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const minSwipeDistance = 50;

  // Flexbox Navigation 섹션 상태 관리
  const [selectedMenu, setSelectedMenu] = useState('홈');
  const [clickCount, setClickCount] = useState({
    홈: 0,
    소개: 0,
    상품: 0,
    연락처: 0,
    설정: 0
  });

  const handleNavMenuClick = (menu) => {
    setSelectedMenu(menu);
    setClickCount(prev => ({
      ...prev,
      [menu]: prev[menu] + 1
    }));
  };

  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
    setIsDragging(true);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
    if (touchStart !== null) {
      const distance = e.targetTouches[0].clientX - touchStart;
      setCurrentPosition(distance);
    }
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) {
      setIsDragging(false);
      setCurrentPosition(0);
      return;
    }

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      setSwipeDirection('왼쪽');
      setLastSwipe('왼쪽으로 스와이프!');
      setSwipeCount(prev => ({ ...prev, left: prev.left + 1 }));
    } else if (isRightSwipe) {
      setSwipeDirection('오른쪽');
      setLastSwipe('오른쪽으로 스와이프!');
      setSwipeCount(prev => ({ ...prev, right: prev.right + 1 }));
    }

    setIsDragging(false);
    setCurrentPosition(0);
    setTimeout(() => setSwipeDirection(''), 500);
  };

  const handleMouseStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.clientX);
    setIsDragging(true);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    setTouchEnd(e.clientX);
    if (touchStart !== null) {
      const distance = e.clientX - touchStart;
      setCurrentPosition(distance);
    }
  };

  const handleMouseEnd = () => {
    if (!isDragging) return;
    if (!touchStart || !touchEnd) {
      setIsDragging(false);
      setCurrentPosition(0);
      return;
    }

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      setSwipeDirection('왼쪽');
      setLastSwipe('왼쪽으로 스와이프!');
      setSwipeCount(prev => ({ ...prev, left: prev.left + 1 }));
    } else if (isRightSwipe) {
      setSwipeDirection('오른쪽');
      setLastSwipe('오른쪽으로 스와이프!');
      setSwipeCount(prev => ({ ...prev, right: prev.right + 1 }));
    }

    setIsDragging(false);
    setCurrentPosition(0);
    setTimeout(() => setSwipeDirection(''), 500);
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMenuClick = (menu) => {
    alert(`${menu} 메뉴 클릭!`);
    handleMenuClose();
  };

  return (
    <Box sx={{
      width: '100%',
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-start',
      py: { xs: 2, md: 4 },
      backgroundColor: '#f5f5f5'
    }}>
      <Container maxWidth='lg' sx={{ py: 4 }}>
        {/* 헤더 영역 */}
        <Box sx={{
          mb: 6,
          textAlign: 'center'
        }}>
          <Typography
            variant='h3'
            component='h1'
            sx={{
              fontSize: { xs: '2rem', md: '3rem' },
              fontWeight: 600,
              mb: 2
            }}
          >
            UI Test Project
          </Typography>
          <Typography
            variant='body1'
            color='text.secondary'
            sx={{
              fontSize: { xs: '1rem', md: '1.1rem' }
            }}
          >
            16개 UI 요소를 섹션별로 추가하는 프로젝트입니다
          </Typography>
        </Box>

        {/* 섹션 영역 - 여기에 UI 섹션들이 순차적으로 추가됩니다 */}
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 4
        }}>
          {/* Button 섹션 */}
          <Paper sx={{ p: 3 }}>
            <Typography variant='h5' sx={{ mb: 3, fontWeight: 600 }}>
              Button
            </Typography>
            <Grid container spacing={2}>
              {/* Contained Variant */}
              <Grid size={{ xs: 12, md: 4 }}>
                <Button
                  variant='contained'
                  color='primary'
                  fullWidth
                  onClick={() => alert('Contained Primary 버튼 클릭!')}
                >
                  Contained Primary
                </Button>
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <Button
                  variant='contained'
                  color='secondary'
                  fullWidth
                  onClick={() => alert('Contained Secondary 버튼 클릭!')}
                >
                  Contained Secondary
                </Button>
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <Button
                  variant='contained'
                  color='error'
                  fullWidth
                  onClick={() => alert('Contained Error 버튼 클릭!')}
                >
                  Contained Error
                </Button>
              </Grid>

              {/* Outlined Variant */}
              <Grid size={{ xs: 12, md: 4 }}>
                <Button
                  variant='outlined'
                  color='primary'
                  fullWidth
                  onClick={() => alert('Outlined Primary 버튼 클릭!')}
                >
                  Outlined Primary
                </Button>
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <Button
                  variant='outlined'
                  color='secondary'
                  fullWidth
                  onClick={() => alert('Outlined Secondary 버튼 클릭!')}
                >
                  Outlined Secondary
                </Button>
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <Button
                  variant='outlined'
                  color='error'
                  fullWidth
                  onClick={() => alert('Outlined Error 버튼 클릭!')}
                >
                  Outlined Error
                </Button>
              </Grid>

              {/* Text Variant */}
              <Grid size={{ xs: 12, md: 4 }}>
                <Button
                  variant='text'
                  color='primary'
                  fullWidth
                  onClick={() => alert('Text Primary 버튼 클릭!')}
                >
                  Text Primary
                </Button>
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <Button
                  variant='text'
                  color='secondary'
                  fullWidth
                  onClick={() => alert('Text Secondary 버튼 클릭!')}
                >
                  Text Secondary
                </Button>
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <Button
                  variant='text'
                  color='error'
                  fullWidth
                  onClick={() => alert('Text Error 버튼 클릭!')}
                >
                  Text Error
                </Button>
              </Grid>
            </Grid>
          </Paper>

          {/* Input 섹션 */}
          <Paper sx={{ p: 3 }}>
            <Typography variant='h5' sx={{ mb: 3, fontWeight: 600 }}>
              Input
            </Typography>
            <Grid container spacing={3}>
              {/* Standard Variant */}
              <Grid size={{ xs: 12, md: 4 }}>
                <TextField
                  variant='standard'
                  label='Standard Input'
                  placeholder='텍스트를 입력하세요'
                  fullWidth
                  value={standardInput}
                  onChange={(e) => setStandardInput(e.target.value)}
                />
                <Box sx={{ mt: 2, p: 2, backgroundColor: '#f5f5f5', borderRadius: 1 }}>
                  <Typography variant='body2' color='text.secondary'>
                    입력값: {standardInput || '(입력 없음)'}
                  </Typography>
                </Box>
              </Grid>

              {/* Outlined Variant */}
              <Grid size={{ xs: 12, md: 4 }}>
                <TextField
                  variant='outlined'
                  label='Outlined Input'
                  placeholder='텍스트를 입력하세요'
                  fullWidth
                  value={outlinedInput}
                  onChange={(e) => setOutlinedInput(e.target.value)}
                />
                <Box sx={{ mt: 2, p: 2, backgroundColor: '#f5f5f5', borderRadius: 1 }}>
                  <Typography variant='body2' color='text.secondary'>
                    입력값: {outlinedInput || '(입력 없음)'}
                  </Typography>
                </Box>
              </Grid>

              {/* Filled Variant */}
              <Grid size={{ xs: 12, md: 4 }}>
                <TextField
                  variant='filled'
                  label='Filled Input'
                  placeholder='텍스트를 입력하세요'
                  fullWidth
                  value={filledInput}
                  onChange={(e) => setFilledInput(e.target.value)}
                />
                <Box sx={{ mt: 2, p: 2, backgroundColor: '#f5f5f5', borderRadius: 1 }}>
                  <Typography variant='body2' color='text.secondary'>
                    입력값: {filledInput || '(입력 없음)'}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Paper>

          {/* Navigation 섹션 */}
          <Paper sx={{ p: 3 }}>
            <Typography variant='h5' sx={{ mb: 3, fontWeight: 600 }}>
              Navigation
            </Typography>
            <Box>
              <AppBar position='static'>
                <Toolbar>
                  {/* 로고 영역 */}
                  <Typography variant='h6' sx={{ flexGrow: 1 }}>
                    My App
                  </Typography>

                  {/* 데스크톱 메뉴 */}
                  {!isMobile ? (
                    <Box sx={{ display: 'flex', gap: 2 }}>
                      {menuItems.map((menu) => (
                        <Button
                          key={menu}
                          color='inherit'
                          onClick={() => handleMenuClick(menu)}
                        >
                          {menu}
                        </Button>
                      ))}
                    </Box>
                  ) : (
                    // 모바일 햄버거 메뉴
                    <>
                      <IconButton
                        color='inherit'
                        onClick={handleMenuOpen}
                        edge='end'
                      >
                        <MenuIcon />
                      </IconButton>
                      <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleMenuClose}
                      >
                        {menuItems.map((menu) => (
                          <MenuItem
                            key={menu}
                            onClick={() => handleMenuClick(menu)}
                          >
                            {menu}
                          </MenuItem>
                        ))}
                      </Menu>
                    </>
                  )}
                </Toolbar>
              </AppBar>

              {/* 설명 텍스트 */}
              <Box sx={{ mt: 2, p: 2, backgroundColor: '#f5f5f5', borderRadius: 1 }}>
                <Typography variant='body2' color='text.secondary'>
                  {isMobile
                    ? '모바일 화면: 햄버거 메뉴(☰)를 클릭하여 메뉴를 확인하세요'
                    : '데스크톱 화면: 상단에 메뉴가 표시됩니다'}
                </Typography>
              </Box>
            </Box>
          </Paper>

          {/* Dropdown 섹션 */}
          <Paper sx={{ p: 3 }}>
            <Typography variant='h5' sx={{ mb: 3, fontWeight: 600 }}>
              Dropdown
            </Typography>
            <Grid container spacing={3}>
              {/* 색상 선택 */}
              <Grid size={{ xs: 12, md: 4 }}>
                <FormControl fullWidth>
                  <InputLabel id='color-select-label'>좋아하는 색상</InputLabel>
                  <Select
                    labelId='color-select-label'
                    value={selectedColor}
                    label='좋아하는 색상'
                    onChange={(e) => setSelectedColor(e.target.value)}
                  >
                    <MenuItem value='red'>빨강</MenuItem>
                    <MenuItem value='blue'>파랑</MenuItem>
                    <MenuItem value='green'>초록</MenuItem>
                    <MenuItem value='yellow'>노랑</MenuItem>
                  </Select>
                </FormControl>
                <Box sx={{ mt: 2, p: 2, backgroundColor: '#f5f5f5', borderRadius: 1 }}>
                  <Typography variant='body2' color='text.secondary'>
                    선택한 색상: {selectedColor || '(선택 없음)'}
                  </Typography>
                </Box>
              </Grid>

              {/* 과일 선택 */}
              <Grid size={{ xs: 12, md: 4 }}>
                <FormControl fullWidth>
                  <InputLabel id='fruit-select-label'>좋아하는 과일</InputLabel>
                  <Select
                    labelId='fruit-select-label'
                    value={selectedFruit}
                    label='좋아하는 과일'
                    onChange={(e) => setSelectedFruit(e.target.value)}
                  >
                    <MenuItem value='apple'>사과</MenuItem>
                    <MenuItem value='banana'>바나나</MenuItem>
                    <MenuItem value='orange'>오렌지</MenuItem>
                    <MenuItem value='grape'>포도</MenuItem>
                    <MenuItem value='strawberry'>딸기</MenuItem>
                  </Select>
                </FormControl>
                <Box sx={{ mt: 2, p: 2, backgroundColor: '#f5f5f5', borderRadius: 1 }}>
                  <Typography variant='body2' color='text.secondary'>
                    선택한 과일: {selectedFruit || '(선택 없음)'}
                  </Typography>
                </Box>
              </Grid>

              {/* 도시 선택 */}
              <Grid size={{ xs: 12, md: 4 }}>
                <FormControl fullWidth>
                  <InputLabel id='city-select-label'>방문하고 싶은 도시</InputLabel>
                  <Select
                    labelId='city-select-label'
                    value={selectedCity}
                    label='방문하고 싶은 도시'
                    onChange={(e) => setSelectedCity(e.target.value)}
                  >
                    <MenuItem value='seoul'>서울</MenuItem>
                    <MenuItem value='busan'>부산</MenuItem>
                    <MenuItem value='jeju'>제주</MenuItem>
                  </Select>
                </FormControl>
                <Box sx={{ mt: 2, p: 2, backgroundColor: '#f5f5f5', borderRadius: 1 }}>
                  <Typography variant='body2' color='text.secondary'>
                    선택한 도시: {selectedCity || '(선택 없음)'}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Paper>

          {/* Checkbox 섹션 */}
          <Paper sx={{ p: 3 }}>
            <Typography variant='h5' sx={{ mb: 3, fontWeight: 600 }}>
              Checkbox
            </Typography>
            <Box>
              {/* 전체 선택/해제 버튼 */}
              <Box sx={{ mb: 3 }}>
                <Button
                  variant='outlined'
                  onClick={handleSelectAll}
                  fullWidth
                  sx={{ maxWidth: { xs: '100%', md: '300px' } }}
                >
                  {Object.values(checkedItems).every(value => value) ? '전체 해제' : '전체 선택'}
                </Button>
              </Box>

              {/* 체크박스 그룹 */}
              <FormGroup>
                <Grid container spacing={2}>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={checkedItems.react}
                          onChange={handleCheckboxChange}
                          name='react'
                        />
                      }
                      label='React'
                    />
                  </Grid>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={checkedItems.vue}
                          onChange={handleCheckboxChange}
                          name='vue'
                        />
                      }
                      label='Vue'
                    />
                  </Grid>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={checkedItems.angular}
                          onChange={handleCheckboxChange}
                          name='angular'
                        />
                      }
                      label='Angular'
                    />
                  </Grid>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={checkedItems.svelte}
                          onChange={handleCheckboxChange}
                          name='svelte'
                        />
                      }
                      label='Svelte'
                    />
                  </Grid>
                </Grid>
              </FormGroup>

              {/* 선택된 항목 표시 */}
              <Box sx={{ mt: 3, p: 2, backgroundColor: '#f5f5f5', borderRadius: 1 }}>
                <Typography variant='body2' color='text.secondary' sx={{ mb: 1 }}>
                  선택된 프레임워크:
                </Typography>
                <Typography variant='body1' sx={{ fontWeight: 500 }}>
                  {getCheckedList().length > 0
                    ? getCheckedList().join(', ')
                    : '(선택 없음)'}
                </Typography>
              </Box>
            </Box>
          </Paper>

          {/* Radio 섹션 */}
          <Paper sx={{ p: 3 }}>
            <Typography variant='h5' sx={{ mb: 3, fontWeight: 600 }}>
              Radio
            </Typography>
            <Grid container spacing={4}>
              {/* 사이즈 선택 */}
              <Grid size={{ xs: 12, md: 6 }}>
                <FormControl>
                  <FormLabel id='size-radio-group-label'>티셔츠 사이즈를 선택하세요</FormLabel>
                  <RadioGroup
                    aria-labelledby='size-radio-group-label'
                    value={selectedSize}
                    onChange={(e) => setSelectedSize(e.target.value)}
                  >
                    <FormControlLabel value='small' control={<Radio />} label='Small' />
                    <FormControlLabel value='medium' control={<Radio />} label='Medium' />
                    <FormControlLabel value='large' control={<Radio />} label='Large' />
                    <FormControlLabel value='xlarge' control={<Radio />} label='X-Large' />
                  </RadioGroup>
                </FormControl>
                <Box sx={{ mt: 2, p: 2, backgroundColor: '#f5f5f5', borderRadius: 1 }}>
                  <Typography variant='body2' color='text.secondary'>
                    선택한 사이즈: {selectedSize || '(선택 없음)'}
                  </Typography>
                </Box>
              </Grid>

              {/* 플랜 선택 */}
              <Grid size={{ xs: 12, md: 6 }}>
                <FormControl>
                  <FormLabel id='plan-radio-group-label'>멤버십 플랜을 선택하세요</FormLabel>
                  <RadioGroup
                    aria-labelledby='plan-radio-group-label'
                    value={selectedPlan}
                    onChange={(e) => setSelectedPlan(e.target.value)}
                  >
                    <FormControlLabel value='basic' control={<Radio />} label='Basic (무료)' />
                    <FormControlLabel value='pro' control={<Radio />} label='Pro (월 $9.99)' />
                    <FormControlLabel value='premium' control={<Radio />} label='Premium (월 $19.99)' />
                  </RadioGroup>
                </FormControl>
                <Box sx={{ mt: 2, p: 2, backgroundColor: '#f5f5f5', borderRadius: 1 }}>
                  <Typography variant='body2' color='text.secondary'>
                    선택한 플랜: {selectedPlan || '(선택 없음)'}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Paper>

          {/* Slider 섹션 */}
          <Paper sx={{ p: 3 }}>
            <Typography variant='h5' sx={{ mb: 3, fontWeight: 600 }}>
              Slider
            </Typography>
            <Grid container spacing={4}>
              {/* 볼륨 슬라이더 */}
              <Grid size={{ xs: 12, md: 4 }}>
                <Box>
                  <Typography variant='body1' sx={{ mb: 2, fontWeight: 500 }}>
                    볼륨 조절
                  </Typography>
                  <Slider
                    value={volumeValue}
                    onChange={(e, newValue) => setVolumeValue(newValue)}
                    valueLabelDisplay='auto'
                    min={0}
                    max={100}
                    marks={[
                      { value: 0, label: '0' },
                      { value: 50, label: '50' },
                      { value: 100, label: '100' }
                    ]}
                  />
                  <Box sx={{ mt: 2, p: 2, backgroundColor: '#f5f5f5', borderRadius: 1 }}>
                    <Typography variant='body2' color='text.secondary'>
                      현재 볼륨: {volumeValue}
                    </Typography>
                  </Box>
                </Box>
              </Grid>

              {/* 밝기 슬라이더 */}
              <Grid size={{ xs: 12, md: 4 }}>
                <Box>
                  <Typography variant='body1' sx={{ mb: 2, fontWeight: 500 }}>
                    밝기 조절
                  </Typography>
                  <Slider
                    value={brightnessValue}
                    onChange={(e, newValue) => setBrightnessValue(newValue)}
                    valueLabelDisplay='auto'
                    min={0}
                    max={100}
                    marks={[
                      { value: 0, label: '0%' },
                      { value: 25, label: '25%' },
                      { value: 50, label: '50%' },
                      { value: 75, label: '75%' },
                      { value: 100, label: '100%' }
                    ]}
                  />
                  <Box sx={{ mt: 2, p: 2, backgroundColor: '#f5f5f5', borderRadius: 1 }}>
                    <Typography variant='body2' color='text.secondary'>
                      현재 밝기: {brightnessValue}%
                    </Typography>
                  </Box>
                </Box>
              </Grid>

              {/* 온도 슬라이더 */}
              <Grid size={{ xs: 12, md: 4 }}>
                <Box>
                  <Typography variant='body1' sx={{ mb: 2, fontWeight: 500 }}>
                    온도 설정
                  </Typography>
                  <Slider
                    value={temperatureValue}
                    onChange={(e, newValue) => setTemperatureValue(newValue)}
                    valueLabelDisplay='on'
                    min={0}
                    max={40}
                    marks={[
                      { value: 0, label: '0°C' },
                      { value: 20, label: '20°C' },
                      { value: 40, label: '40°C' }
                    ]}
                  />
                  <Box sx={{ mt: 2, p: 2, backgroundColor: '#f5f5f5', borderRadius: 1 }}>
                    <Typography variant='body2' color='text.secondary'>
                      현재 온도: {temperatureValue}°C
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Paper>

          {/* Modal 섹션 */}
          <Paper sx={{ p: 3 }}>
            <Typography variant='h5' sx={{ mb: 3, fontWeight: 600 }}>
              Modal
            </Typography>
            <Grid container spacing={3}>
              {/* 기본 Modal */}
              <Grid size={{ xs: 12, md: 6 }}>
                <Button
                  variant='contained'
                  fullWidth
                  onClick={handleOpenModal1}
                >
                  기본 Modal 열기
                </Button>
                <Dialog
                  open={openModal1}
                  onClose={handleCloseModal1}
                >
                  <DialogTitle>기본 Modal</DialogTitle>
                  <DialogContent>
                    <DialogContentText>
                      이것은 기본 Modal입니다. 배경을 클릭하거나 닫기 버튼을 눌러 닫을 수 있습니다.
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleCloseModal1} color='primary'>
                      닫기
                    </Button>
                  </DialogActions>
                </Dialog>
              </Grid>

              {/* 확인/취소 Modal */}
              <Grid size={{ xs: 12, md: 6 }}>
                <Button
                  variant='contained'
                  color='secondary'
                  fullWidth
                  onClick={handleOpenModal2}
                >
                  확인/취소 Modal 열기
                </Button>
                <Dialog
                  open={openModal2}
                  onClose={handleCloseModal2}
                >
                  <DialogTitle>작업 확인</DialogTitle>
                  <DialogContent>
                    <DialogContentText>
                      이 작업을 진행하시겠습니까? 확인을 누르면 작업이 실행되고, 취소를 누르면 창이 닫힙니다.
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleCloseModal2} color='inherit'>
                      취소
                    </Button>
                    <Button
                      onClick={() => {
                        alert('작업이 확인되었습니다!');
                        handleCloseModal2();
                      }}
                      color='primary'
                      variant='contained'
                    >
                      확인
                    </Button>
                  </DialogActions>
                </Dialog>
              </Grid>
            </Grid>

            {/* 설명 텍스트 */}
            <Box sx={{ mt: 3, p: 2, backgroundColor: '#f5f5f5', borderRadius: 1 }}>
              <Typography variant='body2' color='text.secondary'>
                Modal은 배경 클릭 또는 ESC 키로 닫을 수 있습니다. DialogTitle, DialogContent, DialogActions로 구조화되어 있습니다.
              </Typography>
            </Box>
          </Paper>

          {/* Card 섹션 */}
          <Paper sx={{ p: 3 }}>
            <Typography variant='h5' sx={{ mb: 3, fontWeight: 600 }}>
              Card
            </Typography>
            <Grid container spacing={3}>
              {/* 기본 Card */}
              <Grid size={{ xs: 12, md: 4 }}>
                <Card
                  sx={{
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: 6
                    }
                  }}
                >
                  <CardContent>
                    <Typography variant='h6' component='div' sx={{ mb: 2 }}>
                      기본 카드
                    </Typography>
                    <Typography variant='body2' color='text.secondary'>
                      이것은 기본 카드입니다. 호버하면 살짝 위로 올라가는 효과가 있습니다.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size='small' onClick={() => alert('더보기 클릭!')}>
                      더보기
                    </Button>
                    <Button size='small' color='primary'>
                      공유
                    </Button>
                  </CardActions>
                </Card>
              </Grid>

              {/* 프로필 Card */}
              <Grid size={{ xs: 12, md: 4 }}>
                <Card
                  sx={{
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: 6
                    }
                  }}
                >
                  <CardContent>
                    <Typography variant='h6' component='div' sx={{ mb: 2 }}>
                      프로필 카드
                    </Typography>
                    <Typography variant='body2' color='text.secondary' sx={{ mb: 1 }}>
                      이름: 홍길동
                    </Typography>
                    <Typography variant='body2' color='text.secondary' sx={{ mb: 1 }}>
                      직책: 개발자
                    </Typography>
                    <Typography variant='body2' color='text.secondary'>
                      이메일: hong@example.com
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size='small' variant='contained' onClick={() => alert('프로필 보기!')}>
                      프로필 보기
                    </Button>
                  </CardActions>
                </Card>
              </Grid>

              {/* 상품 Card */}
              <Grid size={{ xs: 12, md: 4 }}>
                <Card
                  sx={{
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: 6
                    }
                  }}
                >
                  <CardContent>
                    <Typography variant='h6' component='div' sx={{ mb: 2 }}>
                      상품 카드
                    </Typography>
                    <Typography variant='body2' color='text.secondary' sx={{ mb: 1 }}>
                      React 강의 패키지
                    </Typography>
                    <Typography variant='h5' color='primary' sx={{ mb: 1 }}>
                      $99.99
                    </Typography>
                    <Typography variant='body2' color='text.secondary'>
                      초보자부터 고급까지 모든 내용을 다루는 완전한 React 강의입니다.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size='small' variant='contained' color='primary' fullWidth onClick={() => alert('구매하기 클릭!')}>
                      구매하기
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            </Grid>

            {/* 설명 텍스트 */}
            <Box sx={{ mt: 3, p: 2, backgroundColor: '#f5f5f5', borderRadius: 1 }}>
              <Typography variant='body2' color='text.secondary'>
                카드에 마우스를 올리면 호버 효과가 나타납니다. CardContent와 CardActions로 구조화되어 있습니다.
              </Typography>
            </Box>
          </Paper>

          {/* Drag & Drop 섹션 */}
          <Paper sx={{ p: 3 }}>
            <Typography variant='h5' sx={{ mb: 3, fontWeight: 600 }}>
              Drag & Drop
            </Typography>
            <Grid container spacing={3}>
              {/* 드래그 가능한 아이템 영역 */}
              <Grid size={{ xs: 12, md: 6 }}>
                <Typography variant='h6' sx={{ mb: 2, fontWeight: 500 }}>
                  드래그 가능한 아이템
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  {availableItems.map((item) => (
                    <Card
                      key={item.id}
                      draggable
                      onDragStart={() => handleDragStart(item)}
                      onDragEnd={handleDragEnd}
                      sx={{
                        backgroundColor: item.color,
                        cursor: 'grab',
                        opacity: draggedItem?.id === item.id ? 0.5 : 1,
                        transition: 'all 0.3s ease',
                        border: '2px solid transparent',
                        '&:hover': {
                          transform: 'translateY(-4px)',
                          boxShadow: 3,
                          borderColor: 'primary.main'
                        },
                        '&:active': {
                          cursor: 'grabbing'
                        }
                      }}
                    >
                      <CardContent sx={{ py: 2 }}>
                        <Typography variant='body1' sx={{ fontWeight: 500 }}>
                          {item.name}
                        </Typography>
                        <Typography variant='body2' color='text.secondary'>
                          드래그하여 오른쪽 영역에 놓으세요
                        </Typography>
                      </CardContent>
                    </Card>
                  ))}
                </Box>
              </Grid>

              {/* 드롭 영역 */}
              <Grid size={{ xs: 12, md: 6 }}>
                <Typography variant='h6' sx={{ mb: 2, fontWeight: 500 }}>
                  드롭 영역
                </Typography>
                <Box
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  sx={{
                    minHeight: { xs: '200px', md: '300px' },
                    p: 3,
                    border: '3px dashed',
                    borderColor: isDraggingOver ? 'primary.main' : 'grey.400',
                    borderRadius: 2,
                    backgroundColor: isDraggingOver ? 'primary.light' : 'grey.50',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2
                  }}
                >
                  {droppedItems.length === 0 ? (
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '100%',
                        color: 'text.secondary'
                      }}
                    >
                      <Typography variant='body1' sx={{ mb: 1 }}>
                        여기에 아이템을 드래그하세요
                      </Typography>
                      <Typography variant='body2'>
                        {isDraggingOver ? '놓으세요!' : '아이템이 없습니다'}
                      </Typography>
                    </Box>
                  ) : (
                    droppedItems.map((item) => (
                      <Card
                        key={item.id}
                        sx={{
                          backgroundColor: item.color,
                          animation: 'fadeIn 0.3s ease'
                        }}
                      >
                        <CardContent sx={{ py: 2 }}>
                          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Typography variant='body1' sx={{ fontWeight: 500 }}>
                              {item.name}
                            </Typography>
                            <Button
                              size='small'
                              color='error'
                              onClick={() => handleRemoveItem(item.id)}
                            >
                              제거
                            </Button>
                          </Box>
                        </CardContent>
                      </Card>
                    ))
                  )}
                </Box>
              </Grid>
            </Grid>

            {/* 설명 텍스트 */}
            <Box sx={{ mt: 3, p: 2, backgroundColor: '#f5f5f5', borderRadius: 1 }}>
              <Typography variant='body2' color='text.secondary'>
                왼쪽 아이템을 드래그하여 오른쪽 드롭 영역에 놓을 수 있습니다. 드래그 중 시각적 피드백이 제공됩니다. 드롭된 아이템은 제거 버튼으로 삭제할 수 있습니다.
              </Typography>
            </Box>
          </Paper>

          {/* Scroll 섹션 */}
          <Paper sx={{ p: 3 }}>
            <Typography variant='h5' sx={{ mb: 3, fontWeight: 600 }}>
              Scroll
            </Typography>
            <Grid container spacing={3}>
              {/* 스크롤 컨트롤 영역 */}
              <Grid size={{ xs: 12, md: 4 }}>
                <Typography variant='h6' sx={{ mb: 2, fontWeight: 500 }}>
                  스크롤 컨트롤
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <Button
                    variant='contained'
                    fullWidth
                    onClick={scrollToTop}
                    disabled={isAtTop}
                  >
                    맨 위로
                  </Button>
                  <Button
                    variant='contained'
                    color='secondary'
                    fullWidth
                    onClick={scrollToMiddle}
                  >
                    중간으로
                  </Button>
                  <Button
                    variant='contained'
                    color='success'
                    fullWidth
                    onClick={scrollToBottom}
                    disabled={isAtBottom}
                  >
                    맨 아래로
                  </Button>
                </Box>

                {/* 스크롤 위치 표시 */}
                <Box sx={{ mt: 3, p: 2, backgroundColor: '#f5f5f5', borderRadius: 1 }}>
                  <Typography variant='body2' color='text.secondary' sx={{ mb: 1 }}>
                    스크롤 위치:
                  </Typography>
                  <Typography variant='h6' color='primary' sx={{ mb: 2 }}>
                    {scrollPosition}px
                  </Typography>
                  <Typography variant='body2' color='text.secondary' sx={{ mb: 1 }}>
                    진행률:
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Box
                      sx={{
                        flex: 1,
                        height: 8,
                        backgroundColor: 'grey.300',
                        borderRadius: 1,
                        overflow: 'hidden'
                      }}
                    >
                      <Box
                        sx={{
                          width: `${scrollPercentage}%`,
                          height: '100%',
                          backgroundColor: 'primary.main',
                          transition: 'width 0.1s ease'
                        }}
                      />
                    </Box>
                    <Typography variant='body2' sx={{ fontWeight: 600, minWidth: '45px' }}>
                      {scrollPercentage}%
                    </Typography>
                  </Box>
                  <Box sx={{ mt: 2, display: 'flex', gap: 1 }}>
                    <Box
                      sx={{
                        px: 1.5,
                        py: 0.5,
                        borderRadius: 1,
                        backgroundColor: isAtTop ? 'success.light' : 'grey.200',
                        color: isAtTop ? 'success.dark' : 'text.secondary'
                      }}
                    >
                      <Typography variant='caption'>
                        맨 위 {isAtTop ? '✓' : ''}
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        px: 1.5,
                        py: 0.5,
                        borderRadius: 1,
                        backgroundColor: isAtBottom ? 'success.light' : 'grey.200',
                        color: isAtBottom ? 'success.dark' : 'text.secondary'
                      }}
                    >
                      <Typography variant='caption'>
                        맨 아래 {isAtBottom ? '✓' : ''}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>

              {/* 스크롤 컨테이너 영역 */}
              <Grid size={{ xs: 12, md: 8 }}>
                <Typography variant='h6' sx={{ mb: 2, fontWeight: 500 }}>
                  스크롤 컨테이너 (고정 높이: 400px)
                </Typography>
                <Box
                  id='scroll-container'
                  onScroll={handleScroll}
                  sx={{
                    height: '400px',
                    overflowY: 'scroll',
                    border: '2px solid',
                    borderColor: 'primary.main',
                    borderRadius: 2,
                    p: 3,
                    backgroundColor: 'white',
                    '&::-webkit-scrollbar': {
                      width: '8px'
                    },
                    '&::-webkit-scrollbar-track': {
                      backgroundColor: 'grey.200',
                      borderRadius: '4px'
                    },
                    '&::-webkit-scrollbar-thumb': {
                      backgroundColor: 'primary.main',
                      borderRadius: '4px',
                      '&:hover': {
                        backgroundColor: 'primary.dark'
                      }
                    }
                  }}
                >
                  <Typography variant='h6' sx={{ mb: 2, fontWeight: 600 }}>
                    긴 콘텐츠 영역
                  </Typography>
                  {[...Array(20)].map((_, index) => (
                    <Box key={index} sx={{ mb: 2 }}>
                      <Paper
                        elevation={2}
                        sx={{
                          p: 2,
                          backgroundColor: index % 2 === 0 ? '#e3f2fd' : '#f3e5f5',
                          transition: 'transform 0.2s ease',
                          '&:hover': {
                            transform: 'translateX(8px)',
                            boxShadow: 3
                          }
                        }}
                      >
                        <Typography variant='body1' sx={{ fontWeight: 500, mb: 1 }}>
                          섹션 {index + 1}
                        </Typography>
                        <Typography variant='body2' color='text.secondary'>
                          이것은 스크롤 테스트를 위한 콘텐츠입니다. 각 섹션은 마우스를 올리면 오른쪽으로 이동합니다.
                          스크롤을 내리면 상단의 스크롤 위치와 진행률이 실시간으로 업데이트됩니다.
                        </Typography>
                      </Paper>
                    </Box>
                  ))}
                  <Box
                    sx={{
                      mt: 3,
                      p: 3,
                      backgroundColor: 'success.light',
                      borderRadius: 2,
                      textAlign: 'center'
                    }}
                  >
                    <Typography variant='h6' sx={{ fontWeight: 600, color: 'success.dark' }}>
                      축하합니다! 맨 아래에 도착했습니다!
                    </Typography>
                    <Typography variant='body2' sx={{ mt: 1, color: 'success.dark' }}>
                      왼쪽 컨트롤 버튼을 사용하여 다른 위치로 이동할 수 있습니다.
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>

            {/* 설명 텍스트 */}
            <Box sx={{ mt: 3, p: 2, backgroundColor: '#f5f5f5', borderRadius: 1 }}>
              <Typography variant='body2' color='text.secondary'>
                오른쪽의 고정 높이 컨테이너를 스크롤하면 왼쪽에 실시간으로 스크롤 위치와 진행률이 표시됩니다.
                컨트롤 버튼을 사용하여 특정 위치로 부드럽게 이동할 수 있습니다.
              </Typography>
            </Box>
          </Paper>

          {/* Animation 섹션 */}
          <Paper sx={{ p: 3 }}>
            <Typography variant='h5' sx={{ mb: 3, fontWeight: 600 }}>
              Animation
            </Typography>
            <Grid container spacing={3}>
              {/* 페이드 인/아웃 애니메이션 */}
              <Grid size={{ xs: 12, md: 6, lg: 3 }}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant='h6' sx={{ mb: 2, fontWeight: 500 }}>
                    페이드 인/아웃
                  </Typography>
                  <Box
                    sx={{
                      height: 150,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: '#e3f2fd',
                      borderRadius: 2,
                      mb: 2,
                      overflow: 'hidden'
                    }}
                  >
                    <Card
                      sx={{
                        width: 100,
                        height: 100,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'primary.main',
                        opacity: fadeAnimation ? 1 : 0,
                        transition: 'opacity 2s ease-in-out'
                      }}
                    >
                      <Typography variant='h4' sx={{ color: 'white', fontWeight: 600 }}>
                        A
                      </Typography>
                    </Card>
                  </Box>
                  <Button
                    variant='contained'
                    fullWidth
                    onClick={handleFadeAnimation}
                    disabled={fadeAnimation}
                  >
                    재생
                  </Button>
                </Box>
              </Grid>

              {/* 크기 변화 애니메이션 */}
              <Grid size={{ xs: 12, md: 6, lg: 3 }}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant='h6' sx={{ mb: 2, fontWeight: 500 }}>
                    크기 변화
                  </Typography>
                  <Box
                    sx={{
                      height: 150,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: '#f3e5f5',
                      borderRadius: 2,
                      mb: 2,
                      overflow: 'hidden'
                    }}
                  >
                    <Card
                      sx={{
                        width: 100,
                        height: 100,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'secondary.main',
                        transform: scaleAnimation ? 'scale(1.5)' : 'scale(1)',
                        transition: 'transform 2s ease-in-out'
                      }}
                    >
                      <Typography variant='h4' sx={{ color: 'white', fontWeight: 600 }}>
                        B
                      </Typography>
                    </Card>
                  </Box>
                  <Button
                    variant='contained'
                    color='secondary'
                    fullWidth
                    onClick={handleScaleAnimation}
                    disabled={scaleAnimation}
                  >
                    재생
                  </Button>
                </Box>
              </Grid>

              {/* 회전 애니메이션 */}
              <Grid size={{ xs: 12, md: 6, lg: 3 }}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant='h6' sx={{ mb: 2, fontWeight: 500 }}>
                    회전 효과
                  </Typography>
                  <Box
                    sx={{
                      height: 150,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: '#e8f5e9',
                      borderRadius: 2,
                      mb: 2,
                      overflow: 'hidden'
                    }}
                  >
                    <Card
                      sx={{
                        width: 100,
                        height: 100,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'success.main',
                        transform: rotateAnimation ? 'rotate(360deg)' : 'rotate(0deg)',
                        transition: 'transform 2s ease-in-out'
                      }}
                    >
                      <Typography variant='h4' sx={{ color: 'white', fontWeight: 600 }}>
                        C
                      </Typography>
                    </Card>
                  </Box>
                  <Button
                    variant='contained'
                    color='success'
                    fullWidth
                    onClick={handleRotateAnimation}
                    disabled={rotateAnimation}
                  >
                    재생
                  </Button>
                </Box>
              </Grid>

              {/* 모든 애니메이션 */}
              <Grid size={{ xs: 12, md: 6, lg: 3 }}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant='h6' sx={{ mb: 2, fontWeight: 500 }}>
                    모든 효과
                  </Typography>
                  <Box
                    sx={{
                      height: 150,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: '#fff3e0',
                      borderRadius: 2,
                      mb: 2,
                      overflow: 'hidden'
                    }}
                  >
                    <Card
                      sx={{
                        width: 100,
                        height: 100,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'error.main',
                        opacity: allAnimation ? 1 : 0,
                        transform: allAnimation ? 'scale(1.5) rotate(360deg)' : 'scale(1) rotate(0deg)',
                        transition: 'all 3s ease-in-out'
                      }}
                    >
                      <Typography variant='h4' sx={{ color: 'white', fontWeight: 600 }}>
                        D
                      </Typography>
                    </Card>
                  </Box>
                  <Button
                    variant='contained'
                    color='error'
                    fullWidth
                    onClick={handleAllAnimation}
                    disabled={allAnimation}
                  >
                    재생
                  </Button>
                </Box>
              </Grid>
            </Grid>

            {/* 애니메이션 상태 표시 */}
            <Box sx={{ mt: 3, p: 2, backgroundColor: '#f5f5f5', borderRadius: 1 }}>
              <Typography variant='body2' color='text.secondary' sx={{ mb: 2 }}>
                애니메이션 상태:
              </Typography>
              <Grid container spacing={1}>
                <Grid size={{ xs: 6, md: 3 }}>
                  <Box
                    sx={{
                      p: 1,
                      borderRadius: 1,
                      backgroundColor: fadeAnimation ? 'primary.light' : 'grey.200',
                      textAlign: 'center'
                    }}
                  >
                    <Typography variant='caption' sx={{ fontWeight: 500 }}>
                      페이드: {fadeAnimation ? '재생 중' : '대기'}
                    </Typography>
                  </Box>
                </Grid>
                <Grid size={{ xs: 6, md: 3 }}>
                  <Box
                    sx={{
                      p: 1,
                      borderRadius: 1,
                      backgroundColor: scaleAnimation ? 'secondary.light' : 'grey.200',
                      textAlign: 'center'
                    }}
                  >
                    <Typography variant='caption' sx={{ fontWeight: 500 }}>
                      크기: {scaleAnimation ? '재생 중' : '대기'}
                    </Typography>
                  </Box>
                </Grid>
                <Grid size={{ xs: 6, md: 3 }}>
                  <Box
                    sx={{
                      p: 1,
                      borderRadius: 1,
                      backgroundColor: rotateAnimation ? 'success.light' : 'grey.200',
                      textAlign: 'center'
                    }}
                  >
                    <Typography variant='caption' sx={{ fontWeight: 500 }}>
                      회전: {rotateAnimation ? '재생 중' : '대기'}
                    </Typography>
                  </Box>
                </Grid>
                <Grid size={{ xs: 6, md: 3 }}>
                  <Box
                    sx={{
                      p: 1,
                      borderRadius: 1,
                      backgroundColor: allAnimation ? 'error.light' : 'grey.200',
                      textAlign: 'center'
                    }}
                  >
                    <Typography variant='caption' sx={{ fontWeight: 500 }}>
                      전체: {allAnimation ? '재생 중' : '대기'}
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>

            {/* 설명 텍스트 */}
            <Box sx={{ mt: 3, p: 2, backgroundColor: '#f5f5f5', borderRadius: 1 }}>
              <Typography variant='body2' color='text.secondary'>
                각 애니메이션 버튼을 클릭하여 CSS 트랜지션 효과를 확인할 수 있습니다.
                애니메이션이 실행되는 동안 버튼이 비활성화되며, 하단에 현재 실행 중인 애니메이션이 표시됩니다.
              </Typography>
            </Box>
          </Paper>

          {/* Menu 섹션 */}
          <Paper sx={{ p: 3 }}>
            <Typography variant='h5' sx={{ mb: 3, fontWeight: 600 }}>
              Menu
            </Typography>
            <Grid container spacing={3}>
              {/* 기본 메뉴 */}
              <Grid size={{ xs: 12, md: 4 }}>
                <Box>
                  <Typography variant='h6' sx={{ mb: 2, fontWeight: 500 }}>
                    기본 메뉴
                  </Typography>
                  <Button
                    variant='contained'
                    fullWidth
                    onClick={handleMenu1Open}
                  >
                    기본 메뉴 열기
                  </Button>
                  <Menu
                    anchorEl={menu1Anchor}
                    open={Boolean(menu1Anchor)}
                    onClose={handleMenu1Close}
                  >
                    <MenuItem onClick={() => handleMenu1ItemClick('홈')}>홈</MenuItem>
                    <MenuItem onClick={() => handleMenu1ItemClick('소개')}>소개</MenuItem>
                    <MenuItem onClick={() => handleMenu1ItemClick('서비스')}>서비스</MenuItem>
                    <MenuItem onClick={() => handleMenu1ItemClick('연락처')}>연락처</MenuItem>
                  </Menu>
                </Box>
              </Grid>

              {/* 설정 메뉴 */}
              <Grid size={{ xs: 12, md: 4 }}>
                <Box>
                  <Typography variant='h6' sx={{ mb: 2, fontWeight: 500 }}>
                    설정 메뉴
                  </Typography>
                  <Button
                    variant='contained'
                    color='secondary'
                    fullWidth
                    onClick={handleMenu2Open}
                  >
                    설정 메뉴 열기
                  </Button>
                  <Menu
                    anchorEl={menu2Anchor}
                    open={Boolean(menu2Anchor)}
                    onClose={handleMenu2Close}
                  >
                    <MenuItem onClick={() => handleMenu2ItemClick('계정 설정')}>계정 설정</MenuItem>
                    <MenuItem onClick={() => handleMenu2ItemClick('알림 설정')}>알림 설정</MenuItem>
                    <MenuItem onClick={() => handleMenu2ItemClick('개인정보 보호')}>개인정보 보호</MenuItem>
                  </Menu>
                </Box>
              </Grid>

              {/* 프로필 메뉴 */}
              <Grid size={{ xs: 12, md: 4 }}>
                <Box>
                  <Typography variant='h6' sx={{ mb: 2, fontWeight: 500 }}>
                    프로필 메뉴
                  </Typography>
                  <Button
                    variant='contained'
                    color='success'
                    fullWidth
                    onClick={handleMenu3Open}
                  >
                    프로필 메뉴 열기
                  </Button>
                  <Menu
                    anchorEl={menu3Anchor}
                    open={Boolean(menu3Anchor)}
                    onClose={handleMenu3Close}
                  >
                    <MenuItem onClick={() => handleMenu3ItemClick('내 프로필')}>내 프로필</MenuItem>
                    <MenuItem onClick={() => handleMenu3ItemClick('내 활동')}>내 활동</MenuItem>
                    <MenuItem onClick={() => handleMenu3ItemClick('즐겨찾기')}>즐겨찾기</MenuItem>
                    <MenuItem onClick={() => handleMenu3ItemClick('로그아웃')}>로그아웃</MenuItem>
                  </Menu>
                </Box>
              </Grid>
            </Grid>

            {/* 메뉴 상태 표시 */}
            <Box sx={{ mt: 3, p: 2, backgroundColor: '#f5f5f5', borderRadius: 1 }}>
              <Typography variant='body2' color='text.secondary' sx={{ mb: 1 }}>
                메뉴 상태:
              </Typography>
              <Grid container spacing={1}>
                <Grid size={{ xs: 12, md: 4 }}>
                  <Box
                    sx={{
                      p: 1.5,
                      borderRadius: 1,
                      backgroundColor: Boolean(menu1Anchor) ? 'primary.light' : 'grey.200',
                      textAlign: 'center'
                    }}
                  >
                    <Typography variant='body2' sx={{ fontWeight: 500 }}>
                      기본 메뉴: {Boolean(menu1Anchor) ? '열림' : '닫힘'}
                    </Typography>
                  </Box>
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                  <Box
                    sx={{
                      p: 1.5,
                      borderRadius: 1,
                      backgroundColor: Boolean(menu2Anchor) ? 'secondary.light' : 'grey.200',
                      textAlign: 'center'
                    }}
                  >
                    <Typography variant='body2' sx={{ fontWeight: 500 }}>
                      설정 메뉴: {Boolean(menu2Anchor) ? '열림' : '닫힘'}
                    </Typography>
                  </Box>
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                  <Box
                    sx={{
                      p: 1.5,
                      borderRadius: 1,
                      backgroundColor: Boolean(menu3Anchor) ? 'success.light' : 'grey.200',
                      textAlign: 'center'
                    }}
                  >
                    <Typography variant='body2' sx={{ fontWeight: 500 }}>
                      프로필 메뉴: {Boolean(menu3Anchor) ? '열림' : '닫힘'}
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>

            {/* 마지막 메뉴 액션 표시 */}
            {lastMenuAction && (
              <Box sx={{ mt: 2, p: 2, backgroundColor: '#e3f2fd', borderRadius: 1 }}>
                <Typography variant='body2' color='primary' sx={{ fontWeight: 500 }}>
                  마지막 액션: {lastMenuAction}
                </Typography>
              </Box>
            )}

            {/* 설명 텍스트 */}
            <Box sx={{ mt: 3, p: 2, backgroundColor: '#f5f5f5', borderRadius: 1 }}>
              <Typography variant='body2' color='text.secondary'>
                각 버튼을 클릭하여 MUI Menu를 열 수 있습니다. 메뉴 아이템을 선택하면 알림이 표시되고,
                마지막 선택한 항목이 하단에 표시됩니다. 메뉴 외부를 클릭하거나 ESC 키를 눌러 닫을 수 있습니다.
              </Typography>
            </Box>
          </Paper>

          {/* Sidebar 섹션 */}
          <Paper sx={{ p: 3 }}>
            <Typography variant='h5' sx={{ mb: 3, fontWeight: 600 }}>
              Sidebar (Drawer)
            </Typography>
            <Grid container spacing={3}>
              {/* 왼쪽 사이드바 */}
              <Grid size={{ xs: 12, md: 6 }}>
                <Box>
                  <Typography variant='h6' sx={{ mb: 2, fontWeight: 500 }}>
                    왼쪽 사이드바
                  </Typography>
                  <Button
                    variant='contained'
                    fullWidth
                    onClick={toggleLeftDrawer(true)}
                  >
                    왼쪽 사이드바 열기
                  </Button>
                  <Drawer
                    anchor='left'
                    open={leftDrawerOpen}
                    onClose={toggleLeftDrawer(false)}
                  >
                    <Box
                      sx={{ width: 250 }}
                      role='presentation'
                    >
                      <Box sx={{ p: 2, backgroundColor: 'primary.main' }}>
                        <Typography variant='h6' sx={{ color: 'white', fontWeight: 600 }}>
                          메인 메뉴
                        </Typography>
                      </Box>
                      <List>
                        <ListItem disablePadding>
                          <ListItemButton onClick={() => handleSidebarItemClick('왼쪽', '홈')}>
                            <ListItemIcon>
                              <HomeIcon />
                            </ListItemIcon>
                            <ListItemText primary='홈' />
                          </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                          <ListItemButton onClick={() => handleSidebarItemClick('왼쪽', '프로필')}>
                            <ListItemIcon>
                              <PersonIcon />
                            </ListItemIcon>
                            <ListItemText primary='프로필' />
                          </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                          <ListItemButton onClick={() => handleSidebarItemClick('왼쪽', '설정')}>
                            <ListItemIcon>
                              <SettingsIcon />
                            </ListItemIcon>
                            <ListItemText primary='설정' />
                          </ListItemButton>
                        </ListItem>
                      </List>
                      <Divider />
                      <List>
                        <ListItem disablePadding>
                          <ListItemButton onClick={() => handleSidebarItemClick('왼쪽', '정보')}>
                            <ListItemIcon>
                              <InfoIcon />
                            </ListItemIcon>
                            <ListItemText primary='정보' />
                          </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                          <ListItemButton onClick={() => handleSidebarItemClick('왼쪽', '로그아웃')}>
                            <ListItemIcon>
                              <ExitToAppIcon />
                            </ListItemIcon>
                            <ListItemText primary='로그아웃' />
                          </ListItemButton>
                        </ListItem>
                      </List>
                    </Box>
                  </Drawer>
                  <Box sx={{ mt: 2, p: 2, backgroundColor: '#f5f5f5', borderRadius: 1 }}>
                    <Typography variant='body2' color='text.secondary'>
                      상태: {leftDrawerOpen ? '열림' : '닫힘'}
                    </Typography>
                  </Box>
                </Box>
              </Grid>

              {/* 오른쪽 사이드바 */}
              <Grid size={{ xs: 12, md: 6 }}>
                <Box>
                  <Typography variant='h6' sx={{ mb: 2, fontWeight: 500 }}>
                    오른쪽 사이드바
                  </Typography>
                  <Button
                    variant='contained'
                    color='secondary'
                    fullWidth
                    onClick={toggleRightDrawer(true)}
                  >
                    오른쪽 사이드바 열기
                  </Button>
                  <Drawer
                    anchor='right'
                    open={rightDrawerOpen}
                    onClose={toggleRightDrawer(false)}
                  >
                    <Box
                      sx={{ width: 250 }}
                      role='presentation'
                    >
                      <Box sx={{ p: 2, backgroundColor: 'secondary.main' }}>
                        <Typography variant='h6' sx={{ color: 'white', fontWeight: 600 }}>
                          빠른 액세스
                        </Typography>
                      </Box>
                      <List>
                        <ListItem disablePadding>
                          <ListItemButton onClick={() => handleSidebarItemClick('오른쪽', '최근 활동')}>
                            <ListItemIcon>
                              <InfoIcon />
                            </ListItemIcon>
                            <ListItemText primary='최근 활동' />
                          </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                          <ListItemButton onClick={() => handleSidebarItemClick('오른쪽', '알림')}>
                            <ListItemIcon>
                              <SettingsIcon />
                            </ListItemIcon>
                            <ListItemText primary='알림' />
                          </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                          <ListItemButton onClick={() => handleSidebarItemClick('오른쪽', '즐겨찾기')}>
                            <ListItemIcon>
                              <HomeIcon />
                            </ListItemIcon>
                            <ListItemText primary='즐겨찾기' />
                          </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                          <ListItemButton onClick={() => handleSidebarItemClick('오른쪽', '메시지')}>
                            <ListItemIcon>
                              <PersonIcon />
                            </ListItemIcon>
                            <ListItemText primary='메시지' />
                          </ListItemButton>
                        </ListItem>
                      </List>
                    </Box>
                  </Drawer>
                  <Box sx={{ mt: 2, p: 2, backgroundColor: '#f5f5f5', borderRadius: 1 }}>
                    <Typography variant='body2' color='text.secondary'>
                      상태: {rightDrawerOpen ? '열림' : '닫힘'}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>

            {/* 마지막 사이드바 액션 표시 */}
            {lastSidebarAction && (
              <Box sx={{ mt: 3, p: 2, backgroundColor: '#e3f2fd', borderRadius: 1 }}>
                <Typography variant='body2' color='primary' sx={{ fontWeight: 500 }}>
                  마지막 액션: {lastSidebarAction}
                </Typography>
              </Box>
            )}

            {/* 설명 텍스트 */}
            <Box sx={{ mt: 3, p: 2, backgroundColor: '#f5f5f5', borderRadius: 1 }}>
              <Typography variant='body2' color='text.secondary'>
                버튼을 클릭하여 왼쪽 또는 오른쪽에서 MUI Drawer를 열 수 있습니다.
                사이드바 메뉴 아이템을 클릭하면 알림이 표시되고 자동으로 닫힙니다.
                사이드바 외부를 클릭하거나 ESC 키를 눌러 닫을 수도 있습니다.
              </Typography>
            </Box>
          </Paper>

          {/* Flexbox Navigation 섹션 */}
          <Paper sx={{ p: 3 }}>
            <Typography variant='h5' sx={{ mb: 3, fontWeight: 600 }}>
              Flexbox Navigation
            </Typography>

            {/* 실제 네비게이션 데모 */}
            <Box sx={{ mb: 3 }}>
              <Typography variant='h6' sx={{ mb: 2, fontWeight: 500 }}>
                Flexbox 네비게이션 데모
              </Typography>

              {/* 네비게이션 박스 */}
              <Box
                sx={{
                  width: '100%',
                  height: '60px',
                  backgroundColor: '#2d3748',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  px: 3,
                  borderRadius: 1,
                  boxShadow: 3
                }}
              >
                {/* 로고 박스 (왼쪽) */}
                <Box>
                  <Typography
                    sx={{
                      color: 'white',
                      fontWeight: 700,
                      fontSize: '20px',
                      cursor: 'pointer',
                      '&:hover': {
                        opacity: 0.8
                      }
                    }}
                  >
                    MyWebsite
                  </Typography>
                </Box>

                {/* 메뉴들 박스 (오른쪽) */}
                <Box
                  sx={{
                    display: 'flex',
                    gap: '15px',
                    alignItems: 'center'
                  }}
                >
                  {['홈', '소개', '상품', '연락처', '설정'].map((menu) => (
                    <Typography
                      key={menu}
                      onClick={() => handleNavMenuClick(menu)}
                      sx={{
                        color: selectedMenu === menu ? 'white' : '#a0aec0',
                        fontSize: '16px',
                        cursor: 'pointer',
                        transition: 'color 0.3s ease',
                        fontWeight: selectedMenu === menu ? 600 : 400,
                        '&:hover': {
                          color: 'white'
                        }
                      }}
                    >
                      {menu}
                    </Typography>
                  ))}
                </Box>
              </Box>
            </Box>

            {/* 선택된 메뉴 정보 */}
            <Box sx={{ mb: 3, p: 2, backgroundColor: '#e3f2fd', borderRadius: 1 }}>
              <Typography variant='body1' sx={{ fontWeight: 600, mb: 1, color: 'primary.main' }}>
                선택된 메뉴: {selectedMenu}
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                클릭 횟수: {clickCount[selectedMenu]}회
              </Typography>
            </Box>

            {/* 메뉴별 통계 */}
            <Box sx={{ mb: 3 }}>
              <Typography variant='h6' sx={{ mb: 2, fontWeight: 600 }}>
                메뉴별 클릭 통계
              </Typography>
              <Grid container spacing={2}>
                {Object.entries(clickCount).map(([menu, count]) => (
                  <Grid key={menu} size={{ xs: 6, sm: 4, md: 2.4 }}>
                    <Paper
                      elevation={2}
                      sx={{
                        p: 2,
                        textAlign: 'center',
                        backgroundColor: selectedMenu === menu ? 'primary.light' : 'grey.100',
                        transition: 'background-color 0.3s ease'
                      }}
                    >
                      <Typography variant='body1' sx={{ fontWeight: 600, mb: 1 }}>
                        {menu}
                      </Typography>
                      <Typography variant='h4' sx={{ fontWeight: 600, color: 'primary.main' }}>
                        {count}
                      </Typography>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </Box>

            {/* HTML/CSS 코드 예제 */}
            <Box sx={{ mb: 3 }}>
              <Typography variant='h6' sx={{ mb: 2, fontWeight: 600 }}>
                HTML 구조
              </Typography>
              <Paper
                elevation={1}
                sx={{
                  p: 2,
                  backgroundColor: '#1e1e1e',
                  color: '#d4d4d4',
                  fontFamily: 'monospace',
                  fontSize: '14px',
                  overflowX: 'auto',
                  borderRadius: 1
                }}
              >
                <pre style={{ margin: 0 }}>
{`<div class="navbar">
  <div class="logo">
    MyWebsite
  </div>
  <div class="menu-items">
    <div class="menu-item">홈</div>
    <div class="menu-item">소개</div>
    <div class="menu-item">상품</div>
    <div class="menu-item">연락처</div>
    <div class="menu-item">설정</div>
  </div>
</div>`}
                </pre>
              </Paper>
            </Box>

            <Box sx={{ mb: 3 }}>
              <Typography variant='h6' sx={{ mb: 2, fontWeight: 600 }}>
                CSS 스타일
              </Typography>
              <Paper
                elevation={1}
                sx={{
                  p: 2,
                  backgroundColor: '#1e1e1e',
                  color: '#d4d4d4',
                  fontFamily: 'monospace',
                  fontSize: '14px',
                  overflowX: 'auto',
                  borderRadius: 1
                }}
              >
                <pre style={{ margin: 0 }}>
{`.navbar {
  width: 100%;
  height: 60px;
  background-color: #2d3748;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
}

.logo {
  color: white;
  font-weight: 700;
  font-size: 20px;
  cursor: pointer;
}

.logo:hover {
  opacity: 0.8;
}

.menu-items {
  display: flex;
  gap: 15px;
  align-items: center;
}

.menu-item {
  color: #a0aec0;
  font-size: 16px;
  cursor: pointer;
  transition: color 0.3s ease;
}

.menu-item:hover {
  color: white;
}`}
                </pre>
              </Paper>
            </Box>

            {/* Flexbox 설명 */}
            <Box sx={{ mb: 3, p: 2, backgroundColor: '#fff3e0', borderRadius: 1 }}>
              <Typography variant='body1' sx={{ fontWeight: 600, mb: 1, color: 'warning.dark' }}>
                Flexbox 핵심 속성:
              </Typography>
              <Typography variant='body2' color='text.secondary' component='div'>
                <Box component='ul' sx={{ pl: 2, m: 0 }}>
                  <li><strong>display: flex</strong> - 플렉스 컨테이너 생성</li>
                  <li><strong>justify-content: space-between</strong> - 양 끝 정렬</li>
                  <li><strong>align-items: center</strong> - 세로 중앙 정렬</li>
                  <li><strong>gap: 15px</strong> - 메뉴 항목 간 간격</li>
                </Box>
              </Typography>
            </Box>

            {/* 추가 레이아웃 패턴 */}
            <Box sx={{ mb: 3 }}>
              <Typography variant='h6' sx={{ mb: 2, fontWeight: 600 }}>
                다양한 Flexbox 정렬 패턴
              </Typography>
              <Grid container spacing={2}>
                {/* 왼쪽 정렬 */}
                <Grid size={{ xs: 12, md: 4 }}>
                  <Paper elevation={2} sx={{ p: 2 }}>
                    <Typography variant='body2' sx={{ mb: 1, fontWeight: 600 }}>
                      justify-content: flex-start
                    </Typography>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        gap: 1,
                        p: 1,
                        backgroundColor: '#f5f5f5',
                        borderRadius: 1
                      }}
                    >
                      {[1, 2, 3].map((n) => (
                        <Box
                          key={n}
                          sx={{
                            width: 40,
                            height: 40,
                            backgroundColor: 'primary.main',
                            borderRadius: 1
                          }}
                        />
                      ))}
                    </Box>
                  </Paper>
                </Grid>

                {/* 중앙 정렬 */}
                <Grid size={{ xs: 12, md: 4 }}>
                  <Paper elevation={2} sx={{ p: 2 }}>
                    <Typography variant='body2' sx={{ mb: 1, fontWeight: 600 }}>
                      justify-content: center
                    </Typography>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: 1,
                        p: 1,
                        backgroundColor: '#f5f5f5',
                        borderRadius: 1
                      }}
                    >
                      {[1, 2, 3].map((n) => (
                        <Box
                          key={n}
                          sx={{
                            width: 40,
                            height: 40,
                            backgroundColor: 'secondary.main',
                            borderRadius: 1
                          }}
                        />
                      ))}
                    </Box>
                  </Paper>
                </Grid>

                {/* 균등 분배 */}
                <Grid size={{ xs: 12, md: 4 }}>
                  <Paper elevation={2} sx={{ p: 2 }}>
                    <Typography variant='body2' sx={{ mb: 1, fontWeight: 600 }}>
                      justify-content: space-around
                    </Typography>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-around',
                        gap: 1,
                        p: 1,
                        backgroundColor: '#f5f5f5',
                        borderRadius: 1
                      }}
                    >
                      {[1, 2, 3].map((n) => (
                        <Box
                          key={n}
                          sx={{
                            width: 40,
                            height: 40,
                            backgroundColor: 'success.main',
                            borderRadius: 1
                          }}
                        />
                      ))}
                    </Box>
                  </Paper>
                </Grid>
              </Grid>
            </Box>

            {/* 설명 텍스트 */}
            <Box sx={{ mt: 3, p: 2, backgroundColor: '#f5f5f5', borderRadius: 1 }}>
              <Typography variant='body2' color='text.secondary'>
                Flexbox는 현대 웹 레이아웃의 핵심 기술입니다.
                <strong> display: flex</strong>로 플렉스 컨테이너를 만들고,
                <strong> justify-content</strong>로 가로 정렬,
                <strong> align-items</strong>로 세로 정렬을 제어합니다.
                위의 네비게이션은 <strong>space-between</strong>을 사용하여 로고와 메뉴를 양 끝에 배치했습니다.
              </Typography>
            </Box>
          </Paper>

          {/* Swipe 섹션 */}
          <Paper sx={{ p: 3 }}>
            <Typography variant='h5' sx={{ mb: 3, fontWeight: 600 }}>
              Swipe (스와이프)
            </Typography>
            <Grid container spacing={3}>
              {/* 스와이프 데모 영역 */}
              <Grid size={{ xs: 12 }}>
                <Typography variant='h6' sx={{ mb: 2, fontWeight: 500 }}>
                  스와이프 영역
                </Typography>
                <Box
                  onTouchStart={handleTouchStart}
                  onTouchMove={handleTouchMove}
                  onTouchEnd={handleTouchEnd}
                  onMouseDown={handleMouseStart}
                  onMouseMove={handleMouseMove}
                  onMouseUp={handleMouseEnd}
                  onMouseLeave={handleMouseEnd}
                  sx={{
                    width: '100%',
                    height: { xs: 250, md: 300 },
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: swipeDirection === '왼쪽' ? '#e3f2fd' : swipeDirection === '오른쪽' ? '#f3e5f5' : '#f5f5f5',
                    borderRadius: 2,
                    border: '3px dashed',
                    borderColor: isDragging ? 'primary.main' : 'grey.400',
                    cursor: isDragging ? 'grabbing' : 'grab',
                    userSelect: 'none',
                    transition: 'background-color 0.3s ease, border-color 0.3s ease',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  {/* 스와이프 표시 박스 */}
                  <Box
                    sx={{
                      width: 120,
                      height: 120,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: 'white',
                      borderRadius: 2,
                      boxShadow: 3,
                      transform: `translateX(${currentPosition}px)`,
                      transition: isDragging ? 'none' : 'transform 0.3s ease'
                    }}
                  >
                    <Typography variant='h4' sx={{ fontWeight: 600, color: 'primary.main' }}>
                      {swipeDirection === '왼쪽' ? '←' : swipeDirection === '오른쪽' ? '→' : '↔'}
                    </Typography>
                  </Box>

                  <Typography variant='h6' sx={{ mt: 2, fontWeight: 500, color: 'text.secondary' }}>
                    {isDragging ? '드래그 중...' : '좌우로 스와이프하세요'}
                  </Typography>

                  {/* 방향 표시 화살표 */}
                  {swipeDirection && (
                    <Box
                      sx={{
                        position: 'absolute',
                        top: '50%',
                        left: swipeDirection === '왼쪽' ? '10%' : '90%',
                        transform: 'translateY(-50%)',
                        fontSize: '4rem',
                        animation: 'fadeOut 0.5s ease-out',
                        '@keyframes fadeOut': {
                          '0%': { opacity: 1, transform: 'translateY(-50%) scale(1)' },
                          '100%': { opacity: 0, transform: 'translateY(-50%) scale(1.5)' }
                        }
                      }}
                    >
                      {swipeDirection === '왼쪽' ? '⬅' : '➡'}
                    </Box>
                  )}
                </Box>
              </Grid>

              {/* 스와이프 통계 */}
              <Grid size={{ xs: 12, md: 6 }}>
                <Paper elevation={2} sx={{ p: 2, backgroundColor: '#e3f2fd' }}>
                  <Typography variant='h6' sx={{ mb: 2, fontWeight: 600, color: 'primary.main' }}>
                    왼쪽 스와이프
                  </Typography>
                  <Typography variant='h3' sx={{ fontWeight: 600, color: 'primary.main' }}>
                    {swipeCount.left}
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    횟수
                  </Typography>
                </Paper>
              </Grid>

              <Grid size={{ xs: 12, md: 6 }}>
                <Paper elevation={2} sx={{ p: 2, backgroundColor: '#f3e5f5' }}>
                  <Typography variant='h6' sx={{ mb: 2, fontWeight: 600, color: 'secondary.main' }}>
                    오른쪽 스와이프
                  </Typography>
                  <Typography variant='h3' sx={{ fontWeight: 600, color: 'secondary.main' }}>
                    {swipeCount.right}
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    횟수
                  </Typography>
                </Paper>
              </Grid>
            </Grid>

            {/* 마지막 스와이프 액션 */}
            {lastSwipe && (
              <Box sx={{ mt: 3, p: 2, backgroundColor: '#e8f5e9', borderRadius: 1 }}>
                <Typography variant='body1' color='success.main' sx={{ fontWeight: 600 }}>
                  마지막 액션: {lastSwipe}
                </Typography>
              </Box>
            )}

            {/* 추가 데모 카드 */}
            <Box sx={{ mt: 3 }}>
              <Typography variant='h6' sx={{ mb: 2, fontWeight: 600 }}>
                카드 스와이프 데모
              </Typography>
              <Grid container spacing={2}>
                {[1, 2, 3].map((num) => (
                  <Grid key={num} size={{ xs: 12, md: 4 }}>
                    <Card
                      onTouchStart={handleTouchStart}
                      onTouchMove={handleTouchMove}
                      onTouchEnd={handleTouchEnd}
                      onMouseDown={handleMouseStart}
                      onMouseMove={handleMouseMove}
                      onMouseUp={handleMouseEnd}
                      onMouseLeave={handleMouseEnd}
                      sx={{
                        p: 2,
                        cursor: 'grab',
                        userSelect: 'none',
                        transform: isDragging ? `translateX(${currentPosition}px) rotate(${currentPosition / 20}deg)` : 'translateX(0) rotate(0)',
                        transition: isDragging ? 'none' : 'transform 0.3s ease',
                        backgroundColor: num === 1 ? '#e3f2fd' : num === 2 ? '#f3e5f5' : '#e8f5e9',
                        '&:active': {
                          cursor: 'grabbing'
                        }
                      }}
                    >
                      <Typography variant='h5' sx={{ fontWeight: 600, mb: 1 }}>
                        카드 {num}
                      </Typography>
                      <Typography variant='body2' color='text.secondary'>
                        이 카드를 좌우로 스와이프해보세요. 드래그하면 기울어집니다.
                      </Typography>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>

            {/* 사용 안내 */}
            <Box sx={{ mt: 3, p: 2, backgroundColor: '#fff3e0', borderRadius: 1 }}>
              <Typography variant='body1' sx={{ fontWeight: 600, mb: 1, color: 'warning.dark' }}>
                사용 방법:
              </Typography>
              <Typography variant='body2' color='text.secondary' component='div'>
                <Box component='ul' sx={{ pl: 2, m: 0 }}>
                  <li>모바일: 손가락으로 좌우로 스와이프하세요</li>
                  <li>데스크톱: 마우스로 클릭하고 드래그하세요</li>
                  <li>최소 50px 이상 이동해야 스와이프로 인식됩니다</li>
                  <li>방향에 따라 배경색이 변경됩니다</li>
                </Box>
              </Typography>
            </Box>

            {/* 설명 텍스트 */}
            <Box sx={{ mt: 3, p: 2, backgroundColor: '#f5f5f5', borderRadius: 1 }}>
              <Typography variant='body2' color='text.secondary'>
                터치 이벤트(onTouchStart, onTouchMove, onTouchEnd)와 마우스 이벤트(onMouseDown, onMouseMove, onMouseUp)를
                활용하여 스와이프 제스처를 감지합니다. 모바일과 데스크톱 모두에서 테스트 가능합니다.
                최소 스와이프 거리는 50px로 설정되어 있으며, 드래그 중에는 실시간으로 위치가 업데이트됩니다.
              </Typography>
            </Box>
          </Paper>

          {/* Hover 섹션 */}
          <Paper sx={{ p: 3 }}>
            <Typography variant='h5' sx={{ mb: 3, fontWeight: 600 }}>
              Hover Effects
            </Typography>
            <Grid container spacing={3}>
              {/* 색상 변경 효과 */}
              <Grid size={{ xs: 12, sm: 6, md: 4, lg: 2.4 }}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant='h6' sx={{ mb: 2, fontWeight: 500, fontSize: '1rem' }}>
                    색상 변경
                  </Typography>
                  <Box
                    onMouseEnter={() => handleHoverEnter('color')}
                    onMouseLeave={handleHoverLeave}
                    sx={{
                      width: '100%',
                      height: 150,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: '#e3f2fd',
                      borderRadius: 2,
                      cursor: 'pointer',
                      transition: 'background-color 0.3s ease',
                      '&:hover': {
                        backgroundColor: 'primary.main'
                      }
                    }}
                  >
                    <Typography variant='h5' sx={{
                      fontWeight: 600,
                      color: hoveredBox === 'color' ? 'white' : 'primary.main',
                      transition: 'color 0.3s ease'
                    }}>
                      HOVER
                    </Typography>
                  </Box>
                  <Box sx={{ mt: 1, p: 1, backgroundColor: '#f5f5f5', borderRadius: 1 }}>
                    <Typography variant='caption' color='text.secondary'>
                      호버 횟수: {hoverCount.color}
                    </Typography>
                  </Box>
                </Box>
              </Grid>

              {/* 그림자 효과 */}
              <Grid size={{ xs: 12, sm: 6, md: 4, lg: 2.4 }}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant='h6' sx={{ mb: 2, fontWeight: 500, fontSize: '1rem' }}>
                    그림자 효과
                  </Typography>
                  <Box
                    onMouseEnter={() => handleHoverEnter('shadow')}
                    onMouseLeave={handleHoverLeave}
                    sx={{
                      width: '100%',
                      height: 150,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: '#f3e5f5',
                      borderRadius: 2,
                      cursor: 'pointer',
                      boxShadow: 1,
                      transition: 'box-shadow 0.3s ease, transform 0.3s ease',
                      '&:hover': {
                        boxShadow: 12,
                        transform: 'translateY(-8px)'
                      }
                    }}
                  >
                    <Typography variant='h5' sx={{
                      fontWeight: 600,
                      color: 'secondary.main'
                    }}>
                      SHADOW
                    </Typography>
                  </Box>
                  <Box sx={{ mt: 1, p: 1, backgroundColor: '#f5f5f5', borderRadius: 1 }}>
                    <Typography variant='caption' color='text.secondary'>
                      호버 횟수: {hoverCount.shadow}
                    </Typography>
                  </Box>
                </Box>
              </Grid>

              {/* 크기 변화 효과 */}
              <Grid size={{ xs: 12, sm: 6, md: 4, lg: 2.4 }}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant='h6' sx={{ mb: 2, fontWeight: 500, fontSize: '1rem' }}>
                    크기 변화
                  </Typography>
                  <Box
                    onMouseEnter={() => handleHoverEnter('scale')}
                    onMouseLeave={handleHoverLeave}
                    sx={{
                      width: '100%',
                      height: 150,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: '#e8f5e9',
                      borderRadius: 2,
                      cursor: 'pointer',
                      transition: 'transform 0.3s ease',
                      '&:hover': {
                        transform: 'scale(1.1)'
                      }
                    }}
                  >
                    <Typography variant='h5' sx={{
                      fontWeight: 600,
                      color: 'success.main'
                    }}>
                      SCALE
                    </Typography>
                  </Box>
                  <Box sx={{ mt: 1, p: 1, backgroundColor: '#f5f5f5', borderRadius: 1 }}>
                    <Typography variant='caption' color='text.secondary'>
                      호버 횟수: {hoverCount.scale}
                    </Typography>
                  </Box>
                </Box>
              </Grid>

              {/* 회전 효과 */}
              <Grid size={{ xs: 12, sm: 6, md: 4, lg: 2.4 }}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant='h6' sx={{ mb: 2, fontWeight: 500, fontSize: '1rem' }}>
                    회전 효과
                  </Typography>
                  <Box
                    onMouseEnter={() => handleHoverEnter('rotate')}
                    onMouseLeave={handleHoverLeave}
                    sx={{
                      width: '100%',
                      height: 150,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: '#fff3e0',
                      borderRadius: 2,
                      cursor: 'pointer',
                      transition: 'transform 0.5s ease',
                      '&:hover': {
                        transform: 'rotate(15deg)'
                      }
                    }}
                  >
                    <Typography variant='h5' sx={{
                      fontWeight: 600,
                      color: 'warning.main'
                    }}>
                      ROTATE
                    </Typography>
                  </Box>
                  <Box sx={{ mt: 1, p: 1, backgroundColor: '#f5f5f5', borderRadius: 1 }}>
                    <Typography variant='caption' color='text.secondary'>
                      호버 횟수: {hoverCount.rotate}
                    </Typography>
                  </Box>
                </Box>
              </Grid>

              {/* 모든 효과 결합 */}
              <Grid size={{ xs: 12, sm: 6, md: 4, lg: 2.4 }}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant='h6' sx={{ mb: 2, fontWeight: 500, fontSize: '1rem' }}>
                    모든 효과
                  </Typography>
                  <Box
                    onMouseEnter={() => handleHoverEnter('all')}
                    onMouseLeave={handleHoverLeave}
                    sx={{
                      width: '100%',
                      height: 150,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: '#fce4ec',
                      borderRadius: 2,
                      cursor: 'pointer',
                      boxShadow: 1,
                      transition: 'all 0.4s ease',
                      '&:hover': {
                        backgroundColor: 'error.main',
                        boxShadow: 12,
                        transform: 'scale(1.1) rotate(5deg) translateY(-5px)'
                      }
                    }}
                  >
                    <Typography variant='h5' sx={{
                      fontWeight: 600,
                      color: hoveredBox === 'all' ? 'white' : 'error.main',
                      transition: 'color 0.4s ease'
                    }}>
                      ALL
                    </Typography>
                  </Box>
                  <Box sx={{ mt: 1, p: 1, backgroundColor: '#f5f5f5', borderRadius: 1 }}>
                    <Typography variant='caption' color='text.secondary'>
                      호버 횟수: {hoverCount.all}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>

            {/* 현재 호버 상태 표시 */}
            <Box sx={{ mt: 3, p: 2, backgroundColor: '#f5f5f5', borderRadius: 1 }}>
              <Typography variant='body2' color='text.secondary' sx={{ mb: 1 }}>
                현재 호버 중인 박스:
              </Typography>
              <Typography variant='h6' color='primary' sx={{ fontWeight: 600 }}>
                {hoveredBox ? hoveredBox.toUpperCase() : '없음'}
              </Typography>
            </Box>

            {/* 추가 호버 패턴 데모 */}
            <Box sx={{ mt: 3 }}>
              <Typography variant='h6' sx={{ mb: 2, fontWeight: 600 }}>
                추가 호버 패턴
              </Typography>
              <Grid container spacing={2}>
                {/* 테두리 애니메이션 */}
                <Grid size={{ xs: 12, md: 4 }}>
                  <Card
                    sx={{
                      p: 2,
                      cursor: 'pointer',
                      border: '2px solid transparent',
                      transition: 'border-color 0.3s ease, background-color 0.3s ease',
                      '&:hover': {
                        borderColor: 'primary.main',
                        backgroundColor: 'primary.light'
                      }
                    }}
                  >
                    <Typography variant='body1' sx={{ fontWeight: 500, mb: 1 }}>
                      테두리 효과
                    </Typography>
                    <Typography variant='body2' color='text.secondary'>
                      마우스를 올리면 테두리 색상이 나타납니다
                    </Typography>
                  </Card>
                </Grid>

                {/* 불투명도 변경 */}
                <Grid size={{ xs: 12, md: 4 }}>
                  <Card
                    sx={{
                      p: 2,
                      cursor: 'pointer',
                      opacity: 0.6,
                      transition: 'opacity 0.3s ease',
                      '&:hover': {
                        opacity: 1
                      }
                    }}
                  >
                    <Typography variant='body1' sx={{ fontWeight: 500, mb: 1 }}>
                      불투명도 효과
                    </Typography>
                    <Typography variant='body2' color='text.secondary'>
                      마우스를 올리면 선명해집니다
                    </Typography>
                  </Card>
                </Grid>

                {/* 배경 그라데이션 */}
                <Grid size={{ xs: 12, md: 4 }}>
                  <Card
                    sx={{
                      p: 2,
                      cursor: 'pointer',
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      color: 'white',
                      transition: 'filter 0.3s ease',
                      '&:hover': {
                        filter: 'brightness(1.2)'
                      }
                    }}
                  >
                    <Typography variant='body1' sx={{ fontWeight: 500, mb: 1 }}>
                      그라데이션 효과
                    </Typography>
                    <Typography variant='body2'>
                      마우스를 올리면 밝아집니다
                    </Typography>
                  </Card>
                </Grid>
              </Grid>
            </Box>

            {/* 설명 텍스트 */}
            <Box sx={{ mt: 3, p: 2, backgroundColor: '#f5f5f5', borderRadius: 1 }}>
              <Typography variant='body2' color='text.secondary'>
                각 박스에 마우스를 올려 다양한 CSS 호버 효과를 확인할 수 있습니다.
                모든 효과는 MUI의 sx 속성과 CSS 트랜지션을 활용하여 구현되었습니다.
                호버할 때마다 카운터가 증가하여 상호작용이 추적됩니다.
              </Typography>
            </Box>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
}

export default App;
