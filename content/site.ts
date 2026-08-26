// All site copy. Edit here — nothing reads from a database to render a page.

export const HERO = {
  eyebrow: "Composite Tech · India",
  title: "Start a GFRP rebar plant",
  titleQuiet: "in India",
  sub: "We picked this line for our own factory in Pithampur before we ever sold one.",
};

export const FACTS = [
  { value: "40+", label: "Countries with these lines" },
  { value: "Pithampur", label: "Our own plant" },
  { value: "Moldova", label: "Where they are built" },
  { value: "IS 18256", label: "What the bar is tested to" },
];

export const COUNTRIES_NOTE =
  "Composite-Tech report lines running in over 40 countries, including the USA, Spain and Mexico.";

export const HOME_ROWS = [
  { label: "The plant", title: "We run the line we sell",
    body: "Six days a week in Pithampur. When it stops, our production stops." },
  { label: "Before buying", title: "Eighteen tests for any line, ours included",
    body: "Free, no email, also in Hindi." },
  { label: "Verify us", title: "Ring the factory in Moldova yourself",
    body: "Their number is on the visit page. So are owners of lines in India." },
];

export const MACHINES = [
  { slug: "ct2", name: "CT2", role: "Straight rebar · two bars",
    blurb: "The entry line. Smallest footprint of the three and the usual starting point for a plant running one or two diameters.",
    specs: [["2","Bars at once"],["3–20 mm","Diameter range"],["3-phase","Supply"],["Caterpillar","Puller type"]] },
  { slug: "ct4", name: "CT4", role: "Straight rebar · four bars",
    blurb: "The common choice. Enough line for a plant selling into private work with room to take a bigger order.",
    specs: [["4","Bars at once"],["3–20 mm","Diameter range"],["31.5 × 5.2 × 2.5 m","Footprint L×W×H"],["Caterpillar","Puller type"]] },
  { slug: "ct6", name: "CT6", role: "Straight rebar · six bars",
    blurb: "What we run at Pithampur. Same footprint as the CT4, more bars through it.",
    specs: [["6","Bars at once"],["3–20 mm","Diameter range"],["35 kW","Connected power"],["380 V","3-phase supply"]] },
  { slug: "bent", name: "CNC bent", role: "Bent elements",
    blurb: "Stirrups and shaped elements, cut and bent to drawing. Different economics from straight bar, usually better.",
    specs: [["6–16 mm","Diameter range"],["CNC","Bending control"],["Programmable","Shape memory"],["Separate line","Not an attachment"]] },
  { slug: "mesh", name: "CT1M / CT2M", role: "Mesh",
    blurb: "Welded GFRP mesh for slabs and surface beds.",
    specs: [["1 or 2","Mesh widths"],["Programmable","Grid spacing"],["Roll or sheet","Output form"],["Separate line","Not an attachment"]] },
] as const;

export const STATIONS = [
  ["01","Creel","Roving feeds from the back of the line. How evenly it feeds decides whether the bar has a consistent section."],
  ["02","Pre-heat and plasma","Roving is dried and surface-activated before it meets resin. Bond between fibre and matrix is won or lost here."],
  ["03","Three-stage impregnation","Resin introduced in stages rather than one bath. Dry fibre inside a bar is a void, and voids are where attack starts."],
  ["04","Wrap and surface","Helical wrap and sand coating applied before cure. Retrofitting this later is expensive."],
  ["05","SWIR curing","Short-wave infrared passes through the glass and is absorbed by the resin, so the bar cures from the inside out."],
  ["06","Two-stage cooling","Controlled air, then water. Cooling too fast locks stress into the bar."],
  ["07","Caterpillar puller","Grips along a length rather than at points. This is what holds modulus where a roller puller does not."],
  ["08","Cut or coil","To length, or wound. Cut length consistency is measured here."],
] as const;

export const MATERIALS_NOTE =
  "The lines also run basalt and carbon fibre, and epoxy, vinyl ester or polyester resin systems.";

export const AUDIT_INTRO =
  "One question before any of it: what are you building — a brand, or something to sell? Everything below gets stricter as the answer gets more ambitious.";

