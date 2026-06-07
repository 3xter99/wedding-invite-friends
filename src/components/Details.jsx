import { wedding } from '../data/content';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Animate } from './Animate';
import { HeartIcon } from './Icons';

export default function Details() {
  const { ref, visible } = useScrollReveal(0.08);

  return (
    <section ref={ref} className={`details section ${visible ? 'details--visible' : ''}`}>
      <div className="details__bg" aria-hidden="true" />

      <Animate>
        <h2 className="section-heading section-heading--light">ДЕТАЛИ</h2>
      </Animate>

      <Animate delay={150} variant="fade">
        <HeartIcon className="details__heart" />
      </Animate>

      <Animate delay={250}>
        <p className="details__text">{wedding.wishes.text}</p>
      </Animate>
    </section>
  );
}
