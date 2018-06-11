// @flow
import classnames from 'classnames';

type CtaProps = {
  isEmail?: boolean,
};

const Cta = (props: CtaProps) => {
  const { isEmail = false } = props;

  return (
    <a
      className="c-contact-ctas__item"
      href={
        isEmail ? 'mailto:info@citychiropractor.com.au' : 'tel:+612-9221-0771'
      }
    >
      {props.isEmail ? 'Email us' : 'Call us'}
    </a>
  );
};

type Props = {
  isAlternateStyle?: boolean,
};

const ContactCtas = (props: Props) => {
  const { isAlternateStyle = false } = props;
  const rootClass = 'c-contact-ctas';

  return (
    <div
      className={classnames(
        rootClass,
        isAlternateStyle && `${rootClass}--alternate-style`
      )}
    >
      <Cta />
      <Cta isEmail />
    </div>
  );
};

export default ContactCtas;
