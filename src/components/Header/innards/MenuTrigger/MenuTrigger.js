// @flow
type Props = {
  isActive: boolean,
  text: string,
};

const MenuTrigger = (props: Props) => {
  const { isActive = false, text, ...moreProps } = props;

  return (
    <button
      aria-expanded={isActive}
      aria-label={text}
      type="button"
      className="c-menu-trigger"
      {...moreProps}
    >
      <span />
    </button>
  );
};

export { MenuTrigger };
