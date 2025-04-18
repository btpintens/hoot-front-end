import React from 'react'

import { Link } from "react-router-dom";

const HootList = () => {
  const hoots = [
    {
      _id: 1,
      title: "Thoughts on the Local Sports Franchise",
      author: "Another User",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      date: "4/30/2024",
    },
    {
      _id: 2,
      title: "LoFi Study Music",
      author: "Ian Terada",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      date: "4/30/2024",
    },
  ];

  return (
    <div className="hoot-list">
      <h2>All Hoots</h2>
      <div className="hoot-grid">
        {hoots.map((hoot) => (
          <div key={hoot._id} className="hoot-card">
            <h3>
              <Link to={`/hoots/${hoot._id}`}>{hoot.title}</Link>
            </h3>
            <p><em>by {hoot.author} — {hoot.date}</em></p>
            <p>{hoot.content.substring(0, 120)}...</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HootList;
