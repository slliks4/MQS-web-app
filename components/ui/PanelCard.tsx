interface PanelCardProps {
  title: string;
  txt: React.ReactNode;
  img: string;
  className?: string;
}

export function PanelCard({ title, txt, img, className = '' }: PanelCardProps) {
  return (
    <section
      className={`full-image-section ${className}`}
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="overlay-content">
        <h2>{title}</h2>
        <div className="panel-text">{txt}</div>
      </div>
    </section>
  );
}
