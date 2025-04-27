import { fetchSongs } from "../components/server/actions";
import SlowSongList from "../components/client/SlowSongList";

export default async function SongListPage() {
  const initialSongs = await fetchSongs();

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-6">🎵 My Song List</h1>
        <SlowSongList initialSongs={initialSongs} />
        </main>
  );
}
