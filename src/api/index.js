import request from '@/utils/request'
export const getSearchListAPI = ({ q }) => {
  return request({
    url: '/j/subject_suggest',
    params: {
      q
    }
  })
}
