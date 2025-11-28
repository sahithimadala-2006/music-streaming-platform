import React, { useEffect, useState } from 'react';
import './MusicFeed.css';

const MusicFeed = () => {
  const [selectedArtists, setSelectedArtists] = useState([]);
  const [songs, setSongs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentAudio, setCurrentAudio] = useState(null);
  const [playingTitle, setPlayingTitle] = useState('');
  const [showMiniPlayer, setShowMiniPlayer] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [progress, setProgress] = useState(0);
  const [isRepeat, setIsRepeat] = useState(false);

  const backendUrl = process.env.REACT_APP_BACKEND_URL || 'http://localhost:8081';

  useEffect(() => {
    const storedArtists = localStorage.getItem('selectedArtists');
    if (storedArtists) {
      setSelectedArtists(storedArtists.split(','));
    }

    const allSongs = [/* your song list remains unchanged */
      { title: 'Samajavaragamana', artist: 'Sid Sriram', cover: '/images/samajavaragamana.jpg', audio: `${backendUrl}/audio/samajavaragamana.mp3` },
      { title: 'Butta Bomma', artist: 'Armaan Malik, Thaman S', cover: '/images/buttabomma.jpg', audio: `${backendUrl}/audio/buttabomma.mp3` },
      { title: 'Vachinde', artist: 'Madhu Priya, Ramky, Shakthikanth Karthick', cover: '/images/vachinde.jpg', audio: `${backendUrl}/audio/vachinde.mp3` },
      { title: 'Ramulo Ramula', artist: 'Anurag Kulkarni, Mangli', cover: '/images/ramuloramula.jpg', audio: `${backendUrl}/audio/ramuloramula.mp3` },
      { title: 'Inkem Inkem Inkem Kaavaale', artist: 'Sid Sriram', cover: '/images/inkeminkem.jpg', audio: `${backendUrl}/audio/inkeminkem.mp3` },
      { title: 'Naa Cheli Rojave', artist: 'SP. Balasubrahmanyam', cover: '/images/nachelirojave.jpg', audio: `${backendUrl}/audio/naachelirojave.mp3` },
      { title: 'Nee Kallalona', artist: 'Hemachandra', cover: '/images/neekallalona.jpg', audio: `${backendUrl}/audio/neekallalona.mp3` },
      { title: 'Chitti', artist: 'Ram Miriyala', cover: '/images/chitti.jpg', audio: `${backendUrl}/audio/chitti.mp3` },
      { title: 'Globetrotter', artist: 'Anudeep Dev, Shruthi Hassan', cover: '/images/globetrotter.jpg', audio: `${backendUrl}/audio/globetrotter.mp3` },
      { title: 'I Wanna Fly', artist: 'LV Revanth, Sanjith Hegde, Hiphop Tamizha', cover: '/images/iwannafly.jpg', audio: `${backendUrl}/audio/iwannafly.mp3` },
      { title: 'Cinema Chupista Maava', artist: 'Anudeep Dev', cover: '/images/cinemachupistamaava.jpg', audio: `${backendUrl}/audio/cinemachupistamaava.mp3` },
      { title: 'Pakka Local', artist: 'Devi Sri Prasad, Geetha Madhuri', cover: '/images/pakkalocal.jpg', audio: `${backendUrl}/audio/pakkalocal.mp3` },
      { title: 'Dhaari Choodu', artist: 'Penchal Das, Hiphop Tamizha', cover: '/images/dhaarichoodu.jpg', audio: `${backendUrl}/audio/dhaarichoodu.mp3` },
      { title: 'Naatu Naatu', artist: 'Rahul Sipligunj, Kaala Bhairava, MM Keeravani', cover: '/images/naatunaatu.jpg', audio: `${backendUrl}/audio/naatunaatu.mp3` },
      { title: 'Chali Chaliga', artist: 'Shreya Ghoshal', cover: '/images/chalichaliga.jpg', audio: `${backendUrl}/audio/chalichaliga.mp3` },
      { title: 'Gaali Vaaluga', artist: 'Anirudh Ravichander', cover: '/images/gaalivaaluga.jpg', audio: `${backendUrl}/audio/gaalivaaluga.mp3` },
      { title: 'Rowdy Baby', artist: 'Dhee, Yuvan Shankar Raja', cover: '/images/rowdybaby.jpg', audio: `${backendUrl}/audio/rowdybaby.mp3` },
      { title: 'Why this Kolaver di', artist: 'Dhanush, Anirudh Ravichander', cover: '/images/whythiskolaveridi.jpg', audio: `${backendUrl}/audio/whythiskolaveridi.mp3` },
      { title: 'Tum Hi Ho', artist: 'Arijit Singh', cover: '/images/tumhiho.jpg', audio: `${backendUrl}/audio/tumhiho.mp3` },
      { title: 'Shape of You', artist: 'Ed Sheeran', cover: '/images/shapeofyou.jpg', audio: `${backendUrl}/audio/shapeofyou.mp3` },
      { title: 'São Paulo', artist: 'The Weeknd, Anitta', cover: '/images/sãopaulo.jpg', audio: `${backendUrl}/audio/saopaulo.mp3` },
      { title: 'Cheap Thrills', artist: 'Sia', cover: '/images/cheapthrills.jpg', audio: `${backendUrl}/audio/cheapthrills.mp3` },
      { title: 'Attention', artist: 'Charlie Puth', cover: '/images/attention.jpg', audio: `${backendUrl}/audio/attention.mp3` },
      { title: 'Skyfall', artist: 'Adele', cover: '/images/skyfall.jpg', audio: `${backendUrl}/audio/skyfall.mp3` },
    ];
    setSongs(allSongs);
  }, [backendUrl]);

  useEffect(() => {
    if (currentAudio) {
      const updateProgress = () => {
        setProgress((currentAudio.currentTime / currentAudio.duration) * 100);
      };
      currentAudio.addEventListener('timeupdate', updateProgress);
      return () => currentAudio.removeEventListener('timeupdate', updateProgress);
    }
  }, [currentAudio]);

  const toggleAudio = (song, index) => {
    if (playingTitle === song.title && currentAudio) {
      currentAudio.pause();
      setProgress(0);
    } else {
      if (currentAudio) {
        currentAudio.pause();
      }
      const audio = new Audio(song.audio);
      audio.loop = isRepeat;
      audio.play();
      setCurrentAudio(audio);
      setPlayingTitle(song.title);
      setCurrentIndex(index);
      setShowMiniPlayer(true);
    }
  };

  const playNext = () => {
    const nextIndex = (currentIndex + 1) % filteredSongs.length;
    toggleAudio(filteredSongs[nextIndex], nextIndex);
  };

  const playPrev = () => {
    const prevIndex = (currentIndex - 1 + filteredSongs.length) % filteredSongs.length;
    toggleAudio(filteredSongs[prevIndex], prevIndex);
  };

  const toggleRepeat = () => {
    setIsRepeat(!isRepeat);
    if (currentAudio) {
      currentAudio.loop = !isRepeat;
    }
  };

  const filteredSongs = songs.filter(song => {
  const query = searchTerm.toLowerCase();
  const matchesSearch =
    song.title.toLowerCase().includes(query) ||
    song.artist.toLowerCase().includes(query) ||
    (song.album && song.album.toLowerCase().includes(query));

  const matchesArtist = selectedArtists.length === 0 || selectedArtists.some(artist =>
    song.artist.toLowerCase().includes(artist.toLowerCase())
  );

  return matchesSearch && matchesArtist;
});

  return (
    <div className="music-feed-container">
      <h1 className="page-title">🎶 Your Music Feed</h1>

      <div className="search-section">
        <input
          type="text"
          placeholder="Search songs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-bar"
        />
        <div className="recommend-label">Recommended Songs for you!</div>
      </div>

      <div className="song-grid">
        {filteredSongs.map((song, index) => (
          <div key={index} className="song-card">
            <img
              src={song.cover}
              alt={song.title}
              onError={(e) => (e.target.src = '/images/default.jpg')}
            />
            <h3>{song.title}</h3>
            <p>{song.artist}</p>
            <button className="play-button" onClick={() => toggleAudio(song, index)}>
              {playingTitle === song.title && !currentAudio?.paused ? '⏸ Pause' : '▶ Play'}
            </button>
          </div>
        ))}
      </div>

      {/* 🎵 Enhanced Mini Player Popup */}
      {showMiniPlayer && currentIndex !== null && (
  <div className="mini-player-popup">
    <button className="mini-player-close" onClick={() => setShowMiniPlayer(false)}>❌</button>

    <img
      src={filteredSongs[currentIndex].cover}
      alt={playingTitle}
      onError={(e) => (e.target.src = '/images/default.jpg')}
    />
    <div className="mini-player-details">
      <h4>{playingTitle}</h4>
      <p>{filteredSongs[currentIndex].artist}</p>
      <div className="progress-bar">
        <div className="progress" style={{ width: `${progress}%` }}></div>
      </div>
    </div>
    <div className="mini-player-controls">
      <button onClick={playPrev}>⏮</button>
      <button onClick={() => {
        if (currentAudio?.paused) {
          currentAudio.play();
        } else {
          currentAudio?.pause();
        }
      }}>
        {currentAudio?.paused ? '▶' : '⏸'}
      </button>
      <button onClick={playNext}>⏭</button>
      <button
        onClick={toggleRepeat}
        className={isRepeat ? 'repeat-active' : ''}
        style={{
          borderColor: isRepeat ? '#fff' : '#ff5722',
          color: isRepeat ? '#fff' : '#ff5722'
        }}
      >
        🔁
      </button>
    </div>
  </div>
)}
    </div>
  );
};

export default MusicFeed;