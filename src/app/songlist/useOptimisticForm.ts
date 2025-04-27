import React from "react";
import { Song } from "./types";
import { addSong } from "./components/server/actions";

export default function useOptimisticForm({ initialSongs }: { initialSongs: Song[] }) {
    const [songs, addOptimisticSong] = React.useOptimistic<Song[], Song>(
        initialSongs,
        (state, newSong) => [...state, newSong]
    );

    const [isPending, startTransition] = React.useTransition();

    async function handleSubmit(formData: FormData) {
        const title = formData.get('title') as string;
        const artist = formData.get('artist') as string;

        if (!title || !artist) return;

        const newSong = {
            id: Date.now(), // temp ID
            title,
            artist
        };

        addOptimisticSong(newSong); // instant local update!

        startTransition(async () => {
            await addSong(formData); // real server action
        });
    }

    return { handleSubmit, songs, isPending };
}