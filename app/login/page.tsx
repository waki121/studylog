import { signIn } from '@/auth';
import { Button } from '@/components/ui/button';

export default function Login() {
  return (
    <form
      action={async () => {
        'use server';
        await signIn('google', { redirectTo: '/app' });
      }}
    >
      <div className="bg-gradient-to-bl from-emerald-50 to-blue-50">
        <div className="pt-24 text-center mx-auto">
          <h1 className="text-4xl font-semibold mb-6">ログイン</h1>
          <Button className="border border-gray-950" type="submit">
            Googleでログイン
          </Button>
        </div>
      </div>
    </form>
  );
}
