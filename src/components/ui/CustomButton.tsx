
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

interface ButtonProps {
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  withArrow?: boolean;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const Button = ({
  href,
  variant = 'primary',
  size = 'md',
  onClick,
  children,
  className = '',
  withArrow = false,
  type = 'button',
  disabled = false,
}: ButtonProps) => {
  const { language } = useLanguage();
  const isRTL = language === 'ar';
  
  const baseClasses = `btn btn-${variant} rounded-md font-medium flex items-center justify-center transition-all`;
  
  const sizeClasses = {
    sm: 'text-sm py-1.5 px-3',
    md: 'text-base py-2 px-5',
    lg: 'text-lg py-2.5 px-6',
  };
  
  const classes = `${baseClasses} ${sizeClasses[size]} ${className}`;
  
  const content = (
    <>
      {isRTL && withArrow && <ArrowRight className="mr-2 h-4 w-4 transform rotate-180" />}
      <span>{children}</span>
      {!isRTL && withArrow && <ArrowRight className="ml-2 h-4 w-4" />}
    </>
  );
  
  if (href) {
    return (
      <Link to={href} className={classes}>
        {content}
      </Link>
    );
  }
  
  return (
    <button 
      type={type} 
      onClick={onClick} 
      className={classes} 
      disabled={disabled}
    >
      {content}
    </button>
  );
};

export default Button;
