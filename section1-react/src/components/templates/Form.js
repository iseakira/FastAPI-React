import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Box,
  Typography,
  TextField,
  Select,
  MenuItem,
  InputLabel,
} from '@mui/material';

const Form = () => {
  const [form, setForm] = useState({
    name: '',
    age: '',
    gender: '',
    comment: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const navigate = useNavigate();

  const goToResult = (form) => {
    navigate('/result', { state: form });
  };

  const handleSubmit = (e) => {
    goToResult(form);
  };

  return (
    <Container>
      <Box
        sx={{
          marginTop: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          アンケート提出
        </Typography>
        <br />

        <TextField
          id="name"
          variant="outlined"
          label="名前"
          value={form.name}
          name="name"
          onChange={handleInputChange}
          fullWidth
        />

        <Box sx={{ width: '100%' }}>
          <InputLabel id="demo-simple-select-label">年齢</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            name="age"
            id="age"
            value={form.age}
            onChange={handleInputChange}
            fullWidth
          >
            <MenuItem value={10}>10代</MenuItem>
            <MenuItem value={20}>20代</MenuItem>
            <MenuItem value={30}>30代</MenuItem>
          </Select>
        </Box>

        <br />
        <label htmlFor="gender">
          性別
          <input
            id="male"
            name="gender"
            type="radio"
            value="male"
            onChange={handleInputChange}
          />
          男性
          <input
            id="female"
            name="gender"
            type="radio"
            value="female"
            onChange={handleInputChange}
          />
          女性
          <input
            id="others"
            name="gender"
            type="radio"
            value="others"
            onChange={handleInputChange}
          />
          その他
        </label>
        <br />
        <label htmlFor="comment">
          コメント
          <textarea
            name="comment"
            placeholder="コメントをいれてください"
            value={form.comment}
            onChange={handleInputChange}
          />
        </label>
        <button onClick={handleSubmit}>送信</button>
      </Box>
    </Container>
  );
};

export default Form;
