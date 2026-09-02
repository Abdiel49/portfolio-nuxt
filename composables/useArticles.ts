import { articles as fallbackArticles } from '../data/articles';
import type { Article } from '../types';

export const useArticles = () => {
  return useAsyncData<Article[]>('devto-articles', async () => {
    try {
      const response = await $fetch<any[]>('https://dev.to/api/articles?username=abdiel49', {
        timeout: 5000,
      });

      if (!Array.isArray(response) || response.length === 0) {
        return fallbackArticles;
      }

      return response.map((item) => ({
        id: item.id,
        title: item.title,
        description: item.description || '',
        url: item.url,
        readablePublishDate: item.readable_publish_date || 'Recent',
        publishedAt: item.published_timestamp || item.published_at || '',
        readingTimeMinutes: item.reading_time_minutes || 1,
        tags: Array.isArray(item.tag_list) ? item.tag_list : (item.tags ? String(item.tags).split(',').map((t: string) => t.trim()) : []),
        socialImage: item.social_image || item.cover_image || undefined,
        reactionsCount: item.public_reactions_count ?? item.positive_reactions_count ?? 0,
        commentsCount: item.comments_count ?? 0,
      }));
    } catch (err) {
      console.warn('Unable to load live articles from Dev.to API, using fallback data:', err);
      return fallbackArticles;
    }
  }, {
    default: () => fallbackArticles,
    lazy: true,
  });
};
