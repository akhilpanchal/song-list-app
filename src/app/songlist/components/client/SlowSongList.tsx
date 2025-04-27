'use client';

import { addSong } from '../server/actions';
import AddSongForm from './AddSongForm';
import { useState } from 'react';

interface Song {
    id: number;
    title: string;
    artist: string;
}

export default function SlowSongList({ initialSongs: songs }: { initialSongs: Song[] }) {
    const [isPending, setIsPending] = useState(false);

    async function handleSubmit(formData: FormData) {
        setIsPending(true);

        const title = formData.get('title') as string;
        const artist = formData.get('artist') as string;

        if (!title || !artist) return;

        await addSong(formData); // real server action
        setIsPending(false);
    }

    return (
        <div className="space-y-6">
            <AddSongForm handleSubmit={handleSubmit} isPending={isPending} />

            <div className="space-y-2">
                {songs.map((song) => (
                    <div
                        key={song.id}
                        className="border p-4 rounded shadow flex justify-between items-center"
                    >
                        <div>
                            <div className="font-bold">{song.title}</div>
                            <div className="text-sm text-gray-600">{song.artist}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
