import { getAPI, deleteAPI } from 'data.service';

export const deleteRecord = async (data) => {
    const response = await deleteAPI(data);
    return response;
}

export const getRecords = async (data) => {
    const response = await getAPI(data);
    return response;
}