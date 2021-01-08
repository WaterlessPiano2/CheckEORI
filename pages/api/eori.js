import axios from "axios";

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
  const { input } = req.body;
  if (!input || !input.length) {
    return res.status(400).json({
      error: "Enter the UK EORI number",
    });
  }
  try {
    const { url, data, headers } = getRequestParams(input);
    const response = await axios.post(url, data, { headers });
    return res.status(201).json(response.data[0]);
  } catch (e) {
    return res.status(400).json({
      error:
        "Oops, something went wrong... Please try again later or contact us.",
    });
  }
};
