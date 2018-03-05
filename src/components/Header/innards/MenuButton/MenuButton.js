// @flow
type Props = {
  isOpen?: boolean,
};

const MenuButton = (props: Props) => {
  const { isOpen = true, ...moreProps } = props;
  const rootClass = 'c-header-menu-button';

  return (
    <button
      {...moreProps}
      className={`${rootClass} ${rootClass}--${isOpen ? 'open' : 'close'}`}
      aria-label={`${isOpen ? 'Open' : 'Close'} menu`}
      type="button"
    >
      <span />
    </button>
  );
};

export { MenuButton };
