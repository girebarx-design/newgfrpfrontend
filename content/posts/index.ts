import type { Post } from "../../lib/posts";

export const posts: Post[] = [
  {
    slug: "is-18256-what-it-actually-requires-from-your-line",
    title: "IS 18256:2023: what it actually requires from your production line",
    summary: "A plain read of India's GFRP rebar standard and the stations on a production line that decide whether your bar can pass it.",
    date: "2026-09-12",
    img: { src: "/img/lab-test.jpg", alt: "Tension, flexural, and torsion test results on GFRP rebar", cap: "Lab testing · tension, flexural, torsion" },
    body: [
      { t: "p", x: "IS 18256:2023 is the Bureau of Indian Standards specification for solid round GFRP bars used in concrete reinforcement, and IS 18255:2023 sets out the test methods that go with it. Together they replaced the situation that existed before them, where every buyer wrote their own tender clause and every supplier answered it differently. BIS certification against IS 18256 is mandatory for anyone selling these bars in India, which means the ISI mark and a valid CM/L number, and that requirement does not stop at the trading company — it reaches back to the line that made the bar." },
      { t: "h", x: "What the standard is actually checking" },
      { t: "p", x: "IS 18256 sets tensile properties by bar size, minimum fibre content, bond strength, transverse shear strength, moisture absorption, and resistance to alkali exposure. None of these are cosmetic checks. A bar can look correct — right diameter, right rib pattern, right colour — and still fail every one of them, because each property comes from something that happened inside the die and the resin bath, not from what the bar looks like once it is cut and coiled." },
      { t: "h", x: "Why this is a machine question before it is a testing question" },
      { t: "p", x: "A lab report tells you whether a specific batch passed. It does not tell you whether the line that made it can pass consistently, run after run, diameter after diameter. That second question is decided upstream, at stations most buyers never ask about when they are looking at a machine." },
      { t: "p", x: "Fibre content and bond strength trace back to impregnation — whether resin reaches every filament or leaves dry fibre inside the bar, which shows up later as a void and a weak point for alkali attack. Tensile properties trace back to cure — whether the die and the curing section actually hold their set temperature through a run, because a heater that fades undercures the bar and an undercured bar does not reach its rated strength on the tensile bench, no matter what the datasheet says the line is capable of." },
      { t: "h", x: "Moisture and alkali resistance start before the resin bath" },
      { t: "p", x: "Moisture absorption and alkali resistance are two separate line items in the standard, but they start at the same place: whether the glass roving is dry before it meets resin. A line without a preheater ahead of impregnation is carrying moisture into the bar as a defect you cannot see, and cannot correct later, no matter how good the rest of the run is. This is one of the cheaper stations on a line to specify correctly and one of the most expensive to retrofit afterward." },
      { t: "h", x: "IRC:137-2022, if you are selling into highway or bridge work" },
      { t: "p", x: "Roads and bridges have a second layer on top of IS 18256: IRC:137-2022, the Indian Roads Congress guideline for designing GFRP-reinforced elements in highway projects — bridge decks, approach slabs, culverts, retaining walls. It is written in the same philosophy as ACI 440 but uses Indian material and safety-factor conventions, and it is the reference NHAI and state PWDs actually design against. If a plant's growth plan includes government road work, this is the document to read before quoting, not after a tender comes back with a clause you cannot meet." },
      { t: "p", x: "None of this changes what a line costs. It changes what question you ask before you buy one — not \"what diameter range does it run\" but \"can this line hold the temperature and the impregnation quality that IS 18256 is actually testing for, at the speed you plan to run it.\" That is a harder question to get a straight answer to, which is exactly why it is worth asking before the order, not after the first batch of bar comes back from the lab." },
    ],
  },
  {
    slug: "how-gfrp-rebar-is-made",
    title: "How GFRP rebar is actually made",
    summary: "A walk down the line from creel to cut, and what goes wrong at each station.",
    date: "2026-08-25",
    img: { src: "/img/line-overview.jpg", alt: "Full GFRP pultrusion line layout, creel to winder", cap: "The line, creel to winder" },
    body: [
      { t: "p", x: "A production line looks like one machine but it is really eight stations in a row, and each one can spoil what the previous one did. That is why a four-hour run tells you more about a machine than any specification sheet." },
      { t: "h", x: "The creel" },
      { t: "p", x: "Glass roving feeds from creels at the back of the line. How many ends you pull sets the diameter. How evenly they feed decides whether the bar has a consistent cross section, and inconsistent section is what turns into rejected batches later." },
      { t: "h", x: "Impregnation" },
      { t: "p", x: "The fibre passes through resin. On a controlled line this happens in stages rather than one bath, because dry fibre left inside a bar is a void, and voids are where alkali attack starts once the bar is in concrete." },
      { t: "h", x: "The die" },
      { t: "p", x: "Heated, and the temperature has to hold. Ask to watch the controller readout during a run rather than reading the brochure — a heater that fades above 250 °C undercures the bar, and undercured bar fails on the tensile bench." },
      { t: "h", x: "Pulling" },
      { t: "p", x: "A caterpillar puller grips along a length. A roller puller grips at points and slips. That difference shows up as elastic modulus, and modulus is what a structural engineer designs against — which is why it quietly decides which projects will accept your bar." },
    ],
  },
];
