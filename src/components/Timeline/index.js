import { useContext, useEffect, useState } from "react";
import Link from "next/link";

import { StyledTimeline } from "./styles";
import { VideoContext } from "../Context/EmbedVideo";
import VideoService from "../../services/VideoService";



export function Timeline({ searchValue, ...props }) {
  const service = VideoService()
  const { setUrl, setTitle } = useContext(VideoContext);
  const [playlists, setPlaylists] = useState({});
  const playlistNames = Object.keys(playlists);
  
  useEffect(() => {
    service
    .getAllVideos()
    .select("*")
    .then((resp) => {
        const newPlaylists = { ...playlists };
        resp.data.forEach((dataPlaylists) => {
          
          if (!newPlaylists[dataPlaylists.playlist]) {
            newPlaylists[dataPlaylists.playlist] = [];
          }
          newPlaylists[dataPlaylists.playlist].push(dataPlaylists);
        });
        setPlaylists(newPlaylists);
      })
    
  }, []);

  return (
    <StyledTimeline>
      {playlistNames.map((playlistName) => {
        const videos = playlists[playlistName];

        return (
          <section key={playlistName}>
            <h2>{playlistName}</h2>
            <div>
              {videos
                .filter((video) => {
                  return video.title
                    .toLowerCase()
                    .includes(searchValue.toLowerCase());
                })
                .map((video) => {
                  return (
                    <Link key={video.url} href={"/video"} legacyBehavior>
                      <a
                        onClick={() => {
                          setTitle(video.title);
                          setUrl(video.url);
                        }}
                      >
                        {<img src={video.thumb} />}
                        <span>{video.title}</span>
                      </a>
                    </Link>
                  );
                })}
            </div>
          </section>
        );
      })}
    </StyledTimeline>
  );
}
