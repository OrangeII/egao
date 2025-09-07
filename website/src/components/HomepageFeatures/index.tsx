import type { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  kaomoji: ReactNode;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Simple CSS Classes",
    kaomoji: (
      <div className={styles.featureKaomoji}>
        <div className="kaomoji">
          <div className="arms-raised-curved flip-h"></div>
          <div className="body-round-left"></div>
          <div className="space-0-5"></div>
          <div className="face-very-smug"></div>
          <div className="space-0-25"></div>
          <div className="body-round-right"></div>
          <div className="arms-hugging"></div>
          <div className="rod"></div>
          <div className="rod"></div>
          <div className="rod"></div>
          <div className="star"></div>
          <div className="space-0-25"></div>
          <div className="circle-low"></div>
          <div className="space-0-25"></div>
          <div>:</div>
          <div className="space-0-25"></div>
          <div className="circle-center"></div>
          <div className="space-0-25"></div>
          <div className="bubbles"></div>
          <div className="space-0-25"></div>
          <div>*</div>
        </div>
      </div>
    ),
    description: (
      <>
        Use simple CSS classes to create kaomoji. Just add classes like{" "}
        <code>face-happy</code> or <code>arms-hugging</code> to HTML elements.
      </>
    ),
  },
  {
    title: "Lightweight & Fast",
    kaomoji: (
      <div className={styles.featureKaomoji}>
        <div className="kaomoji">
          <div className="mouth-pouting-left"></div>
          <div>=</div>
          <div className="mouth-pouting-left"></div>
          <div>=</div>
          <div className="mouth-pouting-left"></div>
          <div>=</div>
          <div className="arms-running-left"></div>
          <div className="body-round-left"></div>
          <div className="space-0-5"></div>
          <div className="space-0-25"></div>
          <div className="face-focused"></div>
          <div className="space-0-25"></div>
          <div className="body-round-right"></div>
          <div className="arms-running-right"></div>
        </div>
      </div>
    ),
    description: (
      <>
        Egao is a lightweight CSS library that doesn't require any JavaScript.
        Perfect for adding personality to your web pages.
      </>
    ),
  },
  {
    title: "Customizable",
    kaomoji: (
      <div className={styles.featureKaomoji}>
        <div className="kaomoji">
          <div className="body-round-left"></div>
          <div className="space-0-25"></div>
          <div className="face-serious"></div>
          <div className="space-0-25"></div>
          <div className="body-round-right"></div>
          <div className="arms-salute"></div>
        </div>
      </div>
    ),
    description: (
      <>
        Combine different kaomoji parts to create unique expressions. Layer
        elements and customize spacing to match your design.
      </>
    ),
  },
];

function Feature({ title, kaomoji, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">{kaomoji}</div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
