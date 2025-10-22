import { useState } from 'react';

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
          <br />
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
      <p>確認</p>
      <p>{form.name}</p>
      <p>{form.age}</p>
      <p>{form.gender}</p>
      <p>{form.comment}</p>
    </>
  );
};

export default Form;
