import { Link } from "@tanstack/react-router";
import { whatsappLink } from "@/lib/site";

export type ServiceGroup = {
  title: string;
  description?: string;
  items: string[];
};

export function CategoryPage({
  eyebrow,
  title,
  intro,
  groups,
  note,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  groups: ServiceGroup[];
  note?: string;
}) {
  return (
    <>
      <section className="bg-mist py-14">
        <div className="mx-auto max-w-7xl px-6">
          <div className="eyebrow mb-4 flex items-center gap-2 text-electric">
            <span className="size-1.5 rounded-full bg-signal" /> {eyebrow}
          </div>
          <h1 className="max-w-3xl text-4xl font-bold leading-[1.05] text-ink sm:text-5xl">{title}</h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-navy/70">{intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-electric px-6 py-3 font-semibold text-primary-foreground transition hover:brightness-110"
            >
              Request this service <span aria-hidden>→</span>
            </Link>
            <a
              href={whatsappLink(`Hello NexaTech Solutions, I need help with: ${title}.`)}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-navy/20 px-6 py-3 font-semibold text-ink transition hover:bg-navy/5"
            >
              💬 Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="bg-card py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {groups.map((group, i) => (
              <div key={group.title} className="rounded-2xl border border-navy/10 bg-mist/60 p-6">
                <div className="eyebrow mb-3 text-electric">{String(i + 1).padStart(2, "0")}</div>
                <h2 className="mb-2 text-lg font-semibold text-ink">{group.title}</h2>
                {group.description ? (
                  <p className="mb-4 text-sm leading-relaxed text-navy/60">{group.description}</p>
                ) : null}
                <ul className="space-y-2 text-sm text-navy/70">
                  {group.items.map((item) => (
                    <li key={item}>· {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          {note ? (
            <p className="mt-10 max-w-3xl font-mono text-xs leading-relaxed text-navy/50">{note}</p>
          ) : null}
        </div>
      </section>
    </>
  );
}
