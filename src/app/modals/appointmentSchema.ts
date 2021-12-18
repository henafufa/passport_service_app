export interface AppointmentSchema{
    _id: string;
    date:String;
    time:String;
    site: String;
    city: String;
    deliverySite: String;
    personalInfo:{
        firstName: String;
        fatherName: String;
        birthPlace: String;
        email: String;
        phone: String;
        martialStatus: String;
        passportPage: string;
        birthCertificate: String;

    }


}