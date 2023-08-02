const cds = require('@sap/cds');

class FormsService extends cds.ApplicationService {
    
    async init() {
        const fs = await cds.connect.to('BTP_ADS');

        this.on('READ', 'Forms', async req => {
            // Call Forms Service   
            const formsResult = await fs.tx(req).get('/v1/forms');
            if (formsResult) {
                let forms = formsResult.map(formResult => {
                    var form = {};
                    form.description = formResult.description;
                    form.formName = formResult.formName;
                    return form;
                });

                return forms;
            } else {
                // TODO: How to respond in case of error?
                return req.error(400, 'Invalid Request');
            }
        });

        this.on('POST', 'RenderPDF', async req => {            
            const result =  await fs.send({
                                        method: 'POST',
                                        path: '/v1/adsRender/pdf?TraceLevel=2',
                                        data: req.data
                                    });
            if (result) {
                var pdfOutput = {};
                if (!result.errorLevel) {
                    pdfOutput.fileContent = result.fileContent;
                    pdfOutput.fileName = result.fileName;
                } else {
                    pdfOutput.error = result.message;
                }
                return pdfOutput;
            } else {
                return req.error(400, 'Bad Request');
            }

        });
    }
}

module.exports = {FormsService}