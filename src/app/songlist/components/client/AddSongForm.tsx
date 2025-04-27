import React from 'react';

interface AddSongFormProps {
    handleSubmit: (data: FormData) => void;
    isPending: boolean;
}

const AddSongForm: React.FC<AddSongFormProps> = ({ handleSubmit, isPending }) => {
    return (
        <form action={handleSubmit} className="space-y-2">
            <input
                type="text"
                name="title"
                placeholder="Song Title"
                className="p-2 border rounded w-full"
                required
            />
            <input
                type="text"
                name="artist"
                placeholder="Artist"
                className="p-2 border rounded w-full"
                required
            />
            <button
                type="submit"
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                disabled={isPending}
            >
                {isPending ? 'Adding...' : '➕ Add Song'}
            </button>
        </form>
    );
};

export default AddSongForm;