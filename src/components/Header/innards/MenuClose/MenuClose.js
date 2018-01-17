// @flow
type Props = {
  text: string,
};

const MenuClose = (props: Props) => {
  const { text, ...moreProps } = props;

  return (
    <button
      aria-label="Close menu"
      type="button"
      className="c-menu-close"
      {...moreProps}
    >
      <span />
    </button>
  );
};

export { MenuClose };
