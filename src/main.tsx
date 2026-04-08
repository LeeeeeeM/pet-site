import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import {ConfigProvider} from 'antd';
import App from './App.tsx';
import 'antd/dist/reset.css';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#0284c7',
          colorLink: '#0284c7',
          colorLinkHover: '#0369a1',
          borderRadius: 12,
          fontFamily: '"Inter", ui-sans-serif, system-ui, sans-serif',
        },
      }}
    >
      <App />
    </ConfigProvider>
  </StrictMode>,
);
