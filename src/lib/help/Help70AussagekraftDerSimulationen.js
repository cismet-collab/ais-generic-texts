import React, { useContext } from "react";
import { UIDispatchContext } from "react-cismap/contexts/UIContextProvider";
import GenericModalMenuSection from "react-cismap/topicmaps/menu/Section";

/* eslint-disable jsx-a11y/anchor-is-valid */

const Component = () => {
  const { setAppMenuActiveMenuSection } = useContext(UIDispatchContext);

  return (
    <GenericModalMenuSection
      sectionKey="aussagekraft"
      sectionTitle="Aussagekraft der Simulationen"
      sectionBsStyle="info"
      sectionContent={
        <div>
          <p>
            Die Starkregengefahrenkarte zeigt die Ergebnisse von Simulationen,
            die dem heutigen Stand der Technik entsprechen. Die Berechnungen
            basieren auf einem vereinfachten Modell der tatsächlichen
            Verhältnisse, mit dem sich kritischere Bereiche jedoch gut bestimmen
            lassen. Für eine noch differenziertere Modellierung müssten höher
            aufgelöste Geländedaten sowie detailliertere hydrologischen
            Grundlagen vorliegen und kleinräumige Strukturen wie Gartenmauern
            detailliert eingearbeitet werden.{" "}
          </p>

          <p>Was sind die wichtigsten Annahmen, die getroffen wurden?</p>

          <ul>
            <li>
              Abfließendes Regenwasser findet in Kellergeschossen oder
              Tiefgaragen ein Rückhaltevolumen, das nicht berücksichtigt werden
              konnte. Hierzu fehlen weitergehende Daten. Zudem sind die
              Verhältnisse in den Gebäuden aufgrund der unbekannten Ein- und
              Austrittspunkte auch noch nicht modellierbar.
            </li>

            <li>
              Variable Anteile des Regenwassers versickern oder verdunsten in
              der Realität. Für die Simulationen wurden räumlich verteilte
              Versickerungseffekte angesetzt. Die Versickerung ist jedoch stark
              von den Ausgangsbedingungen abhängig. Hat es bpsw. vor einem
              Starkregen bereits geregnet, versickert weniger Wasser. Ist der
              Boden andersherum zu trocken, ist die Anfangsinfiltration sehr
              gering, d. h. dass auch dann zunächst weniger Wasser versickert
              und mehr Wasser abflusswirksam wird. Insbesondere in den nicht
              befestigten Außenbereichen sind diese Variationen und
              Einflussmöglichkeiten zu berücksichtigen. Weitere hydrologische
              Prozesse, z. B. Interzeption, werden nicht berücksichitgt. Die
              Verdunstung spielt bei den hier betrachteten kurzen Niederschlägen
              nur eine untergeordnete Rolle.
            </li>

            <li>
              In Abhängigkeit der Flächennutzung wurden verschiedene Rauheiten
              angesetzt. Dies führt zu unterschiedlichen
              Abflussgeschwindigkeiten auf den Oberflächen. Auf land- und
              forstwirtschaftlich genutzten Flächen sowie Grünflächen läuft das
              Oberflächenwasser aufgrund der Vegetation langsamer ab. Im
              Gegensatz dazu läuft auf befestigen Flächen wie Straßen das
              Regenwasser schneller ab.
            </li>

            <li>
              Das Kanalnetz wurde vereinfacht über einen Verlustansatz
              berücksichtigt. Zu detaillierten Wirkungen von Abflüssen innerhalb
              des Kanalnetzes liegen in den Kommunen ggf. gesonderte
              Fachberechnungen vor. Die dargestellten Starkregen zeichnen sich
              durch hohe Regenintensitäten oberhalb der Bemessungsgrenze des
              Kanalnetzes aus. Über das Kanalnetz kann zwar ein gewisses
              Niederschlagsvolumen aufgenommen und abgeführt werden, allerdings
              sind die Kanalnetze nicht für die dargestellten Starkregen
              dimensioniert und müssen es auch nicht sein. Daher fließen bei den
              dargestellten Starkregen große Anteile oberirdisch ab oder können
              nicht mehr in das Kanalnetz eintreten.
            </li>
          </ul>

          <p>
            <strong>
              Die Modellannahmen, die stadtgebietsweite Niederschlagsbelastung
              und Fehler im Geländemodell können dazu führen, dass es zu
              Abweichungen zwischen den Simulationsergebnissen und beobachteten
              Überflutungen infolge von Starkregen kommen kann. Niederschläge
              der Stufe SRI 7 bzw. 9/10 können daher je nach Randbedingungen in
              der Realität auch etwas geringere oder höhere Wassertiefen auf der
              Geländeoberfläche zur Folge haben.
            </strong>{" "}
            Die unterschiedlichen Betroffenheiten im Stadtgebiet lassen sich
            aber sehr gut mit den Ergebnisdarstellungen aufzeigen. Die
            dargestellten Szenarien (außergewöhnliches und extremes
            Starkregenereignis) zeigen eine mögliche Spannweite der
            Überflutungen im Modell auf. Je nach Betroffenheit und
            Schadenspotential lassen sich auf dieser Grundlage Vorsorgemaßnahmen
            bewerten.
          </p>

          <p>
            <strong>
              {" "}
              Bitte berücksichtigen Sie, dass die Ergebnisse des dritten
              Szenarios (Simulation des Extremereignisses vom 14. Juli 2021)
              nicht unmittelbar mit den Ergebnissen der Modellregen (Szenario 1
              und 2) verglichen werden können.{" "}
            </strong>{" "}
            Das Niederschlagsereignis im Juli 2021 war ein Ausnahmeereignis,
            welches aus infolge vieler Randbedingungen und Umstände entstanden
            ist. Alle Randbedingungen können im Modell nicht abgebildet werden.
            Die Simulationsergebnisse jenes Niederschlages basieren entsprechend
            lediglich auf der Grundlage des Niederschlagsverlaufes, der damals
            stattgefunden hat. Weitere hydrologische Grundlagen, wie bspw.
            Hochwassereinflüsse oder besondere Umstände, die bspw. zu Zerstörung
            von Brücken oder Gebäuden geführt haben, können nicht abgebildet
            werden und die Ergebnisse beeinflussen. Bereiche in der Nähe großer
            Gewässer oder jener Gewässer, die unter besonderem
            Hochwassereinfluss stehen können, sollten grundsätzlich nur unter
            Hinzunahme und Berücksichtigung der geltenden
            Hochwassergefahrenkarten, welche in einem Layer in der Darstellung
            ergänzt werden können, interpretiert werden. Weiterhin ist zu
            bedenken, dass das für die Simulation verwendete Geländemodell aus
            Befliegungsdaten stammt, die nach der Flut aufgenommen wurden. Auch
            hier können daher Differenzen zwischen den Simulationsergebnissen
            und den damaligen Folgen und Geschehnissen auftreten. Bereiche, in
            denen infolge der Flut derzeit große, für das Abflussgeschehen
            bedeutsame Maßnahmen in Umsetzung sind, werden daher in der Karte
            mit einem extra Layer abgedeckt, um Irritationen und
            Missverständnisse zu vermeiden. Wir möchten betonen, dass der Fokus
            dieser Karte auf der Starkregenvorsorge liegt und nicht auf der
            Reproduktion bzw. Imitation des realen Ereignisses von 2021.
          </p>
          <p>
            Da nicht alle kleinräumigen Strukturen im Digitalen Geländemodell
            (DGM1), das vom Land NRW zur Verfügung gestellt und für die
            Simulationen verwendet wird, abgebildet werden können, bitten wir
            Sie, dabei zu helfen, das DGM sukzessive zu verbessern, indem Sie
            vermutete{" "}
            <a
              onClick={() => setAppMenuActiveMenuSection("modellfehlermelden")}
            >
              Fehler im Geländemodell melden
            </a>
            ! Bedenken Sie, dass es sein kann, dass ein neues Gebäude in den
            Simulationen nicht berücksichtigt wurde, weil es zum Zeitpunkt der
            Datenbereitstellung für die Simulationsberechnungen noch nicht im
            Liegenschaftskataster nachgewiesen war oder ggf. ein Gebäude
            inzwischen abgerissen wurde.
          </p>
        </div>
      }
    />
  );
};
export default Component;
