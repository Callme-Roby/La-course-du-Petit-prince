import Image from "next/image";
import Button from "@/components/ui/Button";
import { events as defaultEvents, type CdppEvent } from "@/data/events";
import SectionHeader from "./SectionHeader";
import styles from "./EventsList.module.css";

const dayFmt = new Intl.DateTimeFormat("fr-FR", { weekday: "short", timeZone: "Europe/Paris" });
const monthYearFmt = new Intl.DateTimeFormat("fr-FR", { month: "long", year: "numeric", timeZone: "Europe/Paris" });
const longFmt = new Intl.DateTimeFormat("fr-FR", { day: "numeric", month: "long", year: "numeric", timeZone: "Europe/Paris" });

const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

/** Bloc "Date/open" (2032:1607) */
function DateBlock({ date }: { date: Date }) {
  return (
    <div className={styles.date}>
      <span className="p-xs">{capitalize(dayFmt.format(date).replace(".", ""))}</span>
      <span className={styles.day}>{date.getDate()}</span>
      <span className="p-xs">{capitalize(monthYearFmt.format(date))}</span>
    </div>
  );
}

/** Ligne "événement" (2032:1656) */
export function EventRow({ event }: { event: CdppEvent }) {
  const date = new Date(`${event.date}T12:00:00`);
  const cls = [styles.row, event.status === "full" && styles.full, event.featured && styles.featured]
    .filter(Boolean)
    .join(" ");

  return (
    <li className={cls}>
      {event.featured && (
        <Image className={styles.stamp} src="/icons/event-stamp.svg" alt="" width={108} height={92} aria-hidden />
      )}
      <div className={styles.container}>
        <DateBlock date={date} />
        <div className={styles.text}>
          <h3 className={styles.title}>{event.title}</h3>
          <p>
            <time dateTime={event.date}>{longFmt.format(date)}</time>
          </p>
          <p>{event.price}</p>
        </div>
      </div>
      <div className={styles.action}>
        {event.status === "open" && event.href && <Button href={event.href}>Réserver son dossard</Button>}
        {event.status === "reminder" && (
          <Button variant="secondary" tone="dark" href={`/contact?sujet=${encodeURIComponent(event.title)}`}>
            Me le rappeler
          </Button>
        )}
        {event.status === "full" && <span className={styles.fullLabel}>Complet</span>}
      </div>
    </li>
  );
}

type EventsListProps = {
  title?: string;
  events?: CdppEvent[];
};

/** Section "Nos prochains évènements" (2055:6014). */
export default function EventsList({ title = "Nos prochains évènements", events = defaultEvents }: EventsListProps) {
  return (
    <section className={`container ${styles.section}`} aria-labelledby="events-title">
      <SectionHeader id="events-title" title={title} />
      <ul className={styles.list}>
        {events.map((event) => (
          <EventRow key={event.id} event={event} />
        ))}
      </ul>
    </section>
  );
}
