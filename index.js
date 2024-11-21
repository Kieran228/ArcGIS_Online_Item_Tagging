// require([
//     "esri/identity/IdentityManager",
//     "esri/widgets/SignIn",
//     "esri/WebMap",
//     "esri/portal/PortalItem",
//     "esri/portal/Portal",
//     "esri/views/MapView",
//     "esri/Map"
// ], function (IdentityManager, SignIn, WebMap, PortalItem, Portal, MapView, Map) {

//     // Create sign-in widget
//     const signInWidget = new SignIn({
//         view: view,
//         portalUrl: "https://www.arcgis.com/sharing/oauth2/authorize?client_id=arcgisonline&response_type=code&state=%7B%22portalUrl%22%3A%22https%3A%2F%2Fwww.arcgis.com%22%2C%22uid%22%3A%22OiZOEIrlsX2i6-HS3nZfhivVGvnSPptKCnMnxl-FZdI%22%2C%22useLandingPage%22%3Atrue%2C%22clientId%22%3A%22arcgisonline%22%7D&expiration=20160&locale=en&redirect_uri=https%3A%2F%2Fwww.arcgis.com%2Fhome%2Faccountswitcher-callback.html&force_login=true&redirectToUserOrgUrl=true&code_challenge=7GSoDpO3aO8rUU3XZPr-oeATWof7Nv3uCdKa0p4euH8&code_challenge_method=S256&display=default&hideCancel=true&showSignupOption=true&canHandleCrossOrgSignIn=true&signuptype=esri&allow_verification=true" // Point to ArcGIS Online login
//     });

//     document.getElementById("signin-btn").addEventListener("click", function () {
//         IdentityManager.getCredential('https://www.arcgis.com/sharing/rest').then(function (credential) {
//             alert('Signed in as: ' + credential.userId);
//             listOwnedItems();
//         }).catch(function (error) {
//             alert('Failed to sign in: ' + error.message);
//         });
//     });

//     function listOwnedItems() {
//         const portal = new Portal();
//         portal.load().then(function () {
//             const userItems = portal.userContent.items;
//             // List owned items (e.g., web maps, layers)
//             console.log('Owned items:', userItems);
//         }).catch(function (error) {
//             console.error("Error fetching user items:", error);
//         });
//     }
// });

const express = require("express");
const app = express();
const path = require('path')
const port = 9000;

app.get('/', (req, res) => {
    req.sendFile(path.join(__dirname, 'index.html'))
});

app.listen(port, () => {
    console.log(`example app listening on port ${port}!`)
});

app.get('/callback.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'callback.html'))
});