import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Fácil de Executar',
    Svg: require('@site/static/img/iot.svg').default,
    description: (
      <>
        Aqui você poderá participar de uma plaforma colaborativa de forma simples!
      </>
    ),
  },
  {
    title: 'Junte-se a Comunidade',
    Svg: require('@site/static/img/iot.svg').default,
    description: (
      <>
        Você encontrará pessoas com os mesmos interesses que você.  
      </>
    ),
  },
  {
    title: 'Desperte o seu potencial',
    Svg: require('@site/static/img/iot.svg').default,
    description: (
      <>
        O projeto é apenas o início. Você poderá ir além e compartilhar novos desafios.  
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
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
