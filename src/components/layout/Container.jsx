/**
 * Container component.
 *
 * Max width: 1200px (from PROJECT_BIBLE.md line 110)
 * Responsive padding: Uses clamp for fluid scaling across all device sizes
 * Center every major section (from PROJECT_BIBLE.md line 120)
 */
const Container = ({ children, className = "" }) => {
  return (
    <div
      className={`mx-auto w-full max-w-[1200px] box-border ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
