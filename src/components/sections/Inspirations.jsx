import aizomePhoto from "../../assets/photos/inspiration-aizome.webp";
import sakaguraPhoto from "../../assets/photos/inspiration-sakagura.webp";
import sushiguenPhoto from "../../assets/photos/inspiration-sushiguen.webp";
import sushileblonPhoto from "../../assets/photos/inspiration-sushileblon.webp";
import { Heading } from "../Heading.jsx";
import Section from "../Section.jsx";

const REFERENCES = [
  { name: "Sushi Leblon", photo: sushileblonPhoto },
  { name: "Sushiguen SP", photo: sushiguenPhoto },
  { name: "Aizomê", photo: aizomePhoto },
  { name: "Sakagura NY", photo: sakaguraPhoto },
];

export default function Inspirations() {
  return (
    <Section id="inspiracoes" index={10} tone="dim">
      <div className="px-6 py-16 md:px-16 md:py-24">
        <Heading>Nossas inspirações</Heading>
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {REFERENCES.map((ref) => (
            <figure key={ref.name}>
              <div className="aspect-[3/4] overflow-hidden rounded-xl">
                <img src={ref.photo} alt={ref.name} className="h-full w-full object-cover" />
              </div>
              <figcaption className="mt-3 text-center font-display text-sm uppercase tracking-wide text-ink md:text-base">
                {ref.name}
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="mx-auto mt-10 max-w-3xl text-center text-sm text-ink/80 md:text-base">
          Tradição como ativo da marca. História real por trás dos
          restaurantes. Bastidores, técnica e hospitalidade. Experiência além
          do prato.
        </p>
      </div>
    </Section>
  );
}