export const AUDIT = [
  { group: "Cost of production", items: [
    ["Sustained speed at your largest diameter","Not your smallest. Peak speed on a thin bar is marketing."],
    ["Power per kilogram produced","Ask for the meter reading, not the connected load. Only one shows up on your bill."],
    ["Time from power-on to first saleable metre","Time it yourself. Then multiply by two starts a day and 300 days."],
    ["Startup scrap, weighed","In kilograms, on a scale, in front of you. Not a verbal figure."],
    ["Diameter changeover time","You will run several sizes. This is the one that quietly eats a month."],
    ["Steady-state scrap once the line settles","A different number from startup scrap, and the one that repeats every shift."],
  ]},
  { group: "Quality", items: [
    ["Tensile strength on bar from that run","Not from a sample they brought with them."],
    ["Elastic modulus","50–60 GPa, or under 40. Designers size to deflection, so this decides who can use your bar."],
    ["Diameter and weight per metre, 20 random bars","Work out the variation. High variation becomes your rejection rate."],
    ["Cut length spread over 100 consecutive cuts","Record the spread, not the average."],
    ["Surface consistency across the run","Sand coating and helical wrap pitch, start to finish."],
    ["Third-party report against IS 18256","On bar produced during that run, not a certificate from last year."],
  ]},
  { group: "Uptime", items: [
    ["Do the heaters hold above 250 °C","Or do they fade the moment you push them."],
    ["Pulling speed across diameters, and slippage","Ask how often the rollers get replaced, and what that costs."],
    ["In sync, or every parameter set by hand","Recipe memory, or an operator rebuilding settings at each changeover."],
    ["Wear-part life in writing","Die, puller pads, blades, heaters. In hours or metres, never “long life”."],
    ["Spares held where, delivered in how long","And the service engineer’s name."],
    ["Does your supplier manufacture, or only sell","Will they hand you a process, or a machine and good luck."],
  ]},
] as const;

export const START = [
  ["Land and shed","About 32 metres of clear length for the line, plus room for raw material and finished coils."],
  ["Power","A sanctioned three-phase connection. Get the application in early — this is the step that slips."],
  ["Raw material","Glass roving and resin. Which system you choose decides your cost and which projects will take your bar."],
  ["People","Two operators a shift and someone who can run a test. Training is part of what we supply."],
  ["Testing","A lab, or an arrangement with one. You cannot sell into specified work without reports."],
  ["Time","About eighteen months from decision to a plant that pays for itself."],
] as const;

export const DRIVERS = [
  ["Cold start to first good metre","Ask how long from cold until the first metre you can sell. Time it yourself, then multiply by two starts a day and 300 days."],
  ["Startup scrap","In kilograms, weighed in front of you. You bought that material. You also pay to get rid of it."],
  ["Diameter changeover","Count the changeovers in a month and multiply by the time each takes. Most people underestimate this one."],
  ["Steady-state scrap","Measured after the line settles. Apply it to a year of your planned tonnage."],
  ["Power per kilogram","The meter reading, not the connected load."],
  ["Manual stations","Count the positions needing a man standing at them. In India this is an availability problem more than a cost problem."],
] as const;

export const VISIT = [
  ["Where","Pithampur, Madhya Pradesh","Nearest airport Indore. Bring a stopwatch and a weighing scale."],
  ["What you see","Four hours of continuous production","Your diameter, your surface finish. Not a twenty-minute demo."],
] as const;

// Published by Composite-Tech at composite-tech.com/contacts
export const CT_CONTACT = [
  ["Moldova","+373 60 400 669"],
  ["Austria","+43 677 644 03208"],
  ["United Kingdom","+44 7746 190907"],
  ["WhatsApp","+373 60 400 669 · +373 61 010 889"],
  ["Email","info@composite-tech.com"],
  ["Address","Chișinău, str. Eugen Coca 41g, Moldova"],
] as const;

export const DISCLOSURE =
  "GFRPINDIA is run by Credific Ventures Private Limited, Pithampur, Madhya Pradesh. We make RebarX GFRP rebar and we are the India partner for Composite Tech machine lines. We picked this line for our own factory before we ever sold one.";
