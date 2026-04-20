export default function SpotifyFloatingPlayer() {
  return (
    <div className="fixed bottom-0 right-4 z-50 ">
      <iframe
        title="Spotify player"
        src="https://open.spotify.com/embed/track/6pfKQaiWcelILwxkf6adUz?utm_source=generator&theme=0"
        width="100%"
        height="85"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      />
    </div>
  );
}
