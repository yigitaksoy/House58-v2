import Link from "next/link";
import { FadeIn } from "./FadeIn";
import { Border } from "./Border";

export const ContactDetails = () => {
  return (
    <FadeIn>
      <Border invert className="mt-16 pt-16">
        <h2 className="font-display text-base font-semibold text-house-bluelight">
          Email us
        </h2>
        <dl className="mt-6 grid grid-cols-1 gap-8 text-sm sm:grid-cols-2">
          {[["Email", "hello@house58.nl"]].map(([label, email]) => (
            <div key={email}>
              <dt className="font-semibold text-white">{label}</dt>
              <dd>
                <Link
                  href={`mailto:${email}`}
                  className="text-neutral-400 hover:text-white"
                >
                  {email}
                </Link>
              </dd>
            </div>
          ))}
        </dl>
      </Border>

      <Border invert className="mt-16 pt-16">
        <h2 className="font-display text-base font-semibold text-house-bluelight">
          Follow us
        </h2>
        {/* <SocialMedia className="mt-6" /> */}
      </Border>
    </FadeIn>
  );
};
