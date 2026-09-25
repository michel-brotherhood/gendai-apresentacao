import debriefingPhoto from "../../assets/photos/debriefing-plate.jpg";
import { Heading, Prose } from "../Heading.jsx";
import PhotoSplit from "../PhotoSplit.jsx";
import Section from "../Section.jsx";

export default function Debriefing() {
  return (
    <Section id="debriefing" index={3} tone="paper">
      <PhotoSplit image={debriefingPhoto} alt="Prato autoral Gendai Premium" side="right">
        <Heading>Debriefing</Heading>
        <Prose className="mt-8">
          <p>
            O Gendai Premium é um restaurante japonês em Niterói com 25 anos de
            história, que chega ao momento atual com uma operação madura,
            processos consolidados, público fiel e uma identidade construída
            ao longo desses anos.
          </p>
          <p>
            Não se trata de uma empresa buscando validar produto, atendimento
            ou operação — o principal desafio está em transformar tudo o que
            já foi construído em percepção de marca e comunicação de valor.
          </p>
        </Prose>
      </PhotoSplit>
    </Section>
  );
}
