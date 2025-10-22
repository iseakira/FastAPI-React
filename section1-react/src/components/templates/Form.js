import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
    <>
      <form>
        <label htmlFor="name">
          名前
          <input
            id="name"
            type="text"
            name="name"
            value={form.name}
            onChange={handleInputChange}
          />
        </label>
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
        <label htmlFor="age">
          <select
            value={form.age}
            id="age"
            name="age"
            onChange={handleInputChange}
          >
            <option value={10}> 10代</option>
            <option value={20}> 20代</option>
            <option value={30}> 30代</option>
          </select>
        </label>
      </form>
      <button onClick={handleSubmit}>送信</button>
    </>
  );
};

export default Form;
