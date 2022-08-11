import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Detail from 'components/list/Detail';

import {
    modalShowingGeneralModal,
    modalChangeNewMessage
} from 'components/modals/modalSlice';

import { getRecords } from 'views/list/functions/general';

const BrandsDetailMiddle = () => {

    const dispatch = useDispatch();

    const [formProperties, setFormProperties] = useState([]);
    const [record, setRecord] = useState();

    const { currentBrand, currentBranch, currentUser, userType } = useSelector((state) => state.auth);

    const detailData = {
        location: {
            state: {
                pathname: '/marca-detalle',
                returnPathname: '/mi-negocio/marca-detalle',
                formData: formProperties,
                record,
                title: 'Marcas',
                description: 'Gestionar marca',
                ApiURL: 'brand'
            }
        }
    };

    useEffect(async () => {
        const response = await getRecords({
            url: detailData.location.state.ApiURL,
            data: {
                quantity: 10,
                page: 1,
                currentBrand,
                currentBranch,
                currentUser,
                userType
            },
            dispatch,
            modalShowingGeneralModal,
            modalChangeNewMessage
        });
        if (response.data?.tableInfo?.form_properties) {
            setFormProperties(response.data.tableInfo.form_properties);
        }
        const brandResponse = await getRecords({
            url: `${detailData.location.state.ApiURL}/${currentBrand._id}`,
            data: {},
            dispatch,
            modalShowingGeneralModal,
            modalChangeNewMessage
        });
        if (brandResponse?.data) {
            setRecord(brandResponse?.data[0]);
        }
    }, []);

    return (
        <>
            {
                record &&
                <Detail {...detailData} />
            }
        </>
    );

};

export default BrandsDetailMiddle;
