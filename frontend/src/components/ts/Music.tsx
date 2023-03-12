const Music = () => {
  return (
    <div className="flex justify-center text-white font-bold font-harabara tracking-wider">
      <div className="flex flex-col">
        <div className="flex items-center flex-col">
          <div className="text-xl mb-5">Spotify</div>
          <iframe
            className="rounded-3xl h-96 lg:w-full px-24"
            src="https://open.spotify.com/embed/artist/2heJl7jzvTYoHyR5xwSSea?utm_source=generator&theme=0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>

        <div className="flex justify-center mt-2">
          <div className="h-px mt-6 w-5/6 border-0 bg-gray-500" />
        </div>

        <div className="flex items-center flex-col">
          <div className="text-xl my-5">Soundcloud</div>

          <iframe
            id="soundcloud-playlist"
            className="rounded-3xl bg-transparent lg:w-screen px-24 h-96"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/418644230&color=%23ff5500&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=false"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Music;
