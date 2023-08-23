service FormsService {
    @cds.persistence.exists
    @cds.persistence.skip
    entity Forms {
        description : String;
        formName    : String;
    }

    @cds.persistence.exists
    @cds.persistence.skip
    entity RenderPDF {
        fileContent : String;
        fileName    : String;
        traceString : String;
        error       : String;
    }

    @cds.persistence.exists
    @cds.persistence.skip
    entity Users {
        id            : String;
        externalId    : String;
        userName      : String;
        email         : String;
        name          : String;
        lastLogonTime : Integer64;
    }
}
