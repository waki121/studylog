import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '勉強 - StudyLog App',
  description: '勉強時間を記録するアプリ',
};
export default async function StudyPage() {
  return <p>勉強管理ページ</p>;
}
