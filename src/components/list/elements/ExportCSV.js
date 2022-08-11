import React from 'react'
import Button from 'react-bootstrap/Button';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import CsLineIcons from 'cs-line-icons/CsLineIcons';

const ExportCSV = ({csvData, fileName}) => {

    const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const fileExtension = '.xlsx';

    const exportToCSV = (csvDataP, fileNameP) => {
        const ws = XLSX.utils.json_to_sheet(csvDataP);
        const wb = { Sheets: { 'data': ws }, SheetNames: ['data'] };
        const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
        const data = new Blob([excelBuffer], {type: fileType});
        FileSaver.saveAs(data, fileNameP + fileExtension);
    }

    return (
        <Button className="mx-2" variant="download-csv" onClick={() => exportToCSV(csvData,fileName)}>
            <CsLineIcons icon="download" />
        </Button>
    )
};
export default ExportCSV;

