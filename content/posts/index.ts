import type { Post } from "../../lib/posts";

export const posts: Post[] = [
  {
    slug: "how-gfrp-rebar-is-made",
    title: "How GFRP rebar is actually made",
    summary: "A walk down the line from creel to cut, and what goes wrong at each station.",
    date: "2026-08-25",
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
