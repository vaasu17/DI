import React from "react";

interface TitleLogoProps {
  title: string;
  caption: string;
  className?: string;
}

const TitleLogo: React.FC<TitleLogoProps> = ({ title, caption, className }) => {
  return (
    <h1 className={`${className || ''} title-logo`}>
      <span>{caption}</span>
      {title}
    </h1>
  );
};

interface TitleSmProps {
  title: string;
}

const TitleSm: React.FC<TitleSmProps> = ({ title }) => {
  return <h1 className='titleSm'>{title}</h1>;
};

interface TitleProps {
  title: string;
  className?: string;
}

const Title: React.FC<TitleProps> = ({ title, className }) => {
  return <h1 className={`${className || ''} title`}>{title}</h1>;
};

export { TitleLogo, TitleSm, Title };
