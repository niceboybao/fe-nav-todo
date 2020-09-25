export interface ArticleListType {
  /**
   * 唯一id
   */
  articleId: string;
  /**
   * 导航描述
   */
  desc: string;
  /**
   * 导航链接
   */
  url: string;
  /**
   * 导航访问次数
   */
  views: number;
  /**
   * 导航所属标签
   */
  hasTags: Array<string>;
  /**
   * 导航是否置顶
   */
  isTop: boolean;
  /**
   * 导航创建时间
   */
  creatTime: string;
  /**
   * 导航评论
   */
  comment?: Array<{
    text: string;
    creatTime: string;
  }>;
}
