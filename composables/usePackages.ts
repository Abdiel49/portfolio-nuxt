import { npmPackages as fallbackPackages } from '../data/packages';
import type { NpmPackage } from '../types';

export const usePackages = () => {
  return useAsyncData<NpmPackage[]>('npm-packages', async () => {
    try {
      const response = await $fetch<any>('https://registry.npmjs.org/-/v1/search?text=maintainer:abdiel49', {
        timeout: 5000,
      });

      if (!response?.objects || !Array.isArray(response.objects) || response.objects.length === 0) {
        return fallbackPackages;
      }

      return response.objects.map((item: any) => {
        const pkg = item.package;
        let repoUrl = pkg.links?.repository;
        if (typeof repoUrl === 'string') {
          repoUrl = repoUrl.replace(/^git\+/, '').replace(/\.git$/, '');
        }

        return {
          name: pkg.name,
          version: pkg.version || '1.0.0',
          description: pkg.description || '',
          keywords: Array.isArray(pkg.keywords) ? pkg.keywords : [],
          npmUrl: pkg.links?.npm || `https://www.npmjs.com/package/${pkg.name}`,
          repoUrl: repoUrl || pkg.links?.homepage,
          license: pkg.license || 'MIT',
          downloads: item.downloads ? {
            weekly: item.downloads.weekly,
            monthly: item.downloads.monthly,
          } : undefined,
        };
      });
    } catch (err) {
      console.warn('Unable to load live packages from npm Registry API, using fallback data:', err);
      return fallbackPackages;
    }
  }, {
    default: () => fallbackPackages,
    lazy: true,
  });
};
