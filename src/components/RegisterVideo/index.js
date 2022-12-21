import React from "react";
import VideoService from "../../services/VideoService";
import { StyledRegisterVideo } from "./styles";

const getThumbnail = async (url) => {
  return await `https://img.youtube.com/vi/${url.split("v=")[1]}/hqdefault.jpg`;
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

const RegisterVideo = async ({ setNewVideo }) => {
  const service = VideoService();
  const { value, handleChange, clearForm } = useForm();
  const { title, playlist, url } = value;
  const [formVisible, setFormVisible] = React.useState(false);

  return (
    <StyledRegisterVideo>
      <button className="add-video" onClick={() => setFormVisible(true)}>
        +
      </button>
      {formVisible && (
        <form
          onSubmit={(e) => {
            e.preventDefault();

            // Contrato entre o front e o verso
            service
              .getAllVideos()
              .insert({
                title,
                url,
                thumb: await getThumbnail(url),
                playlist : playlist.toLowerCase().trim()
              })
              .then();

            clearForm();
            setFormVisible(false);
            setNewVideo(title);
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
            />
            <input
              placeholder="Playlist do vídeo"
              name="playlist"
              value={playlist}
              onChange={handleChange}
            />
            <input
              placeholder="URL"
              name="url"
              value={url}
              onChange={handleChange}
            />

            <button type="submit">Cadastrar</button>
            {url.includes('https://www.youtube.com/watch?v=') && (
              <div>
                
                <iframe
                  width="290"
                  height="215"
                  src={`https://www.youtube.com/embed/${url.slice(
                    url.indexOf("=") + 1
                  )}`}
                  title="YouTube video player"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
              </div>
            )}
          </div>
        </form>
      )}
    </StyledRegisterVideo>
  );
};

export default RegisterVideo;
