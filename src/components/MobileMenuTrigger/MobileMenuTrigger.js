// @flow
import './MobileMenuTrigger.css';

type Props = {
  isOpen?: boolean,
  onClick?: Function,
};

export default function(props: Props) {
  const { isOpen = true, onClick } = props;
  const rootClass = 'c-mobile-menu-trigger';

  return (
    <button
      aria-label={`${isOpen ? 'Open' : 'Close'} menu`}
      className={`${rootClass} ${rootClass}--${isOpen ? 'open' : 'close'}`}
      onClick={onClick}
      type="button"
    >
      <span />
    </button>
  );
}
