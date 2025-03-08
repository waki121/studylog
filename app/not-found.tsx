import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '404 Not Found - Studylog',
};

export default function NotFound() {
  return (
    <div className="pt-24 text-center bg-gradient-to-bl from-emerald-50 to-blue-50">
      <h1 className="text-6xl font-bold tracking-wide m-8">404</h1>
      <p className="text-gray-600 text-lg m-2 px-6">
        お探しのページが見つかりませんでした。
        <br />
        アプリのバージョンアップなどでページが変更された可能性があります。
      </p>
      <Link href="/">
        <Button>ホームに戻る</Button>
      </Link>
    </div>
  );
}
