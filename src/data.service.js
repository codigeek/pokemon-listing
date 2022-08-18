import axios from 'axios';
import { API_CONFIG } from 'constants.js';

export const getAPI = async (data, dispatch, modalShowingGeneralModal, modalChangeNewMessage) => {
    try {
        return axios.get(
            `${process.env.REACT_APP_API_URL}${data.url}`,
            {
                params: data.data
            }
        )
            .then(res => {
                if (res.status === 200) {
                    return res;
                }
                dispatch(modalShowingGeneralModal(true));
                dispatch(modalChangeNewMessage("Error"));
                return res;
            })
    } catch (err) {
        dispatch(modalShowingGeneralModal(true));
        dispatch(modalChangeNewMessage("Error al cargar los registros"));
        return err;
    }
}

export const postAPI = async (data, dispatch, modalShowingGeneralModal, modalChangeNewMessage) => {
    try {
        return axios.post(
            `${API_CONFIG.base_url}${data.url}`,
            {
                params: data.data,
                info: data.info
            }
        )
            .then(res => {
                if (res.status === 200) {
                    return res;
                }
                dispatch(modalShowingGeneralModal(true));
                dispatch(modalChangeNewMessage(res?.data?.customMessage ? res?.data?.customMessage : "Error al crear el registro, revisa bien el formulario."));
                return res;
            })
    } catch (err) {
        dispatch(modalShowingGeneralModal(true));
        dispatch(modalChangeNewMessage("Error al cargar los registros"));
        return err;
    }
}

export const putAPI = async (data, dispatch, modalShowingGeneralModal, modalChangeNewMessage) => {
    try {
        return axios.put(
            `${API_CONFIG.base_url}${data.url}`,
            {
                params: data.data,
                info: data.info
            }
        )
            .then(res => {
                if (res.status === 200) {
                    return res;
                }
                dispatch(modalShowingGeneralModal(true));
                dispatch(modalChangeNewMessage(res?.data?.customMessage ? res?.data?.customMessage : "Error al crear el registro, revisa bien el formulario."));
                return res;
            })
    } catch (err) {
        dispatch(modalShowingGeneralModal(true));
        dispatch(modalChangeNewMessage("Error al cargar los registros"));
        return err;
    }
}

export const deleteAPI = async (data, dispatch, modalShowingGeneralModal, modalChangeNewMessage) => {
    try {
        return axios.delete(
            `${API_CONFIG.base_url}${data.url}`,
            {
                params: data.data
            }
        )
            .then(res => {
                if (res.status === 200) {
                    return res;
                }
                dispatch(modalShowingGeneralModal(true));
                dispatch(modalChangeNewMessage("Error"));
                return res;
            })
    } catch (err) {
        dispatch(modalShowingGeneralModal(true));
        dispatch(modalChangeNewMessage("Error al cargar los registros"));
        return err;
    }
}

export const saveFile = async (formData, dispatch, modalShowingGeneralModal, modalChangeNewMessage) => {
    try {
        return axios.post(
            `${API_CONFIG.base_url}general/upload`,
            formData
        )
            .then(res => {
                if (res.status === 200) {
                    return res;
                }
                dispatch(modalShowingGeneralModal(true));
                dispatch(modalChangeNewMessage("Error"));
                return res;
            })
    } catch (err) {
        dispatch(modalShowingGeneralModal(true));
        dispatch(modalChangeNewMessage("Error al guardar el archivo"));
        return err;
    }
}



