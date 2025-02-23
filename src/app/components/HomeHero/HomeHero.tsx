import { FC } from "react";
import Image from "next/image";
import illustration1 from "../../images/illustration 1@2x.png";
import illustration2 from "../../images/illustration 2@2x.png";
import Link from "next/link";

type Props = {
    started: boolean;
  };

const HomeHero: FC<Props> = ({started}) => {
    return (
        <section className="hero">
            <div className={started ? "row hideOpacity" : "row"}>
                <div className="col">
                    <h1>Connettiti con i tuoi libri di testo</h1>
                    <p>Utilizza i manuali di studio della tua classe come fonte di informazione...</p>
                </div>
                <div className="col_img">
                    <Image src={illustration1} alt="" className="img"/>
                </div>
            </div>
            <div className={started ? "row hideOpacity" : "row"} style={{gap: 100}}>
                <div className="col_img">
                    <Image src={illustration2} alt="" className="img"/>
                </div>
                <div className="col">
                    <h2>DIDEM</h2>
                    <p>è più preciso di Chat gpt, perchè consoce i contenuti dei tuoi libri di testo!</p>
                </div>
            </div>
        </section>
    );
};

export default HomeHero;
