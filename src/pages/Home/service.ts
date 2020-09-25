import request from '@/utils/request';

export async function getArticleList(): Promise<any> {
  return request('/api/article/list');
}
