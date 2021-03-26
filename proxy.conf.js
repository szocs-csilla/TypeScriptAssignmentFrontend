var PROXY_CONFIG = [
  {
    context: [
      "/client",
      "/contact",
      "/client_meeting",
      "/location"

    ],
    target: "http://localhost:8080",
    secure: false
  }
];


module.exports = PROXY_CONFIG;
