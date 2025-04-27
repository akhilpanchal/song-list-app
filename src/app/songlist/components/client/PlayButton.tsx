'use client';

import { useState } from 'react';
import { PlayIcon } from '@heroicons/react/24/solid';

export default function SongPlayButton() {
    const [liked, setLiked] = useState(false);

    return (
        <button className="bg-blue-500 text-white w-10 h-10 flex items-center justify-center rounded-full shadow hover:bg-blue-600 transition">
          <PlayIcon className="w-5 h-5" />
        </button>

    );
}