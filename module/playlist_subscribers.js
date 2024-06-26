// 歌单收藏者

module.exports = (query, request) => {
  const data = {
    id: query.id,
    limit: query.limit || 20,
    offset: query.offset || 0,
  }
  return request(
    'POST',
    `https://music.163.com/api/playlist/subscribers`,
    data,
    {
      crypto: 'weapi',
      cookie: query.cookie,
      ua: query.ua || '',
      proxy: query.proxy,
      realIP: query.realIP,
    },
  )
}
