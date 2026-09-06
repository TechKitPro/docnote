import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '纯 Markdown 写作',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        所有内容都是 Markdown / MDX 文件，无需构建知识，写笔记就像写文本一样自然，还支持代码块、公式与图表。
      </>
    ),
  },
  {
    title: '专注于内容本身',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Docusaurus 帮你打理导航、搜索、SEO 与多版本，你只需把文档放进 <code>docs</code> 目录。
      </>
    ),
  },
  {
    title: '静态站点，随处部署',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        构建产物是纯静态文件，可一键部署到 GitHub Pages、Vercel、Netlify，快如闪电，免费托管。
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
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
