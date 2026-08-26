import { Spread } from "@/components/Spread";
import { Jsonld, breadcrumb } from "@/components/Jsonld";
import { START, DRIVERS } from "@/content/site";

export const metadata = {
  title: "How to start a GFRP rebar plant in India",
  description:
    "What a GFRP rebar plant actually needs: shed, sanctioned power, raw material, people, testing and time. Plus the six things that decide your cost of production.",
  alternates: { canonical: "/start-a-plant" },
};

export default function Start() {
  return (
    <>
      <Jsonld data={breadcrumb([["Home","/"],["Start a plant","/start-a-plant"]])} />
      <Spread
        here="/start-a-plant" eyebrow="Start a plant"
        title="This business is not for everyone."
        answer="A shed, a sanctioned power connection, and about eighteen months before the plant pays for itself. If one of the three is missing, wait."
        img="/img/store.jpg" alt="Raw material store at the Pithampur plant"
        cap="Raw material store · Pithampur"
      >
        <div className="lst">
          {START.map(([t, d], i) => (
            <div key={t} style={{ display: "contents" }}>
              <span className="sec">{String(i + 1).padStart(2, "0")}</span>
              <div className="itm"><strong>{t}</strong><span>{d}</span></div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 46, maxWidth: "44rem" }}>
          <h2 className="grp">Six things decide your cost of production.</h2>
          <p style={{ fontSize: 15.5, color: "var(--dim)", fontWeight: 300, marginBottom: 24 }}>
            The purchase price is not one of them. We are not going to publish our figures, and you
            know your own costs better than we do. Here is the arithmetic to run.
          </p>
          <div className="lst">
            {DRIVERS.map(([t, d], i) => (
              <div key={t} style={{ display: "contents" }}>
                <span className="sec">{String(i + 1).padStart(2, "0")}</span>
                <div className="itm"><strong>{t}</strong><span>{d}</span></div>
              </div>
            ))}
          </div>
        </div>
      </Spread>
    </>
  );
}
