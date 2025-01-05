import { useState } from 'react';
import { auth, provider, signInWithPopup } from '../firebase';

export default function Login() {
  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
      window.location.href = '/';
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <button
        onClick={handleLogin}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Login with Google
      </button>
    </div>
  );
}