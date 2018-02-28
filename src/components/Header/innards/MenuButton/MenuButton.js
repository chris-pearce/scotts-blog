// @flow
type Props = {
  isFocused?: boolean,
  isOpen?: boolean,
};

const MenuButton = (props: Props) => {
  const { isFocused = false, isOpen = true, ...moreProps } = props;
  const rootClass = 'c-header-menu-button';
  // Adds a ref to expose the native DOM `.focus()` method when required
  const ref = {
    ref: isFocused
      ? button => {
          if (isFocused && button) {
            button.focus();
          }
        }
      : null,
  };

  return (
    <button
      {...ref}
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
