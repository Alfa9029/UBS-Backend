const basicAuth = (req, res, next) => {
    const authHeader = req.headers['authorization'];
  
    if (!authHeader) {
      return res.status(401).json({ message: "Credenciais inválidas." });
    }
  
    const [type, credentials] = authHeader.split(' ');
    if (type !== 'Basic') {
      return res.status(401).json({ message: "Credenciais inválidas." });
    }
  
    const [username, password] = Buffer.from(credentials, 'base64').toString().split(':');
  
    const staticUser = {
      username: "admin",
      password: "senha123",
    };
  
    if (username === staticUser.username && password === staticUser.password) {
      return next();
    }
  
    return res.status(401).json({ message: "Credenciais inválidas." });
  };
  
  module.exports = { basicAuth };
  