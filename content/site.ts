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
  { label: "Our bias", title: "We want India making real GFRP, not lookalikes",
    body: "We are not neutral and we would rather say why: every good line that starts here makes the whole industry harder to fake." },
  { label: "Before buying", title: "Twenty checks for any line, ours included",
    body: "We send the full list to anyone who asks. It names no brand and recommends no machine." },
  { label: "Verify us", title: "Ring the factory in Moldova yourself",
    body: "Their number is on the visit page. So are owners of lines running in India." },
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
  ["01","Creel","Roving feeds from racks at the back of the line. How evenly it feeds decides whether the bar holds a consistent section."],
  ["02","Roving dryer","Drives moisture out before the fibre meets resin. Moisture at this point is a defect you cannot see until the bar is tested."],
  ["03","Impregnation module","Resin introduced in stages rather than one bath. Dry fibre left inside a bar is a void, and voids are where alkali attack starts."],
  ["04","Twisting and ribbing","Helical wrap and surface applied before cure. Whether rib distance can be changed, and stays synced to pulling speed, decides how much of your day goes on resetting the line."],
  ["05","Curing · infrared booster","Short-wave infrared passes through the glass and is absorbed by the resin, so the bar begins curing from the inside out."],
  ["06","Curing · tunnel kiln","Conventional curing follows the booster. The two together are the curing section, and the kiln is where heaters either hold 250 °C or fade."],
  ["07","Cooling module","Controlled cooling. Too fast and you lock stress into the bar."],
  ["08","Pulling device","Grips along a length rather than at points. This is what holds tolerance, and where you watch for slippage on a multi-bar run."],
  ["09","Cutting device","To length, automatically. Manual measure means a man, a tape, and a variance you will argue about with customers."],
  ["10","Winder","Coiled for despatch. Compact coils or large ones — large coils cost you more to ship, to every customer, for the life of the plant."],
] as const;

export const MATERIALS_NOTE =
  "The lines also run basalt and carbon fibre, and epoxy, vinyl ester or polyester resin systems.";

export const AUDIT_INTRO =
  "Three questions about you first. They decide how strict the rest of this needs to be.";

export const BUYER_CHECKS = [
  ["Cheapest possible start, or a setup built to grow","One of those buys a machine. The other buys a plant. They are not the same purchase."],
  ["A brand, or just something that produces","If you cannot say which, the machine will decide it for you."],
  ["Do you intend to export, ever","Say yes now and the requirements change immediately. Say no later and you have lost nothing."],
] as const;

export const AUDIT = [
  { group: "See it working", items: [
    ["Insist on a working line, not a demo unit","Your future depends on this one. A demo unit proves the machine can be switched on, nothing more."],
    ["Watch production speed live for at least 30 minutes","Continuously. Not a burst at the fastest diameter while someone talks over it."],
    ["Time the start of the line","Shift time lost at startup, and again after every stoppage, comes out of your month whether you count it or not."],
    ["Scrap at start and during production","Both numbers. They are different, and the second one repeats every shift."],
  ]},
  { group: "How the line is built", items: [
    ["Is there a preheater to remove moisture","Moisture in the roving before impregnation is a defect you cannot see until the bar is tested."],
    ["Do the heaters hold temperature","Not whether they reach it. Whether they hold it."],
    ["Can the heaters sustain 250 °C and above","Cheap heaters fade the moment you push them, and undercured bar fails on the bench."],
    ["Automatic cutting to length, or manual measure","Manual measure is a man, a tape and a variance you will be arguing about with customers."],
    ["Can ribbing distance be changed, and is it synced","If it is not synced you are correcting it by hand for the life of the plant."],
    ["Does rib distance need readjusting every time pulling speed changes","This is the question most people never think to ask, and it decides how much of your day is spent resetting the line."],
  ]},
  { group: "What it costs to run", items: [
    ["Power consumption","A 10 kW difference is roughly ₹10 lakh a year. Ask for the meter reading, not the connected load."],
    ["Slippage when running multiple bars at once","Watch it with your own eyes on a multi-bar run. Slippage is lost metres and inconsistent bar."],
    ["How often the pulling-side rollers need changing","And what a set costs. Ask for it in writing."],
    ["Large coils or compact coils","Large coils cost you more to ship to every customer, for the life of the plant."],
    ["Your cost of production, fully loaded","Rent, labour, electricity, interest, depreciation. Your focus is the lowest cost of production, not the lowest cost machine."],
  ]},
  { group: "Who you are buying from", items: [
    ["Tensile strength of the bar their line produces","Tested on bar from the run you watched, not a sample they brought with them."],
    ["Can the supplier actually guide you on manufacturing","Many machine makers are copying a design and do not understand the technicalities. It matters on the day something fails and you need them to know why."],
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
// Moldova numbers published by Composite-Tech at composite-tech.com/contacts
export const CT_CONTACT = [
  ["India · GFRP India","+91 95300 13034"],
  ["India · email","partner@gfrpindia.com"],
  ["Moldova · Composite-Tech","+373 60 400 669"],
  ["Moldova · WhatsApp","+373 61 010 889"],
  ["Moldova · email","info@composite-tech.com"],
  ["Moldova · address","Chișinău, str. Eugen Coca 41g"],
] as const;

export const OUR_ADDRESS = [
  "GFRP India — Credific Ventures Private Limited",
  "Plot 8B & 8C, Sector 3, Pithampur",
  "Dhar district, Madhya Pradesh 454775",
  "partner@gfrpindia.com · +91 95300 13034",
];

export const DISCLOSURE =
  "GFRP India is run by Credific Ventures Private Limited, Pithampur, Madhya Pradesh. We make RebarX GFRP rebar and we are the India partner for Composite Tech machine lines. We picked this line for our own factory before we ever sold one.";

export const BIAS =
  "We have a bias and it is worth stating plainly. We want India making real GFRP rebar. There is already too much material in this market that looks like GFRP and does not behave like it, and every plant that starts on a line which cannot hold tolerance makes that worse — for the industry, and for whoever ends up with that bar in their slab. So we would rather help you set up a line that produces material an engineer can rely on than sell you a machine you will resent.";
