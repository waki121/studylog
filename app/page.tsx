import { Cards } from '@/components/Card';
import { Button } from '@/components/ui/button';
import { ChartColumnBig } from 'lucide-react';
import Link from 'next/link';
export default function Home() {
  return (
    <div>
      <div className="text-center mx-auto py-24 animate-in slide-in-from-left duration-1000">
        <h2 className="mt-4 text-5xl font-semibold p-2 text-gray-800 animate-in fade-in duration-1000">
          <span className="text-6xl">勉強</span>を
          <div className="text-7xl bg-clip-text text-transparent bg-gradient-to-tl from-blue-400 to-emerald-400 sm:inline max-sm:my-4">
            記録
          </div>
          してみませんか
        </h2>
        <h3 className="text-gray-600 text-lg m-2 px-6">
          Studylogは勉強時間や教科を記録し、モチベーションを上げるために作られました。
        </h3>
        <Link href="/signup">
          <Button
            size="lg"
            variant="outline"
            className="bg-gray-950 text-gray-50 text-2xl font-semibold m-2 px-16 py-8 active:opacity-55 transition-[opacity] ease-in-out duration-300"
            asChild
          >
            <span>はじめる</span>
          </Button>
        </Link>
      </div>
      <Cards
        data={[
          {
            cardIcon: <ChartColumnBig className="w-5 my-2" />,
            cardTitle: 'グラフ',
            cardDescription: '勉強時間がグラフで確認できる機能を搭載予定です',
          },
        ]}
      />
    </div>
  );
}
