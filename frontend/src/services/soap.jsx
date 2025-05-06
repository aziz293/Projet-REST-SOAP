import axios from 'axios';

const SOAP_URL = 'http://localhost:8080/ws'; // Remplacez par l'URL de votre service SOAP

export const reserveBook = async (bookId, period) => {
  const xmlBody = `
    <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:web="http://yournamespace.com/">
       <soapenv:Header/>
       <soapenv:Body>
          <web:reserveBook>
             <bookId>${bookId}</bookId>
             <period>${period}</period>
          </web:reserveBook>
       </soapenv:Body>
    </soapenv:Envelope>
  `;

  try {
    const response = await axios.post(SOAP_URL, xmlBody, {
      headers: {
        'Content-Type': 'text/xml;charset=UTF-8',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Erreur lors de la réservation du livre:', error);
    throw error;
  }
};
