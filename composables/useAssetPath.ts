export const useAssetPath = () => {
  const config = useRuntimeConfig();
  
  const getAssetPath = (path: string | undefined): string => {
    // Si no hay path, devolver string vacío
    if (!path) {
      return '';
    }
    
    // Si la ruta ya es absoluta (http/https), devolverla tal cual
    if (path.startsWith('http://') || path.startsWith('https://')) {
      return path;
    }
    
    // Agregar el baseURL si existe
    const baseURL = config.app.baseURL || '/';
    
    // Asegurarse de que no haya doble slash
    const cleanPath = path.startsWith('/') ? path : `/${path}`;
    const cleanBase = baseURL.endsWith('/') ? baseURL.slice(0, -1) : baseURL;
    
    return `${cleanBase}${cleanPath}`;
  };
  
  return {
    getAssetPath
  };
};

