// Import server dependencies
import fetch from 'node-fetch';
import xml2js from 'xml2js';

export async function post(req, res) {
  try {
    const { email } = req.body;

    // Prep params
    const xmlBuilder = new xml2js.Builder();
    const xmlRequest = xmlBuilder.buildObject({
      user: email,
    });

    // Make Request
    const xmlResponse = await fetch(`https://tfoapi.webordering.ca:5001/twoforone/get_profiles.pvp`, {
      method: "POST",
      headers: {
        "content-type": "text/xml; charset=utf-8"
      },
      body: xmlRequest,
    });

    // Parse response
    const xml = await xmlResponse.text();
    var xmlParser = new xml2js.Parser();
    const jsonResponse = await xmlParser.parseStringPromise(xml);

    // Check for errors
    if (typeof jsonResponse.response.error !== "undefined") {
      throw new Error(jsonResponse.response.error);
    }

    // return response
    res.end(JSON.stringify({
      profiles: jsonResponse.response.profile
    }));
  } catch (error) {
    res.end(JSON.stringify({ error: error.message }));
  }
}
