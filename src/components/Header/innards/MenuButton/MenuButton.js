// @flow
type Props = {
  isButtonOpen?: boolean,
};

const MenuButton = (props: Props) => {
  const { isButtonOpen = true, ...moreProps } = props;
  const rootClass = 'c-header-menu-button';

  return (
    <button
      className={`${rootClass} ${rootClass}--${
        isButtonOpen ? 'open' : 'close'
      }`}
      aria-label={`${isButtonOpen ? 'Open' : 'Close'} menu`}
      type="button"
      {...moreProps}
    >
      <span />
    </button>
  );
};

export { MenuButton };
