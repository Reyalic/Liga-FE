import { Header } from "@/components/Header";

export default function CardsLayout({ children }: {
 children: React.ReactNode;
}) {
  return (
    <div>
      <Header />
      { children }
    </div>
  );
}