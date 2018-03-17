// @flow
type Props = {
  isOpen?: boolean,
  onClick?: Function,
};

const MenuButton = (props: Props) => {
  const { isOpen = true, onClick } = props;
  const rootClass = 'c-header-menu-button';

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
};

export { MenuButton };
