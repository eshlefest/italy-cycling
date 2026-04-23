// Italy Trip — documentation site components.

const { useState, useEffect, useMemo, useRef } = React;

// ---------- Tiny helpers ----------
const fmtDate = (iso) => {
  const [y, m, d] = iso.split('-').map(Number);
  const dt = new Date(y, m - 1, d);
  return dt.toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
};
const fmtDateLong = (iso) => {
  const [y, m, d] = iso.split('-').map(Number);
  const dt = new Date(y, m - 1, d);
  return dt.toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric' });
};
const stayById = (id) => window.STAYS.find(s => s.id === id);
const rideById = (id) => window.RIDES.find(r => r.id === id);

// ---------- Header ----------
function SiteHeader({ tab, setTab }) {
  return (
    <header className="site-header">
      <div className="site-header-inner">
        <div className="brand">
          <div className="brand-eyebrow">{window.TRIP.dates}</div>
          <div className="brand-title">{window.TRIP.title}</div>
          <div className="brand-sub">{window.TRIP.subtitle}</div>
        </div>
        <nav className="tabs">
          {['overview', 'stays', 'routes'].map(t => (
            <button
              key={t}
              className={"tab " + (tab === t ? 'on' : '')}
              onClick={() => setTab(t)}
            >{t}</button>
          ))}
        </nav>
      </div>
    </header>
  );
}

// ---------- OVERVIEW ----------
function Overview() {
  const days = window.DAYS;
  const totalDistance = window.RIDES.reduce((s, r) => {
    const m = parseFloat(String(r.distance).replace(/[^0-9.]/g, ''));
    return s + (isFinite(m) ? m : 0);
  }, 0);
  const totalGain = window.RIDES.reduce((s, r) => {
    const m = parseFloat(String(r.gain).replace(/[^0-9.]/g, ''));
    return s + (isFinite(m) ? m : 0);
  }, 0);

  return (
    <div className="overview">
      <section className="hero">
        <div className="hero-text">
          <h1>From the <span>Dolomites</span> to <span>Alpe d'Huez</span></h1>
          <p className="hero-lede">
            Nine days. Four bases. Some of the most famous climbs in cycling.
            This is the plan as it stands — updated from the working spreadsheet.
          </p>
          <div className="hero-stats">
            <Stat v="9" l="Days" />
            <Stat v="7" l="Ride days" />
            <Stat v={Math.round(totalDistance).toLocaleString()} l="Miles" />
            <Stat v={totalGain.toLocaleString()} l="Feet climbing" />
            <Stat v="4" l="Bases" />
          </div>
        </div>
      </section>

      <section className="block">
        <div className="block-head">
          <h2>The route</h2>
          <p className="block-sub">Trento → Canazei → Lake Como → Briançon → Milan</p>
        </div>
        <TripMap />
      </section>

      <section className="block">
        <div className="block-head">
          <h2>The itinerary</h2>
          <p className="block-sub">Nine days, July 18–26</p>
        </div>
        <div className="day-grid">
          {days.map(d => <DayCard key={d.n} day={d} />)}
        </div>
      </section>
    </div>
  );
}

function Stat({ v, l }) {
  return (
    <div className="stat">
      <div className="stat-v">{v}</div>
      <div className="stat-l">{l}</div>
    </div>
  );
}

