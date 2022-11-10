import React from "react";

export const VideoContext = React.createContext();

const EmbedVideoProvider = ({ children }) => {
  const [url, setUrl] = React.useState("");
  const [title, setTitle] = React.useState("");
  return (
    <VideoContext.Provider value={{ url, title, setUrl, setTitle }}>
      {children}
    </VideoContext.Provider>
  );
};

export default EmbedVideoProvider;
