import {apiSlice} from "../api/apiSlice.js";
import {ErrorToast} from "../../../helper/ValidationHelper.js";



export const reportApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        searchReport: builder.mutation({
            query: (data) => ({
                url: "/report/search-report",
                method: "POST",
                body: data
            }),
            async onQueryStarted(arg, {queryFulfilled, dispatch}){
                try{
                    const res = await queryFulfilled;
                }catch(err) {
                    let status = err?.error?.status;
                    if(status === 404){
                        ErrorToast("Couldn't find Invoice Number or Phone Number");
                    }
                    //console.log(err)
                }
            }
        }),
    }),
})


export const {useSearchReportMutation} = reportApi;