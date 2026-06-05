export type Locale = "en" | "ja";

export type SiteContent = {
  lang: Locale;
  path: string;
  alternatePath: string;
  alternateLabel: string;
  meta: {
    title: string;
    description: string;
  };
  nav: {
    approach: string;
    business: string;
    product: string;
    contact: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    body: string;
    primaryCta: string;
    secondaryCta: string;
    statLabel: string;
    statValue: string;
    signalTitle: string;
    loopLabel: string;
    loopValue: string;
    domains: Array<{
      name: string;
      short: string;
      profile: number[];
    }>;
    featureLabel: string;
    features: Array<{ code: string; label: string; tone: "green" | "blue" | "amber" | "red" | "cyan" }>;
    signalItems: Array<{ label: string; value: string; trend: string }>;
  };
  approach: {
    eyebrow: string;
    title: string;
    body: string;
    pillars: Array<{ title: string; body: string }>;
  };
  capabilities: {
    eyebrow: string;
    title: string;
    items: Array<{ title: string; body: string }>;
  };
  business: {
    eyebrow: string;
    title: string;
    body: string;
    items: Array<{ title: string; body: string }>;
  };
  product: {
    eyebrow: string;
    title: string;
    body: string;
    label: string;
    href: string;
    bullets: string[];
  };
  contact: {
    eyebrow: string;
    title: string;
    body: string;
    emailLabel: string;
  };
  footer: {
    tagline: string;
    copyright: string;
  };
};

