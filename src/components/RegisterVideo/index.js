import React from "react";

import VideoService from "../../services/VideoService";
import { StyledRegisterVideo } from "./styles";

const getThumbnail = (url) => {
  const id = url.split("v=")[1];
  if (!id) return;
  return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
};

// Custom Hook
const useForm = () => {
  const [value, setValue] = React.useState({
    title: "",
    playlist: "",
    url: "",
  });

  return {
    value,
    handleChange: (e) => {
      const name = e.target.name;
      setValue({
        ...value,
        [name]: e.target.value,
      });
    },
    clearForm: () => setValue({ title: "", playlist: "", url: "" }),
  };
};

const RegisterVideo = ({ setNewVideo }) => {
  const service = VideoService();
  const { value, handleChange, clearForm } = useForm();
  const { title, playlist, url } = value;
  const [formVisible, setFormVisible] = React.useState(false);
const [invalidUrl, setInvalidUrl] = React.useState(false)

  return (
    <StyledRegisterVideo>
      <button className="add-video" onClick={() => setFormVisible(true)}>
        +
      </button>
      {formVisible && (
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            try {
              const data = await fetch(getThumbnail(url));

              if (data.status != "200") {
                setInvalidUrl(true)
                throw new Error("Url inválida");
              } else {
                // Contrato entre o front e o verso
                await service.getAllVideos().insert({
                  title,
                  url,
                  thumb: getThumbnail(url),
                  playlist: playlist.toLowerCase().trim(),
                });

                clearForm();
                setFormVisible(false);
                setInvalidUrl(false);
                setNewVideo(title);
              }
            } catch (error) {
              console.log(error, "Não deu certo");
            }
          }}
        >
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
              value={title}
              onChange={handleChange}
              required
            />
            <input
              placeholder="Playlist do vídeo"
              name="playlist"
              value={playlist}
              onChange={handleChange}
              required
            />
            <input
              placeholder="URL"
              name="url"
              value={url}
              onChange={handleChange}
              required
            />
            {invalidUrl && <span>URL INVÁLIDA</span>}

            <button type="submit">Cadastrar</button>

            {url && <img src={getThumbnail(url)} />}
          </div>
        </form>
      )}
    </StyledRegisterVideo>
  );
};

export default RegisterVideo;
