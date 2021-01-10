import axios from "axios";
import validate from "../../utils/validation";

const getRequestParams = (input) => {
  const url =
    "https://test-api.service.hmrc.gov.uk/customs/eori/lookup/check-multiple-eori";

  const data = { eoris: [input] };

  const headers = {
    "Content-Type": "application/json",
    Accept: "application/vnd.hmrc.1.0+json",
  };

  return { url, data, headers };
};

export default async (req, res) => {
  console.log("db");
  const { input } = req.body;
  const isValid = validate(input);
  if (isValid !== "VALID") {
    return res.status(400).json({
      error: isValid,
    });
  }
  try {
    const { url, data, headers } = getRequestParams(input);
    const response = await axios.post(url, data, { headers });
    return res.status(201).json(response.data[0]);
  } catch (e) {
    console.log(e.response.data);
    let errorMessage =
      "Oops, something went wrong... Please try again later or contact us.";
    if (e && e.response && e.response.data) {
      errorMessage = e.response.data;
    }
    return res.status(400).json({
      error: errorMessage,
    });
  }
};
