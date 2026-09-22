export default function Section({
  id,
  children,
  className = "",
  divider = true,
  as: Tag = "section",
}) {
  return (
    <Tag
      id={id}
      className={`w-full ${divider ? "hairline" : ""} py-16 sm:py-20 ${className}`}
    >
      <div className="container-app px-6">{children}</div>
    </Tag>
  );
}
