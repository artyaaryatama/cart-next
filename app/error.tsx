'use client';

import { useEffect } from 'react';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error('Captured by error.tsx:', error);
  }, [error]);

  return (
    <div className="p-4 text-center">
      <h1 className="text-xl font-bold text-red-600">
        Something wrong happened here! 
      </h1>
      <p className="mt-2 text-gray-600">{error.message}</p>

      <button
        onClick={() => reset()}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg"
      >
        Try again
      </button>
    </div>
  );
}
