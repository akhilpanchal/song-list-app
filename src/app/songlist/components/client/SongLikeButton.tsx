'use client';

import { useState } from 'react';

export default function SongLikeButton() {
  const [liked, setLiked] = useState(false);

  return (
    <button 
      className="px-3 py-1 rounded-b-lg bg-blue-500 text-white hover:bg-blue-600"
      onClick={() => setLiked(!liked)}
    >
      {liked ? 'Liked ❤️' : 'Like ♡'}
    </button>
  );
}
