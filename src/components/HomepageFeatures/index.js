import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Intro Course',
    link: "/docs/app-dev-course",
    Svg: require('@site/static/img/forsideillustrasjon_skrive.svg').default,
    description: (
      <>
        Not sure how to get started? The Intro Course will take you through the creation of an application step by step.
      </>
    ),
  },
  {
    title: 'Development',
    link: "/docs/development",
    Svg: require('@site/static/img/forsideillustrasjon_utvikling.svg').default,
    description: (
      <>
        Altinn Studio is our new tool for developing digital services, aka apps. These can be anything from simple forms to very advanced applications.
      </>
    ),
  },
  {
    title: 'Operation and maintenance',
    link: "./",
    Svg: require('@site/static/img/api.svg').default,
    description: (
      <>
        Maintain you application in production.
      </>
    ),
  },
];

function Feature({Svg, title, link, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
      <a href={link}><Svg className={styles.featureSvg} role="img" /></a>
      </div>
      <div className="text--center padding-horiz--md">
        <a href={link}><h3>{title}</h3></a>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
