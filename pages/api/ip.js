import React from "react";

export default async function handler(req, res) {
  const headers = res.getHeaders();

  try {
    return res.status(200).json({
      ip: headers['x-ip'],
      geo: JSON.parse(headers['x-geo']),
    });
  } catch (error) {
    const { response } = error;

    return res.status(500).json({
      data: null,
      error: response?.data.message,
      status: response?.status,
    });
  }
}