function DayCard({ day }) {
  const stay = stayById(day.stayId);
  const rides = day.rideIds.map(rideById).filter(Boolean);
  return (
    <article className="day-card">
      <div className="day-card-left">
        <div className="day-num">{day.n}</div>
        <div className="day-dow">{day.dow.slice(0, 3).toUpperCase()}</div>
        <div className="day-date">{fmtDate(day.date)}</div>
      </div>
      <div className="day-card-body">
        <div className="day-tag">{day.tag}</div>
        <h3>{day.title}</h3>
        <p className="day-summary">{day.summary}</p>
        <div className="day-meta">
          <span className="day-meta-stay">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M3 21h18M5 21V8l7-5 7 5v13M10 21v-7h4v7"/></svg>
            {stay?.name || '—'}
          </span>
          {rides.length > 0 && rides.map(r => (
            <a key={r.id} href={r.link} target="_blank" rel="noreferrer" className="day-meta-ride">
              {r.name}
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}

// ---------- MAP ----------
function TripMap() {
  const ref = useRef(null);
  useEffect(() => {
    if (!ref.current || ref.current._leaflet_id) return;
    const map = L.map(ref.current, { scrollWheelZoom: false }).setView([45.8, 10.5], 7);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap',
      maxZoom: 16,
    }).addTo(map);

    const stays = window.STAYS;
    const coords = stays.map(s => [s.lat, s.lng]);

    // Route line in order, including Trento at the start.
    const fullPath = [[46.0667, 11.1167], ...coords];
    L.polyline(fullPath, { color: '#c84a2b', weight: 3, dashArray: '6 6', opacity: 0.85 }).addTo(map);

    // Start marker (Trento)
    L.marker([46.0667, 11.1167], {
      icon: L.divIcon({
        className: 'trip-pin start',
        html: '<span>Start</span>',
        iconSize: [48, 22],
        iconAnchor: [24, 11],
      })
    }).addTo(map).bindPopup('<b>Trento</b><br/>Train in. Pickup & drive to Canazei.');

    // Stay markers
    stays.forEach((s, i) => {
      const pin = L.divIcon({
        className: 'trip-pin',
        html: `<span>${i + 1}</span>`,
        iconSize: [28, 28],
        iconAnchor: [14, 14],
      });
      L.marker([s.lat, s.lng], { icon: pin })
        .addTo(map)
        .bindPopup(`<b>${s.name}</b><br/>${s.nights} night${s.nights > 1 ? 's' : ''}<br/><span style="color:#666">${fmtDate(s.checkIn)} – ${fmtDate(s.checkOut)}</span>`);
    });

    // Climb markers
    window.RIDES.forEach(r => {
      if (!isFinite(r.lat) || !isFinite(r.lng)) return;
      const pin = L.divIcon({
        className: 'climb-pin',
        html: '<span></span>',
        iconSize: [14, 14],
        iconAnchor: [7, 7],
      });
      L.marker([r.lat, r.lng], { icon: pin })
        .addTo(map)
        .bindPopup(`<b>${r.name}</b><br/>${r.tag}<br/><span style="color:#666">${r.distance} · ${r.gain}</span><br/><a href="${r.link}" target="_blank">View on Strava →</a>`);
    });

    // Fit bounds including Trento + Alpe d'Huez
    const bounds = L.latLngBounds([[46.0667, 11.1167], ...coords, [45.0922, 6.0714]]);
    map.fitBounds(bounds, { padding: [40, 40] });
  }, []);

  return <div ref={ref} className="trip-map" />;
}

// ---------- STAYS ----------
function StaysTab() {
  return (
    <div className="stays">
      {window.STAYS.map(s => <StayDetail key={s.id} stay={s} />)}
    </div>
  );
}

function StayDetail({ stay }) {
  return (
    <section className="stay">
      <header className="stay-head">
        <div className="stay-head-left">
          <div className="stay-region">{stay.region}</div>
          <h2>{stay.name}</h2>
          <div className="stay-dates">
            {fmtDateLong(stay.checkIn)} → {fmtDateLong(stay.checkOut)}
            <span className="stay-nights">· {stay.nights} night{stay.nights > 1 ? 's' : ''}</span>
          </div>
        </div>
        <div className="stay-head-right">
          <div className="stay-address">{stay.address}</div>
          <div className="stay-booking">{stay.booking}</div>
        </div>
      </header>

      <p className="stay-about">{stay.about}</p>

      <div className="stay-grid">
        <div className="stay-col">
          <h4>What to do</h4>
          <ul>
            {stay.doing.map((d, i) => <li key={i}>{d}</li>)}
          </ul>
        </div>
        <div className="stay-col">
          <h4>Cafés & food</h4>
          <ul className="café-list">
            {stay.cafes.map((c, i) => (
              <li key={i}>
                <div className="cafe-name">{c.name} <span className="cafe-kind">· {c.kind}</span></div>
                <div className="cafe-note">{c.note}</div>
              </li>
            ))}
          </ul>
        </div>
        <div className="stay-col">
          <h4>Sights nearby</h4>
          <ul>
            {stay.sights.map((d, i) => <li key={i}>{d}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}

// ---------- ROUTES ----------
function RoutesTab() {
  const byStay = useMemo(() => {
    const groups = {};
    for (const r of window.RIDES) {
      (groups[r.stayId] ||= []).push(r);
    }
    return groups;
  }, []);
  return (
    <div className="routes">
      {window.STAYS.filter(s => byStay[s.id]?.length).map(stay => (
        <section key={stay.id} className="route-group">
          <header className="route-group-head">
            <h2>{stay.name}</h2>
            <div className="route-group-sub">{stay.region}</div>
          </header>
          <div className="ride-list">
            {byStay[stay.id].map(r => <RideDetail key={r.id} ride={r} />)}
          </div>
        </section>
      ))}
    </div>
  );
}

function RideDetail({ ride }) {
  return (
    <article className="ride">
      <header className="ride-head">
        <div className={"ride-tag tag-" + ride.tagClass}>{ride.tag}</div>
        <div className="ride-date">{fmtDateLong(ride.day)}</div>
      </header>
      <h3>{ride.name}</h3>
      <p className="ride-about">{ride.about}</p>

      <div className="ride-stats">
        <div className="rs"><span>Distance</span><b>{ride.distance}</b></div>
        <div className="rs"><span>Elevation</span><b>{ride.gain}</b></div>
        <div className="rs"><span>Avg grade</span><b>{ride.avg}</b></div>
        <div className="rs"><span>Max grade</span><b>{ride.max}</b></div>
        <div className="rs"><span>Summit</span><b>{ride.summit}</b></div>
      </div>

      {ride.notes && <div className="ride-notes"><b>Notes:</b> {ride.notes}</div>}

      <a className="ride-link" href={ride.link} target="_blank" rel="noreferrer">
        View on Strava ({ride.type})
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M7 17L17 7M7 7h10v10"/></svg>
      </a>
    </article>
  );
}

// ---------- App ----------
function App() {
  const [tab, setTab] = useState(() => {
    try { return localStorage.getItem('trip-tab') || 'overview'; } catch (e) { return 'overview'; }
  });
  useEffect(() => {
    try { localStorage.setItem('trip-tab', tab); } catch (e) {}
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [tab]);

  return (
    <div className="app">
      <SiteHeader tab={tab} setTab={setTab} />
      <main className="site-main">
        {tab === 'overview' && <Overview />}
        {tab === 'stays' && <StaysTab />}
        {tab === 'routes' && <RoutesTab />}
      </main>
      <footer className="site-foot">
        <div>Italy Sufferfest · July 18–26, 2026</div>
        <div>
          Plan mirrored from the{' '}
          <a href="https://docs.google.com/spreadsheets/d/1viWmQgrM1OqtlvqQUZ_zIepgJFYCPnIs68j5zVgKQSM/edit?usp=sharing" target="_blank" rel="noreferrer">working spreadsheet</a>
          {' '}· reimport as it matures
        </div>
      </footer>
    </div>
  );
}

Object.assign(window, { App });
