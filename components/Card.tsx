import { PropsWithChildren, ReactElement } from 'react';
import { Card, CardDescription, CardHeader, CardTitle } from './ui/card';
interface Props {
  cardIcon: ReactElement;
  cardTitle: string;
  cardDescription: string;
}
export const Cards = ({ data }: { data: PropsWithChildren<Props>[] }) => {
  return (
    <section
      className={`grid grid-cols-1 gap-5 px-4 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 bg-gradient-to-bl from-emerald-50 to-blue-50`}
    >
      {data.map((value, index) => (
        <CardData
          cardIcon={value.cardIcon}
          cardTitle={value.cardTitle}
          cardDescription={value.cardDescription}
          key={index}
        >
          {value.children}
        </CardData>
      ))}
    </section>
  );
};
export const CardData = (props: PropsWithChildren<Props>) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          {props.cardIcon}
          {props.cardTitle}
        </CardTitle>
        <CardDescription>
          {props.cardDescription}
          {props.children}
        </CardDescription>
      </CardHeader>
    </Card>
  );
};
