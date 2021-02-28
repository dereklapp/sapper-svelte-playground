export async function post(req, res) {
  try {
    // Destroy session
    req.session.token = '';
    req.session.email = '';
    req.session.destroy(res.end(JSON.stringify({
      token: '',
      email: ''
    })));
  } catch (error) {
    res.end(JSON.stringify({ error: error.message }));
  }
}
