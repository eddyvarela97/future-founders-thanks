
import React from 'react';

interface FormData {
  fullName: string;
  email: string;
  date: string;
  age: string;
  country: string;
  city: string;
  linkedin: string;
  resume: string;
  requestNumber: string;
  vertical: string;
  profile: string;
}

interface EmailTemplateProps {
  formData: FormData;
}

const EmailTemplate: React.FC<EmailTemplateProps> = ({ formData }) => {
  return (
    <div id="email-template" style={{
      fontFamily: '"DM Sans", sans-serif',
      maxWidth: '650px',
      margin: '0 auto',
      backgroundColor: '#ffffff',
      color: '#333333'
    }}>
      {/* Header */}
      <table width="100%" cellPadding="0" cellSpacing="0" style={{ borderCollapse: 'collapse' }}>
        <tr>
          <td style={{ padding: '30px', textAlign: 'center', backgroundColor: '#FFFFFF' }}>
            <img 
              src="public/lovable-uploads/26a44349-4899-4cbe-8f9f-e22596e7662b.png" 
              alt="Future Founders Logo" 
              style={{ maxWidth: '250px', height: 'auto' }} 
            />
          </td>
        </tr>
      </table>

      {/* Banner */}
      <table width="100%" cellPadding="0" cellSpacing="0" style={{ borderCollapse: 'collapse' }}>
        <tr>
          <td style={{ backgroundColor: '#EC6638', padding: '5px' }}>
            <table width="100%" cellPadding="0" cellSpacing="0">
              <tr>
                <td style={{ padding: '15px', textAlign: 'center' }}>
                  <img 
                    src="public/lovable-uploads/b5a8f8f1-85e2-4266-bb5b-c388287e52bb.png" 
                    alt="Sticker" 
                    style={{ maxWidth: '60px', height: 'auto', margin: '0 10px' }} 
                  />
                  <img 
                    src="public/lovable-uploads/fa5dbb11-b9a1-4b13-b6ef-0d6438250b49.png" 
                    alt="Sticker" 
                    style={{ maxWidth: '60px', height: 'auto', margin: '0 10px' }} 
                  />
                  <img 
                    src="public/lovable-uploads/2eaa1063-d082-4173-8b70-c06a7d060404.png" 
                    alt="Sticker" 
                    style={{ maxWidth: '60px', height: 'auto', margin: '0 10px' }} 
                  />
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>

      {/* Content */}
      <table width="100%" cellPadding="0" cellSpacing="0" style={{ borderCollapse: 'collapse' }}>
        <tr>
          <td style={{ padding: '40px 30px' }}>
            <table width="100%" cellPadding="0" cellSpacing="0">
              <tr>
                <td style={{ paddingBottom: '20px' }}>
                  <h1 style={{ color: '#EC6638', fontSize: '28px', margin: '0', fontWeight: '700' }}>
                    🚀¡Gracias por aplicar a The Future Founders Program!
                  </h1>
                </td>
              </tr>
              <tr>
                <td style={{ lineHeight: '1.5', paddingBottom: '20px', color: '#333' }}>
                  <p>Hola,</p>
                  <p>Gracias por tomarte el tiempo de postularte a Future Founders Program. Ya recibimos tu aplicación y nos emociona conocer más sobre ti. En estos días estaremos revisando todo con calma y pronto te escribiremos para contarte los siguientes pasos.</p>
                  <p>Mientras tanto, si quieres volver a echarle un ojo al programa, te dejo la página: <a href="https://www.futurefounders.mx" style={{ color: '#EC6638', textDecoration: 'underline' }}>www.futurefounders.mx</a></p>
                  <p>Y si tienes cualquier duda, aquí estamos. Gracias por dar este primer paso. Nos emociona imaginar lo que podríamos construir juntos.</p>
                </td>
              </tr>
              <tr>
                <td style={{ backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '8px', marginBottom: '20px' }}>
                  <p style={{ fontSize: '16px', margin: '0 0 15px 0', color: '#555' }}>Below is a copy of your submitted form. Your request number is <span style={{ fontWeight: 'bold', color: '#EC6638' }}>{formData.requestNumber}</span>.</p>
                  
                  <h2 style={{ color: '#333333', fontSize: '20px', margin: '20px 0 15px', borderBottom: '2px solid #DDFE5F', paddingBottom: '10px' }}>
                    Future Founders - Application Form
                  </h2>
                  
                  <table width="100%" cellPadding="0" cellSpacing="0" style={{ borderCollapse: 'collapse' }}>
                    <tr>
                      <td width="30%" style={{ padding: '8px 0', verticalAlign: 'top', fontWeight: 'bold' }}>Full Name</td>
                      <td width="70%" style={{ padding: '8px 0', verticalAlign: 'top' }}>{formData.fullName}</td>
                    </tr>
                    <tr>
                      <td width="30%" style={{ padding: '8px 0', verticalAlign: 'top', fontWeight: 'bold' }}>Your email</td>
                      <td width="70%" style={{ padding: '8px 0', verticalAlign: 'top' }}>{formData.email}</td>
                    </tr>
                    <tr>
                      <td width="30%" style={{ padding: '8px 0', verticalAlign: 'top', fontWeight: 'bold' }}>What day are you submitting your application?</td>
                      <td width="70%" style={{ padding: '8px 0', verticalAlign: 'top' }}>{formData.date}</td>
                    </tr>
                    <tr>
                      <td width="30%" style={{ padding: '8px 0', verticalAlign: 'top', fontWeight: 'bold' }}>Age</td>
                      <td width="70%" style={{ padding: '8px 0', verticalAlign: 'top' }}>{formData.age}</td>
                    </tr>
                    <tr>
                      <td width="30%" style={{ padding: '8px 0', verticalAlign: 'top', fontWeight: 'bold' }}>Country of Residence</td>
                      <td width="70%" style={{ padding: '8px 0', verticalAlign: 'top' }}>{formData.country}</td>
                    </tr>
                    <tr>
                      <td width="30%" style={{ padding: '8px 0', verticalAlign: 'top', fontWeight: 'bold' }}>City</td>
                      <td width="70%" style={{ padding: '8px 0', verticalAlign: 'top' }}>{formData.city}</td>
                    </tr>
                    <tr>
                      <td width="30%" style={{ padding: '8px 0', verticalAlign: 'top', fontWeight: 'bold' }}>LinkedIn (URL)</td>
                      <td width="70%" style={{ padding: '8px 0', verticalAlign: 'top' }}>{formData.linkedin}</td>
                    </tr>
                    <tr>
                      <td width="30%" style={{ padding: '8px 0', verticalAlign: 'top', fontWeight: 'bold' }}>CV / Resume</td>
                      <td width="70%" style={{ padding: '8px 0', verticalAlign: 'top' }}>{formData.resume}</td>
                    </tr>
                    <tr>
                      <td width="30%" style={{ padding: '8px 0', verticalAlign: 'top', fontWeight: 'bold' }}>Application Vertical</td>
                      <td width="70%" style={{ padding: '8px 0', verticalAlign: 'top' }}>{formData.vertical}</td>
                    </tr>
                    <tr>
                      <td width="30%" style={{ padding: '8px 0', verticalAlign: 'top', fontWeight: 'bold' }}>Which of these best describes your profile?</td>
                      <td width="70%" style={{ padding: '8px 0', verticalAlign: 'top' }}>{formData.profile}</td>
                    </tr>
                  </table>
                </td>
              </tr>
              <tr>
                <td style={{ paddingTop: '20px', borderTop: '1px solid #eee', lineHeight: '1.5' }}>
                  <p style={{ color: '#555' }}>
                    Atentamente,<br />
                    El equipo de The Future Founders Program y Kolab Ventures.
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>

      {/* Footer */}
      <table width="100%" cellPadding="0" cellSpacing="0" style={{ borderCollapse: 'collapse' }}>
        <tr>
          <td style={{ backgroundColor: '#DDFE5F', padding: '20px', textAlign: 'center' }}>
            <table width="100%" cellPadding="0" cellSpacing="0">
              <tr>
                <td style={{ textAlign: 'center', paddingBottom: '10px' }}>
                  <img 
                    src="public/lovable-uploads/46439734-63f7-4111-87e4-ca5fa357467a.png" 
                    alt="Sticker" 
                    style={{ maxWidth: '40px', height: 'auto', margin: '0 10px' }} 
                  />
                  <img 
                    src="public/lovable-uploads/0ac2d002-cc12-4129-b968-4d6314a42914.png" 
                    alt="Sticker" 
                    style={{ maxWidth: '40px', height: 'auto', margin: '0 10px' }} 
                  />
                  <img 
                    src="public/lovable-uploads/71175f3c-f235-46ba-92e5-eb9ab4895371.png" 
                    alt="Sticker" 
                    style={{ maxWidth: '40px', height: 'auto', margin: '0 10px' }} 
                  />
                </td>
              </tr>
              <tr>
                <td style={{ textAlign: 'center', color: '#333', fontSize: '14px' }}>
                  <p>© 2025 Future Founders Program. Todos los derechos reservados.</p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default EmailTemplate;
