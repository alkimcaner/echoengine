"use client";

import { useCompletion } from "ai/react";

export default function Home() {
  const {
    completion,
    input,
    stop,
    isLoading,
    handleInputChange,
    handleSubmit,
  } = useCompletion();

  return (
    <div className="mx-auto w-full max-w-lg py-24 flex flex-col">
      <form onSubmit={handleSubmit}>
        <label>
          Say something...
          <input
            className="w-full max-w-lg border border-gray-300 rounded mb-8 shadow-xl p-2"
            value={input}
            onChange={handleInputChange}
          />
        </label>
        <output>{completion}</output>
      </form>
    </div>
  );
}
