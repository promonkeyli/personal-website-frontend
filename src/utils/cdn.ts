/**
 * CDN 图片获取函数
 */
export function getCDNImage(imageUrl: string) {
  return process.env.NEXT_PUBLIC_CDN + imageUrl;
}
