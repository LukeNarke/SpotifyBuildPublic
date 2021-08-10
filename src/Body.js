import React from "react";
import "./Body.css";
import Header from "./Header";
import { useStateValue } from "./StateProvider";
import SongRow from "./SongRow";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

function Body({ spotify }) {
  const [{ discover_weekly }, dispatch] = useStateValue();

  const playPlaylist = (id) => {
    spotify
      .play({
        context_uri: `spotify:playlist:37i9dQZEVXcJZyENOWUFo7`,
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };

  const playSong = (id) => {
    spotify
      .play({
        uris: [`spotify:track:${id}`],
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };

  return (
    <div className="body">
      <Header spotify={spotify} />

      <div className="body__info">
        <img
          src="https://newjams-images.scdn.co/v2/discover-weekly/ST82T7Hwk0lXM3D3iVsOXNjRHDmChdjijk5k_nl1He07TGrvVENroJ_XqMnbeYWYFU6Nqynzvw4lEKNFmp8cyuxw4ck5I6viH2-AOrNnCAv71GzU4BeECJPjLy3gyhqDiE0hJqtFWhlvIJP0bm9tzRNRR1xepqNpIz-m2UXzSCS5fbT8CV6Mr4tZd4YLp433k_sb6iNGkf6pbiWggBNtxxBwK-i8yvrjqcaHm23RtIVb_Md84lkPfTCKPJwFMdb7dWHjAtrAgBxEI6nzhTC68BHoqEbZL4i9OS4o7ToooT16DtXDcSuImB_7Z5yeInnoGtcQCtFAZq8rW8S0PjRyCg==/MTA6MjM6ODFUOTEtMDEtMA==/default"
          alt=""
        />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly Main</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>

      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilledIcon
            className="body__shuffle"
            onClick={playPlaylist}
          />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>

        {discover_weekly?.tracks.items.map((item) => (
          <SongRow playSong={playSong} track={item.track} />
        ))}
      </div>
    </div>
  );
}

export default Body;