export const content: Record<Locale, SiteContent> = {
  en: {
    lang: "en",
    path: "/",
    alternatePath: "/ja/",
    alternateLabel: "日本語",
    meta: {
      title: "Gomzang | Multi-Domain Signal Intelligence",
      description:
        "Gomzang builds a Meta Insight Layer from multi-domain signals: environment, rhythm, psychology, and market movement."
    },
    nav: {
      approach: "Approach",
      business: "Business",
      product: "Product",
      contact: "Contact"
    },
    hero: {
      eyebrow: "Multi-Domain Intelligence",
      title: "Multi-Domain Signal Intelligence.",
      body:
        "We project environment, condition, flow, market expectation, and crowd psychology onto the same feature axes across domains, isolate Transferable Signals, then translate them back into domain-specific prediction and interpretation.",
      primaryCta: "Contact us",
      secondaryCta: "View Keiba Graph",
      statLabel: "Meta Insight Layer",
      statValue: "Transferable Signals",
      signalTitle: "Transferable Signal Extraction",
      loopLabel: "Validation Loop",
      loopValue: "Raw Signals → Transferable Vectors → Domain Models",
      domains: [
        { name: "Domain A", short: "A", profile: [74, 42, 66, 38, 58] },
        { name: "Domain B", short: "B", profile: [52, 68, 44, 76, 62] },
        { name: "Domain C", short: "C", profile: [64, 36, 78, 54, 48] },
        { name: "Domain D", short: "D", profile: [46, 72, 58, 82, 70] }
      ],
      featureLabel: "Transferable feature axes",
      features: [
        { code: "ENV", label: "Environment Pressure", tone: "green" },
        { code: "COND", label: "Condition Shift", tone: "blue" },
        { code: "FLOW", label: "Flow Rhythm", tone: "amber" },
        { code: "MKT", label: "Market Distortion", tone: "red" },
        { code: "PSY", label: "Crowd Pressure", tone: "cyan" }
      ],
      signalItems: [
        { label: "Feature Vectors", value: "5 axes", trend: "normalized" },
        { label: "Transfer Layer", value: "axis reuse", trend: "validated" },
        { label: "Domain Model", value: "JRA first", trend: "active" }
      ]
    },
    approach: {
      eyebrow: "Approach",
      title: "Domains as an Object Graph.",
      body:
        "Entities, venues, schedules, weather, odds, news, and market reactions are not isolated rows. We model them as objects, links, and context.",
      pillars: [
        {
          title: "Objects",
          body:
            "Real-world units such as participants, venues, matches, races, and events become typed analytical objects."
        },
        {
          title: "Links",
          body:
            "Condition, environment, schedule pressure, and market reaction are tracked as linked signals over time."
        },
        {
          title: "Context",
          body:
            "Transferable Features are not copied blindly. They are translated through each domain's rules and data grammar."
        }
      ]
    },
    capabilities: {
      eyebrow: "Capabilities",
      title: "Build once, validate by domain.",
      items: [
        {
          title: "Domain Ontology",
          body:
            "A structured layer of objects, properties, and links that turns fragmented domain data into an interpretable world model."
        },
        {
          title: "Signal Extraction",
          body:
            "Extracting weak but repeatable signals from weather, venue, condition, odds movement, news flow, and market behavior."
        },
        {
          title: "Multi-Domain Feature Validation",
          body:
            "Testing whether a pattern found in one domain can survive comparison with another domain's structure."
        },
        {
          title: "Explainable Product",
          body:
            "Showing not only model scores, but the relationships and signals that shaped the interpretation."
        }
      ]
    },
    business: {
      eyebrow: "Business thinking",
      title: "A compounding domain insight asset.",
      body:
        "Each domain adds new tests for the same underlying signal system. More domains mean richer Transferable Signals, a sharper Object Graph, and better domain-specific interpretation.",
      items: [
        {
          title: "Reusable Hypotheses",
          body:
            "Market distortion, condition shifts, and flow rhythm become comparable hypotheses across different domains."
        },
        {
          title: "Verifiable Interpretation",
          body:
            "Predictions are treated as interpretations that can be reviewed, compared, and tested after the event."
        },
        {
          title: "Product Scalability",
          body:
            "The structure tested in Keiba Graph can expand into other domains, reports, APIs, and partner products."
        },
        {
          title: "Partner Data Loop",
          body:
            "Partner data from media, communities, and data providers can enrich the Meta Insight Layer over time."
        }
      ]
    },
    product: {
      eyebrow: "Current product",
      title: "Keiba Graph",
      body:
        "Keiba Graph is the first public product testing Gomzang's Meta Insight approach on JRA data: odds movement, condition, environment, and race context in one interpretation layer.",
      label: "Visit keibagraph.com",
      href: "https://www.keibagraph.com/",
      bullets: [
        "Odds movement, pedigree, training time, and environmental signals in one dashboard",
        "Prediction scores and reasoning shown through relationship-first visualization",
        "Beta pre-registration is open while product and pricing models are tested"
      ]
    },
    contact: {
      eyebrow: "Contact",
      title: "Let's productize Transferable Signals.",
      body:
        "Domain data, environmental variables, market signals, analytics services, reports, APIs, and partnership ideas are welcome.",
      emailLabel: "contact@gomzang.com"
    },
    footer: {
      tagline: "Multi-domain ontology and meta insights for signal intelligence products.",
      copyright: "© 2026 Gomzang. All rights reserved."
    }
  },
  ja: {
    lang: "ja",
    path: "/ja/",
    alternatePath: "/",
    alternateLabel: "English",
    meta: {
      title: "Gomzang | Multi-Domain Signal Intelligence",
      description:
        "Gomzang builds a Meta Insight Layer from multi-domain signals: environment, rhythm, psychology, and market movement."
    },
    nav: {
      approach: "アプローチ",
      business: "ビジネス",
      product: "プロダクト",
      contact: "お問い合わせ"
    },
    hero: {
      eyebrow: "Multi-Domain Intelligence",
      title: "Multi-Domain Signal Intelligence.",
      body:
        "Environment, condition, flow, market expectation, and crowd psychologyを同じfeature axesへprojectし、Transferable Signalsとして抽出してから、各Domainのprediction / interpretationへ戻します。",
      primaryCta: "事業相談をする",
      secondaryCta: "Keiba Graphを見る",
      statLabel: "Meta Insight Layer",
      statValue: "Transferable Signals",
      signalTitle: "Transferable Signal Extraction",
      loopLabel: "Validation Loop",
      loopValue: "Raw Signals → Transferable Vectors → Domain Models",
      domains: [
        { name: "Domain A", short: "A", profile: [74, 42, 66, 38, 58] },
        { name: "Domain B", short: "B", profile: [52, 68, 44, 76, 62] },
        { name: "Domain C", short: "C", profile: [64, 36, 78, 54, 48] },
        { name: "Domain D", short: "D", profile: [46, 72, 58, 82, 70] }
      ],
      featureLabel: "Transferable feature axes",
      features: [
        { code: "ENV", label: "Environment Pressure", tone: "green" },
        { code: "COND", label: "Condition Shift", tone: "blue" },
        { code: "FLOW", label: "Flow Rhythm", tone: "amber" },
        { code: "MKT", label: "Market Distortion", tone: "red" },
        { code: "PSY", label: "Crowd Pressure", tone: "cyan" }
      ],
      signalItems: [
        { label: "Feature Vectors", value: "5 axes", trend: "normalized" },
        { label: "Transfer Layer", value: "axis reuse", trend: "validated" },
        { label: "Domain Model", value: "JRA first", trend: "active" }
      ]
    },
    approach: {
      eyebrow: "Approach",
      title: "Domains as an Object Graph.",
      body:
        "Entities, venues, schedules, weather, odds, news, and market reactionsは孤立したrowsではありません。Gomzangはそれらをobjects, links, contextとして扱います。",
      pillars: [
        {
          title: "Objects",
          body:
            "Participants, venues, matches, races, and eventsをtyped analytical objectsとして整理します。"
        },
        {
          title: "Links",
          body:
            "Condition, environment, schedule pressure, and market reaction are tracked as linked signals over time."
        },
        {
          title: "Context",
          body:
            "Transferable Featuresをそのままコピーせず、各Domainのrulesとdata grammarに合わせて変換します。"
        }
      ]
    },
    capabilities: {
      eyebrow: "Capabilities",
      title: "Build once, validate by domain.",
      items: [
        {
          title: "Domain Ontology",
          body:
            "Objects, properties, linksで断片的なdomain dataをinterpretable world modelへ変換します。"
        },
        {
          title: "Signal Extraction",
          body:
            "Extracting weak but repeatable signals from weather, venue, condition, odds movement, news flow, and market behavior."
        },
        {
          title: "Multi-Domain Feature Validation",
          body:
            "あるDomainで見つけたpatternが、別Domainのstructureでも成立するかを検証します。"
        },
        {
          title: "Explainable Product",
          body:
            "Showing not only model scores, but the relationships and signals that shaped the interpretation."
        }
      ]
    },
    business: {
      eyebrow: "Business thinking",
      title: "A compounding domain insight asset.",
      body:
        "Each domain adds new tests for the same underlying signal system. More domains mean richer Transferable Signals, a sharper Object Graph, and better domain-specific interpretation.",
      items: [
        {
          title: "Reusable Hypotheses",
          body:
            "Market distortion, condition shifts, and flow rhythm become comparable hypotheses across different domains."
        },
        {
          title: "Verifiable Interpretation",
          body:
            "Predictions are treated as interpretations that can be reviewed, compared, and tested after the event."
        },
        {
          title: "Product Scalability",
          body:
            "The structure tested in Keiba Graph can expand into other domains, reports, APIs, and partner products."
        },
        {
          title: "Partner Data Loop",
          body:
            "Partner data from media, communities, and data providers can enrich the Meta Insight Layer over time."
        }
      ]
    },
    product: {
      eyebrow: "Current product",
      title: "Keiba Graph",
      body:
        "Keiba Graph is the first public product testing Gomzang's Meta Insight approach on JRA data: odds movement, condition, environment, and race context in one interpretation layer.",
      label: "keibagraph.comへ",
      href: "https://www.keibagraph.com/",
      bullets: [
        "Odds movement, pedigree, training time, and environmental signals in one dashboard",
        "Prediction scores and reasoning shown through relationship-first visualization",
        "Beta pre-registration is open while product and pricing models are tested"
      ]
    },
    contact: {
      eyebrow: "Contact",
      title: "Transferable Signalsを事業へ。",
      body:
        "Domain data, environmental variables, market signals, analytics services, reports, APIs, and partnership ideas are welcome.",
      emailLabel: "contact@gomzang.com"
    },
    footer: {
      tagline: "Multi-domain ontology and meta insights for signal intelligence products.",
      copyright: "© 2026 Gomzang. All rights reserved."
    }
  }
};
