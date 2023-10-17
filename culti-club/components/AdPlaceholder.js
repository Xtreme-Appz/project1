import React from 'react';

const AdPlaceholder = ({ ad }) => {
  return (
    <div className="ad-placeholder">
      <img src={ad.image} alt={ad.title} />
      <div className="ad-info">
        <h3>{ad.title}</h3>
        <p>{ad.description}</p>
        <a href={ad.link} target="_blank" rel="noopener noreferrer">Learn More</a>
      </div>
      <style jsx>{`
        .ad-placeholder {
          background-color: rgba(0, 0, 0, 0.7);
          border-radius: 10px;
          padding: 20px;
          margin: 20px 0;
          display: flex;
          align-items: center;
        }
        .ad-placeholder img {
          width: 100px;
          height: 100px;
          margin-right: 20px;
        }
        .ad-placeholder .ad-info h3 {
          color: #00ff00;
          margin-bottom: 10px;
        }
        .ad-placeholder .ad-info p {
          color: #ffffff;
          margin-bottom: 10px;
        }
        .ad-placeholder .ad-info a {
          color: #00ff00;
          text-decoration: none;
        }
        .ad-placeholder .ad-info a:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
};

export default AdPlaceholder;