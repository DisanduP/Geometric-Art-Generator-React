import React, { useState, useEffect } from 'react';
import './Geometric.sass';

const SHAPES = [
  'quad-circle-1',
  'quad-circle-2',
  'quad-circle-3',
  'quad-circle-4',
  'triangle-1',
  'triangle-2',
  'triangle-3',
  'triangle-4',
  'circle',
];

const COLORS = ['#01d2fd', '#ffc700', '#fe9f12', '#06d0c7'];

function randomInt(max) {
  return Math.floor(Math.random() * max);
}

export default function Geometric() {
  const [tiles, setTiles] = useState([]);

  function generatePattern() {
    const next = Array.from({ length: 20 }, () => ({
      shape: SHAPES[randomInt(SHAPES.length)],
      bg: COLORS[randomInt(COLORS.length)],
    }));
    setTiles(next);
  }

  useEffect(() => {
    generatePattern();
  }, []);

  return (
    <div className="geometric-wrapper">
      <div className="container">
        {tiles.map((t, i) => (
          <div key={i} className={`tile ${t.shape}`} style={{ backgroundColor: t.bg }} />
        ))}
      </div>
      <button className="generate-btn" id="btn" onClick={generatePattern}>Generate</button>
    </div>
  );
}
