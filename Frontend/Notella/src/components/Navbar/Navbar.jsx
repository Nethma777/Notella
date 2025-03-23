import React, { useState } from 'react';
import ProfileInfo from '../Cards/profileInfo';
import { useNavigate } from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const Navigate = useNavigate();
  const handleSearch = () => { };

  const onClearSearch = () => {
    setSearchQuery("");
  };
  const onLogout = () => {
    Navigate("/login");
  }
  return (
    <div className="bg-white flex items-center justify-between px-6 py-2 drop-shadow">
      <h2 className="text-xl font-medium text-balck py-2">Notella</h2>
      <SearchBar
        value={searchQuery}
        onChange={({ target }) => {
          setSearchQuery(target.value);
        }}
        handleSearch={handleSearch}
        onClearSearch={onClearSearch} />
      <ProfileInfo onLogout={onLogout} />
    </div>
  );
};

export default Navbar;
