import styled, { css } from "styled-components";
import PropTypes from "prop-types";

const Text = (props) => {
    const {
        tag = "div",
        id,
        className,
        style,
        children,
        lineHeight,
        align,
        uppercase,
        underline,
        noWrap,
        maxWidth,
        hyphens,
        ellipsis,
        color,
        opacity,
        bold,
        weight,
    } = props;

    const stylesProps = {
        align,
        uppercase,
        underline,
        noWrap,
        maxWidth,
        hyphens,
        ellipsis,
        color,
        opacity,
        bold,
        lineHeight,
        weight,
        style: {
            ...style,
        },
    };

    return (
        <Atom as={tag} id={id} className={className} {...stylesProps}>
            {childen}
        </Atom>
    )
};

const Atom = styled.div`
  transition: all 0.7s cubic-bezier(0.075, 0.82, 0.165, 1);

  &.tun-256 {
    font-size: ${text._256};
    line-height: ${rem("256px")};
  }
  &.sui-160 {
    font-family: "Suisse Intl";
    font-size: ${text._160};
    line-height: ${rem("160px")};
    font-weight: 400;
  }
  &.sui-128 {
    font-family: 'Suisse Intl';
    font-size: ${text._128};
    line-height: ${rem('136px')};
    font-weight: 400;
  }
  &.sui-96 {
    font-family: "Suisse Intl";
    font-size: ${text._96};
    line-height: ${rem("112px")};
    font-weight: 400;
  }
  &.sui-72 {
    font-family: "Suisse Intl";
    font-size: ${text._72};
    line-height: ${rem("88px")};
    font-weight: 400;
  }
  &.sui-56 {
    font-family: "Suisse Intl";
    font-size: ${text._56};
    line-height: ${rem("72px")};
    font-weight: 400;
    color: ${colors.white};
  }
  &.sui-48 {
    font-family: "Suisse Intl";
    font-size: ${text._48};
    line-height: ${rem("48px")};
    font-weight: 400;
  }
  &.sui-32 {
    font-family: "Suisse Intl";
    font-size: ${text._32};
    line-height: ${rem("48px")};
    font-weight: 400;
    color: ${colors.white};
  }
  &.sui-28 {
    font-family: "Suisse Intl";
    font-size: ${text._28};
    line-height: ${rem("40px")};
    font-weight: 400;
  }
  &.sui-24 {
    font-family: "Suisse Intl";
    font-size: ${text._24};
    line-height: ${rem("40px")};
    font-weight: 400;
  }
  &.sui-18 {
    font-family: "Suisse Intl";
    font-size: ${text._18};
    line-height: ${rem("32px")};
    font-weight: 400;
  }
  &.sui-12 {
    font-family: "Suisse Intl";
    font-size: ${text._12};
    line-height: ${rem("24px")};
    font-weight: 400;
  }
  &.sui-16 {
    font-family: 'Suisse Intl';
    font-size: ${text._16};
    line-height: ${rem('24px')};
    font-weight: 400;
  }
  &.sui-14 {
    font-family: 'Suisse Intl';
    font-size: ${text._14};
    line-height: ${rem('24px')};
    font-weight: 400;
  }

  ${({ align }) => align && css`
    text-align: ${align}!important;
  `}
  ${({ uppercase }) => uppercase && css`
    text-transform: uppercase!important;
  `}
  ${({ underline }) => underline && css`
    text-decoration: underline!important;
  `}
  ${({ noWrap }) => noWrap && css`
    white-space: nowrap!important;
  `}
  ${({ lineHeight }) => lineHeight && css`
    line-height: ${lineHeight}!important;
  `}
  ${({ weight }) => weight && css`
    font-weight: ${weight}!important;
  `}
  ${({ hyphens }) => hyphens && css`
    hyphens: ${hyphens}!important;
  `}
  ${({ ellipsis }) => ellipsis && css`
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: ${ellipsis};
    -webkit-box-orient: vertical;
  `}
  ${({ maxWidth }) => maxWidth && css`
    max-width: ${maxWidth}!important;
  `}
  ${({ color }) => color && css`
    color: ${color}!important;
  `}
  ${({ opacity }) => opacity && css`
    opacity: ${opacity}!important;
  `}
  ${({ bold }) => bold && css`
    font-weight: 600!important;
  `}
`;

Text.PropTypes = {
    tag: PropTypes.oneOf([
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "span",
        "div",
        "p",
        "label",
        "strong",
    ]),
    id: PropTypes.string,
    className: PropTypes.string,
    align: PropTypes.string,
    uppercase: PropTypes.bool,
    underline: PropTypes.bool,
    noWrap: PropTypes.bool,
    hyphens: PropTypes.bool,
    ellipsis: PropTypes.number,
    maxWidth: PropTypes.string,
    opacity: PropTypes.number,
    color: PropTypes.string,
    weight: PropTypes.number,
    children: PropTypes.any,
    style: PropTypes.object,
};

export default Text;