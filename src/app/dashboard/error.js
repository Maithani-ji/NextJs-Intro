'use client' // Must be a Client Component

import { useEffect } from 'react';

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error("Error loading dashboard:", error);
  }, [error]);

  return (
    <div className="p-6 text-red-600 text-center">
      ❌ Something went wrong: {error.message}
      <br />
      <button
        className="mt-4 px-4 py-2 bg-red-500 text-white"
        onClick={() => reset()}
      >
        Try Again
      </button>
    </div>
  );
}
