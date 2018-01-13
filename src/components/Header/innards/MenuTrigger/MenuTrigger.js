// @flow
type Props = {
  isActive: boolean,
};

const MenuTrigger = (props: Props) => {
  const { isActive = false, ...moreProps } = props;

  return (
    <button
      {...moreProps}
      aria-expanded={isActive}
      aria-label={isActive ? 'Close menu' : 'Open menu'}
      type="button"
      className="c-menu-trigger"
    >
      <span />
    </button>
  );
};

export { MenuTrigger };
