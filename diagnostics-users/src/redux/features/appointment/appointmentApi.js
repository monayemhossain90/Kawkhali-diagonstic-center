import {apiSlice} from "../api/apiSlice.js";
import {SuccessToast} from "../../../helper/ValidationHelper.js";



export const appointmentApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        createAppointment: builder.mutation({
            query: (data) => ({
                url: "/appointment/create-appointment",
                method: "POST",
                body: data
            }),
            async onQueryStarted(arg, {queryFulfilled, dispatch}){
                try{
                    const res = await queryFulfilled;
                    SuccessToast("AppointmentList Book Successfully");
                }catch(err) {
                    console.log(err)
                }
            }
        }),
    }),
})


export const {useCreateAppointmentMutation} = appointmentApi;