import clsx from "clsx";
import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/shared/FadeIn";

export default function StackIntro({
  eyebrow,
  title,
  children,
  hollow,
  centered = false,
}) {
  const isHollow = hollow;
  return (
    <Container
      className={clsx("mt-4 sm:mt-2 lg:mt-4", centered && "text-center")}
    >
      <FadeIn>
        <h1>
          <span className="block font-display text-base font-semibold">
            {eyebrow}
          </span>
          <span className="sr-only"> - </span>
          <span
            className={clsx(
              "mt-6 block max-w-5xl font-display text-4xl font-heavy tracking-tight [text-wrap:balance] sm:text-4xl",
              { "hollow-eyebrow": isHollow },
              centered && "mx-auto",
            )}
          >
            {title}
          </span>
        </h1>
        <div
          className={clsx(
            "mt-6 max-w-xl text-2xl text-house-500 font-heavy",
            centered && "mx-auto",
          )}
        >
          {children}
        </div>
      </FadeIn>
    </Container>
  );
}
