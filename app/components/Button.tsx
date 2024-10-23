
import Link from 'next/link';

interface ButtonProps {
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ href, type = 'button', onClick, children, className }) => {
  const buttonStyles = {
    color: 'var(--foreground)',
    backgroundColor: 'transparent',
    border: '2px solid var(--foreground)',
    padding: '0.5rem 1rem',
    borderRadius: '0.375rem',
    textDecoration: 'none',
    transition: 'background 0.3s ease, color 0.3s ease',
  };

  const handleMouseEnter = (e: React.MouseEvent) => {
    (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--hover-color)';
    (e.currentTarget as HTMLElement).style.color = 'var(--background)';
  };

  const handleMouseLeave = (e: React.MouseEvent) => {
    (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent';
    (e.currentTarget as HTMLElement).style.color = 'var(--foreground)';
  };

  if (href) {
    return (
      <Link
        href={href}
        style={buttonStyles}
        className={`mt-4 inline-block rounded-lg ${className}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      style={buttonStyles}
      className={`mt-4 inline-block rounded-lg ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
