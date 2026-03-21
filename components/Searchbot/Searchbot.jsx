"use client";
import React, { useState, useEffect } from 'react';
import './Searchbot.css';

export default function Searchbot() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isFullOpen, setIsFullOpen] = useState(false);
  const [query, setQuery] = useState('');

  // Close full interface on Escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') setIsFullOpen(false);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  const handleSearchSubmit = (e) => {
    if (e) e.preventDefault();
    if (!query.trim()) return;
    setIsFullOpen(true);
    console.log('Searching for:', query);
  };

  const suggestions = [
    "Upcoming Events in Poornima",
    "Where is the Auditorium?",
    "Recent Tech Projects",
    "Campus Leaderboard",
    "How to post a confession?"
  ];

  return (
    <>
      <div className={`searchbot-main-container ${isExpanded || isFullOpen ? 'expanded' : ''} ${isFullOpen ? 'full-view-active' : ''}`}>
        <div className="searchbot-wrapper">
          <div
            className="searchbot-icon"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
            </svg>
          </div>

          <form onSubmit={handleSearchSubmit} style={{ display: 'flex', flex: 1, alignItems: 'center' }}>
            <input
              type="text"
              className="searchbot-input"
              placeholder="Ask Snappybot, find projects..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onFocus={() => setIsExpanded(true)}
            />
            {(isExpanded || query) && (
              <button
                type="submit"
                className="searchbot-submit"
                aria-label="Submit search"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </button>
            )}
          </form>
        </div>
      </div>

      {isFullOpen && (
        <div className="searchbot-full-overlay">
          <div className="full-overlay-background" onClick={() => setIsFullOpen(false)} />

          <div className="full-interface-content">
            <button className="close-full-btn" onClick={() => setIsFullOpen(false)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            <div className="interface-header">
              <h2>SnappyBot AI</h2>
              <p>Search campus everything, anytime.</p>
            </div>

            <div className="search-bar-large">
              <input
                autoFocus
                type="text"
                placeholder="Ask me anything about Snappy-Poornima..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>

            <div className="suggestions-grid">
              {suggestions.map((text, i) => (
                <div key={i} className="suggestion-pill" onClick={() => setQuery(text)}>
                  {text}
                </div>
              ))}
            </div>

            <div className="search-results-area">
              <div className="empty-state">
                <div className="ai-orb"></div>
                <p>Waiting for your input to fetch insights...</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
