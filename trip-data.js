// 2026 Italy Sufferfest — trip documentation data.
// Source: "Italy Sufferfest - 2026" spreadsheet (Schedule / Routes / Lodging tabs).

window.TRIP = {
  title: "Italy Sufferfest",
  subtitle: "Dolomites · Lake Como · French Alps",
  dates: "July 18–26, 2026",
  startDate: "2026-07-18",
};

// Day-by-day schedule, directly from the Schedule sheet.
window.DAYS = [
  {
    date: "2026-07-18", dow: "Saturday", n: 1,
    stayId: "canazei",
    title: "Arrive · Canazei",
    summary: "Ryan trains to Trento, pickup, drive to Canazei. Fedaia if time.",
    rideIds: ["fedaia"],
    tag: "Travel + ride"
  },
  {
    date: "2026-07-19", dow: "Sunday", n: 2,
    stayId: "canazei",
    title: "Sella Ronda",
    summary: "The classic four-pass Dolomites loop from the door.",
    rideIds: ["sellaronda"],
    tag: "Big ride"
  },
  {
    date: "2026-07-20", dow: "Monday", n: 3,
    stayId: "canazei",
    title: "Tre Cime via Falzarego",
    summary: "Queen stage of the Dolomites — Falzarego across, then the ramp to Tre Cime.",
    rideIds: ["canazei-trecime"],
    tag: "Queen stage"
  },
  {
    date: "2026-07-21", dow: "Tuesday", n: 4,
    stayId: "nesso",
    title: "Transit to Lake Como",
    summary: "~5 hours on the road. Rest and chill at the lake.",
    rideIds: [],
    tag: "Transit + rest"
  },
  {
    date: "2026-07-22", dow: "Wednesday", n: 5,
    stayId: "briancon",
    title: "Ghisallo & Sormano · transit to Briançon",
    summary: "Morning ride up Ghisallo and Muro di Sormano, then transit to Briançon.",
    rideIds: ["ghisallo-sormano"],
    tag: "Ride + transit"
  },
  {
    date: "2026-07-23", dow: "Thursday", n: 6,
    stayId: "briancon",
    title: "La Balade de la Mort",
    summary: "French Death Ride — Télégraphe, Galibier, Izoard.",
    rideIds: ["frenchdeathride"],
    tag: "Death ride"
  },
  {
    date: "2026-07-24", dow: "Friday", n: 7,
    stayId: "briancon",
    title: "TdF · Alpe d’Huez",
    summary: "Tour de France stage day. Drive over early, ride up Alpe d’Huez. Tour starts ~noon.",
    rideIds: ["huez"],
    tag: "TdF day"
  },
  {
    date: "2026-07-25", dow: "Saturday", n: 8,
    stayId: "milan",
    title: "Transit to Milan",
    summary: "Drive from Briançon to Milan.",
    rideIds: [],
    tag: "Transit"
  },
  {
    date: "2026-07-26", dow: "Sunday", n: 9,
    stayId: "milan",
    title: "Fly home",
    summary: "Depart MXP.",
    rideIds: [],
    tag: "Travel"
  },
];

