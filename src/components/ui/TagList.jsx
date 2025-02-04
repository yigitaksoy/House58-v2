import clsx from "clsx";

export function TagList({ className, children }) {
  return (
    // eslint-disable-next-line jsx-a11y/no-redundant-roles
    <ul role="list" className={clsx(className, "flex flex-wrap gap-3")}>
      {children}
    </ul>
  );
}

export function TagListItem({ className, children }) {
  return (
    <li
      className={clsx(
        "rounded-full border border-house-500 text-sm px-4 py-1.5 text-house-500",
        className,
      )}
    >
      {children}
    </li>
  );
}
