<wizard-report>
# PostHog post-wizard report

The wizard has completed a deep integration of PostHog analytics into this Next.js App Router project (DevEvent — a developer event hub). PostHog is initialized via `instrumentation-client.ts` using the Next.js 15.3+ pattern, with a reverse proxy configured in `next.config.ts` to route analytics through `/ingest`. Three client-side events are tracked across the user's exploration funnel, from landing on the homepage through clicking on a featured developer event.

| Event name | Description | File |
|---|---|---|
| `homepage_viewed` | User views the home page with featured developer events. | `components/HomepageViewTracker.tsx` (mounted in `app/page.tsx`) |
| `explore_clicked` | User clicks the Explore Events button to scroll to the events listing. | `components/ExploreBtn.tsx` |
| `event_card_clicked` | User clicks on an event card to view details of a specific developer event. Properties: `event_title`, `event_slug`, `event_location`, `event_date`. | `components/EventCard.tsx` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- [Analytics basics (wizard) — Dashboard](https://us.posthog.com/project/492925/dashboard/1782949)
- [Homepage Views (wizard)](https://us.posthog.com/project/492925/insights/Wr41cXUJ)
- [Explore Button Clicks (wizard)](https://us.posthog.com/project/492925/insights/tIdrx4H8)
- [Event Card Clicks (wizard)](https://us.posthog.com/project/492925/insights/vga6QYR9)
- [Engagement Funnel: Homepage to Event Click (wizard)](https://us.posthog.com/project/492925/insights/kXR8dekw)
- [Most Clicked Events by Title (wizard)](https://us.posthog.com/project/492925/insights/5sqc2VHK)

## Verify before merging

- [ ] Run a full production build (the wizard only verified the files it touched) and fix any lint or type errors introduced by the generated code.
- [ ] Run the test suite — call sites that were rewritten or instrumented may need updated mocks or fixtures.
- [ ] Add `NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN` and `NEXT_PUBLIC_POSTHOG_HOST` to `.env.example` and any monorepo/bootstrap scripts so collaborators know what to set.
- [ ] Wire source-map upload (`posthog-cli sourcemap` or your bundler's upload step) into CI so production stack traces de-minify.

### Agent skill

We've left an agent skill folder in your project. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

</wizard-report>
