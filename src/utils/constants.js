export const WHITELIST_DOMAINS = [
  // Không cần localhost nữa vì ở file config/cors đã luôn cho phép môi trường dev (env.BUILD_MODE === 'dev')
  // 'http://localhost:5173'
  'https://trello-clone-eight-wheat.vercel.app'
]

export const BOARD_TYPES = {
  PUBLIC: 'public',
  PRIVATE: 'private'
}