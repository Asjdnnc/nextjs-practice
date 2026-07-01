import EventCard from "@/components/EventCard";
import ExploreBtn from "@/components/ExploreBtn";
import HomepageViewTracker from "@/components/HomepageViewTracker";
import events from "@/lib/constants";
import Link from "next/link";
export default function App(){
  return (<>
  <HomepageViewTracker />
  <h1 className="text-center">The Hub for Every Dev <br /> Event You Can&apos;t Miss</h1>
            <p className="text-center mt-5">Hackathons, Meetups, and Conferences, All in One Place</p>

            <ExploreBtn />
            <div className='mt-20 space-y-7'>
              <h3>Featured Events</h3>
              <ul className = "events">
                {events.map((e) => (
                <li key={e.slug}>
                  <Link href={`/events/${e.slug}`} id="event-card">
                    <EventCard {...e} />
                  </Link>
                </li>
              ))}
              </ul>
            </div>
  </>)
}