export default async function SongListPage() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-6">🎵 This is the Landing Page</h1>
      <div className="flex flex-col space-y-4 mb-6">
        <a href="/songlist/slow" className="text-blue-500 hover:underline">
          Go to Slow Song List
        </a>
        <a href="/songlist/quick" className="text-blue-500 hover:underline">
          Go to Quick Song List
        </a>
      </div>
    </main>
  );
}
