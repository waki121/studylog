import { Cards } from '@/components/Card';
import { badgeVariants } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ChartColumnBig, MegaphoneIcon, UserIcon } from 'lucide-react';
import Link from 'next/link';
export default function Home() {
  return (
    <div>
      <div className="text-center mx-auto pt-24 animate-in slide-in-from-left duration-1000">
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
        <p className={badgeVariants({ className: 'mt-5 mb-2 bg-blue-200' })}>
          公開ベータ版
        </p>
        <br />
        <Link href="/login">
          <Button
            size="lg"
            variant="outline"
            className="bg-gray-950 text-gray-50 text-2xl font-semibold m-2 px-16 py-8 active:opacity-55 transition-[opacity] ease-in-out duration-300"
          >
            はじめる
          </Button>
        </Link>
      </div>
      <div className="animate-in slide-in-from-right duration-1000">
        <h1 className="font-semibold text-4xl underline mb-4 tracking-widest text-center">
          特徴
        </h1>
        <Cards
          data={[
            {
              cardIcon: <ChartColumnBig className="w-5 my-2" />,
              cardTitle: 'グラフ',
              cardDescription: '勉強時間がグラフで確認できる機能を搭載予定です',
            },
            {
              cardIcon: <UserIcon className="w-5 my-2" />,
              cardTitle: '登録が簡単',
              cardDescription:
                'Googleアカウントを用いてアカウント登録をする仕組みになっているため、安全で面倒なパスワードの必要がありません！',
            },
            {
              cardIcon: <MegaphoneIcon className="w-5 my-2" />,
              cardTitle: '意見を伝えれる',
              cardDescription:
                '現在このアプリは公開ベータ版で、意見や新機能などを募集しております！',
              children: (
                <>
                  <br />
                  <Link href="https://forms.gle/haFSbjQ7m4A4QzAHA">
                    <Button variant="link">意見はこちらから</Button>
                  </Link>
                </>
              ),
            },
          ]}
        />
      </div>
    </div>
  );
}
