const SPOTIFY_SECRET = "<YOUR_SPOTIFY_ACCESS_TOKEN>";
const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${SPOTIFY_SECRET}`
};

export const getAlbums = () => {
  return fetch(
    "https://api.spotify.com/v1/browse/new-releases?limit=10&country=GB",
    {
      headers
    }
  );
};

export const getAlbumTracks = id => {
  return fetch(`https://api.spotify.com/v1/albums/${id}/tracks`, {
    headers
  });
};
