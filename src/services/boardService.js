/* eslint-disable no-useless-catch */
import { slugify } from '~/utils/formatters'

const createNew = async (reqBody) => {
  try {
    const newBoard = {
      ...reqBody,
      slug: slugify(reqBody.title)
    }

    // Gọi tới tầng Model để xử lý lưu bản ghi newBoard vào trong Database...
    // Làm thêm các xử lý logic khác với các Collection khác tùy đặc thù dự án...
    // Gửi Email, Notification về cho admin khi có một board mới đươc tạo...

    // Trong Service luôn phải có return
    return newBoard
  } catch (error) { throw error }
}

export const boardService = {
  createNew
}