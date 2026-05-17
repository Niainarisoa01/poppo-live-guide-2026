import React from 'react';

type AlertVariant = 'info' | 'warning' | 'tip' | 'danger';

interface AlertBoxProps {
  variant: AlertVariant;
  children: React.ReactNode;
}

const icons: Record<AlertVariant, string> = {
  info: '💡',
  warning: '⚠️',
  tip: '✅',
  danger: '🚨',
};

export default function AlertBox({ variant, children }: AlertBoxProps) {
  return (
    <div className={`alert-box alert-${variant}`}>
      <span className="alert-icon">{icons[variant]}</span>
      <div>{children}</div>
    </div>
  );
}
