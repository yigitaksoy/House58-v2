import clsx from "clsx";
import { Container } from "@/components/Container";
import { FadeIn } from "@/components/FadeIn";

export function SectionIntro({
  eyebrow,
  title,
  hollow,
  smaller = false,
  invert = false,
  ...props
}) {
  const isHollow = hollow;
  return (
    <Container {...props}>
      <FadeIn className="max-w-2xl">
        <h2>
          {eyebrow && (
            <>
              <span
                className={clsx(
                  "mb-6 block font-display font-heavy text-4xl",
                  { "hollow-eyebrow": isHollow },
                  invert ? "text-white" : "text-house-black",
                )}
              >
                {eyebrow}
              </span>
              <span className="sr-only"> - </span>
            </>
          )}
          <span
            className={clsx(
              "block font-display tracking-tight [text-wrap:balance]",
              smaller
                ? "text-2xl font-semibold"
                : "text-4xl font-heavy sm:text-5xl",
              invert ? "text-white" : "text-house-500",
            )}
          >
            {title}
          </span>
        </h2>
      </FadeIn>
    </Container>
  );
}