// Where we're staying — with history, what to do, cafes, sights.
window.STAYS = [
  {
    id: "canazei",
    name: "Canazei",
    region: "Val di Fassa · Dolomites",
    nights: 3,
    checkIn: "2026-07-18",
    checkOut: "2026-07-21",
    lat: 46.4761, lng: 11.7681,
    address: "Strèda de Morandin 12, 38031 Campitello di Fassa, TN, Italy",
    booking: "Airbnb · booked by Pat",
    about: "A Ladin-speaking resort village at the head of the Val di Fassa, ringed by the Sella, Marmolada and Sassolungo massifs. The town was a quiet farming hamlet until cable cars arrived in the 1950s — now it's a year-round Dolomites hub, but the old stone-and-timber core, painted houses and Ladin street signs are still intact. We're actually staying in Campitello di Fassa, the smaller sister village just down-valley.",
    doing: [
      "Ride out of the door — Sella Ronda and Fedaia start in town",
      "Cable car up Col Rodella for a 360° view of the Sella group",
      "Walk the old centre of Campitello; Ladin museum in Vigo di Fassa",
      "Evening passeggiata along the Avisio river"
    ],
    cafes: [
      { name: "El Pael", kind: "Restaurant", note: "Traditional Ladin cooking — canederli, casunziei, game." },
      { name: "Bar Stella Alpina", kind: "Café", note: "Early espresso and pastries before riding out." },
      { name: "Pizzeria Rosengarten", kind: "Pizza", note: "Post-ride wood-fired pies + Forst on tap." },
      { name: "Gelateria Marmolada", kind: "Gelato", note: "Piazza Marconi. Go for the fior di latte." },
    ],
    sights: [
      "Marmolada — the 'Queen of the Dolomites', visible south of town",
      "Sassolungo / Langkofel group",
      "Ladin villages: Penia, Alba, Vigo di Fassa",
      "Lago di Fedaia at the foot of the glacier"
    ]
  },
  {
    id: "nesso",
    name: "Nesso (Lake Como)",
    region: "Lago di Como",
    nights: 1,
    checkIn: "2026-07-21",
    checkOut: "2026-07-22",
    lat: 45.8436, lng: 9.1497,
    address: "Nesso, 22020 CO, Italy",
    booking: "Booking.com · booked by Pat",
    about: "Nesso is a medieval fishing village clinging to the east shore of Lake Como, halfway between Como and Bellagio. Stone houses stack down the hillside to a tiny harbour, and the village's famous feature is the Orrido — a dramatic narrow gorge where two mountain streams meet and plunge into the lake under a single-arch Roman bridge. It's a proper sleepy Lombard lake village, perfect for a rest day between the Dolomites and the French Alps.",
    doing: [
      "Walk down to the Orrido di Nesso — the cliff-gorge waterfall tumbling straight into the lake",
      "Swim off the rocks at the village harbour — the water is clear and cold",
      "Ferry across to Bellagio or up to Varenna for lunch",
      "Aperitivo on the lakefront as the sun drops behind the Grigne"
    ],
    cafes: [
      { name: "Trattoria del Porto", kind: "Restaurant", note: "On the little harbour — lake-fish risotto and missoltino." },
      { name: "Bar Roma", kind: "Café / aperitivo", note: "Lakeside Aperol at golden hour." },
      { name: "Holiday Ristorante", kind: "Restaurant", note: "Terrace overlooking the lake; pizza and pasta." },
    ],
    sights: [
      "Orrido di Nesso — the gorge waterfall and Roman bridge",
      "Chiesa dei SS. Pietro e Paolo — bell tower above the village",
      "Villa Pliniana (up the shore) — Pliny the Younger's intermittent spring",
      "Ferries to Bellagio, Varenna, Villa Carlotta"
    ]
  },
  {
    id: "briancon",
    name: "Briançon",
    region: "Hautes-Alpes · France",
    nights: 3,
    checkIn: "2026-07-22",
    checkOut: "2026-07-25",
    lat: 44.8988, lng: 6.6351,
    address: "44 Route de Grenoble, 05100 Briançon, France",
    booking: "Airbnb · booked by Ryan",
    about: "At 1,326 m, Briançon is the highest city in the EU. The upper town is a Vauban fortress — UNESCO-listed star ramparts, a collegiate church, and steep cobbled streets that spill down to the Durance river. It's also a textbook Tour de France town: the N94 through the valley is the route to Galibier, Izoard, and Lautaret, and the Tour has passed through dozens of times.",
    doing: [
      "Walk the ramparts of the Cité Vauban; visit Fort des Salettes",
      "Swim in the Durance or at Lac de Serre-Ponçon (1 hr south)",
      "Watch the TdF roll through — we're there for Stage 19 week",
      "Ride the Via Ferrata de la Croix de Toulouse above town"
    ],
    cafes: [
      { name: "Le Pied de la Gargouille", kind: "Restaurant", note: "In the old town — tourtons, ravioles de Champsaur, local lamb." },
      { name: "Au Gaulois", kind: "Bistro", note: "Good steak-frites, busy with cyclists." },
      { name: "Café de Paris", kind: "Café", note: "Place d'Armes — morning coffee before climbing out." },
      { name: "Boulangerie Arnaud", kind: "Bakery", note: "Croissants and pain aux raisins for the climb pocket." },
    ],
    sights: [
      "Cité Vauban (UNESCO) — fortifications by Sébastien Le Prestre de Vauban",
      "Collégiale Notre-Dame et Saint-Nicolas",
      "Pont d'Asfeld — dramatic single-arch bridge over the Durance gorge",
      "Col du Lautaret & Col du Galibier start just up the valley"
    ]
  },
  {
    id: "milan",
    name: "Milan",
    region: "Lombardia",
    nights: 1,
    checkIn: "2026-07-25",
    checkOut: "2026-07-26",
    lat: 45.4642, lng: 9.1900,
    address: "TBD — near MXP for Sunday flight",
    booking: "TBD",
    about: "Last-night transit stop before flying home from Malpensa. Pick a hotel near the airport or in the centre depending on flight time.",
    doing: [
      "If time: Duomo, Galleria Vittorio Emanuele II, the Navigli",
      "Aperitivo in Brera or Isola",
      "Bike-box repack + boarding-pass admin"
    ],
    cafes: [
      { name: "Bar Basso", kind: "Cocktails", note: "Home of the Negroni Sbagliato." },
      { name: "Luini", kind: "Panzerotti", note: "Fried pocket of dough + mozzarella, steps from the Duomo." },
      { name: "Pavé", kind: "Café / bakery", note: "Great breakfast near Porta Venezia." },
    ],
    sights: [
      "Duomo di Milano",
      "Galleria Vittorio Emanuele II",
      "Navigli canals at night",
      "Sforza Castle + Parco Sempione"
    ]
  }
];

