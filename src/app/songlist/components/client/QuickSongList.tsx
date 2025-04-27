'use client';

import AddSongForm from './AddSongForm';
import { Song } from '../../types';
import useOptimisticForm from '../../useOptimisticForm';

export default function SongList({ initialSongs }: { initialSongs: Song[] }) {
    const { handleSubmit, isPending, songs } = useOptimisticForm({ initialSongs });

    return (
        <div className="space-y-6">
            <AddSongForm
                handleSubmit={handleSubmit}
                isPending={isPending}
            />

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
