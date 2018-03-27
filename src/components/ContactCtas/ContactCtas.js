// @flow
type Props = {
  isEmail?: boolean,
};

const ContactCta = (props: Props) => (
  <a
    className="c-contact-ctas__item"
    href={
      props.isEmail
        ? 'mailto:info@citychiropractor.com.au'
        : 'tel:+612-9221-0771'
    }
  >
    {props.isEmail ? 'Email us' : 'Call us'}
  </a>
);

const ContactCtas = () => (
  <div className="c-contact-ctas">
    <ContactCta />
    <ContactCta isEmail />
  </div>
);

export { ContactCtas };
