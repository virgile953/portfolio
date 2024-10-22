// components/Button.tsx
import Link from 'next/link';

interface ButtonProps {
  href?: string; // Optional for Link
  type?: 'button' | 'submit' | 'reset'; // Button types
  onClick?: () => void; // Optional click handler
  children: React.ReactNode; // Button text or content
  className?: string; // Optional className for custom styles
}

const Button: React.FC<ButtonProps> = ({ href, type = 'button', onClick, children, className }) => {
  const buttonStyles = {
    color: 'var(--foreground)', // Button text color
    backgroundColor: 'transparent', // Default button background
    border: '2px solid var(--foreground)', // Default border color
    padding: '0.5rem 1rem', // Button padding
    borderRadius: '0.375rem', // Rounded corners
    textDecoration: 'none', // Remove underline
    transition: 'background 0.3s ease, color 0.3s ease', // Smooth transition
  };

  const handleMouseEnter = (e: React.MouseEvent) => {
    (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--hover-color)'; // Change background on hover
    (e.currentTarget as HTMLElement).style.color = 'var(--background)'; // Change text color on hover
  };

  const handleMouseLeave = (e: React.MouseEvent) => {
    (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent'; // Reset background on mouse leave
    (e.currentTarget as HTMLElement).style.color = 'var(--foreground)'; // Reset text color on mouse leave
  };

  if (href) {
    return (
      <Link
        href={href}
        style={buttonStyles}
        className={`mt-4 inline-block rounded-lg ${className}`} // Added className support
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
      className={`mt-4 inline-block rounded-lg ${className}`} // Added className support
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
