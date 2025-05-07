
export const getEmailTemplateHtml = (formData: any) => {
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thank You for Applying to Future Founders</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap');
    
    body {
      font-family: 'DM Sans', Arial, sans-serif;
      margin: 0;
      padding: 0;
      background-color: #f5f5f5;
      color: #333333;
    }
    
    .container {
      max-width: 650px;
      margin: 0 auto;
      background-color: #ffffff;
    }
    
    .header {
      padding: 30px;
      text-align: center;
      background-color: #ffffff;
    }
    
    .banner {
      background-color: #EC6638;
      padding: 5px;
      text-align: center;
    }
    
    .content {
      padding: 40px 30px;
    }
    
    .heading {
      color: #EC6638;
      font-size: 28px;
      margin: 0 0 20px 0;
      font-weight: 700;
    }
    
    .form-data {
      background-color: #f9f9f9;
      padding: 20px;
      border-radius: 8px;
      margin-bottom: 20px;
    }
    
    .form-title {
      color: #333333;
      font-size: 20px;
      margin: 20px 0 15px;
      border-bottom: 2px solid #DDFE5F;
      padding-bottom: 10px;
    }
    
    .form-field-label {
      padding: 8px 0;
      vertical-align: top;
      font-weight: bold;
      width: 30%;
    }
    
    .form-field-value {
      padding: 8px 0;
      vertical-align: top;
      width: 70%;
    }
    
    .footer {
      background-color: #DDFE5F;
      padding: 20px;
      text-align: center;
      color: #333;
      font-size: 14px;
    }
    
    a {
      color: #EC6638;
      text-decoration: underline;
    }
    
    p {
      line-height: 1.5;
      margin-bottom: 15px;
    }
    
    .signature {
      padding-top: 20px;
      border-top: 1px solid #eee;
      line-height: 1.5;
      color: #555;
    }
    
    .sticker {
      max-width: 60px;
      height: auto;
      margin: 0 10px;
    }
    
    .footer-sticker {
      max-width: 40px;
      height: auto;
      margin: 0 10px;
    }
    
    .request-number {
      font-weight: bold;
      color: #EC6638;
    }
  </style>
</head>

<body>
  <div class="container">
    <!-- Header -->
    <div class="header">
      <img src="https://futurefounders.mx/assets/logo.png" alt="Future Founders Logo" style="max-width: 250px; height: auto;">
    </div>

    <!-- Banner -->
    <div class="banner">
      <img src="https://futurefounders.mx/assets/sticker1.png" alt="Sticker" class="sticker">
      <img src="https://futurefounders.mx/assets/sticker2.png" alt="Sticker" class="sticker">
      <img src="https://futurefounders.mx/assets/sticker3.png" alt="Sticker" class="sticker">
    </div>

    <!-- Content -->
    <div class="content">
      <h1 class="heading">🚀¡Gracias por aplicar a The Future Founders Program!</h1>
      
      <p>Hola,</p>
      <p>Gracias por tomarte el tiempo de postularte a Future Founders Program. Ya recibimos tu aplicación y nos emociona conocer más sobre ti. En estos días estaremos revisando todo con calma y pronto te escribiremos para contarte los siguientes pasos.</p>
      <p>Mientras tanto, si quieres volver a echarle un ojo al programa, te dejo la página: <a href="https://www.futurefounders.mx">www.futurefounders.mx</a></p>
      <p>Y si tienes cualquier duda, aquí estamos. Gracias por dar este primer paso. Nos emociona imaginar lo que podríamos construir juntos.</p>
      
      <div class="form-data">
        <p>Below is a copy of your submitted form. Your request number is <span class="request-number">${formData.requestNumber}</span>.</p>
        
        <h2 class="form-title">Future Founders - Application Form</h2>
        
        <table width="100%" cellPadding="0" cellSpacing="0" style="border-collapse: collapse;">
          <tr>
            <td class="form-field-label">Full Name</td>
            <td class="form-field-value">${formData.fullName}</td>
          </tr>
          <tr>
            <td class="form-field-label">Your email</td>
            <td class="form-field-value">${formData.email}</td>
          </tr>
          <tr>
            <td class="form-field-label">What day are you submitting your application?</td>
            <td class="form-field-value">${formData.date}</td>
          </tr>
          <tr>
            <td class="form-field-label">Age</td>
            <td class="form-field-value">${formData.age}</td>
          </tr>
          <tr>
            <td class="form-field-label">Country of Residence</td>
            <td class="form-field-value">${formData.country}</td>
          </tr>
          <tr>
            <td class="form-field-label">City</td>
            <td class="form-field-value">${formData.city}</td>
          </tr>
          <tr>
            <td class="form-field-label">LinkedIn (URL)</td>
            <td class="form-field-value">${formData.linkedin}</td>
          </tr>
          <tr>
            <td class="form-field-label">CV / Resume</td>
            <td class="form-field-value">${formData.resume}</td>
          </tr>
          <tr>
            <td class="form-field-label">Application Vertical</td>
            <td class="form-field-value">${formData.vertical}</td>
          </tr>
          <tr>
            <td class="form-field-label">Which of these best describes your profile?</td>
            <td class="form-field-value">${formData.profile}</td>
          </tr>
        </table>
      </div>
      
      <div class="signature">
        <p>
          Atentamente,<br>
          El equipo de The Future Founders Program y Kolab Ventures.
        </p>
      </div>
    </div>

    <!-- Footer -->
    <div class="footer">
      <div style="margin-bottom: 10px;">
        <img src="https://futurefounders.mx/assets/sticker4.png" alt="Sticker" class="footer-sticker">
        <img src="https://futurefounders.mx/assets/sticker5.png" alt="Sticker" class="footer-sticker">
        <img src="https://futurefounders.mx/assets/sticker6.png" alt="Sticker" class="footer-sticker">
      </div>
      <p>© 2025 Future Founders Program. Todos los derechos reservados.</p>
    </div>
  </div>
</body>
</html>`;
};
