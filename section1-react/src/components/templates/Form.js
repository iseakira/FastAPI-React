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
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel,
  Button,
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

        <Box sx={{ width: '100%', mt: 2 }}>
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

        <Box sx={{ width: '100%', mt: 2 }} fullWidth>
          <FormLabel id="radio">性別</FormLabel>
          <Box sx={{ border: 1, borderRadius: 1, borderColor: 'grey.500' }}>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="gender"
            >
              <FormControlLabel value="女性" control={<Radio />} label="女性" />
              <FormControlLabel value="男性" control={<Radio />} label="男性" />
              <FormControlLabel
                value="無所属"
                control={<Radio />}
                label="無所属"
                onChange={handleInputChange}
              />
            </RadioGroup>
          </Box>
        </Box>

        <TextField
          id="outlined-basic"
          label="コメント"
          variant="outlined"
          onChange={handleInputChange}
          value={form.comment}
          fullWidth
          sx={{ mt: 2 }}
        />
        <Button variant="contained" onChange={handleSubmit} sx={{ mt: 2 }}>
          送信
        </Button>
      </Box>
    </Container>
  );
};

export default Form;
