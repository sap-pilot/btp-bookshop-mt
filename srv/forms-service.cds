service FormsService {
    @cds.persistence.exists
    @cds.persistence.skip
    entity Forms {
        description : String;
        formName : String;
    }

    @cds.persistence.exists
    @cds.persistence.skip
    entity RenderPDF {
        fileContent: String;
        fileName: String;
        traceString: String;
        error: String;
    }
}