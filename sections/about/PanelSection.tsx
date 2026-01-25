import { PanelCard } from '@/components/ui/PanelCard';
import { panels } from '@/lib/aboutConsts';

export function PanelsSection() {
  return (
    <>
      {panels.map(({ title, txt, img }) => (
        <PanelCard key={title} title={title} txt={txt} img={img} />
      ))}
    </>
  );
}
