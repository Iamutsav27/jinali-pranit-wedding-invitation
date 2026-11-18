# Jinali & Pranit wedding invitation

A mobile-first, bilingual wedding invitation for 25–26 January 2027. Open `index.html` directly or visit the GitHub Pages site.

The eleven story scenes retain the Ganpati intro video, English/ગુજરાતી language choice, background music, and swipe navigation. A controlled pager moves exactly one scene per vertical swipe, wheel gesture, or arrow key and locks input during the transition. Dots and section hash links remain available. The palace artwork uses independent transparent PNG layers with parallax and idle drift; the sandstone gateway opens during the doors-to-wedding transition.

The couple scene includes the Sanskrit Ganesh verse, the invitation, and both sets of parents. Five original illustrated event pages follow the celebrations overview:

| Event | Date | Time |
| --- | --- | --- |
| Ganesh Pooja | Monday, 25 January 2027 | 3:00 PM |
| Mandap Muhurt | Monday, 25 January 2027 | 4:00 PM |
| Raas Garba | Monday, 25 January 2027 | 9:00 PM |
| Varmala | Tuesday, 26 January 2027 | 11:30 AM |
| Hast-melap | Tuesday, 26 January 2027 | 12:53 PM |

The illustrations are stored as `assets/event-*.jpg`. The date button saves both days to the calendar.

The loading screen and Ganpati intro use the same cursive **JP** wordmark. Its script font is bundled in `assets/great-vibes.ttf` so the logo works in a directly opened HTML file; the font license is in `assets/OFL-Great-Vibes.txt`.

The final RSVP scene offers a bilingual **Yes, I'll be there** action. It opens WhatsApp with a message addressed to the host and ready to send. Guests confirm the message in WhatsApp; a static GitHub Pages site cannot submit it on their behalf.

## Artwork slots

The named slots in `index.html` load these files from `assets/`:

- `palace-far.png`: distant palace skyline
- `palace-main.png`: lit facade and terrace
- `palace-front.png`: foreground flowers and stonework
- `couple-walking.png`: tiny animated bride and groom
- `mandap-garden.png`: closing garden scene

If a layer cannot load, the existing painted palace scene beneath it remains visible. Music begins when a visitor taps **Open invitation with music**, which satisfies mobile browser playback rules. Venue details remain to be confirmed.
