// @flow
type Props = {
  href: string,
  text: string,
};

const ContactCta = (props: Props) => {
  const { href, text } = props;

  if (!href && !text) return null;

  return (
    <a className="c-header-menu-contact-cta" href={href}>
      {text}
    </a>
  );
};

export { ContactCta };
