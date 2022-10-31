import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          こんにちは <GradientText>Taiyaki</GradientText>です
        </>
      }
      description={
        <>
          大学院生です。研究では、スマート農業における画像認識モデルの軽量化に関する研究を行っています。
        </>
      }
      avatar
      // avatar={
      //   // <img
      //   //   className="h-80 w-64"
      //   //   src="/assets/images/taiyaki.png"
      //   //   alt="Avatar image"
      //   //   loading="lazy"
      //   // />
      // }

      socialButtons={
        <>
          <a href="https://twitter.com/home">
            <HeroSocial
              src="/assets/images/twitter-icon.png"
              alt="Twitter icon"
            />
          </a>
          <a href="https://github.com/">
            <HeroSocial
              src="/assets/images/GitHub-Mark-Light-32px.png"
              alt="Github icon"
            />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
