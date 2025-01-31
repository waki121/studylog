import { ReactElement } from 'react';
import { Card, CardDescription, CardHeader, CardTitle } from './ui/card';
interface Props {
  cardIcon: ReactElement;
  cardTitle: string;
  cardDescription: string;
}
export const Cards = ({ data }: { data: Props[] }) => {
  return (
    <section className="grid grid-cols-1 gap-5 px-4 xl:grid-cols-3">
      {data.map((value, index) => (
        <CardData
          cardIcon={value.cardIcon}
          cardTitle={value.cardTitle}
          cardDescription={value.cardDescription}
          key={index}
        />
      ))}
    </section>
  );
};
export const CardData = (props: Props) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{props.cardIcon}{props.cardTitle}</CardTitle>
        <CardDescription>{props.cardDescription}</CardDescription>
      </CardHeader>
    </Card>
  );
};
