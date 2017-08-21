import './button.scss';
import { h } from 'preact';
import { Link } from 'preact-router';


const Button = ({
  href = '',
  className = '',
  text,
  children = '',
  externalLink = false,
  opensNewTab = false,
  ...restProps,
}) => ( href !== '' ) ? (
  ( externalLink ) ? (
    <a
      {...restProps}
      {...opensNewTab && {
        target: '_blank',
        rel: 'noopener noreferrer',
      }}
      href={href}
      className={`button ${className}`}
    >
      <p>{text || children}</p>
    </a>
  ) : (
    <Link
      href={href}
      className={`button ${className}`}
    >
      <p>{text || children}</p>
    </Link>
  )
) : (
  <button {...restProps} className={`button ${className}`}>
    <p>{text || children}</p>
  </button>
);

export default Button;
