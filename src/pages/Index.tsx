
import { useState } from 'react';
import EmailTemplate from '../components/EmailTemplate';
import { getEmailTemplateHtml } from '../components/EmailTemplateHtml';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const Index = () => {
  const [showSource, setShowSource] = useState(false);
  
  const formData = {
    fullName: "Eddy Varela",
    email: "eddyvarela97@gmail.com",
    date: "4/25/2025",
    age: "28",
    country: "Antigua and Barbuda",
    city: "Hermosillo",
    linkedin: "linkedin.com/in/evarelae",
    resume: "sample.pdf",
    requestNumber: "1648431070",
    vertical: "Innovating Inclusive Finance: Empowering Access through Disruption",
    profile: "Dev & Tech Builder"
  };

  const getEmailSource = () => {
    const emailContainer = document.getElementById('email-template');
    if (emailContainer) {
      return emailContainer.outerHTML;
    }
    return '';
  };

  const copyToClipboard = () => {
    const source = getEmailSource();
    navigator.clipboard.writeText(source).then(() => {
      toast({
        title: "Copied!",
        description: "Email HTML copied to clipboard",
      });
    }).catch(() => {
      toast({
        title: "Error",
        description: "Could not copy to clipboard",
        variant: "destructive"
      });
    });
  };

  const copyPureHtml = () => {
    const pureHtml = getEmailTemplateHtml(formData);
    navigator.clipboard.writeText(pureHtml).then(() => {
      toast({
        title: "Copied!",
        description: "Pure HTML email template copied to clipboard",
      });
    }).catch(() => {
      toast({
        title: "Error",
        description: "Could not copy to clipboard",
        variant: "destructive"
      });
    });
  };

  const downloadHtmlFile = () => {
    const pureHtml = getEmailTemplateHtml(formData);
    const blob = new Blob([pureHtml], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = 'future-founders-thank-you.html';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    
    toast({
      title: "Downloaded!",
      description: "HTML file downloaded successfully",
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900">Future Founders - Thank You Email</h1>
          <p className="mt-2 text-lg text-gray-600">Email template for form submission confirmation</p>
          <div className="mt-4 flex flex-wrap justify-center gap-4">
            <Button onClick={() => setShowSource(!showSource)}>
              {showSource ? "Hide HTML Source" : "Show HTML Source"}
            </Button>
            <Button onClick={copyToClipboard}>
              Copy Component HTML
            </Button>
            <Button onClick={copyPureHtml}>
              Copy Pure HTML
            </Button>
            <Button onClick={downloadHtmlFile}>
              Download HTML File
            </Button>
          </div>
        </div>
        
        {showSource && (
          <div className="mb-8 bg-white p-4 rounded-lg shadow overflow-auto max-h-[400px]">
            <pre className="text-sm text-gray-800">{getEmailSource()}</pre>
          </div>
        )}
        
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <EmailTemplate formData={formData} />
        </div>
      </div>
    </div>
  );
};

export default Index;
