'use client';
import { Button } from '@/components/ui/button';
import { useSession, signIn } from 'next-auth/react';
import { redirect } from 'next/navigation';

export default function Login() {
  const { status } = useSession();

  if (status === 'authenticated') {
    redirect('/app');
  } else {
    return (
      <div className="bg-gradient-to-bl from-emerald-50 to-blue-50">
        <div className="pt-24 text-center mx-auto">
          <h1 className="text-4xl font-semibold mb-6">ログイン</h1>
          <Button
            className="border border-gray-950"
            onClick={() => signIn('google', {}, { prompt: 'login' })}
          >
            Googleでログイン
          </Button>
        </div>
      </div>
    );
  }
}
