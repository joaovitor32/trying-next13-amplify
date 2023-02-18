export default async function handler(req, res) {
  console.log(req);
  const headers = res.getHeaders();
  try {
    return res.status(200).json({
      ip: headers['x-ip'],
      geo: headers['x-geo'],
      userAgent: req.headers['user-agent'],
    });
  } catch (error) {
    const { response } = error;
    Sentry.captureException(error);
    return res.status(500).json({
      data: null,
      error: response?.data.message,
      status: response?.status,
    });
  }
}
