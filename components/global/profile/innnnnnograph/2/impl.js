const schema = `
  type Profile {
    id: String
    workPhone: String
    firstName: String
    jobTitle: String
    location: String
    longWorkTitle: String
    alternateName: String
    department: String
    company: String
    mobile: String
    mail: String
    firstName: String
    surName: String
    rank: String
    gender: String
    birthdayDisplayString: String
    jobTitleSearchable: String
    longWorkTitleSearchable: String
    alternateNameSearchable: String
    departmentSearchable: String
    companySearchable: String
    otherTelephone: String
    fax: String
    homeTelephone: String
    bio: String
  }
`;

const resolver = {
  Profile: {
    id() {
      return 23;
    }
  }
};

module.exports = {
  schema,
  resolver
};
