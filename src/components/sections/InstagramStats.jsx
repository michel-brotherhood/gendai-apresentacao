import instagramPhoto from "../../assets/photos/instagram-bowl.webp";
import { Heading } from "../Heading.jsx";
import PhotoSplit from "../PhotoSplit.jsx";
import Section from "../Section.jsx";
import StatCard from "../StatCard.jsx";

export default function InstagramStats() {
  return (
    <Section id="instagram" index={5} tone="paper">
      <PhotoSplit image={instagramPhoto} alt="Bowl autoral do Gendai Premium" side="right">
        <Heading>Redes sociais</Heading>
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <StatCard title="Instagram">
            <p>18,6 mil seguidores</p>
            <p>1.315 publicações</p>
          </StatCard>
          <StatCard title="Engajamento">
            <p>Taxa de 2,55%, classificada como média.</p>
            <p>30 curtidas, 5 comentários e 1,4 mil visualizações por publicação.</p>
          </StatCard>
          <StatCard title="Interesse">
            <p>
              Refeições com família, amigos ou parceiros, interesse em
              novidades gastronômicas, alimentação fora de casa e ocasiões
              especiais.
            </p>
          </StatCard>
          <StatCard title="Publicações">
            <p>Média de 1 publicação por semana.</p>
            <p>
              Comparado com perfis de tamanho semelhante, as visualizações no
              perfil do Gendai Premium estão acima.
            </p>
          </StatCard>
        </div>
      </PhotoSplit>
    </Section>
  );
}
