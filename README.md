# KV Ambassa Timetable Manager

A mobile-first web app (installable PWA) for **Kendriya Vidyalaya Ambassa** to build, view and
manage school timetables and daily teacher arrangements. All data is stored locally in the browser
(localStorage) — no server required — and can be exported to Excel / JSON for backup.

## Run it

```bash
npm install
npm run dev
```

Open the printed URL on your phone (same Wi‑Fi) or desktop. Default admin password: **admin123**
(change it in Settings).

Build for production / hosting:

```bash
npm run build      # outputs to dist/
npm run preview    # preview the production build
```

### Deploying (server.js entry hosts: Hostinger, Passenger, etc.)

This is a client-side SPA, but many hosts expect a Node **entry file**. `server.js` is included
for exactly this: it's a tiny Express server that serves the built `dist/` folder with SPA
fallback. On deploy the host runs `npm install` (which builds `dist/` via the `postinstall` hook)
and then starts `npm start` → `node server.js`. It listens on `process.env.PORT`.

- Entry file: `server.js`
- Start command: `npm start`
- Output/static dir: `dist`

If your platform deploys **static sites** instead, point it at the `dist/` folder (build command
`npm run build`) and you don't need `server.js` at all. For SPA hosting, add a rewrite of all
routes to `/index.html`.

## Access & sharing (new)

- **Admin** logs in (default password `admin123`) to configure and build. All changes are saved to
  the server's shared database automatically (watch the sync pill in the header: Saving → Saved).
- **Teachers/viewers** open the site and can browse Class/Teacher/Day timetables and the daily
  arrangement **without logging in** — they always see the latest data the admin saved.
- Works on the Node host you already use (`server.js`). The browser also keeps a local cache, so the
  admin can keep working briefly even if the server is unreachable (changes sync on reconnect).

## What's included

**Admin login** → admin panel.

**Setup (Configure Timetable)**
1. Classes & Sections — I–XII, section A (add more sections any time).
2. Posts / Designations — PRT, TGT, PGT, Librarian, Computer Instructor, Nurse, Special Educator,
   PRT (Music). Add / edit / delete.
3. Subjects — name + acronym (shown in cells). Add / edit / delete.
4. Teachers — name, post and subjects taught.
5. Class Teachers — assign class teacher & co-class teacher per class.
6. Subjects per Class — periods/week per subject with **block-period** toggle. Pre-filled with NEP
   stage templates (Foundational I–II, Preparatory III–V, Middle VI–VIII, Secondary IX–XII).
   Live total vs weekly capacity. Editable acronyms and periods.
7. Period Timings — 40-min periods, 30-min recess after period 4 (all editable).

**Build Timetable**
- Auto-generate (Primary I–V / Secondary VI–XII / All or custom selection). Sequential generation
  avoids double-booking teachers across classes; class teacher can take period 1; block subjects
  placed as two consecutive periods.
- Manual builder per class, day-wise → period-wise. The teacher dropdown shows **only free &
  qualified teachers** for that slot, with a 📋 peek of the chosen teacher's day. Live per-subject
  progress (assigned / required) so you can see what's left.

**Views & Export**
- Class-wise, Teacher-wise and Day-wise timetables.
- Export to **Excel (.xlsx)** (3 sheets) and **PDF** (via print). JSON backup import/export.

**Arrangement (substitutions)**
- Pick a date → choose absent teachers (browse by PRT/TGT/PGT/Misc, search, add ad-hoc) and
  suspended classes (their teachers are freed for cover).
- Generates a per-absent-teacher, period-wise form. Each period dropdown lists **only free
  teachers**; the 📋 button shows the cover teacher's schedule for that day. Add remarks per period.

**Dashboard** — school overview, class-wise, day-wise and teacher-wise fill status with progress
bars.

## Notes
- Data lives in the browser. Use **Settings → Download Backup** to move data between devices, and
  **Import Backup** to restore.
- Senior grades X–XII default to the Secondary template; edit periods per class as needed for
  streams (Science/Commerce/Humanities, Economics, Commerce, etc.).
