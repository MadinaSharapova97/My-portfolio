export type SocialLink = {
  label: string;
  href: string;
};

type SocialLinksProps = {
  links: SocialLink[];
};

export function SocialLinks({ links }: SocialLinksProps) {
  return (
    <ul className="flex flex-wrap items-center gap-x-5 gap-y-2" aria-label="Social links">
      {links.map((link) => (
        <li key={link.label}>
          <a
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={link.href.startsWith("http") ? "noreferrer" : undefined}
            className="text-sm text-zinc-400 transition-colors hover:text-violet-300"
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
}
