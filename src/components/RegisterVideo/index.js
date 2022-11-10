import React from "react";
import { StyledRegisterVideo } from "./styles";

// Custom Hook
const useForm = () => {
  const [value, setValue] = React.useState({ title: "", url: "" });

  return {
    value,
    handleChange: (e) => {
      const name = e.target.name;
      setValue({
        ...value,
        [name]: e.target.value,
      });
    },
    clearForm: () => setValue({title: "", url: ""}),
  };
};

const RegisterVideo = () => {
  const {value, handleChange, clearForm} = useForm();
  const [formVisible, setFormVisible] = React.useState(false);

  return (
    <StyledRegisterVideo>
      <button className="add-video" onClick={() => setFormVisible(true)}>
        +
      </button>
      {formVisible && (
        <form onSubmit={(e) =>{
             e.preventDefault()
             clearForm();
             setFormVisible(false)
             }}>
          <div>
            <button
            type="button"
              className="close-modal"
              onClick={() => setFormVisible(false)}
            >
              X
            </button>
            <input
              placeholder="Título do vídeo"
              name="title"
              value={value.title}
              onChange={handleChange}
            />
            <input
              placeholder="URL"
              name="url"
              value={value.url}
              onChange={handleChange}
            />
          
            <button type="submit">Cadastrar</button>
          </div>
        </form>
      )}
    </StyledRegisterVideo>
  );
};

export default RegisterVideo;
