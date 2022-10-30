import React from 'react';
import './style.css';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import PersonIcon from '@mui/icons-material/Person';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function App() {
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'blue' }}>
          <PersonIcon />
        </Avatar>

        <Typography component="h1" variant="h5">
          회원가입
        </Typography>

        <TextField
          margin="dense"
          label="이메일 주소"
          fullWidth
          name="email"
          autoComplete="email"
          // autoFocus
        />

        <TextField
          margin="dense"
          label="비밀번호"
          type="password"
          fullWidth
          name="password"
        />
        <TextField
          margin="dense"
          label="비밀번호 확인"
          type="password"
          fullWidth
          name="password"
        />

        <TextField
          margin="dense"
          label="이름"
          type="name"
          fullWidth
          name="name"
        />

        <TextField
          margin="dense"
          label="전화번호"
          type="number"
          fullWidth
          name="phonenumber"
        />

        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="회원가입 약관에 동의합니다."
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 2, mb: 2 }}
        >
          회원가입
        </Button>
      </Box>
    </Container>
  );
}
