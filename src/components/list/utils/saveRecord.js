import { postAPI, putAPI } from 'data.service';

export const saveRecord = async (ApiURL, values, _id, dispatch, modalShowingGeneralModal, modalChangeNewMessage) => {
    if (_id) {
        try {
            const response = await putAPI(
                {
                    url: `${ApiURL}/${_id}`,
                    data: values,
                    info: { date: new Date() }
                },
                dispatch,
                modalShowingGeneralModal,
                modalChangeNewMessage
            );
            return response;
        }
        catch (error) {
            return error;
        }
    } else {
        try {
            const response = await postAPI(
                {
                    url: ApiURL,
                    data: values,
                    info: { date: new Date() }
                },
                dispatch,
                modalShowingGeneralModal,
                modalChangeNewMessage
            );
            return response;
        }
        catch (error) {
            return error;
        }
    }
}