'use client';
import { Button } from '@/components/ui/button';
import { useSession, signIn } from 'next-auth/react';

export default function Login() {
  const { data: session, status } = useSession();
  if (status !== 'authenticated') {
    return (
      <div className="pt-24 text-center mx-auto">
        <h1 className="text-4xl font-semibold mb-6">ログイン</h1>
        <Button
          className="border border-gray-950"
          onClick={() => signIn('google', {}, { prompt: 'login' })}
        >
          Googleでログイン
        </Button>
      </div>
    );
  }
  return (
    <div className="pt-24 text-center mx-auto">
      <h1 className="text-4xl font-semibold mb-6">ログイン</h1>
      <p>{JSON.stringify(session)}</p>
    </div>
  );
}
