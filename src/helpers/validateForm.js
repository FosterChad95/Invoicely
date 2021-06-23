export default function validate(values) {
  let errors = {};

  if (!values.fromPost) {
    errors.fromPost = "Postal code requried";
  } else if (values.fromPost.length !== 5) {
    errors.fromPost = "Postal code must be 5 digits long";
  }
  if (!values.toEmail) {
    errors.email = "Email address is required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.toEmail = "Email address is invalid";
  }
  if (!values.toName) {
    errors.toName = "Client name is required";
  }
  if (!values.toAddress) {
    errors.toAddress = "Client address is required";
  }
  if (!values.toCity) {
    errors.toCity = "Client city is required";
  }
  if (!values.toCountry) {
    errors.toCountry = "Client country is required";
  }
  if (!values.invoiceDate) {
    errors.invoiceDate = "Invoice date is required";
  }
  if (!values.fromAddress) {
    errors.fromAddress = "Street Address is required";
  }
  if (!values.fromPost) {
    errors.fromPost = "Postal Code is required";
  } else if (values.fromPost.trim().length !== 5) {
    errors.fromPost = "Postal code must be 5 digits";
  }
  if (!values.fromCity) {
    errors.fromCity = "City is Required";
  }
  if (!values.fromCountry) {
    errors.fromCountry = "Country is required";
  }
  if (!values.projectDescription) {
    errors.projectDescription = "Project Description is required";
  }

  if (values.items.length === 0) {
    errors.items = "Finish Adding an Item";
  }

  return errors;
}
