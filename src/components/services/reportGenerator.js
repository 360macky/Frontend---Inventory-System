import jsPDF from "jspdf";
import "jspdf-autotable";

import { format } from "date-fns";

const generatePDF = products => {
    // initialize jsPDF
    const doc = new jsPDF();
  
    // define the columns we want and their titles
    const tableColumn = ["Id", "Nombre", "Tipo", "Marca", "Descripción", "Precio"];
    // define an empty array of rows
    const tableRows = [];
  
    // for each ticket pass all its data into an array
    products.forEach(product => {
      const productData = [
        product._id,
        product.name,
        product.category,
        product.brand,
        product.description,
        product.price,
        // called date-fns to format the date on the ticket
        format(new Date('2021-03-06'), "yyyy-MM-dd")
      ];
      // push each tickcet's info into a row
      tableRows.push(productData);
    });
  
    // startY is basically margin-top
    doc.autoTable(tableColumn, tableRows, { startY: 20 });
    const date = Date().split(" ");
    // we use a date string to generate our filename.
    const dateStr = date[0] + date[1] + date[2] + date[3] + date[4];
    // ticket title. and margin-top + margin-left
    doc.text("Reporte final de inventario(Mensual).", 14, 15);
    // we define the name of our PDF file.
    doc.save(`report_${dateStr}.pdf`);
  };
  
  export default generatePDF;

