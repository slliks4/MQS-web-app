import { METABASE_URL } from '@/lib/aboutConsts';

export function MetabaseSection() {
  return (
    <section className="metabase-section">
      <div className="metabase-container">
        <iframe className="metabase-iframe" src={METABASE_URL} frameBorder={0} />
      </div>
    </section>
  );
}
