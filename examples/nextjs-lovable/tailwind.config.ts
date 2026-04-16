import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Lovable 设计系统颜色
      colors: {
        // 主色
        cream: '#f7f4ed',
        charcoal: '#1c1c1c',
        'off-white': '#fcfbf8',
        
        // 中性色（基于不透明度的灰度）
        muted: '#5f5f5d',
        'border-light': '#eceae4',
        
        // 交互色
        'ring-blue': 'rgba(59, 130, 246, 0.5)',
      },
      
      // 背景色
      backgroundColor: {
        cream: '#f7f4ed',
        charcoal: '#1c1c1c',
        'off-white': '#fcfbf8',
      },
      
      // 文字色
      textColor: {
        charcoal: '#1c1c1c',
        muted: '#5f5f5d',
        'off-white': '#fcfbf8',
      },
      
      // 边框色
      borderColor: {
        light: '#eceae4',
        'charcoal-40': 'rgba(28, 28, 28, 0.4)',
      },
      
      // 字体
      fontFamily: {
        sans: ['DM Sans', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
      },
      
      // 字体大小（Lovable 排版系统）
      fontSize: {
        'display-hero': ['60px', { lineHeight: '1.10', letterSpacing: '-1.5px', fontWeight: '600' }],
        'display-alt': ['60px', { lineHeight: '1.00', letterSpacing: 'normal', fontWeight: '480' }],
        'section-heading': ['48px', { lineHeight: '1.00', letterSpacing: '-1.2px', fontWeight: '600' }],
        'sub-heading': ['36px', { lineHeight: '1.10', letterSpacing: '-0.9px', fontWeight: '600' }],
        'card-title': ['20px', { lineHeight: '1.25', letterSpacing: 'normal', fontWeight: '400' }],
        'body-large': ['18px', { lineHeight: '1.38', letterSpacing: 'normal', fontWeight: '400' }],
        'body': ['16px', { lineHeight: '1.50', letterSpacing: 'normal', fontWeight: '400' }],
        'button': ['16px', { lineHeight: '1.50', letterSpacing: 'normal', fontWeight: '400' }],
        'button-small': ['14px', { lineHeight: '1.50', letterSpacing: 'normal', fontWeight: '400' }],
        'caption': ['14px', { lineHeight: '1.50', letterSpacing: 'normal', fontWeight: '400' }],
      },
      
      // 间距系统
      spacing: {
        '8': '8px',
        '10': '10px',
        '12': '12px',
        '16': '16px',
        '24': '24px',
        '32': '32px',
        '40': '40px',
        '56': '56px',
        '80': '80px',
        '96': '96px',
        '128': '128px',
      },
      
      // 圆角
      borderRadius: {
        'micro': '4px',
        'standard': '6px',
        'comfortable': '8px',
        'card': '12px',
        'container': '16px',
        'pill': '9999px',
      },
      
      // 阴影（Lovable 深度系统）
      boxShadow: {
        // 按钮内阴影（标志性效果）
        'inset-button': 'rgba(255, 255, 255, 0.2) 0px 0.5px 0px 0px inset, rgba(0, 0, 0, 0.2) 0px 0px 0px 0.5px inset, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px',
        // 焦点阴影
        'focus': 'rgba(0, 0, 0, 0.1) 0px 4px 12px',
        // 焦点环
        'ring': '0 0 0 2px rgba(59, 130, 246, 0.5)',
        // 错误环
        'ring-error': '0 0 0 2px #ef4444',
      },
      
      // 过渡
      transitionDuration: {
        '150': '150ms',
        '200': '200ms',
      },
      
      // 最大宽度
      maxWidth: {
        'content': '1200px',
      },
    },
  },
  plugins: [],
}

export default config
