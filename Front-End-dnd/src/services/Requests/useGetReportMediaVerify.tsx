// api
import { useQuery } from "@tanstack/react-query";
import api from '@/services/API'
// api

const useGetReportMediaVerify = (id: any) => {

  const { isLoading, data, refetch } = useQuery({
    enabled: false,
    queryKey: ['getReportMediaverify', id],
    queryFn: async ({ queryKey }) => {
      const response = await api.get(`report/media-report-verify/${queryKey[1]}`)
      const data = await response.data
      return data
    },
  })
  return { isLoading, data, refetch };
};

export default useGetReportMediaVerify;