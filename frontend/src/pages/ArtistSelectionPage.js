// src/pages/ArtistSelectionPage.js
import React, { useState } from 'react';
import './ArtistSelectionPage.css';
import { useNavigate } from 'react-router-dom';

const ArtistSelectionPage = () => {
  const navigate = useNavigate();
  const [selectedArtists, setSelectedArtists] = useState([]);

  const artists = [
    // 🎵 Telugu Artists
    { name: 'Sid Sriram', image: '/images/sid.jpg' },
    { name: 'SP. Balasubrahmanyam', image: '/images/spb.jpg' },
    { name: 'Armaan Malik', image: '/images/armaan.jpg' },
    { name: 'Anurag Kulkarni', image: '/images/anurag.jpg' },
    { name: 'Karthik', image: '/images/karthik.jpg' },
    { name: 'Haricharan', image: '/images/haricharan.jpg' },
    { name: 'Ram Miriyala', image: '/images/ram.jpg' },
    { name: 'Hemachandra', image: '/images/hemachandra.jpg' },
    { name: 'Rahul Sipligunj', image: '/images/rahul.jpg' },
    { name: 'LV. Revanth', image: '/images/revanth.jpg' },
    { name: 'Penchal Das', image: '/images/penchal.jpg' },
    { name: 'Anudeep Dev', image: '/images/anudeep.jpg' },
    { name: 'Vijay Prakash', image: '/images/vijay.jpg' },
    { name: 'Kaala Bhairava', image: '/images/kaala.jpg' },
    { name: 'Shreya Ghoshal', image: '/images/shreya.jpg' },
    { name: 'Sunitha', image: '/images/sunitha.jpg' },
    { name: 'Geetha Madhuri', image: '/images/geetha.jpg' },
    { name: 'Mangli', image: '/images/mangli.jpg' },
    { name: 'Chinmayi', image: '/images/chinmayi.jpg' },
    { name: 'Ramya Behara', image: '/images/ramya.jpg' },
    { name: 'Sri Vardhini', image: '/images/srivardhini.jpg' },
    { name: 'Madhu Priya', image: '/images/madhu.jpg' },
    { name: 'Devi Sri Prasad', image: '/images/dsp.jpg' },
    { name: 'Thaman S', image: '/images/thaman.jpg' },
    { name: 'Anirudh Ravichander', image: '/images/anirudh.jpg' },
    { name: 'MM Keeravani', image: '/images/keeravani.jpg' },
    { name: 'Gopi Sundar', image: '/images/gopi.jpg' },
    { name: 'Mani Sharma', image: '/images/mani.jpg' },
    { name: 'Radhan', image: '/images/radhan.jpg' },
    { name: 'Justin Prabhakaran', image: '/images/justin.jpg' },
     // 🎵 Tamil Artists
    { name: 'Hariharan', image: '/images/hariharan.jpg' },
    { name: 'Yuvan Shankar Raja', image: '/images/yuvan.jpg' },
    { name: 'Shankar Mahadevan', image: '/images/shankar.jpg' },
    { name: 'GV Prakash Kumar', image: '/images/gv.jpg' },
    { name: 'Shashaa Tirupati', image: '/images/shashaa.jpg' },
    { name: 'Bombay Jayashri', image: '/images/bombay.jpg' },
    { name: 'Saindhavi', image: '/images/saindhavi.jpg' },
    { name: 'Andrea Jeremiah', image: '/images/andrea.jpg' },
    { name: 'Dhee', image: '/images/dhee.jpg' },
    { name: 'Jonita Gandhi', image: '/images/jonita.jpg' },
    { name: 'AR Rahman', image: '/images/rahman.jpg' },
    { name: 'Ilaiyaraaja', image: '/images/ilaiyaraaja.jpg' },
    { name: 'Harris Jayaraj', image: '/images/harris.jpg' },
    { name: 'D Imman', image: '/images/imman.jpg' },
    // 🎵 Kannada Artists
    { name: 'Sonu Nigam', image: '/images/sonu.jpg' },
    { name: 'Sanjith Hegde', image: '/images/sanjith.jpg' },
    {name : 'KJ Yesudas', image: '/images/yesudas.jpg' },
    { name: 'Rajesh Krishnan', image: '/images/rajesh.jpg' },
    { name: 'Hemanth Kumar', image: '/images/hemanth.jpg' },
    { name: 'Siddharth Belmannu', image: '/images/siddharth.jpg' },
    { name: 'Ananya Bhat', image: '/images/ananya.jpg' },
    { name: 'Anuradha Bhat', image: '/images/anuradha.jpg' },
    { name: 'Indu Nagaraj', image: '/images/indu.jpg' },
    { name: 'Sinchana Channappa', image: '/images/sinchana.jpg' },
    { name: 'V Harikrishna', image: '/images/harikrishna.jpg' },
    { name: 'Arjun Janya', image: '/images/arjun.jpg' },
    { name: 'Ravi Basrur', image: '/images/ravi.jpg' },
    { name: 'Mano Murthy', image: '/images/mano.jpg' },
    { name: 'Ajaneesh Loknath', image: '/images/ajaneesh.jpg' },
    // 🎵 Malayalam Artists
    { name: 'Vijay Yesudas', image: '/images/vijayyesudas.jpg' },
    { name: 'KS Harisankar', image: '/images/harisankar.jpg' },
    { name: 'Unni Menon', image: '/images/unni.jpg' },
    { name: 'Unni Krishnan', image: '/images/unnikrishnan.jpg' },
    { name: 'MG Sreekumar', image: '/images/mg.jpg' },
    { name: 'Sooraj Santhosh', image: '/images/sooraj.jpg' },
    { name: 'Vineeth Sreenivasan', image: '/images/vineeth.jpg' },
    { name: 'KS Chithra', image: '/images/chithra.jpg' },
    { name: 'Manjari', image: '/images/manjari.jpg' },
    { name: 'Sithara Krishnakumar', image: '/images/sithara.jpg' },
    { name: 'Shweta Mohan', image: '/images/shweta.jpg' },
    { name: 'Rajalakshmy', image: '/images/rajalakshmy.jpg' },
    { name: 'Shaan Rahman', image: '/images/shaan.jpg' },
    { name: 'Deepak Dev', image: '/images/deepak.jpg' },
    { name: 'Bijibal', image: '/images/bijibal.jpg' },
    { name: 'Rahul Raj', image: '/images/rahul.jpg' },
    { name: 'Hesham Abdul Wahab', image: '/images/hesham.jpg' },
     // 🎵 Hindi & International Artists
    { name: 'Arijit Singh', image: '/images/arijit.jpg' },
    {name: 'Diljit Dosanjh', image: '/images/diljit.jpg' },
    { name: 'KK', image: '/images/kk.jpg' },
    { name: 'Jubin Nautiyal', image: '/images/jubin.jpg' },
    { name: 'Mohit Chauhan', image: '/images/mohit.jpg' },
    { name: 'Vishal Dadlani', image: '/images/vishal.jpg' },
    { name: 'B Praak', image: '/images/bpraak.jpg' },
    { name: 'Sunidhi Chauhan', image: '/images/sunidhi.jpg' },
    { name: 'Alka Yagnik', image: '/images/alka.jpg' },
    { name: 'Neha Kakkar', image: '/images/neha.jpg' },
    { name: 'Pritam', image: '/images/pritam.jpg' },
    { name: 'Amit Trivedi', image: '/images/amit.jpg' },
    { name: 'Vishal–Shekhar', image: '/images/vs.jpg' },
    { name: 'Himesh Reshammiya', image: '/images/himesh.jpg' },
    { name: 'Ed Sheeran', image: '/images/ed.jpg' },
    { name: 'Justin Bieber', image: '/images/justin.jpg' },
    { name: 'The Weeknd', image: '/images/weeknd.jpg' },
    { name: 'Shawn Mendes', image: '/images/shawn.jpg' },
    { name: 'Charlie Puth', image: '/images/charlie.jpg' },
    { name: 'Harry Styles', image: '/images/harry.jpg' },
    { name: 'Dua Lipa', image: '/images/dua.jpg' },
    { name: 'Ariana Grande', image: '/images/ariana.jpg' },
    { name: 'Billie Eilish', image: '/images/billie.jpg' },
    { name: 'Bruno Mars', image: '/images/bruno.jpg' },
    { name: 'Lady Gaga', image: '/images/ladygaga.jpg' },
    { name: 'Taylor Swift', image: '/images/taylor.jpg' },
    { name: 'Beyoncé', image: '/images/beyonce.jpg' },
    {name: 'Adele', image: '/images/adele.jpg' },
    { name: 'Rihanna', image: '/images/rihanna.jpg' },
    { name: 'Michael Jackson', image: '/images/michael.jpg'},
    { name: 'Britney Spears', image: '/images/britney.jpg' },
    { name: 'Lana Del Rey', image: '/images/lana.jpg' },
  ];

  // Toggle individual artist
  const toggleArtist = (name) => {
    setSelectedArtists((prev) =>
      prev.includes(name) ? prev.filter((a) => a !== name) : [...prev, name]
    );
  };

  // Select All / Deselect All
  const toggleSelectAll = () => {
    if (selectedArtists.length === artists.length) {
      setSelectedArtists([]); // deselect all
    } else {
      setSelectedArtists(artists.map((artist) => artist.name)); // select all
    }
  };

  // Clear Selection
  const clearSelection = () => {
    setSelectedArtists([]);
  };

  const handleNext = () => {
    if (selectedArtists.length === 0) {
      alert('Please select at least one artist.');
      return;
    }
    localStorage.setItem('selectedArtists', selectedArtists.join(','));
    navigate('/music-feed');
  };

  return (
    <div className="artist-selection-container">
      <h1 className="page-title">🎤 Which Artist Do You Want to Listen?</h1>

      {/* Select All + Clear Selection */}
      <div className="select-controls">
        <label>
          <input
            type="checkbox"
            checked={selectedArtists.length === artists.length}
            onChange={toggleSelectAll}
          />
          Select All
        </label>
        <button className="clear-button" onClick={clearSelection}>
          Clear Selection
        </button>
      </div>

      <div className="artist-grid">
        {artists.map((artist) => (
          <div
            key={artist.name}
            className={`artist-card ${selectedArtists.includes(artist.name) ? 'selected' : ''}`}
            onClick={() => toggleArtist(artist.name)}
          >
            <img src={artist.image} alt={artist.name} />
            <p>{artist.name}</p>
          </div>
        ))}
      </div>

      <button className="next-button" onClick={handleNext}>Next</button>
    </div>
  );
};

export default ArtistSelectionPage;