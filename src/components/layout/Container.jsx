/**
 * Container component.
 *
 * Max width: 1200px (from PROJECT_BIBLE.md line 110)
 * Desktop padding: 30px (from PROJECT_BIBLE.md line 114)
 * Mobile padding: 20px (from PROJECT_BIBLE.md line 118)
 * Center every major section (from PROJECT_BIBLE.md line 120)
 */
const Container = ({ children, className = "" }) => {
  return (
    <div
      className={`mx-auto w-full max-w-content px-5 md:px-[30px] ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
