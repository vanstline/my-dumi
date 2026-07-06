import React from 'react';

export interface CardProps {
  /** 卡片标题 */
  title?: React.ReactNode;
  /** 卡片内容 */
  children: React.ReactNode;
  /** 底部操作栏 */
  extra?: React.ReactNode;
}

/** 基础卡片组件 */ const Card: React.FC<CardProps> = ({
  title,
  children,
  extra,
}) => {
  return (
    <div
      style={{
        border: '1px solid #f0f0f0',
        borderRadius: 8,
        padding: 16,
        background: '#fff',
        boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
      }}
    >
      {title && (
        <div
          style={{
            fontSize: 16,
            fontWeight: 600,
            marginBottom: 12,
            color: '#1f1f1f',
          }}
        >
          {title}
        </div>
      )}
      <div style={{ color: '#595959' }}>{children}</div>
      {extra && (
        <div style={{ marginTop: 12, textAlign: 'right' }}>{extra}</div>
      )}
    </div>
  );
};

export default Card;
