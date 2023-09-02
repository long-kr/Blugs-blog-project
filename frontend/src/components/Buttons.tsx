import React from 'react';
import Button from 'react-bootstrap/Button';

interface Props {
  children?: React.ReactNode;
  href?: string | '';
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type: 'submit' | 'button' | 'reset' | undefined;
}

export const PrimaryButton: React.FC<Props> = ({
  children,
  href,
  onClick,
  type
}) => {
  return (
    <Button href={href} onClick={onClick} type={type}>
      <div>{children}</div>
    </Button>
  );
};
