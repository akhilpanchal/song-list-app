'use server';

import { revalidatePath } from "next/cache";

let songs = [
  { id: 1, title: "Bohemian Rhapsody", artist: "Queen" },
  { id: 2, title: "Imagine", artist: "John Lennon" },
  { id: 3, title: "Smells Like Teen Spirit", artist: "Nirvana" }
];

// This mimics your database (we'll use in-memory for now)

export async function addSong(formData: FormData) {
  const title = formData.get('title') as string;
  const artist = formData.get('artist') as string;

  if (!title || !artist) return;

  songs.push({
    id: songs.length + 1,
    title,
    artist
  });

  revalidatePath("./");
}

export async function fetchSongs() {
  await new Promise((res) => setTimeout(res, 500)); // fake delay
  return songs;
}
