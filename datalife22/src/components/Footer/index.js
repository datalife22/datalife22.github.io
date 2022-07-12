import { Grid } from "../Layout";
import { FooterWrapper, LogoWrapper, ContactBox } from "./footer_components";
//TODO: UPDATE LOGOS
import polimi from "../../assets/polimi_logo.svg";
import nyu from "../../assets/nyu_logo.svg";

export default function Footer() {
  return (
    <FooterWrapper>
      <Grid>
        <LogoWrapper
          src={nyu}
          alt="New York University"
          href="https://www.nyu.edu/"
          target="_blank"
        />

        <LogoWrapper
          src={polimi}
          alt="Politecnico di Milano"
          href="https://www.polimi.it/en/"
          target="_blank"
        />

        <ContactBox>
          <h3>A project by:</h3>
          <a href="https://cusp.nyu.edu/" target="_blank" rel="noreferrer">
            Center for Urban Science + Progress
          </a>
          <a
            href="https://www.deib.polimi.it/eng/home-page"
            target="_blank"
            rel="noreferrer"
          >
            Dipartimento di Elettronica, Informazione e Bioingegneria
          </a>
          <a
            href="https://dipartimentodesign.polimi.it/en"
            target="_blank"
            rel="noreferrer"
          >
            Dipartimento di Design
          </a>
        </ContactBox>
      </Grid>
    </FooterWrapper>
  );
}
