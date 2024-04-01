import React, { useState } from 'react';

const EmojiData = [
  { name: '100', symbol: '💯' },
  { name: '1234', symbol: '🔢' },
  { name: 'Sırıtma', symbol: '😀' },
  { name: 'Ekşitme', symbol: '😬' },
  { name: 'Sırıtış', symbol: '😁' },
  { name: 'Neşeli', symbol: '😂' },
  { name: 'Gülen Yüz', symbol: '😃' },
  { name: 'Gülümsemek', symbol: '😄' },
  { name: 'Tatlı Gülüş', symbol: '😅' },
  { name: 'Kahkaha Atma', symbol: '🤣' },
  { name: 'Sevimli Melek', symbol: '😇' },
  { name: 'Göz Kırpma', symbol: '😉' },
];

function EmojiSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const copyEmoji = (symbol) => {
    navigator.clipboard.writeText(symbol);
  };

  const filteredEmojis = EmojiData.filter((emoji) =>
    emoji.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    
    <div className="emoji-search"><p>🐺Emoji Arama Motoru🐺</p>
      <div className="search-box" >
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <div className="emoji-container">
        {filteredEmojis.map((emoji, index) => (
          <div
            key={index}
            className={`emoji-item ${hoveredIndex === index ? 'hovered' : ''}`}
            onClick={() => copyEmoji(emoji.symbol)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            {emoji.symbol}  {emoji.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default EmojiSearch;
