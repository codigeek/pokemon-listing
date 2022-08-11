import InputText from '../fields/InputText';
import InputPhoto from '../fields/InputPhoto';
import InputNumber from '../fields/InputNumber';
import InputBoolean from '../fields/InputBoolean';
import InputSelectorBoolean from '../fields/InputSelectorBoolean';
import InputSelect from '../fields/InputSelect';
import InputMultiSelect from '../fields/InputMultiSelect';

export const getFieldRender = (type) => {
    switch (type) {
        case "text":
            return {
                text: InputText
            };
        case "boolean":
            return {
                boolean: InputBoolean
            };
        case "selectorBoolean":
            return {
                boolean: InputSelectorBoolean
            };
        case "number":
            return {
                number: InputNumber
            };
        case "select":
            return {
                select: InputSelect
            };
        case "selectMulti":
            return {
                selectMulti: InputMultiSelect
            };
        case "photo":
            return {
                photo: InputPhoto
            };
        default:
            return "";
    }
}