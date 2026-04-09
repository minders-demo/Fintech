import { initAmplitude, fetchFeatureVariants } from './utils/amplitude';

// Inicializar Amplitude
initAmplitude();

// Cargar los valores de los feature flags ANTES de montar la app
fetchFeatureVariants().then(() => {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
});