// Rides — a mix of Strava route links (for the full days) and segments (individual climbs).
// Distances / gains are from Strava where known; HC / Cat figures are approximate.
window.RIDES = [
  {
    id: "fedaia",
    name: "Passo Fedaia",
    tag: "Dolomites · HC",
    tagClass: "hc",
    lat: 46.4604, lng: 11.8697,
    day: "2026-07-18",
    stayId: "canazei",
    distance: "8.3 mi",
    gain: "3,363 ft",
    avg: "7.6%",
    max: "15.8%",
    summit: "6,749 ft",
    type: "Segment",
    link: "https://www.strava.com/segments/21155112",
    about: "The road to the foot of the Marmolada glacier, Queen of the Dolomites. Rolls easy out of Canazei then steepens brutally through the Malga Ciapela hairpins — the final kilometres to the Fedaia dam hold double-digit grades. If we arrive in time Saturday afternoon, this is the 'shake out the flight' option.",
    notes: "Only ride if we land in Canazei with energy and daylight."
  },
  {
    id: "sellaronda",
    name: "Sella Ronda",
    tag: "Dolomites · Epic",
    tagClass: "epic",
    lat: 46.5100, lng: 11.7900,
    day: "2026-07-19",
    stayId: "canazei",
    distance: "40 mi (from Canazei)",
    gain: "5,396 ft",
    avg: "4.5%",
    max: "12%",
    summit: "Pordoi 7,346 ft",
    type: "Strava segment",
    link: "https://www.strava.com/segments/4526549",
    about: "The classic Dolomites loop: four passes — Pordoi, Sella, Gardena, Campolongo — in a single ring around the Sella massif. From Canazei it's ~40 mi with nothing flat. Every pass is well-graded (6–8%) but they stack up. Ride it clockwise to finish over the Pordoi's legendary switchbacks.",
    notes: "Leave early — traffic builds by 10am in July."
  },
  {
    id: "canazei-trecime",
    name: "Canazei → Tre Cime di Lavaredo",
    tag: "Dolomites · Queen stage",
    tagClass: "hc",
    lat: 46.6190, lng: 12.3020,
    day: "2026-07-20",
    stayId: "canazei",
    distance: "118 mi",
    gain: "18,147 ft",
    avg: "—",
    max: "18% (Tre Cime final km)",
    summit: "Tre Cime 7,503 ft",
    type: "Strava route",
    link: "https://www.strava.com/routes/3482170147462063696",
    about: "Big day. Over the Pordoi, across Falzarego, down past Cortina, then the wall up to Rifugio Auronzo under the three peaks. 118 mi / 18k ft of climbing — the queen stage of the trip. The last 4 km to Tre Cime is a toll road through 14–18% ramps beneath one of the most photographed backdrops in cycling.",
    notes: "Eat and drink constantly. Toll to enter the Tre Cime road — small road-bike fee."
  },
  {
    id: "ghisallo-sormano",
    name: "Ghisallo + Muro di Sormano loop",
    tag: "Lake Como · Legendary",
    tagClass: "legendary",
    lat: 45.8814, lng: 9.2394,
    day: "2026-07-22",
    stayId: "nesso",
    distance: "31.6 mi",
    gain: "4,432 ft",
    avg: "—",
    max: "27% (Sormano)",
    summit: "Sormano 3,661 ft",
    type: "Strava route",
    link: "https://www.strava.com/routes/3482438740745274210",
    about: "Lake Como double-header linking cycling's two most sacred hills. Up the Madonna del Ghisallo from Bellagio through chestnut forest — the chapel at the top is the shrine to the patron saint of cyclists, full of jerseys and bikes and the eternal flame. Then the Muro di Sormano: 1.7 km of wall, removed from the Giro di Lombardia in the '60s for being too steep. The road is painted with poetry and gradient numbers; ramps touch 27%. 31.6 mi, 4,432 ft, moving time around 2:18. Cycling's holiest climb paired with its most infamous, in one morning.",
    notes: "Short drive from Nesso to the start. Small chainring existence verified before Sormano."
  },
  {
    id: "frenchdeathride",
    name: "French Death Ride — Télégraphe + Galibier + Izoard",
    tag: "French Alps · TdF",
    tagClass: "tdf",
    lat: 45.0642, lng: 6.4078,
    day: "2026-07-23",
    stayId: "briancon",
    distance: "131.9 mi",
    gain: "16,000 ft",
    avg: "—",
    max: "12% (Galibier)",
    summit: "Galibier 8,668 ft",
    type: "Strava route",
    link: "https://www.strava.com/routes/3481837769292900842",
    about: "La Balade de la Mort. Out of Briançon up to Col du Lautaret, down to the Galibier ascent, over the top at 2,645 m, descend to Valloire, back over the Télégraphe, then home via the Izoard. Three of the Tour's most famous cols in one day. 132 mi, 16k ft.",
    notes: "Start at first light. Top of Galibier is cold even in July — stuff a wind vest."
  },
  {
    id: "huez",
    name: "Alpe d'Huez (TdF stage)",
    tag: "French Alps · TdF",
    tagClass: "tdf",
    lat: 45.0922, lng: 6.0714,
    day: "2026-07-24",
    stayId: "briancon",
    distance: "8.6 mi",
    gain: "3,675 ft",
    avg: "8.1%",
    max: "13%",
    summit: "6,102 ft",
    type: "Segment",
    link: "https://www.strava.com/segments/4767683",
    about: "21 numbered hairpins, each named after a stage winner. The most famous climb in cycling. We drive over early, ride up ahead of the Tour caravan, and watch the stage come in. The race starts around noon.",
    notes: "Road closes to traffic ~3 hrs before the stage. Plan the drive early or ride in from Bourg d'Oisans."
  }
];
